import { Shield, Clock, DollarSign, Check } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Secure & Compliant',
      description: 'Our process follows all legal requirements and protects your data with bank-level security.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Fast Turnaround',
      description: 'Get valuations within 24 hours and payment typically within 3 business days.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: 'Maximum Value',
      description: 'Our market expertise ensures you get the highest possible value for your licenses.'
    },
    {
      icon: <Check className="w-8 h-8 text-blue-500" />,
      title: 'Hassle-Free Process',
      description: 'We handle all the complex transfer details, making the process effortless for you.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why <span className="text-blue-600 dark:text-blue-400">Choose Us</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                SoftSell has revolutionized how businesses recoup value from unused software investments. Our platform offers:
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">We Support Licenses From:</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  'Adobe', 'Microsoft', 'Autodesk', 'Oracle', 
                  'SAP', 'Salesforce', 'IBM', 'VMware', 'Citrix'
                ].map((vendor, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">{vendor}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "We accommodate many other vendors as well. Contact us for specialized requirements."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;