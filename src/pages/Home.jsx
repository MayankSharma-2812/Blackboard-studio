import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  RefreshCw,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
} from 'lucide-react';

function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Fast',
      description: 'Lightning-fast loading times for better user experience and engagement.',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security to protect your school data and information.',
    },
    {
      icon: RefreshCw,
      title: 'Easy to Update',
      description: 'Simple content management system that anyone can use without technical knowledge.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Perfectly optimized for all devices - desktop, tablet, and mobile.',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Parent Engagement',
      description:
        'Improve communication with parents through announcements, events, and real-time updates.',
    },
    {
      icon: TrendingUp,
      title: 'Enhanced Reputation',
      description:
        'A modern website builds trust and showcases your school\'s excellence to prospective families.',
    },
    {
      icon: Award,
      title: 'Competitive Edge',
      description:
        'Stand out from other schools with a professional, contemporary digital presence.',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Principal, St. Xavier\'s International School',
      location: 'Delhi',
      content:
        'Blackboard Studio transformed our outdated website into a modern, professional platform. Parents can now easily access information, and we\'ve seen a 40% increase in inquiries.',
      rating: 5,
    },
    {
      name: 'Mrs. Priya Sharma',
      role: 'Administrator, Greenwood Public School',
      location: 'Mumbai',
      content:
        'The team understood our needs perfectly. The website is fast, easy to manage, and looks incredibly professional. Highly recommend for any school looking to upgrade their digital presence.',
      rating: 5,
    },
    {
      name: 'Mr. Amit Patel',
      role: 'Director, Cambridge Academy',
      location: 'Bangalore',
      content:
        'Outstanding service from start to finish. Our new website has improved parent satisfaction and made our administrative work much easier. Worth every penny!',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-slate-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Trusted by Schools Across India
              </div>
              <h1 className="heading-xl text-slate-900 mb-6">
                Modern Websites for{' '}
                <span className="gradient-text">Modern Schools</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Replace your outdated school website with a fast, secure, and professional platform
                that builds trust with parents and strengthens your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get a Free Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/features" className="btn-secondary">
                  View Features
                </Link>
              </div>
              <div className="mt-10 flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-slate-600">Schools Trust Us</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">99%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-slate-600">Support Available</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Modern School Website Design"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20 animate-float"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Blackboard Studio Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-slate-900 mb-4">
              Why Choose <span className="gradient-text">Blackboard Studio?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize exclusively in educational websites, understanding the unique needs
              of schools and delivering solutions that make a real difference.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="School Team Collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2 text-slate-900">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="heading-md mb-4">Built for Indian Schools</h3>
                <p className="text-primary-100 mb-6">
                  We understand CBSE, ICSE, and State Board requirements. Our designs reflect
                  the professionalism and trust that Indian parents expect from educational institutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-accent-300" />
                    <span>Bilingual support (English + Hindi/Regional)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-accent-300" />
                    <span>Indian payment gateway integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-accent-300" />
                    <span>Board-specific content structures</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-accent-300" />
                    <span>Mobile-first for Indian internet users</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Indian School"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-slate-900 mb-4">
              What School Leaders <span className="gradient-text">Say About Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trusted by principals and administrators across India
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-hover p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-6 border-t border-slate-200">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-lg mb-6">
              Ready to Transform Your School's Digital Presence?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Join 50+ schools across India that trust Blackboard Studio for their website needs.
              Get a free demo and see the difference a modern website can make.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Request Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Explore Features
              </Link>
            </div>
            <p className="text-slate-400 mt-8 text-sm">
              No credit card required • Free consultation • Quick turnaround
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
