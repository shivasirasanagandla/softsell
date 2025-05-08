import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQTRFRjUiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeIn">
              Unlock the Value of Your <span className="text-blue-300">Unused Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 animate-fadeIn animation-delay-200">
              Transform idle software licenses into cash. Fast, secure, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fadeIn animation-delay-400">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold rounded-lg shadow-lg"
              >
                Sell My Licenses
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-semibold rounded-lg transition-colors"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-500 rounded-xl blur-2xl opacity-20 transform -rotate-6"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-6 transform transition-transform hover:scale-105">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Current Valuations</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Adobe Creative Cloud', value: '$350 - $480' },
                      { name: 'Microsoft Office 365', value: '$130 - $210' },
                      { name: 'AutoCAD', value: '$450 - $800' },
                      { name: 'Enterprise Software', value: 'Custom Quotes' }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-300">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-lg">
                  <div className="font-semibold text-gray-800 dark:text-white mb-1">Average Payout Time</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">Just 3 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 120H1440V0C1440 0 1144 80 720 80C296 80 0 0 0 0V120Z" className="fill-white dark:fill-gray-900" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;