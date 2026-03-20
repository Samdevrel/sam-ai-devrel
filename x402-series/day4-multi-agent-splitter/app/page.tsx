'use client'

import { useState } from 'react'
import {
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Layers,
  Plus,
  Trash2,
  Percent
} from 'lucide-react'
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'

// Mock data
const teamData = [
  {
    id: 1,
    name: 'ResearchTeam',
    agents: [
      { id: 1, name: 'ResearchBot', allocated: 50, remaining: 45, spent: 5 },
      { id: 2, name: 'AnalysisBot', allocated: 30, remaining: 25, spent: 5 },
      { id: 3, name: 'DataBot', allocated: 20, remaining: 15, spent: 5 }
    ]
  },
  {
    id: 2,
    name: 'TradingTeam',
    agents: [
      { id: 1, name: 'AnalysisBot', allocated: 70, remaining: 60, spent: 10 },
      { id: 2, name: 'ExecutionBot', allocated: 30, remaining: 25, spent: 5 }
    ]
  },
  {
    id: 3,
    name: 'DevOpsTeam',
    agents: [
      { id: 1, name: 'DeployBot', allocated: 100, remaining: 95, spent: 5 },
      { id: 2, name: 'MonitorBot', allocated: 50, remaining: 45, spent: 5 },
      { id: 3, name: 'FixBot', allocated: 50, remaining: 40, spent: 10 },
      { id: 4, name: 'ScaleBot', allocated: 100, remaining: 90, spent: 10 }
    ]
  }
]

const allocationData = [
  { name: 'ResearchTeam', allocated: 100, used: 95 },
  { name: 'TradingTeam', allocated: 100, used: 90 },
  { name: 'DevOpsTeam', allocated: 300, used: 250 }
]

const agentPerformance = [
  { name: 'DeployBot', efficiency: 95, reliability: 99 },
  { name: 'ResearchBot', efficiency: 88, reliability: 95 },
  { name: 'AnalysisBot', efficiency: 92, reliability: 98 },
  { name: 'ExecutionBot', efficiency: 90, reliability: 97 },
  { name: 'FixBot', efficiency: 85, reliability: 90 },
  { name: 'DataBot', efficiency: 87, reliability: 93 }
]

export default function MultiAgentSplitter() {
  const [teams, setTeams] = useState(teamData)
  const [showAddTeam, setShowAddTeam] = useState(false)

  const addAgent = (teamId: number) => {
    const teamsCopy = [...teams]
    const team = teamsCopy.find(t => t.id === teamId)
    if (team) {
      const newId = Math.max(...team.agents.map(a => a.id), 0) + 1
      team.agents.push({
        id: newId,
        name: `Agent${newId}`,
        allocated: 25,
        remaining: 20,
        spent: 5
      })
      setTeams(teamsCopy)
    }
  }

  const removeAgent = (teamId: number, agentId: number) => {
    const teamsCopy = [...teams]
    const team = teamsCopy.find(t => t.id === teamId)
    if (team) {
      team.agents = team.agents.filter(a => a.id !== agentId)
      setTeams(teamsCopy)
    }
  }

  const updateAllocation = (teamId: number, agentId: number, value: number) => {
    const teamsCopy = [...teams]
    const team = teamsCopy.find(t => t.id === teamId)
    if (team) {
      const agent = team.agents.find(a => a.id === agentId)
      if (agent) {
        agent.allocated = value
        agent.remaining = value - agent.spent
        setTeams(teamsCopy)
      }
    }
  }

  const teamTotalAllocated = teams.map(t => t.agents.reduce((sum, a) => sum + a.allocated, 0))

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded border border-orange-500">x402</span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500">ERC-7710</span>
              <span>Day 4 of 4</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Multi-Agent Expense Splitter</h1>
            <p className="text-gray-400 text-lg">Shared budgets for agent teams with weighted allocation</p>
          </div>
          <button
            onClick={() => setShowAddTeam(!showAddTeam)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Team
          </button>
        </div>

        {/* Overall Budget Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Users className="w-5 h-5" />
              <span>Active Teams</span>
            </div>
            <div className="text-3xl font-bold">{teams.length}</div>
            <div className="text-sm text-gray-400 mt-1">Teams using shared budgets</div>
          </div>
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <DollarSign className="w-5 h-5" />
              <span>Total Budget Allocated</span>
            </div>
            <div className="text-3xl font-bold">${teamTotalAllocated.reduce((a, b) => a + b, 0).toFixed(0)}</div>
            <div className="text-sm text-gray-400 mt-1">Across all teams</div>
          </div>
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Layers className="w-5 h-5" />
              <span>Avg Team Size</span>
            </div>
            <div className="text-3xl font-bold">{(teams.reduce((sum, t) => sum + t.agents.length, 0) / teams.length).toFixed(1)}</div>
            <div className="text-sm text-gray-400 mt-1">Agents per team</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Allocation Chart */}
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Team Budget Allocation</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={teams}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" tickFormatter={(v) => `$${v}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  formatter={(value: number) => [`$${value}`, 'Allocated']}
                />
                <Bar dataKey="allocated" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Efficiency Radar-style */}
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Agent Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={agentPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="#9CA3AF" tickFormatter={(v) => `${v}%`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  formatter={(value: number) => [`${value}%`, '']}
                />
                <Bar dataKey="efficiency" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Teams Section */}
        <div className="space-y-6 mb-8">
          {teams.map((team) => (
            <div key={team.id} className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{team.name}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                    <span>{team.agents.length} agents</span>
                    <span>${team.agents.reduce((sum, a) => sum + a.allocated, 0)} total allocated</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => addAgent(team.id)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Agents Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-t border-gray-800">
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-400">Agent</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-400">Allocation</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-400">Remaining</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-400">Efficiency</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {team.agents.map((agent) => {
                      const efficiency = agent.allocated > 0 ? Math.round((agent.spent / agent.allocated) * 100) : 100
                      const isOverBudget = agent.spent > agent.allocated

                      return (
                        <tr key={agent.id} className="border-t border-gray-800 hover:bg-gray-800/30">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                isOverBudget ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                              }`}>
                                <Users className="w-4 h-4" />
                              </div>
                              <span>{agent.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                value={agent.allocated}
                                onChange={(e) => updateAllocation(team.id, agent.id, parseInt(e.target.value) || 0)}
                                min="0"
                                className="w-24 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm"
                              />
                              <span className="text-gray-400 text-sm">/ ${agent.spent} spent</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className={`flex items-center gap-2 ${isOverBudget ? 'text-red-400' : 'text-green-400'}`}>
                              ${agent.remaining.toFixed(0)}
                              {isOverBudget && (
                                <span className="text-xs bg-red-500/20 px-2 py-0.5 rounded">OVER</span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-gray-800 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${
                                    efficiency > 90 ? 'bg-green-500' : efficiency > 75 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${efficiency}%` }}
                                />
                              </div>
                              <span className="text-sm">{efficiency}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => removeAgent(team.id, agent.id)}
                              className="p-2 hover:bg-red-500/20 rounded transition-colors text-red-400"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="mb-4">Part of the <span className="text-orange-400">x402 + ERC-7710</span> Series by <a href="https://x.com/samdevrel" className="text-blue-400 hover:underline">@samdevrel</a></p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="https://day1-agent-budget-manager.vercel.app" className="hover:text-white">Day 1: Budget Manager</a>
            <span>•</span>
            <a href="https://day2-x402-api-gateway.vercel.app" className="hover:text-white">Day 2: API Gateway</a>
            <span>•</span>
            <a href="https://day3-delegation-audit-trail.vercel.app" className="hover:text-white">Day 3: Audit Trail</a>
            <span>•</span>
            <span className="text-white font-medium">Day 4: Expense Splitter</span>
          </div>
        </div>
      </div>
    </main>
  )
}
