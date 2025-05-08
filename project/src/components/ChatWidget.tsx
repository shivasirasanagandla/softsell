import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

type Message = {
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const PREDEFINED_RESPONSES: { [key: string]: string } = {
  'how do i sell my license': 'To sell your license, simply fill out our contact form with your license details. Our team will provide a valuation within 24 hours.',
  'what licenses do you accept': 'We accept licenses from major software providers including Microsoft, Adobe, Autodesk, Oracle, SAP, and many others.',
  'how long does it take': 'Our typical process takes 3-5 business days from initial contact to payment.',
  'is it legal': 'Yes, our process is completely legal and compliant with software licensing regulations.',
  'how much is my license worth': 'The value depends on various factors. Use our AI Valuation Estimator above or contact us for a precise quote.',
  'payment methods': 'We offer secure payments via bank transfer, PayPal, or other preferred methods.',
  'contact support': 'You can reach our support team at shivasirasanagandla7900@gmail.com or call us at +91 9581545012.',
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([{
    text: "Hi! I'm SoftSell's AI assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date()
  }]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (input: string): string => {
    const normalizedInput = input.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(PREDEFINED_RESPONSES)) {
      if (normalizedInput.includes(key)) {
        return response;
      }
    }
    
    // Default response
    return "I'm not sure about that. For specific questions, please contact our support team at shivasirasanagandla7900@gmail.com or call +91 9581545012.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: message,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        text: findBestMatch(message),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 1000);

    setMessage('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 transition-all ${
      isMinimized ? 'h-14' : 'h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
          <span className="font-semibold text-gray-800 dark:text-white">AI Assistant</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatWidget;