import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Heart, Users, ArrowRight, Volleyball, Building2, Menu, X} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundImage from '../src/img/volleyball-4k.png';
import Logo from '../src/img/volleyball-logo.png';
import CC from '../src/img/cc.png';
import Classixhonda from '../src/img/ch.png';
import Harmoney from '../src/img/harmoneyiq.png';
import Harmony from '../src/img/harmony.png';
import Patel from '../src/img/patel.png';
import Sleep from '../src/img/sleeptown.png';
import F2 from '../src/img/f2-logo.png';
import hayosha from '../src/img/hayosha.png';
import NN from '../src/img/nn-logo-dark.png';
import bombay from '../src/img/bombayspices.png';
import dalwadi from '../src/img/dalwadi.png';
import greenhome from '../src/img/greenhome.png';
import hamiltondabba from '../src/img/hamiltondabba.png';
import jackfilled from '../src/img/jackfilled.png';
import remax from '../src/img/remax.png';
import planethealth from '../src/img/planetearth.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sponsors = [
    { name: "Harmony Dental Care", tier: "Platinum", Logo: Harmony },
    { name: "Coffee Culture", tier: "Platinum" , Logo: CC},
    { name: "Patel Automotive Services", tier: "Platinum" , Logo: Patel},
    { name: "Nikhil & Neha Real Estate", tier: "Platinum" , Logo: NN},
    { name: "Classic Honda", tier: "Gold" , Logo: Classixhonda},
    { name: "Harmoney IQ", tier: "Gold" , Logo: Harmoney},
    { name: "Hayosha", tier: "Gold" , Logo: hayosha},
    { name: "Sleep Town Mattress", tier: "Silver" , Logo: Sleep},
    { name: "F2 Energy", tier: "Silver" , Logo: F2},
    { name: "Bombay Spices", tier: "Bronze" , Logo: bombay},
    { name: "Green Home Consulting", tier: "Bronze" , Logo: greenhome},
    { name: "Dalwadi Insurance Inc.", tier: "Bronze" , Logo: dalwadi},
    { name: "Yashbhai Gandhi Realtor", tier: "Bronze" , Logo: remax},
    { name: "Health Planet Physiotherapy", tier: "Bronze" , Logo: planethealth},
    { name: "Hamilton Dabbawala", tier: "Trophies" , Logo: hamiltondabba},
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Event Details", href: "#event-details" },
    { name: "Impact", href: "#impact" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Our Vision", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              {/* <Volleyball className={`w-8 h-8 ${isScrolled ? 'text-orange-500' : 'text-white'}`} /> */}
              <img src={Logo} alt="Logo" className="w-16 h-16" />
              <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Hariprabodham Volleyball
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`font-medium hover:text-orange-500 transition-colors ${
                    isScrolled ? 'text-gray-600' : 'text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us!
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  className="mx-4 mt-4 w-[calc(100%-2rem)] bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us!
                </motion.button>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.div 
        className="relative h-[600px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div 
              className="max-w-2xl text-white"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">Youth Development Through Volleyball</h1>
              <h2 className="text-xl mb-8">Committing to the physical, mental, and emotional well-being of youth</h2>
              <motion.button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Event Details */}
      <div className="py-20 bg-gray-50" id="event-details">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Event Date</h3>
              <p className="text-gray-600">March 1 & March 2 - 2025</p>
              <p className="text-gray-600">8:00 AM - 8:00 PM</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Strathroy Collingate Institute</p>
              <p className="text-gray-600">361 Second St. Strathroy ON</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Participants</h3>
              <p className="text-gray-600">50 Teams</p>
              <p className="text-gray-600">All Skill Levels Welcome</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20" id="impact">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Through Volleyball, we not only promote physical fitness but also inspire teamwork, leadership, and a sense of belonging. These values extend beyond the court, encouraging personal growth and a stronger connection to the community.</p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold text-orange-500 mb-2">12+</div>
              <p className="text-gray-600">Cities came togheter</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold text-orange-500 mb-2">1,000+</div>
              <p className="text-gray-600">Youth Athletes Supported</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold text-orange-500 mb-2">24</div>
              <p className="text-gray-600">Community Programs</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

       {/* Sponsors Section */}
    <div className="py-20 bg-gray-50" id="sponsors">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thanks to our generous sponsors who make this event possible.
          </p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <img 
                src={sponsor.Logo} 
                alt={sponsor.name} 
                className="w-24 h-24 object-contain mb-4"
              />
              <div className={`text-sm font-semibold mb-2 ${
                sponsor.tier === 'Platinum' ? 'text-purple-600' :
                sponsor.tier === 'Gold' ? 'text-yellow-600' :
                sponsor.tier === 'Silver' ? 'text-gray-600' : 'text-orange-600'
              }`}>
                {sponsor.tier} Sponsor
              </div>
              <div className="text-xl font-bold text-center">{sponsor.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

      {/* CTA Section */}
      <div className="bg-orange-500 py-20" id="contact">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Volleyball className="w-16 h-16 text-white" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Vision
          </motion.h2>
          <motion.div 
            className="flex gap-4 text-white justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl max-w-2xl mx-auto">
We envision a future where sports like Volleyball serve as a powerful platform for bringing people together, building lifelong skills, and nurturing a spirit of service. Through these efforts, we aim to create an inclusive and thriving community for generations to come.</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-16 h-16" />
              <span className="font-bold text-xl">Hariprabodham Volleyball</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-orange-500" />
              <span>Making a difference through Volleyball</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
