import React from 'react';
import { Award, Users, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist & Practice Owner",
      experience: "15+ years",
      specialties: ["General Dentistry", "Cosmetic Procedures", "Implantology"],
      image: "https://images.pexels.com/photos/6812486/pexels-photo-6812486.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Johnson graduated summa cum laude from Harvard School of Dental Medicine and has been providing exceptional dental care for over 15 years."
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      experience: "12+ years",
      specialties: ["Orthodontics", "Invisalign", "Pediatric Dentistry"],
      image: "https://images.pexels.com/photos/6812465/pexels-photo-6812465.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Chen specializes in orthodontics and has helped thousands of patients achieve their perfect smile through innovative treatments."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Oral Surgeon",
      experience: "10+ years",
      specialties: ["Oral Surgery", "Dental Implants", "Wisdom Teeth"],
      image: "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Rodriguez brings extensive surgical expertise and gentle care to complex dental procedures and implant placements."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to meet your unique needs and comfort level."
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "We maintain the highest standards of care using evidence-based dentistry."
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Comprehensive dental care for patients of all ages in a welcoming environment."
    },
    {
      icon: Target,
      title: "Preventive Focus",
      description: "We emphasize preventive care to help you maintain optimal oral health."
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About DentalCare
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 15 years, DentalCare has been committed to providing exceptional 
                dental services to our community. Our practice combines cutting-edge 
                technology with compassionate care to deliver the best possible outcomes 
                for our patients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that everyone deserves a healthy, beautiful smile, and we're 
                dedicated to making that vision a reality through personalized treatment 
                plans and ongoing support.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6812632/pexels-photo-6812632.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our modern dental office"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're guided by core principles that ensure every patient receives 
              the highest quality care in a comfortable, welcoming environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600">
              Our skilled professionals are dedicated to providing you with the best dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Experience:</span> {member.experience}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Philosophy */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Our Practice Philosophy
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            "We believe that dental care should be comfortable, comprehensive, and tailored 
            to each individual's needs. Our approach combines the latest technology with 
            time-tested techniques to ensure optimal results. We take the time to listen 
            to your concerns and work with you to develop treatment plans that fit your 
            lifestyle and budget."
          </p>
          <div className="mt-8">
            <p className="text-blue-200 font-medium">- Dr. Sarah Johnson, Practice Owner</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;