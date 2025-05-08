import { Upload, DollarSign, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-10 h-10 text-blue-500" />,
      title: 'Upload License',
      description: 'Share your unused software license details through our secure platform.'
    },
    {
      icon: <DollarSign className="w-10 h-10 text-blue-500" />,
      title: 'Get Valuation',
      description: 'Receive a competitive valuation within 24 hours based on current market rates.'
    },
    {
      icon: <CreditCard className="w-10 h-10 text-blue-500" />,
      title: 'Get Paid',
      description: 'Accept our offer and get paid quickly via your preferred payment method.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It <span className="text-blue-600 dark:text-blue-400">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Turning your unused software licenses into cash is simple with our three-step process.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                {index + 1}
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 dark:bg-blue-700">
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-blue-500 dark:bg-blue-400 transform rotate-45"></div>
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full transform transition-transform group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold rounded-lg shadow-md"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;