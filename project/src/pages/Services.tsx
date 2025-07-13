import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  duration: string;
  price: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "General Dentistry",
      shortDescription: "Comprehensive oral health care including routine checkups, cleanings, and preventive treatments.",
      fullDescription: "Our general dentistry services form the foundation of good oral health. We provide comprehensive examinations, professional cleanings, fluoride treatments, and early detection of dental problems. Our preventive approach helps you maintain healthy teeth and gums for life.",
      image: "https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Routine Checkups", "Professional Cleanings", "Fluoride Treatments", "Oral Cancer Screening", "X-rays", "Preventive Care"],
      duration: "60-90 minutes",
      price: "Starting from $150"
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      shortDescription: "Transform your smile with teeth whitening, veneers, bonding, and other aesthetic treatments.",
      fullDescription: "Our cosmetic dentistry services are designed to enhance the appearance of your smile. From professional teeth whitening to porcelain veneers, we use the latest techniques to give you the confident smile you've always wanted.",
      image: "https://images.pexels.com/photos/6812633/pexels-photo-6812633.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Smile Makeovers", "Tooth Contouring", "Gum Reshaping"],
      duration: "1-3 appointments",
      price: "Starting from $400"
    },
    {
      id: 3,
      title: "Orthodontics",
      shortDescription: "Straighten your teeth with traditional braces, clear aligners, and other orthodontic solutions.",
      fullDescription: "Our orthodontic treatments help align your teeth and improve your bite. We offer both traditional metal braces and modern clear aligner systems like Invisalign to suit your lifestyle and preferences.",
      image: "https://images.pexels.com/photos/6812639/pexels-photo-6812639.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Traditional Braces", "Clear Aligners (Invisalign)", "Retainers", "Bite Correction", "Adult Orthodontics", "Teen Orthodontics"],
      duration: "12-24 months",
      price: "Starting from $3,500"
    },
    {
      id: 4,
      title: "Dental Implants",
      shortDescription: "Replace missing teeth with natural-looking, permanent dental implants for a complete smile.",
      fullDescription: "Dental implants are the gold standard for replacing missing teeth. Our titanium implants fuse with your jawbone to provide a strong, permanent foundation for crowns, bridges, or dentures.",
      image: "https://images.pexels.com/photos/6812471/pexels-photo-6812471.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Single Tooth Implants", "Multiple Implants", "All-on-4 Treatment", "Implant-Supported Dentures", "Bone Grafting", "Sinus Lift"],
      duration: "3-6 months",
      price: "Starting from $2,500"
    },
    {
      id: 5,
      title: "Emergency Dental Care",
      shortDescription: "Immediate relief for dental emergencies including severe pain, trauma, and urgent treatments.",
      fullDescription: "Dental emergencies can happen at any time. Our emergency services provide immediate relief for severe tooth pain, dental trauma, broken teeth, and other urgent dental situations. We prioritize emergency cases to get you out of pain quickly.",
      image: "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Severe Tooth Pain", "Broken/Chipped Teeth", "Knocked-Out Teeth", "Lost Fillings/Crowns", "Dental Trauma", "Abscess Treatment"],
      duration: "30-60 minutes",
      price: "Emergency consultation: $100"
    },
    {
      id: 6,
      title: "Periodontal Therapy",
      shortDescription: "Specialized treatment for gum disease, including deep cleanings and advanced periodontal care.",
      fullDescription: "Our periodontal therapy addresses gum disease at all stages. From non-surgical treatments like scaling and root planing to advanced surgical procedures, we help restore your gum health and prevent tooth loss.",
      image: "https://images.pexels.com/photos/6812465/pexels-photo-6812465.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Scaling & Root Planing", "Gum Disease Treatment", "Laser Therapy", "Pocket Reduction Surgery", "Gum Grafts", "Maintenance Therapy"],
      duration: "1-4 appointments",
      price: "Starting from $300"
    },
    {
      id: 7,
      title: "Oral Surgery",
      shortDescription: "Surgical procedures including wisdom teeth removal, extractions, and corrective jaw surgery.",
      fullDescription: "Our oral surgery services include tooth extractions, wisdom teeth removal, and corrective procedures. We use advanced techniques and sedation options to ensure your comfort during surgical treatments.",
      image: "https://images.pexels.com/photos/6812486/pexels-photo-6812486.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Wisdom Teeth Removal", "Tooth Extractions", "Bone Grafting", "Corrective Jaw Surgery", "Sedation Options", "Pre-surgical Consultation"],
      duration: "30-120 minutes",
      price: "Starting from $200"
    },
    {
      id: 8,
      title: "Pediatric Dentistry",
      shortDescription: "Gentle, child-friendly dental care designed specifically for infants, children, and teens.",
      fullDescription: "Our pediatric dental services create positive dental experiences for children. We provide gentle care in a fun, welcoming environment to help children develop healthy oral hygiene habits that last a lifetime.",
      image: "https://images.pexels.com/photos/6812632/pexels-photo-6812632.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["First Dental Visit", "Children's Cleanings", "Fluoride Treatments", "Dental Sealants", "Space Maintainers", "Behavior Management"],
      duration: "30-45 minutes",
      price: "Starting from $120"
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Dental Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care services designed to meet all your oral health needs. 
            From routine cleanings to advanced treatments, we're here to help you achieve 
            and maintain optimal oral health.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openModal(service)}
              >
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
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium">{service.price}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="aspect-w-16 aspect-h-8">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedService.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-1">Duration</h4>
                    <p className="text-blue-700">{selectedService.duration}</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-1">Starting Price</h4>
                    <p className="text-emerald-700">{selectedService.price}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-1">Features</h4>
                    <p className="text-purple-700">{selectedService.features.length} included</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedService.fullDescription}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What's Included:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex-1 sm:flex-none">
                    Book Appointment
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-colors flex-1 sm:flex-none">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;