import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Clock } from 'lucide-react';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise and comfortable treatments"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced dentists and hygienists committed to your oral health"
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Award-winning dental practice with 15+ years of excellence"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Convenient scheduling options to fit your busy lifestyle"
    }
  ];

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and checkups",
      image: "https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and aesthetic treatments",
      image: "https://images.pexels.com/photos/6812633/pexels-photo-6812633.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or clear aligners",
      image: "https://images.pexels.com/photos/6812639/pexels-photo-6812639.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Smile is Our
                <span className="text-blue-600"> Priority</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience exceptional dental care with our team of skilled professionals. 
                We combine advanced technology with personalized attention to give you the 
                healthy, beautiful smile you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Book Your Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5750693/pexels-photo-5750693.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern dental office with professional dentist"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose DentalCare?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality dental care in a comfortable, 
              modern environment with the latest technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Featured Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive dental care for the whole family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your consultation today and take the first step towards optimal oral health.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center"
          >
            Book Appointment Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;