import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "SoftSell helped us recover over $50,000 from unused enterprise licenses after our company downsized. The process was incredibly smooth and professional.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "NexTech Solutions",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      content: "I was skeptical at first, but SoftSell's transparent approach won me over. They valued our Adobe licenses fairly and payment was faster than expected.",
      author: "Michael Chen",
      role: "IT Director",
      company: "CreativeLabs Inc.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      content: "After our tech stack migration, we had numerous unused licenses. SoftSell provided an excellent solution that turned these assets into immediate capital.",
      author: "Emma Rodriguez",
      role: "Financial Controller",
      company: "GlobalTech Enterprises",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from businesses that have successfully recovered value from their unused software licenses.
          </p>
        </div>
        
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute top-1/4 left-4 w-24 h-24 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonial.rating 
                          ? 'text-yellow-500 fill-yellow-500' 
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-100 dark:border-blue-900"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;