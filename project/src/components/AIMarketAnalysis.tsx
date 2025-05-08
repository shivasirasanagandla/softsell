import { useState, useEffect } from 'react';
import { Brain, TrendingUp, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AIMarketAnalysis = () => {
  const [marketInsights, setMarketInsights] = useState<string[]>([]);
  const [marketTrends, setMarketTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI-generated market insights
    const insights = [
      "Enterprise software licenses showing 15% value increase in Q1 2024",
      "Cloud-based licenses maintain higher resale value compared to perpetual licenses",
      "Increasing demand for Adobe Creative Cloud licenses in SMB sector",
      "Microsoft 365 E3 licenses experiencing peak resale values"
    ];
    setMarketInsights(insights);

    // Generate simulated market trend data
    const trendData = Array.from({ length: 12 }, (_, i) => ({
      month: `2023/${String(i + 1).padStart(2, '0')}`,
      enterprise: Math.random() * 100 + 200,
      smb: Math.random() * 50 + 150,
      individual: Math.random() * 30 + 100,
    }));
    setMarketTrends(trendData);
    setLoading(false);
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI Market Intelligence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-time market analysis and predictions powered by our advanced AI algorithms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-500" />
              Market Insights
            </h3>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin h-8 w-8 border-3 border-purple-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {marketInsights.map((insight, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800"
                  >
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">{insight}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              License Value Trends by Segment
            </h3>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="enterprise" 
                    stroke="#8B5CF6" 
                    strokeWidth={2}
                    name="Enterprise"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="smb" 
                    stroke="#EC4899" 
                    strokeWidth={2}
                    name="SMB"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="individual" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    name="Individual"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketAnalysis;