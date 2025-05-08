import { useState, useEffect } from 'react';
import { Brain, TrendingUp, LineChart } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import * as tf from '@tensorflow/tfjs';

type LicenseData = {
  type: string;
  age: number;
  users: number;
  estimatedValue: number;
};

const AIValuationEstimator = () => {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [licenseType, setLicenseType] = useState('Microsoft Office 365');
  const [licenseAge, setLicenseAge] = useState(1);
  const [userCount, setUserCount] = useState(10);
  const [estimation, setEstimation] = useState<number | null>(null);
  const [historicalData, setHistoricalData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated historical price data
  useEffect(() => {
    const generateHistoricalData = () => {
      const data = [];
      const baseValue = 200;
      for (let i = 0; i < 12; i++) {
        data.push({
          month: `Month ${i + 1}`,
          value: baseValue + Math.random() * 50 - 25
        });
      }
      setHistoricalData(data);
    };
    generateHistoricalData();
  }, []);

  // Simulated AI model initialization
  useEffect(() => {
    const initModel = async () => {
      // Create a simple neural network
      const model = tf.sequential({
        layers: [
          tf.layers.dense({ inputShape: [3], units: 10, activation: 'relu' }),
          tf.layers.dense({ units: 1 })
        ]
      });

      model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
      setModel(model);
      setIsLoading(false);
    };

    initModel();
  }, []);

  const estimateValue = async () => {
    if (!model) return;

    // Normalize inputs
    const typeValue = licenseType === 'Microsoft Office 365' ? 1 : 0.8;
    const input = tf.tensor2d([[typeValue, licenseAge / 5, userCount / 100]]);
    
    // Base price calculation
    const basePrice = userCount * (licenseType === 'Microsoft Office 365' ? 15 : 20);
    const ageFactor = Math.max(0.5, 1 - licenseAge * 0.1);
    
    // Add some randomness to simulate AI prediction
    const randomFactor = 0.9 + Math.random() * 0.2;
    const estimatedValue = basePrice * ageFactor * randomFactor;
    
    setEstimation(Math.round(estimatedValue));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered Value Estimator
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our advanced AI model analyzes market data and license characteristics to provide accurate valuations in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              License Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  License Type
                </label>
                <select
                  value={licenseType}
                  onChange={(e) => setLicenseType(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option>Microsoft Office 365</option>
                  <option>Adobe Creative Cloud</option>
                  <option>AutoCAD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  License Age (years)
                </label>
                <input
                  type="number"
                  value={licenseAge}
                  onChange={(e) => setLicenseAge(Number(e.target.value))}
                  min="0"
                  max="5"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Users
                </label>
                <input
                  type="number"
                  value={userCount}
                  onChange={(e) => setUserCount(Number(e.target.value))}
                  min="1"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={estimateValue}
                disabled={isLoading}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Calculate Estimate
                  </>
                )}
              </button>
            </div>

            {estimation !== null && (
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-100 dark:border-green-800">
                <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
                  Estimated Value
                </div>
                <div className="text-3xl font-bold text-green-700 dark:text-green-300">
                  ${estimation.toLocaleString()}
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Based on current market conditions and license details
                </div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <LineChart className="w-5 h-5 mr-2 text-blue-500" />
              Historical Value Trends
            </h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={historicalData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIValuationEstimator;