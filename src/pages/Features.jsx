import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Megaphone,
  Calendar,
  Image,
  Smartphone,
  Shield,
  Edit3,
  Zap,
  Globe,
  Users,
  FileText,
  Lock,
  ArrowRight,
} from 'lucide-react';

function Features() {
  const mainFeatures = [
    {
      icon: LayoutDashboard,
      title: 'Admin Dashboard',
      description:
        'Intuitive control panel that makes managing your website simple. Update content, manage users, and monitor site performance from one centralized location.',
      benefits: [
        'User-friendly interface',
        'Role-based access control',
        'Real-time content preview',
        'Activity logs and analytics',
      ],
      color: 'from-blue-500 to-blue-700',
      image: 'photo-1460925895917-afdab827c52f',
    },
    {
      icon: Megaphone,
      title: 'Notice Board & Announcements',
      description:
        'Keep parents informed with instant announcements. Post urgent notices, holiday schedules, exam updates, and important information that reaches everyone immediately.',
      benefits: [
        'Instant publish to homepage',
        'Schedule announcements in advance',
        'Email/SMS notifications (optional)',
        'Archive for future reference',
      ],
      color: 'from-orange-500 to-orange-700',
      image: 'photo-1504868584819-f8e8b4b6d7e3',
    },
    {
      icon: Calendar,
      title: 'Events & Calendar',
      description:
        'Comprehensive event management system to showcase school activities, parent-teacher meetings, sports days, cultural programs, and academic schedules.',
      benefits: [
        'Interactive calendar view',
        'Event categories and filters',
        'RSVP and registration forms',
        'Automatic reminders',
      ],
      color: 'from-green-500 to-green-700',
      image: 'photo-1506784983877-45594efa4cbe',
    },
    {
      icon: Image,
      title: 'Photo Gallery',
      description:
        'Beautiful, organized galleries to showcase your school\'s achievements, events, and daily activities. Share your school\'s story through stunning visuals.',
      benefits: [
        'Album organization',
        'High-resolution image support',
        'Lightbox viewing experience',
        'Automatic image optimization',
      ],
      color: 'from-purple-500 to-purple-700',
      image: 'photo-1513151233558-d860c5398176',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive Design',
      description:
        'Perfect display on all devices. Whether parents access from phone, tablet, or desktop, your website looks professional and works flawlessly.',
      benefits: [
        'Mobile-first approach',
        'Touch-optimized interface',
        'Fast loading on mobile networks',
        'Adaptive layouts',
      ],
      color: 'from-pink-500 to-pink-700',
      image: 'photo-1512941937669-90a1b58e7e9c',
    },
    {
      icon: Shield,
      title: 'Secure Hosting',
      description:
        'Enterprise-grade security to protect your school\'s data. SSL certificates, regular backups, and 24/7 monitoring ensure your website stays safe and online.',
      benefits: [
        'SSL/HTTPS encryption',
        'Daily automated backups',
        'DDoS protection',
        '99.9% uptime guarantee',
      ],
      color: 'from-red-500 to-red-700',
      image: 'photo-1563986768494-4dee2763ff3f',
    },
    {
      icon: Edit3,
      title: 'Easy Content Updates',
      description:
        'No technical knowledge required. Update text, images, and content with a simple point-and-click interface. Make changes instantly without developer help.',
      benefits: [
        'Visual content editor',
        'Drag-and-drop functionality',
        'No coding required',
        'Instant changes go live',
      ],
      color: 'from-teal-500 to-teal-700',
      image: 'photo-1455849318743-b2233052fcff',
    },
  ];

  const additionalFeatures = [
    { icon: Globe, title: 'Multi-language Support', description: 'English + Hindi/Regional languages' },
    { icon: Zap, 'title': 'Lightning Fast', description: 'Optimized for speed and performance' },
    { icon: Users, title: 'Student/Staff Portals', description: 'Dedicated login areas' },
    { icon: FileText, title: 'Document Management', description: 'Upload forms, circulars, PDFs' },
    { icon: Lock, title: 'GDPR Compliant', description: 'Privacy-focused data handling' },
    { icon: Calendar, title: 'Academic Calendar', description: 'Year-round schedule management' },
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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-slate-50 via-white to-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Powerful Features
            </div>
            <h1 className="heading-xl text-slate-900 mb-6">
              Everything Your School <span className="gradient-text">Needs</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Modern features built specifically for educational institutions. 
              Easy to use, powerful enough to grow with your school.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-2xl mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="heading-md text-slate-900 mb-4">{feature.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="relative group">
                      <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                        <img
                          src={`https://images.unsplash.com/${feature.image}?w=800&h=600&fit=crop`}
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div
                        className={`absolute -z-10 inset-0 bg-gradient-to-br ${feature.color} blur-3xl opacity-20 scale-95 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Features Grid */}
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
              And <span className="gradient-text">Much More</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Additional features that make your school website complete
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
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
              Old vs. <span className="gradient-text">New</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the difference a modern website makes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Old Website */}
            <div className="bg-slate-100 p-8 rounded-2xl border-2 border-slate-300">
              <h3 className="font-display font-semibold text-xl text-slate-900 mb-6 text-center">
                Outdated School Websites
              </h3>
              <ul className="space-y-3">
                {[
                  'Slow loading times',
                  'Not mobile-friendly',
                  'Difficult to update',
                  'Outdated design',
                  'Poor parent experience',
                  'Security vulnerabilities',
                  'No modern features',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-slate-600">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* New Website */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border-2 border-primary-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-green-500 text-white text-sm font-semibold rounded-bl-lg">
                Recommended
              </div>
              <h3 className="font-display font-semibold text-xl text-slate-900 mb-6 text-center">
                Blackboard Studio Websites
              </h3>
              <ul className="space-y-3">
                {[
                  'Lightning-fast performance',
                  'Perfect on all devices',
                  'Easy content management',
                  'Modern, professional design',
                  'Excellent user experience',
                  'Enterprise-grade security',
                  'All features included',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-slate-700 font-medium">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-lg mb-6">
              Experience These Features Yourself
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Request a free demo and see how our features can transform your school's online presence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-slate-100 transition-all duration-200 shadow-xl hover:scale-105"
              >
                Request Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/50 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Features;
