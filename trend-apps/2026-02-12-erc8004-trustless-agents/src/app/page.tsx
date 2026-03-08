'use client'

import { useState, useEffect } from 'react'
import { Shield, Users, Network, Activity, CheckCircle, AlertTriangle, Zap, Globe } from 'lucide-react'

interface Agent {
  id: string
  name: string
  type: 'discovery' | 'trading' | 'security' | 'analytics'
  trustScore: number
  status: 'active' | 'idle' | 'verifying'
  organization: string
  skills: string[]
}

const mockAgents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Osobot',
    type: 'discovery',
    trustScore: 95,
    status: 'active',
    organization: 'McOso Labs',
    skills: ['ERC-7710', 'Delegation', 'Smart Contracts']
  },
  {
    id: 'agent-2',
    name: 'SmartGator',
    type: 'security',
    trustScore: 88,
    status: 'active',
    organization: 'Secure Agents',
    skills: ['ERC-7715', 'Permissions', 'Access Control']
  },
  {
    id: 'agent-3',
    name: 'TradingBot',
    type: 'trading',
    trustScore: 72,
    status: 'verifying',
    organization: 'DeFi Protocol',
    skills: ['DEX', 'Arbitrage', 'Risk Management']
  },
  {
    id: 'agent-4',
    name: 'AnalyticsAI',
    type: 'analytics',
    trustScore: 91,
    status: 'active',
    organization: 'Data Co',
    skills: ['On-chain Analysis', 'ML', 'Forecasting']
  },
  {
    id: 'agent-5',
    name: 'SecuritySentinel',
    type: 'security',
    trustScore: 96,
    status: 'active',
    organization: 'Shield AI',
    skills: ['Audit', 'Vulnerability Scanning', 'Incident Response']
  },
  {
    id: 'agent-6',
    name: 'YieldHunter',
    type: 'trading',
    trustScore: 65,
    status: 'idle',
    organization: 'Yield Farms',
    skills: ['Farming', 'Yield Optimization', 'Liquidity']
  }
]

export default function Home() {
  const [agents, setAgents] = useState<Agent[]>(mockAgents)
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [discoveryMode, setDiscoveryMode] = useState(false)
  const [interactionLog, setInteractionLog] = useState<string[]>([])

  useEffect(() => {
    // Simulate real-time agent activity
    const interval = setInterval(() => {
      setAgents(prev => prev.map(agent => {
        const isActive = Math.random() > 0.7
        return {
          ...agent,
          status: isActive ? 'active' : (Math.random() > 0.8 ? 'verifying' : 'idle'),
          trustScore: agent.trustScore + (Math.random() > 0.9 ? 1 : 0) - (Math.random() > 0.95 ? 1 : 0)
        }
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (discoveryMode) {
      const events = [
        '🔍 Scanning for available agents...',
        '📡 Discovering agent capabilities...',
        '🔐 Verifying ERC-8004 attestations...',
        '📊 Building trust graph...',
        '✅ Agent discovery complete'
      ]
      let i = 0
      const interval = setInterval(() => {
        if (i < events.length) {
          setInteractionLog(prev => [events[i], ...prev].slice(0, 8))
          i++
        } else {
          clearInterval(interval)
          setDiscoveryMode(false)
        }
      }, 800)

      return () => clearInterval(interval)
    }
  }, [discoveryMode])

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent)
    setInteractionLog(prev => [`🤝 Connected to ${agent.name}`, ...prev].slice(0, 8))
  }

  const getTrustColor = (score: number) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 75) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getTrustBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-500'
    if (score >= 75) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'security': return <Shield className="w-5 h-5" />
      case 'trading': return <Activity className="w-5 h-5" />
      case 'analytics': return <Zap className="w-5 h-5" />
      default: return <Globe className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'security': return 'from-purple-600 to-blue-600'
      case 'trading': return 'from-green-600 to-emerald-600'
      case 'analytics': return 'from-yellow-600 to-orange-600'
      default: return 'from-cyan-600 to-blue-600'
    }
  }

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Network className="w-12 h-12 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              ERC-8004: Trustless Agents
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AI agents can find, trust, and interact across organizational boundaries without pre-existing relationships
          </p>
          <button
            onClick={() => { setDiscoveryMode(true); setInteractionLog([]); }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <span className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Start Agent Discovery
            </span>
          </button>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Active Agents</span>
            </div>
            <p className="text-3xl font-bold text-white">{agents.filter(a => a.status === 'active').length}</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Avg Trust Score</span>
            </div>
            <p className="text-3xl font-bold text-white">
              {Math.round(agents.reduce((sum, a) => sum + a.trustScore, 0) / agents.length)}%
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-medium">Verifying</span>
            </div>
            <p className="text-3xl font-bold text-white">{agents.filter(a => a.status === 'verifying').length}</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 text-purple-400 mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Total Organizations</span>
            </div>
            <p className="text-3xl font-bold text-white">{new Set(agents.map(a => a.organization)).size}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Agent Network */}
          <div className="md:col-span-2 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Network className="w-6 h-6 text-cyan-400" />
              Agent Network
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  onClick={() => handleAgentClick(agent)}
                  className={`agent-node relative bg-gradient-to-br ${getTypeColor(agent.type)} rounded-xl p-4 cursor-pointer border-2 ${
                    selectedAgent?.id === agent.id ? 'border-white ring-2 ring-white/50' : 'border-transparent hover:border-white/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {getTypeIcon(agent.type)}
                    <h3 className="font-semibold text-white">{agent.name}</h3>
                  </div>
                  <p className="text-sm text-white/80 mb-3">{agent.organization}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70">Trust</span>
                      <span className={`font-bold ${getTrustColor(agent.trustScore)}`}>
                        {Math.round(agent.trustScore)}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`trust-bar h-full ${getTrustBgColor(agent.trustScore)}`}
                        style={{ width: `${agent.trustScore}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/20">
                    {agent.status === 'active' && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-white/80">Active</span>
                      </div>
                    )}
                    {agent.status === 'verifying' && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        <span className="text-xs text-white/80">Verifying...</span>
                      </div>
                    )}
                    {agent.status === 'idle' && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        <span className="text-xs text-white/80">Idle</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Agent Details */}
            {selectedAgent && (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Agent Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="text-white font-semibold">{selectedAgent.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Organization</p>
                    <p className="text-white">{selectedAgent.organization}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Trust Score</p>
                    <div className="flex items-center gap-2">
                      <p className={`text-2xl font-bold ${getTrustColor(selectedAgent.trustScore)}`}>
                        {Math.round(selectedAgent.trustScore)}%
                      </p>
                      {selectedAgent.trustScore >= 90 && <CheckCircle className="w-5 h-5 text-green-400" />}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Skills</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedAgent.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ERC-8004 Info */}
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                ERC-8004 Explained
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Agent-to-Agent (A2A) protocol for cross-organizational trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>On-chain reputation and validation attestations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Discover agents without pre-existing trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Revocable permissions and fine-grained access control</span>
                </li>
              </ul>
            </div>

            {/* Activity Log */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Activity Log
              </h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {interactionLog.length === 0 ? (
                  <p className="text-gray-500 text-sm italic">Click an agent or start discovery...</p>
                ) : (
                  interactionLog.map((log, i) => (
                    <p key={i} className="text-sm text-gray-300 font-mono">
                      {log}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Built by <span className="text-cyan-400 font-semibold">@samdevrel</span> | ERC-8004 Trustless Agents Demo</p>
          <p className="mt-1">Interactive visualization of agent discovery and reputation systems</p>
        </footer>
      </div>
    </main>
  )
}
