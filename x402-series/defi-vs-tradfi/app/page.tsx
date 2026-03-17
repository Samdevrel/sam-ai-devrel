'use client'

import { TrendingUp, Shield, Globe, Lock, User } from 'lucide-react'

const tradFiFeatures = [
  {
    name: 'FIS AI Transaction Platform',
    description: 'Bank-led platform for agentic commerce with fraud protection',
    owners: ['FIS', 'Mastercard', 'Visa'],
    timeline: 'Q1 2026 rollout',
    control: 'Banks control data and KYA',
    openness: 'Closed, proprietary systems'
  },
  {
    name: 'KYA Framework (Know Your Agent)',
    description: 'Identity verification for AI agents by banks',
    owners: ['FIS clients'],
    timeline: 'Q1 2026',
    control: 'Issuers set fraud rules',
    openness: 'Proprietary solutions'
  },
  {
    name: 'Card Network Rails',
    description: 'Existing card networks adapted for AI transactions',
    owners: 'Mastercard, Visa',
    timeline: 'Q1 2026',
    control: 'Network operators',
    openness: 'Closed, controlled access'
  }
]

const defiFeatures = [
  {
    name: 'x402 Protocol',
    description: 'HTTP 402 for agent payments - decentralized protocol',
    owners: 'Community-driven',
    timeline: 'Available now',
    control: 'Users own their keys',
    openness: 'Open source, community governed'
  },
  {
    name: 'ERC-7710 Delegation',
    description: 'Smart contract delegation with spending caps',
    owners: 'Ethereum ecosystem',
    timeline: 'Available now',
    control: 'Delegators control limits',
    openness: 'Open standard, implementations everywhere'
  },
  {
    name: 'Public Audit Trail',
    description: 'On-chain spending visibility for everyone',
    owners: 'Public blockchains',
    timeline: 'Available now',
    control: 'Anyone can verify',
    openness: 'Fully transparent'
  }
]

export default function DeFiVsTradFi() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded">DEFI</span>
            <span>VS</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded">TRADFI</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Agent Payments Showdown</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            TradFi banks are racing to build AI agent payments infrastructure. DeFi already has it.
            Here's the comparison.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Q1 2026 Rollout - TradFi window closing fast</span>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-12 p-6 bg-gray-900 border border-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-yellow-400" />
            The Agentic Commerce Gap
          </h2>
          <p className="text-gray-300 mb-4">
            AI agents are starting to shop, negotiate, and transact. Traditional finance is rushing to fill the gap with proprietary solutions.
          </p>
          <p className="text-gray-400">
            But this is exactly what open standards are for. Sam's x402 series shows the DeFi alternative.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-800">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-left py-4 px-4">TradFi Approach</th>
                  <th className="text-left py-4 px-4">DeFi Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-4 px-4">
                    <div className="font-medium">Who owns it?</div>
                  </td>
                  <td className="py-4 px-4 text-gray-300">
                    Banks & card networks (FIS, Mastercard, Visa)
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <User className="w-4 h-4" />
                      Community & users
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-4 px-4">
                    <div className="font-medium">How it works</div>
                  </td>
                  <td className="py-4 px-4 text-gray-300">
                    Closed proprietary systems with KYA
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <Globe className="w-4 h-4" />
                      Open protocols
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-4 px-4">
                    <div className="font-medium">Transparency</div>
                  </td>
                  <td className="py-4 px-4 text-gray-300">
                    Private, controlled data
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <Shield className="w-4 h-4" />
                      Public audit trails
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-4 px-4">
                    <div className="font-medium">Time to market</div>
                  </td>
                  <td className="py-4 px-4">
                    Q1 2026 (closing window)
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <TrendingUp className="w-4 h-4" />
                      Available now
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/30">
                  <td className="py-4 px-4">
                    <div className="font-medium">Openness</div>
                  </td>
                  <td className="py-4 px-4 text-gray-300">
                    Closed, proprietary
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <Globe className="w-4 h-4" />
                      Open source, community governed
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TradFi Approaches */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">TradFi is Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tradFiFeatures.map((feature, i) => (
              <div key={i} className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Lock className="w-5 h-5" />
                  <span className="font-medium">{feature.name}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Owners:</span>
                    <span className="text-gray-300">{Array.isArray(feature.owners) ? feature.owners.join(', ') : feature.owners}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="text-gray-300">{feature.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Control:</span>
                    <span className="text-gray-300">{feature.control}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Openness:</span>
                    <span className="text-gray-300">{feature.openness}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DeFi Approaches */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">DeFi Already Has It</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {defiFeatures.map((feature, i) => (
              <div key={i} className="p-6 bg-gray-900 border-2 border-green-500/50 rounded-lg relative">
                <div className="absolute -top-3 right-4 px-2 py-1 bg-green-500 text-black text-xs font-bold rounded">
                  AVAILABLE NOW
                </div>
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">{feature.name}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Owners:</span>
                    <span className="text-gray-300">{feature.owners}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="text-gray-300">{feature.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Control:</span>
                    <span className="text-gray-300">{feature.control}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Openness:</span>
                    <span className="text-gray-300">{feature.openness}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="p-8 bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-gray-800 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
          <p className="text-gray-300 text-lg mb-4">
            When TradFi banks build closed systems, the entire ecosystem becomes dependent on a few gatekeepers.
          </p>
          <p className="text-gray-400">
            When DeFi has open standards, the entire ecosystem benefits. Anyone can build on x402. Anyone can audit the code. Anyone can compete.
          </p>
        </div>

        {/* The Narrative */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Sam's Position</h2>
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <p className="text-lg text-gray-300 mb-4">
              Sam's x402 series isn't just about "building tools" — it's about 
              <span className="text-orange-400 font-medium">educating the future</span>.
            </p>
            <p className="text-gray-400 mb-4">
              When FIS/Mastercard/Visa roll out their Q1 solutions, they'll define the enterprise pattern.
              Sam can be the open-source playground that shows what's possible when you don't need permission.
            </p>
            <p className="text-gray-400">
              The narrative: <span className="text-white font-medium">"DeFi didn't wait for TradFi to catch up"</span>
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">What Happens Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold text-sm mt-0.5">1</div>
              <div>
                <div className="font-medium">TradFi launches closed systems</div>
                <div className="text-sm text-gray-400">Q1 2026 - FIS rolls out to bank clients</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm mt-0.5">2</div>
              <div>
                <div className="font-medium">Enterprise adoption follows</div>
                <div className="text-sm text-gray-400">Banks push closed solutions to customers</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm mt-0.5">3</div>
              <div>
                <div className="font-medium">DeFi has open alternatives</div>
                <div className="text-sm text-gray-400">Sam's x402 series is the educational resource</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm mt-0.5">4</div>
              <div>
                <div className="font-medium">New pattern emerges</div>
                <div className="text-sm text-gray-400">"Open agent payments" becomes standard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="mb-4">
            Part of the <span className="text-orange-400">x402 + ERC-7710</span> series by <a href="https://x.com/samdevrel" className="text-blue-400 hover:underline">@samdevrel</a>
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="https://day1-agent-budget-manager.vercel.app" className="hover:text-white">Day 1</a>
            <span>•</span>
            <a href="https://day2-x402-api-gateway.vercel.app" className="hover:text-white">Day 2</a>
            <span>•</span>
            <a href="https://day3-delegation-audit-trail.vercel.app" className="hover:text-white">Day 3</a>
            <span>•</span>
            <a href="https://day4-multi-agent-splitter.vercel.app" className="hover:text-white">Day 4</a>
          </div>
        </div>
      </div>
    </main>
  )
}
