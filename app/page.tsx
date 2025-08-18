import ServicesCard from '../components/ServicesCard';

export default function Home() {
  const services = [
    {
      title: "Tax Preparation",
      description: "Professional tax filing services to maximize your returns",
      icon: "📊"
    },
    {
      title: "Bookkeeping",
      description: "Accurate financial record keeping for your business",
      icon: "📚"
    },
    {
      title: "Payroll Services",
      description: "Efficient payroll management solutions",
      icon: "💼"
    },
    {
      title: "Financial Consulting",
      description: "Strategic advice for business growth",
      icon: "💡"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Affordable Accounting Solutions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Professional accounting services tailored to your business needs
          </p>
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="bg-blue-700 rounded-xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-6">
                  Have questions? Our team is ready to help you with all your accounting needs.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="mr-2">📞</span> (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">✉️</span> contact@affordableaccounting.com
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">🏢</span> 123 Business St, Financial District
                  </p>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-3 rounded bg-blue-800 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 rounded bg-blue-800 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full p-3 rounded bg-blue-800 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-white text-blue-700 font-bold py-3 px-4 rounded hover:bg-blue-50 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}