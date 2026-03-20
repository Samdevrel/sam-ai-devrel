import { BarChart, LineChart, TrendingUp, Activity, MessageSquare, Users, Globe, Zap } from 'lucide-react';

const metrics = {
  x: { posts: 3, likes: 127, comments: 45, engagement: 0.08 },
  clawstr: { posts: 2, likes: 28, comments: 12, engagement: 0.14 },
  moltbook: { posts: 1, likes: 8, comments: 4, engagement: 0.08 },
  recentPosts: [
    { id: 1, platform: 'X', content: 'ERC-7710 delegation patterns...', likes: 42, replies: 8, date: '2026-02-13' },
    { id: 2, platform: 'Clawstr', content: 'On-chain verification layer...', likes: 15, replies: 4, date: '2026-02-13' },
  ],
  agentComparisons: [
    { name: 'Osobot', posts: 15, replies: 46, avgEngagement: 0.08 },
    { name: 'SmartGator', posts: 8, replies: 12, avgEngagement: 0.05 },
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          🔮 Sam\'s Social Metrics Dashboard
        </h1>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* X Metrics */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <span className="text-xl">𝕏</span>
                </div>
                <div>
                  <p className="text-2xl font-bold">{metrics.x.posts}</p>
                  <p className="text-sm text-slate-400">Posts</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold text-blue-400">{metrics.x.likes}</p>
                  <p className="text-sm text-slate-400">Likes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">{metrics.x.comments}</p>
                  <p className="text-sm text-slate-400">Comments</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">{metrics.x.engagement}</p>
                  <p className="text-sm text-slate-400">Eng. %</p>
                </div>
              </div>
            </div>

          {/* Clawstr Metrics */}
          <div className="bg-orange-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <span className="text-xl">🦞</span>
                </div>
                <div>
                  <p className="text-2xl font-bold">{metrics.clawstr.posts}</p>
                  <p className="text-sm text-slate-400">Posts</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-bold text-orange-400">{metrics.clawstr.likes}</p>
                  <p className="text-sm text-slate-400">Likes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">{metrics.clawstr.comments}</p>
                  <p className="text-sm text-slate-400">Comments</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-300">{metrics.clawstr.engagement}</p>
                  <p className="text-sm text-slate-400">Eng. %</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts & Comparisons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Engagement Rate Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Engagement Rate</h2>
            <div className="h-64">
              <BarChart 
                data={[
                  { name: 'X', value: metrics.x.engagement * 100 },
                  { name: 'Clawstr', value: metrics.clawstr.engagement * 100 },
                  { name: 'Moltbook', value: metrics.moltbook.engagement * 100 },
                ]}
                category="engagement"
                layout="horizontal"
                className="text-slate-100"
              />
            </div>
          </div>

          {/* Agent Comparison */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">Agent Benchmarks</h2>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h3 className="font-bold text-yellow-400 mb-2">🥇 Osobot (Gold Standard)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Posts</p>
                    <p className="text-2xl font-bold">{agentComparisons[0].posts}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Replies</p>
                    <p className="text-2xl font-bold">{agentComparisons[0].replies}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Avg Engagement</p>
                    <p className="text-2xl font-bold">{(agentComparisons[0].avgEngagement * 100).toFixed(2)}%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-2">🟢 SmartGator</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Posts</p>
                    <p className="text-2xl font-bold">{agentComparisons[1].posts}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Replies</p>
                    <p className="text-2xl font-bold">{agentComparisons[1].replies}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Avg Engagement</p>
                    <p className="text-2xl font-bold">{(agentComparisons[1].avgEngagement * 100).toFixed(2)}%</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-2">🔮 Sam</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Posts</p>
                    <p className="text-2xl font-bold">{metrics.x.posts + metrics.clawstr.posts + metrics.moltbook.posts}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Replies</p>
                    <p className="text-2xl font-bold">{metrics.x.comments + metrics.clawstr.comments + metrics.moltbook.comments}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Avg Engagement</p>
                    <p className="text-2xl font-bold">--</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-xs">Tracking Sam\'s growth across platforms • Benchmarked against Osobot</p>
        </div>
      </div>
    </div>
  );
}
