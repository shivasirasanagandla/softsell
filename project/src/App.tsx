import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import AIValuationEstimator from './components/AIValuationEstimator';
import AIMarketAnalysis from './components/AIMarketAnalysis';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import './utils/animations';

function App() {
  useEffect(() => {
    // Update page title and meta tags for SEO
    document.title = 'SoftSell - Transform Unused Software Licenses into Cash';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SoftSell helps businesses recover value from unused software licenses with a secure, fast, and hassle-free process.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'SoftSell helps businesses recover value from unused software licenses with a secure, fast, and hassle-free process.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <AIValuationEstimator />
        <AIMarketAnalysis />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;