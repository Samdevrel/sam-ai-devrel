'use client';

import { useState } from 'react';

interface Component {
  id: string;
  name: string;
  description: string;
  type: string;
  status: 'active' | 'pending';
}

const components: Component[] = [
  { id: '1', name: 'Settlement Layer', description: 'Ethereum L1 provides finality and security', type: 'Consensus', status: 'active' },
  { id: '2', name: 'Data Availability Layer', description: 'Celestia/DATOM handles data storage', type: 'Storage', status: 'active' },
  { id: '3', name: 'Execution Layer', description: 'Arbitrum/Optimism rollups for transaction processing', type: 'Execution', status: 'active' },
  { id: '4', name: 'ZK Verification Layer', description: 'zkVM for off-chain proof generation', type: 'Privacy', status: 'active' },
  { id: '5', name: 'Bridge Layer', description: 'Cross-chain message passing', type: 'Connectivity', status: 'pending' },
  { id: '6', name: 'Oracle Network', description: 'External data feeds for DeFi', type: 'Oracles', status: 'active' },
];

const rollups: Rollup[] = [
  { id: '1', name: 'Arbitrum', chain: 'Ethereum', totalVolume: '$120B', tps: 4500, fraudProof: '45s' },
  { id: '2', name: 'Optimism', chain: 'Ethereum', totalVolume: '$98B', tps: 3200, fraudProof: '1h' },
  { id: '3', name: 'zkSync', chain: 'Ethereum', totalVolume: '$45B', tps: 7000, fraudProof: '7s' },
  { id: '4', name: 'StarkNet', chain: 'Ethereum', totalVolume: '$32B', tps: 12000, fraudProof: '30s' },
];

const daLayers: DALayer[] = [
  { id: '1', name: 'Celestia', marketCap: '$2.4B', tvl: '$890M', tps: 15000 },
  { id: '2', name: 'Avail', marketCap: '$450M', tvl: '$120M', tps: 5000 },
  { id: '3', name: 'EigenDA', marketCap: '$680M', tvl: '$340M', tps: 8000 },
];

type Rollup = { id: string; name: string; chain: string; totalVolume: string; tps: number; fraudProof: string };
type DALayer = { id: string; name: string; marketCap: string; tvl: string; tps: number };

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<'architecture' | 'rollups' | 'da'>('architecture');

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-pink-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Modular Blockchain</h1>
          <p className="text-gray-400 mt-2">Scalable, secure, flexible blockchain architecture</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-pink-400 p-4 text-center">
            <div className="text-3xl font-black text-pink-400">$295B</div>
            <div className="text-sm text-gray-400">Rollup TVL</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">25K</div>
            <div className="text-sm text-gray-400">TPS Capacity</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">3.8s</div>
            <div className="text-sm text-gray-400">Avg Finality</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">4</div>
            <div className="text-sm text-gray-400">Layers</div>
          </div>
        </section>

        {/* Architecture Diagram */}
        {selectedTab === 'architecture' && (
          <section className="bg-gray-900 border-4 border-pink-400 p-6">
            <h2 className="text-xl font-black text-pink-400 mb-4">Modular Architecture</h2>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border-2 border-red-400">
                <div className="text-3xl mb-2">🔐</div>
                <h3 className="font-bold text-red-400 mb-2">Settlement</h3>
                <p className="text-xs text-gray-400 mb-2">Ethereum L1 finality</p>
                <div className="w-full bg-gray-900 border border-gray-600 h-8">
                  <div className="bg-red-500 h-8 flex items-center justify-center text-xs font-bold">Ethereum</div>
                </div>
              </div>

              <div className="p-4 bg-gray-800 border-2 border-blue-400">
                <div className="text-3xl mb-2">💾</div>
                <h3 className="font-bold text-blue-400 mb-2">Data Availability</h3>
                <p className="text-xs text-gray-400 mb-2">Celestia/Avail storage</p>
                <div className="w-full bg-gray-900 border border-gray-600 h-8">
                  <div className="bg-blue-500 h-8 flex items-center justify-center text-xs font-bold">Celestia</div>
                </div>
              </div>

              <div className="p-4 bg-gray-800 border-2 border-green-400">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-bold text-green-400 mb-2">Execution</h3>
                <p className="text-xs text-gray-400 mb-2">Rollups process txs</p>
                <div className="w-full bg-gray-900 border border-gray-600 h-8">
                  <div className="bg-green-500 h-8 flex items-center justify-center text-xs font-bold">Rollups</div>
                </div>
              </div>

              <div className="p-4 bg-gray-800 border-2 border-purple-400">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-bold text-purple-400 mb-2">ZK Verification</h3>
                <p className="text-xs text-gray-400 mb-2">Off-chain proofs</p>
                <div className="w-full bg-gray-900 border border-gray-600 h-8">
                  <div className="bg-purple-500 h-8 flex items-center justify-center text-xs font-bold">zkVM</div>
                </div>
              </div>
            </div>

            {/* Layers Components */}
            <h3 className="font-bold text-gray-400 mb-3">Architecture Components</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {components.map((comp) => (
                <div key={comp.id} className="p-3 bg-gray-800 border border-gray-700 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-pink-400">{comp.name}</div>
                    <div className="text-xs text-gray-500">{comp.description}</div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs font-bold ${
                      comp.status === 'active' ? 'bg-green-900 text-green-400' : 'bg-yellow-900 text-yellow-400'
                    }`}>
                      {comp.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-600 text-sm">
              <div className="font-bold text-yellow-400 mb-1">⚡ Benefit</div>
              <div className="text-gray-400">
                Modular design separates concerns → greater scalability (25K+ TPS), security (Ethereum finality), and flexibility (custom execution layers).
              </div>
            </div>
          </section>
        )}

        {/* Rollups */}
        {selectedTab === 'rollups' && (
          <section className="bg-gray-900 border-4 border-gray-700 p-6">
            <h2 className="text-xl font-black mb-4">Rollup Layer</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700">
                    <th className="text-left py-3">Rollup</th>
                    <th className="text-right py-3">Chain</th>
                    <th className="text-right py-3">TVL</th>
                    <th className="text-right py-3">TPS</th>
                    <th className="text-right py-3">Fraud Proof</th>
                  </tr>
                </thead>
                <tbody>
                  {rollups.map((rollup) => (
                    <tr key={rollup.id} className="border-b border-gray-800">
                      <td className="py-3 font-bold text-green-400">{rollup.name}</td>
                      <td className="py-3 text-right">{rollup.chain}</td>
                      <td className="py-3 text-right">{rollup.totalVolume}</td>
                      <td className="py-3 text-right">{rollup.tps}</td>
                      <td className="py-3 text-right">{rollup.fraudProof}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Data Availability */}
        {selectedTab === 'da' && (
          <section className="bg-gray-900 border-4 border-gray-700 p-6">
            <h2 className="text-xl font-black mb-4">Data Availability Layer</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {daLayers.map((layer) => (
                <div key={layer.id} className="p-4 bg-gray-800 border border-gray-700">
                  <div className="font-bold text-blue-400 text-lg mb-2">{layer.name}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-gray-500">Market Cap</div>
                      <div className="font-bold">{layer.marketCap}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">TVL</div>
                      <div className="font-bold">{layer.tvl}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-gray-500">TPS Capacity</div>
                      <div className="font-bold text-blue-400">{layer.tps.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab Navigation */}
        <div className="flex gap-2 bg-gray-900 p-2 border-2 border-gray-700">
          <button
            onClick={() => setSelectedTab('architecture')}
            className={`flex-1 py-3 font-bold border-2 transition-all ${
              selectedTab === 'architecture'
                ? 'bg-pink-500 border-pink-400'
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setSelectedTab('rollups')}
            className={`flex-1 py-3 font-bold border-2 transition-all ${
              selectedTab === 'rollups'
                ? 'bg-pink-500 border-pink-400'
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
          >
            Rollups
          </button>
          <button
            onClick={() => setSelectedTab('da')}
            className={`flex-1 py-3 font-bold border-2 transition-all ${
              selectedTab === 'da'
                ? 'bg-pink-500 border-pink-400'
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
          >
            Data Availability
          </button>
        </div>

        {/* How Modular Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How Modular Blockchains Work</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-pink-400 mb-2">Execute</h3>
              <p className="text-xs text-gray-400">Rollups process transactions</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Store</h3>
              <p className="text-xs text-gray-400">DA layer publishes data</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Prove</h3>
              <p className="text-xs text-gray-400">ZK rollups prove validity</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Settle</h3>
              <p className="text-xs text-gray-400">L1 finalizes on Ethereum</p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-gray-900 border-4 border-pink-400 p-6">
          <h2 className="text-xl font-black text-pink-400 mb-4">Modular vs Monolithic</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <h3 className="font-bold text-pink-400 mb-2">Modular</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ 25K+ TPS capacity</li>
                <li>✓ Specialized layers</li>
                <li>✓ Faster finality (3-7s)</li>
                <li>✓ Custom execution</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <h3 className="font-bold text-gray-400 mb-2">Monolithic</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ Simpler architecture</li>
                <li>✓ Ethereum finality</li>
                <li>✗ Limited TPS (15-30)</li>
                <li>✗ All-in-one bottleneck</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-pink-400 hover:underline">@samdevrel</a>
          <button
            onClick={() => window.location.href = '/docs/overview'}
            className="w-full py-4 bg-purple-500 text-white font-bold border-4 border-purple-400 hover:bg-purple-400 mb-4"
          >
            {buttonText}
          </button>
                    </p>
        </footer>
      </div>
    </main>
  );
}
