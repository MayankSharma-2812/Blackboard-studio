import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Palette,
  RefreshCcw,
  Database,
  Server,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Palette,
      title: 'School Website Design',
      description:
        'Custom-designed websites tailored to your school\'s unique identity and values. We create modern, professional designs that reflect your institution\'s excellence and build trust with parents.',
      features: [
        'Custom design matching school branding',
        'Mobile-responsive layouts',
        'Modern UI/UX best practices',
        'Parent-friendly navigation',
        'Admission-focused structure',
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: RefreshCcw,
      title: 'Website Redesign',
      description:
        'Transform your outdated website into a modern, engaging platform. We preserve your existing content while upgrading design, speed, and functionality to meet current standards.',
      features: [
        'Complete visual transformation',
        'Content migration and optimization',
        'Performance improvements',
        'SEO-friendly structure',
        'Zero downtime transition',
      ],
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Database,
      title: 'School CMS Integration',
      description:
        'Easy-to-use content management system that empowers your staff to update content, manage events, post announcements, and upload photos without any technical knowledge.',
      features: [
        'Intuitive admin dashboard',
        'User role management',
        'Content scheduling',
        'Media library management',
        'Staff training included',
      ],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Server,
      title: 'Hosting & Maintenance',
      description:
        'Reliable, secure hosting with regular backups and updates. We handle all technical aspects so you can focus on running your school while we keep your website running smoothly.',
      features: [
        'Fast, secure hosting',
        'Daily automated backups',
        'Security updates and patches',
        ' 99.9% uptime guarantee',
        '24/7 technical support',
      ],
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: TrendingUp,
      title: 'Performance & SEO Optimization',
      description:
        'Improve your website\'s visibility in search engines and ensure lightning-fast loading times. Better rankings mean more parents discover your school online.',
      features: [
        'Google search optimization',
        'Local SEO for schools',
        'Page speed optimization',
        'Mobile performance tuning',
        'Analytics and reporting',
      ],
      color: 'from-pink-500 to-pink-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
              Comprehensive Solutions
            </div>
            <h1 className="heading-xl text-slate-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Complete website solutions designed specifically for schools. From design to 
              maintenance, we handle everything so you can focus on education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-2xl mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="heading-md text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>

                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={`https://images.unsplash.com/photo-${
                            index % 3 === 0
                              ? '1524178264293-d5d9b13f8c73'
                              : index % 3 === 1
                              ? '1454165804606-c3d57bc86b40'
                              : '1517245386807-bb43f82c33c4'
                          }?w=800&h=600&fit=crop`}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`absolute -z-10 inset-0 bg-gradient-to-br ${service.color} blur-3xl opacity-20 scale-95`}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined, transparent process that delivers results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your school, goals, and requirements.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create mockups and get your feedback before development.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build your website with clean code and best practices.',
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploy your site and provide training and ongoing support.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary-100 mb-4">{item.step}</div>
                <h3 className="font-display font-semibold text-xl text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
                )}
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Let's discuss your school's website needs and create a solution that works for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-slate-100 transition-all duration-200 shadow-xl hover:scale-105"
              >
                Request Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/50 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                View All Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
