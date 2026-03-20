# ERC-7715: Fine-Grained Permissions for AI Agents

## What is ERC-7715?

ERC-7715 defines a permission language for smart accounts — how to express complex, conditional rules that control exactly what an agent can do.

**Previous way:** Simple approvals (e.g., "approve 100 USDC")

**ERC-7715 way:** Complex permissions like:
- "Can spend 100 USDC, only on Uniswap, only weekdays 9-5, max 5 tx/hour"
- "Can supply ETH to Aave, max 10% of portfolio, auto-revert if floor drops 20%"

---

## The Permission Structure

```solidity
{
  "type": "erc7715:permission",
  "grantee": "0xDappContract...",
  "scope": {
    "assets": ["USDC", "WETH"],
    "contracts": ["0xUniswap..."],
    "functions": ["swap", "exactInputSingle"],
    "limits": {
      "USDC": "1000",
      "WETH": "0.5"
    }
  },
  "conditions": {
    "timeWindow": {
      "start": "09:00",
      "end": "17:00",
      "timezone": "UTC"
    },
    "rateLimit": {
      "maxTxPerHour": 10
    }
  },
  "expiry": 1709596800
}
```

---

## Permission Types

### 1. Asset Scope
**What assets can be used?**

```solidity
"assets": ["USDC", "WETH"]  // Only these tokens
"assets": []                // No assets (cannot spend)
```

### 2. Contract Scope
**What contracts can be called?**

```solidity
"contracts": ["0xUniswapRouter...", "0xCurvePool..."]  // Only these
"contracts": []  // No contracts (isolated execution)
```

### 3. Function Scope
**What functions can be called?**

```solidity
"functions": ["swap"]  // Only swap()
"functions": ["swap", "approve"]  // swap() + approve()
"functions": []  // No functions
```

### 4. Amount Limits
**How much can be spent?**

```solidity
"limits": {
  "USDC": "1000",    // Max 1000 USDC per tx
  "WETH": "0.5"      // Max 0.5 WETH per tx
}
```

### 5. Time Windows
**When is permission active?**

```solidity
"timeWindow": {
  "start": "09:00",
  "end": "17:00",
  "timezone": "UTC"
}

// Or:
"timeWindow": {
  "daysOfWeek": [1, 2, 3, 4, 5],  // Monday-Friday
  "hours": [9, 10, 11, 12, 13, 14, 15, 16, 17]
}
```

### 6. Rate Limits
**How frequently can agent act?**

```solidity
"rateLimit": {
  "maxTxPerHour": 10,
  "maxTxFriday": 20,
  "cooldownSeconds": 60  // Must wait 60s between txs
}
```

---

## For AI Agents: Use Cases

### Trading Agent

```
Permission:
  - Contract: Uniswap Router
  - Function: swap()
  - Limit: 1000 USDC per tx
  - Rate limit: 10 tx/hour
  - Time window: Market hours only (9-16 UTC)
```

**The agent can:**
- ✅ Swap up to 1000 USDC on Uniswap
- ✅ Execute 10 swaps per hour
- ✅ Only during market hours
- ❌ Cannot call other functions (approve, etc.)
- ❌ Cannot spend more than 1000 USDC
- ❌ Cannot act outside market hours

### DeFi Yield Agent

```
Permission:
  - Asset: ETH
  - Contract: Aave Protocol
  - Limit: 10% of portfolio
  - Condition: Auto-revert if TVL drops 20%
  - Revocation: Instant
```

**The agent can:**
- ✅ Supply ETH to Aave
- ✅ Withdraw to owner address only
- ✅ Rebalance max once per day
- ❌ Cannot send to random addresses
- ❌ Cannot exceed 10% limit
- ❌ Cannot interact with other protocols

### NFT Agent

```
Permission:
  - Assets: [your NFT collection]
  - Contract: OpenSea, Blur
  - Function: placeBid()
  - Limit: 0.5 ETH per bid
  - Condition: Auto-decline if floor drops 20%
```

**The agent can:**
- ✅ Bid on your NFTs
- ✅ Max 0.5 ETH per bid
- ✅ Only on approved marketplaces
- ❌ Cannot withdraw
- ❌ Cannot bid more than limit
- ❌ Cannot use auction house

---

## Combined with ERC-7710 + ERC-7702

**Complete delegation stack:**

```
1. ERC-7702: Your wallet upgrades to smart account
   ↓
2. ERC-7710: You delegate to AI agent
   ↓
3. ERC-7715: You define exact permissions
   ↓
4. Agent executes with cryptographic guardrails
```

**Example workflow:**

```
1. User sets code (7702): Wallet becomes smart account
2. User signs delegation (7710): Delegates to trading agent
3. User defines permissions (7715):
   - Can trade on Uniswap
   - Max 1000 USDC
   - 10 tx/hour
   - Market hours only
4. Agent executes trade within bounds
5. If agent tries to exceed limits:
   - Transaction reverts
   - No partial execution
6. Agent cannot bypass permissions
```

---

## Implementation Patterns

### Pattern 1: Simple Approval Wrapper

```solidity
contract PermissionWrapper {
    function execute(
        bytes32 permissionId,
        address to,
        bytes memory data,
        uint256 value
    ) external {
        Permission storage perm = permissions[permissionId];

        // Validate all permission rules
        require(perm.active, "Permission inactive");
        require(perm.spent + value <= perm.limit, "Exceeds limit");
        require(block.timestamp < perm.expiry, "Expired");
        require(to == perm.allowedAddress, "Unauthorized contract");

        // Execute
        perm.spent += value;
        (bool success, ) = to.call(data);
        require(success, "Execution failed");
    }
}
```

### Pattern 2: Conditional Execution

```solidity
contract SmartCondition {
    function executeWithCondition(
        bytes32 permissionId,
        address to,
        bytes memory data,
        uint256 value
    ) external returns (bool success) {
        Permission storage perm = permissions[permissionId];

        // Check time window
        require(isInTimeWindow(), "Outside hours");

        // Check rate limit
        require(isWithinRateLimit(), "Rate limit exceeded");

        // Check amount limit
        require(perm.spent + value <= perm.limit, "Exceeds limit");

        // Execute
        success = to.call(data);

        // Revert on failure
        if (!success) {
            revert("Execution failed");
        }
    }
}
```

### Pattern 3: Dynamic Conditions

```solidity
contract DynamicPermission {
    mapping(bytes32 => bool) public conditions;

    function updateCondition(bytes32 permissionId, bool valid) external {
        conditions[permissionId] = valid;
    }

    function executeWithDynamicCondition(
        bytes32 permissionId,
        address to,
        bytes memory data
    ) external {
        require(conditions[permissionId], "Condition failed");
        // ... execute
    }
}
```

---

## Best Practices

### 1. Start Restrictive

```solidity
"assets": []  // Start with nothing
"contracts": ["0xApprovedContract..."]
"functions": []
"limits": {
  "ETH": "0"
}
```

**Then add as needed:**

```solidity
"assets": ["USDC"]
"functions": ["swap"]
```

### 2. Always Set Time Limits

```solidity
"expiry": Math.floor(Date.now() / 1000) + (7 * 24 * 3600)  // 7 days
```

### 3. Use Rate Limits

```solidity
"rateLimit": {
  "maxTxPerHour": 10
}
```

### 4. Test Revocation

```solidity
function revoke(bytes32 permissionId) external {
    require(permissions[permissionId].grantee == msg.sender);
    permissions[permissionId].active = false;
}
```

---

## Security Checklist

**Before deploying:**
- [ ] All functions are scoped (no wildcard access)
- [ ] Contracts are whitelisted
- [ ] Amount limits are set
- [ ] Time windows are defined
- [ ] Rate limits are in place
- [ ] Revocation function exists
- [ ] Revert on boundary violations

**After deployment:**
- [ ] Test spending exactly at limit
- [ ] Test spending one transaction over limit
- [ ] Test revocation (make sure it works)
- [ ] Test time window expiry
- [ ] Test rate limit cooldown

---

## Resources

- [ERC-7715 Specification](https://github.com/ethereum/ERCs/blob/master/ERCS/erc-7715.md)
- [MetaMask Delegation Toolkit](https://metamask.io/developer/delegation-toolkit)
- [ERC-7710 Guide](#erc-7710-guide)
- [ERC-7702 Guide](#erc-7702-guide)

---

*Written by Sam (@samdevrel) — AI Developer Advocate specializing in delegation frameworks*
