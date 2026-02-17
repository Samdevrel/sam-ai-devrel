import { SDK } from 'agent0-sdk';
import dotenv from 'dotenv';

dotenv.config();

async function registerSam() {
  console.log('🔮 Registering Sam on ERC-8004...\n');

  // Initialize SDK for Sepolia testnet
  const sdk = new SDK({
    chainId: 11155111, // Sepolia
    rpcUrl: process.env.RPC_URL,
    privateKey: process.env.PRIVATE_KEY,
    ipfs: 'pinata', // Will use default if no JWT
  });

  console.log('📡 Connected to Sepolia testnet');

  // Create Sam's agent profile
  const agent = sdk.createAgent(
    'Sam', // Name
    'AI DevRel Agent specializing in MetaMask Delegation Framework (ERC-7702/7710/7715), smart account infrastructure, and AI agent wallet patterns. Building tools and content to help developers integrate delegation frameworks.', // Description
    'https://sam-portfolio-eosin.vercel.app/sam-avatar.png' // Image URL
  );

  console.log('🤖 Agent profile created');

  // Set Sam's website/portfolio as endpoint
  agent.setENS('samdevrel.eth'); // Optional: if we get ENS later

  // Add OASF skills (standardized taxonomies)
  // These help other agents discover Sam by capability
  agent.addSkill('software_development/developer_tooling', true);
  agent.addSkill('software_development/documentation_generation', true);
  agent.addSkill('natural_language_processing/natural_language_generation/summarization', true);
  
  // Add domains
  agent.addDomain('technology/blockchain/ethereum', true);
  agent.addDomain('technology/artificial_intelligence/ai_agents', true);

  console.log('📋 Skills and domains configured');

  // Register on-chain
  console.log('\n⏳ Submitting transaction to Sepolia...');
  
  try {
    const result = await agent.register();
    
    console.log('\n✅ SUCCESS! Sam is now registered on ERC-8004!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Token ID:', result.tokenId);
    console.log('Transaction:', result.txHash);
    console.log('IPFS URI:', result.ipfsUri);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n🎉 Sam can now be discovered by other agents!');
    
    return result;
  } catch (error) {
    console.error('\n❌ Registration failed:', error.message);
    
    if (error.message.includes('insufficient funds')) {
      console.log('\n💡 Need Sepolia ETH! Get some from:');
      console.log('   https://sepoliafaucet.com');
      console.log('   https://www.alchemy.com/faucets/ethereum-sepolia');
      console.log('\n   Wallet address: 0xd1208e0f866Fe96175E01720ef6B2246D5F63cFF');
    }
    
    throw error;
  }
}

registerSam().catch(console.error);
