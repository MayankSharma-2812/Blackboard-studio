import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Building,
  User,
  MessageSquare,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    schoolName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      Name: formData.name,
      "School Name": formData.schoolName,
      Email: formData.email,
      Phone: formData.phone,
      Message: formData.message,
      Timestamp: new Date().toLocaleString(),
    };

    try {
      await fetch(import.meta.env.VITE_SHEET_BEST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    console.log(import.meta.env.VITE_SHEET_BEST_URL)

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          schoolName: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@blackboardstudio.in",
      link: "mailto:hello@blackboardstudio.in",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Jaipur, Rajasthan, India",
      link: null,
    },
  ];

  const benefits = [
    "Free consultation and demo",
    "Custom quote based on your needs",
    "Quick response within 24 hours",
    "No obligation to purchase",
  ];

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
              Get In Touch
            </div>
            <h1 className="heading-xl text-slate-900 mb-6">
              Request a Free{" "}
              <span className="gradient-text">School Website Demo</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to give your school a modern, professional website? Fill out
              the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-sm text-slate-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">
                            {item.title}
                          </div>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-slate-600 hover:text-primary-600 transition-colors"
                            >
                              {item.detail}
                            </a>
                          ) : (
                            <div className="text-slate-600">{item.detail}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-4">
                  What You'll Get
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200">
                <p className="text-primary-900 font-medium text-sm leading-relaxed">
                  <strong>Office Hours:</strong>
                  <br />
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200">
                <h2 className="heading-sm text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form and we'll respond within 24 hours
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-2xl text-green-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      Your message has been sent successfully. We'll get back to
                      you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field pl-12"
                          placeholder="Principal John Doe"
                        />
                      </div>
                    </div>

                    {/* School Name */}
                    <div>
                      <label
                        htmlFor="schoolName"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        School Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="schoolName"
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleChange}
                          required
                          className="input-field pl-12"
                          placeholder="ABC International School"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field pl-12"
                          placeholder="principal@school.edu"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input-field pl-12"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="textarea-field pl-12"
                          placeholder="Tell us about your school and what you're looking for..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary w-full text-lg"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </button>

                    <p className="text-sm text-slate-500 text-center">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md text-slate-900 mb-8 text-center">
              Find Us on <span className="gradient-text">the Map</span>
            </h2>
            <div className="bg-slate-200 rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">
                  Jaipur, Rajasthan, India
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Interactive map integration available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-md text-slate-900 mb-12 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to build a school website?",
                  answer:
                    "Typically 2-4 weeks from design approval to launch, depending on the complexity and your content readiness.",
                },
                {
                  question:
                    "Do you provide training on how to update the website?",
                  answer:
                    "Yes! We provide comprehensive training to your staff and ongoing support to ensure you can easily manage your website.",
                },
                {
                  question: "What if we already have a domain name?",
                  answer:
                    "No problem! We can work with your existing domain or help you register a new one if needed.",
                },
                {
                  question: "Can you migrate content from our old website?",
                  answer:
                    "Absolutely. We'll carefully migrate all your existing content, images, and documents to your new website.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-primary-300 transition-colors"
                >
                  <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
