import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

function About() {
  const values = [
    {
      icon: Heart,
      title: 'Education First',
      description:
        'We\'re passionate about education and understand the unique challenges schools face in the digital age.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description:
        'Every website we build meets the highest standards of design, performance, and security.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description:
        'We work closely with schools as long-term partners, not just vendors, ensuring ongoing success.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Schools Trust Us' },
    { number: '3 Years', label: 'Industry Experience' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const whySchools = [
    'Schools need specialized solutions, not generic templates',
    'Educational institutions require specific features like notice boards, event calendars, and admission portals',
    'Parents expect modern, trustworthy digital experiences from schools',
    'School websites must balance professionalism with accessibility',
    'Educational content requires careful organization and presentation',
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
              Our Story
            </div>
            <h1 className="heading-xl text-slate-900 mb-6">
              About <span className="gradient-text">Blackboard Studio</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're on a mission to modernize school websites across India, one institution at a time.
              Bringing professional web design exclusively to the education sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl mb-6 shadow-lg">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="heading-md text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To replace every outdated school website in India with a modern, fast, and secure
                digital platform that helps educational institutions build trust with parents and
                enhance their online presence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe every school deserves a website that reflects the quality of education
                they provide. Our specialized focus on schools allows us to deliver solutions that
                truly understand and meet educational needs.
              </p>
              <div className="mt-8 p-6 bg-primary-50 rounded-xl border-2 border-primary-200">
                <p className="text-primary-900 font-medium">
                  "A school's website is often the first impression for prospective parents.
                  It should inspire confidence, not confusion."
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 text-white rounded-2xl mb-6 shadow-lg">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="heading-md text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To become India's most trusted partner for school website development, setting the
                standard for educational web design and empowering schools with world-class digital
                infrastructure.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We envision a future where every school in India has a professional, accessible,
                and modern website that serves as a powerful communication tool between the
                institution, parents, and the community.
              </p>
              <div className="space-y-3">
                {[
                  'Set new standards for school web design',
                  'Make professional websites affordable for all schools',
                  'Expand across India and beyond',
                  'Continuously innovate with new features',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-accent-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Only Schools */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="School Children Learning"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-slate-900 mb-6">
                Why We Focus <span className="gradient-text">Only on Schools</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Specialization matters. By focusing exclusively on educational institutions,
                we've developed deep expertise in what schools need, what parents expect,
                and how to create websites that truly serve the education sector.
              </p>
              <ul className="space-y-4">
                {whySchools.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-primary-200"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A dedicated team of designers, developers, and education technology specialists
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We're a young, passionate startup based in India with a singular focus: making
                schools look professional online. Our team combines expertise in web design,
                development, and education technology to deliver solutions that schools actually need.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every member of our team is committed to helping schools improve their digital
                presence and build stronger connections with their parent community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-lg text-slate-900 mb-6">
              Join Us in Transforming School Websites
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Let's work together to give your school the modern, professional website it deserves.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/features" className="btn-secondary">
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
