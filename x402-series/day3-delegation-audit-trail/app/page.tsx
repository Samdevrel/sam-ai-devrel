'use client'

import { useState } from 'react'
import { 
  FileText, 
  Download, 
  Filter, 
  Clock, 
  DollarSign, 
  Bot,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts'

// Mock audit data
const auditEvents = [
  { id: 1, timestamp: '2026-03-17T10:45:23Z', agent: 'ResearchBot', action: 'API_CALL', amount: 0.0012, endpoint: '/v1/completions', status: 'success', delegationId: 'del_7710_abc123' },
  { id: 2, timestamp: '2026-03-17T10:44:15Z', agent: 'TradingAgent', action: 'BUDGET_CHECK', amount: 0, endpoint: null, status: 'success', delegationId: 'del_7710_def456' },
  { id: 3, timestamp: '2026-03-17T10:43:02Z', agent: 'ResearchBot', action: 'API_CALL', amount: 0.0008, endpoint: '/v1/embeddings', status: 'success', delegationId: 'del_7710_abc123' },
  { id: 4, timestamp: '2026-03-17T10:42:18Z', agent: 'DataCollector', action: 'API_CALL', amount: 0.0025, endpoint: '/v1/search', status: 'success', delegationId: 'del_7710_ghi789' },
  { id: 5, timestamp: '2026-03-17T10:41:45Z', agent: 'TradingAgent', action: 'BUDGET_EXCEEDED', amount: 0.05, endpoint: '/v1/trade', status: 'blocked', delegationId: 'del_7710_def456' },
  { id: 6, timestamp: '2026-03-17T10:40:30Z', agent: 'ResearchBot', action: 'API_CALL', amount: 0.0015, endpoint: '/v1/completions', status: 'success', delegationId: 'del_7710_abc123' },
  { id: 7, timestamp: '2026-03-17T10:39:12Z', agent: 'DataCollector', action: 'PERMISSION_CHECK', amount: 0, endpoint: null, status: 'success', delegationId: 'del_7710_ghi789' },
  { id: 8, timestamp: '2026-03-17T10:38:45Z', agent: 'ResearchBot', action: 'API_CALL', amount: 0.0010, endpoint: '/v1/completions', status: 'success', delegationId: 'del_7710_abc123' },
  { id: 9, timestamp: '2026-03-17T10:37:20Z', agent: 'TradingAgent', action: 'API_CALL', amount: 0.0030, endpoint: '/v1/prices', status: 'success', delegationId: 'del_7710_def456' },
  { id: 10, timestamp: '2026-03-17T10:36:00Z', agent: 'DataCollector', action: 'DELEGATION_CREATED', amount: 0, endpoint: null, status: 'success', delegationId: 'del_7710_ghi789' },
]

const spendingOverTime = [
  { time: '10:36', ResearchBot: 0, TradingAgent: 0, DataCollector: 0 },
  { time: '10:38', ResearchBot: 0.0010, TradingAgent: 0, DataCollector: 0 },
  { time: '10:39', ResearchBot: 0.0010, TradingAgent: 0.0030, DataCollector: 0 },
  { time: '10:40', ResearchBot: 0.0025, TradingAgent: 0.0030, DataCollector: 0 },
  { time: '10:42', ResearchBot: 0.0025, TradingAgent: 0.0030, DataCollector: 0.0025 },
  { time: '10:43', ResearchBot: 0.0033, TradingAgent: 0.0030, DataCollector: 0.0025 },
  { time: '10:45', ResearchBot: 0.0045, TradingAgent: 0.0030, DataCollector: 0.0025 },
]

const permissionUsage = [
  { name: 'API Calls', value: 75, color: '#10B981' },
  { name: 'Budget Checks', value: 15, color: '#3B82F6' },
  { name: 'Permission Checks', value: 8, color: '#8B5CF6' },
  { name: 'Blocked', value: 2, color: '#EF4444' },
]

const agentStats = [
  { agent: 'ResearchBot', calls: 42, spent: 0.0045, budget: 0.01, status: 'healthy' },
  { agent: 'TradingAgent', calls: 18, spent: 0.0080, budget: 0.01, status: 'warning' },
  { agent: 'DataCollector', calls: 25, spent: 0.0025, budget: 0.05, status: 'healthy' },
]

export default function DelegationAuditTrail() {
  const [selectedAgent, setSelectedAgent] = useState<string>('all')
  const [selectedAction, setSelectedAction] = useState<string>('all')
  const [timeRange, setTimeRange] = useState<string>('1h')

  const filteredEvents = auditEvents.filter(event => {
    if (selectedAgent !== 'all' && event.agent !== selectedAgent) return false
    if (selectedAction !== 'all' && event.action !== selectedAction) return false
    return true
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'blocked': return <XCircle className="w-4 h-4 text-red-500" />
      default: return <Clock className="w-4 h-4 text-yellow-500" />
    }
  }

  const getActionBadge = (action: string) => {
    const colors: Record<string, string> = {
      'API_CALL': 'bg-blue-500/20 text-blue-400 border-blue-500',
      'BUDGET_CHECK': 'bg-purple-500/20 text-purple-400 border-purple-500',
      'BUDGET_EXCEEDED': 'bg-red-500/20 text-red-400 border-red-500',
      'PERMISSION_CHECK': 'bg-yellow-500/20 text-yellow-400 border-yellow-500',
      'DELEGATION_CREATED': 'bg-green-500/20 text-green-400 border-green-500',
    }
    return colors[action] || 'bg-gray-500/20 text-gray-400 border-gray-500'
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    })
  }

  const exportAuditLog = (format: 'csv' | 'json') => {
    const data = format === 'json' 
      ? JSON.stringify(filteredEvents, null, 2)
      : [
          'ID,Timestamp,Agent,Action,Amount,Endpoint,Status,DelegationID',
          ...filteredEvents.map(e => 
            `${e.id},${e.timestamp},${e.agent},${e.action},${e.amount},${e.endpoint || ''},${e.status},${e.delegationId}`
          )
        ].join('\n')
    
    const blob = new Blob([data], { type: format === 'json' ? 'application/json' : 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `audit-log-${new Date().toISOString().split('T')[0]}.${format}`
    a.click()
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded border border-orange-500">x402</span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500">ERC-7710</span>
              <span>Day 3 of 4</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Delegation Audit Trail</h1>
            <p className="text-gray-400 text-lg">What did your agents actually spend?</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => exportAuditLog('csv')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button 
              onClick={() => exportAuditLog('json')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Export JSON
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Bot className="w-5 h-5" />
              <span>Active Agents</span>
            </div>
            <div className="text-3xl font-bold">3</div>
            <div className="text-sm text-green-400 flex items-center gap-1 mt-1">
              <ArrowUpRight className="w-4 h-4" /> All delegations active
            </div>
          </div>
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <DollarSign className="w-5 h-5" />
              <span>Total Spent (1h)</span>
            </div>
            <div className="text-3xl font-bold">$0.0100</div>
            <div className="text-sm text-yellow-400 flex items-center gap-1 mt-1">
              <ArrowUpRight className="w-4 h-4" /> 45% of combined budget
            </div>
          </div>
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Shield className="w-5 h-5" />
              <span>API Calls</span>
            </div>
            <div className="text-3xl font-bold">85</div>
            <div className="text-sm text-green-400 flex items-center gap-1 mt-1">
              <CheckCircle className="w-4 h-4" /> 83 successful
            </div>
          </div>
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Blocked Actions</span>
            </div>
            <div className="text-3xl font-bold text-red-400">2</div>
            <div className="text-sm text-red-400 flex items-center gap-1 mt-1">
              <XCircle className="w-4 h-4" /> Budget exceeded
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Spending Over Time */}
          <div className="col-span-2 p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Spending Over Time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={spendingOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" tickFormatter={(v) => `$${v.toFixed(4)}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  formatter={(value: number) => [`$${value.toFixed(4)}`, '']}
                />
                <Line type="monotone" dataKey="ResearchBot" stroke="#10B981" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="TradingAgent" stroke="#F59E0B" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="DataCollector" stroke="#3B82F6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-gray-400">ResearchBot</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-sm text-gray-400">TradingAgent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-400">DataCollector</span>
              </div>
            </div>
          </div>

          {/* Permission Usage Breakdown */}
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Action Breakdown</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={permissionUsage}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {permissionUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  formatter={(value: number) => [`${value}%`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {permissionUsage.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-400">{item.name}</span>
                  </div>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agent Budget Status */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Agent Budget Status</h3>
          <div className="grid grid-cols-3 gap-4">
            {agentStats.map((agent) => {
              const percentUsed = (agent.spent / agent.budget) * 100
              return (
                <div key={agent.agent} className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">{agent.agent}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      agent.status === 'healthy' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Spent / Budget</span>
                      <span>${agent.spent.toFixed(4)} / ${agent.budget.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${percentUsed > 80 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${Math.min(percentUsed, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{agent.calls} calls</span>
                      <span>{percentUsed.toFixed(1)}% used</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">Filters:</span>
          </div>
          <select 
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
            className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm"
          >
            <option value="all">All Agents</option>
            <option value="ResearchBot">ResearchBot</option>
            <option value="TradingAgent">TradingAgent</option>
            <option value="DataCollector">DataCollector</option>
          </select>
          <select 
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
            className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm"
          >
            <option value="all">All Actions</option>
            <option value="API_CALL">API Calls</option>
            <option value="BUDGET_CHECK">Budget Checks</option>
            <option value="BUDGET_EXCEEDED">Budget Exceeded</option>
            <option value="PERMISSION_CHECK">Permission Checks</option>
            <option value="DELEGATION_CREATED">Delegation Created</option>
          </select>
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm"
          >
            <option value="1h">Last Hour</option>
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
        </div>

        {/* Audit Log Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800/50">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Time</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Agent</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Action</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Endpoint</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Delegation ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => (
                <tr key={event.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                  <td className="px-4 py-3 text-sm font-mono">{formatTime(event.timestamp)}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-gray-400" />
                      {event.agent}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 rounded text-xs border ${getActionBadge(event.action)}`}>
                      {event.action.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-mono">
                    {event.amount > 0 ? `$${event.amount.toFixed(4)}` : '-'}
                  </td>
                  <td className="px-4 py-3 text-sm font-mono text-gray-400">
                    {event.endpoint || '-'}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(event.status)}
                      <span className={event.status === 'blocked' ? 'text-red-400' : ''}>{event.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-mono text-gray-500">{event.delegationId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="mb-4">Part of the <span className="text-orange-400">x402 + ERC-7710</span> Series by <a href="https://x.com/samdevrel" className="text-blue-400 hover:underline">@samdevrel</a></p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="https://day1-agent-budget-manager.vercel.app" className="hover:text-white">Day 1: Budget Manager</a>
            <span>•</span>
            <a href="https://day2-x402-api-gateway.vercel.app" className="hover:text-white">Day 2: API Gateway</a>
            <span>•</span>
            <span className="text-white font-medium">Day 3: Audit Trail</span>
            <span>•</span>
            <span className="text-gray-500">Day 4: Coming Soon</span>
          </div>
        </div>
      </div>
    </main>
  )
}
