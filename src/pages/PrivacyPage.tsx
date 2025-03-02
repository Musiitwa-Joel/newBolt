import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface PrivacyPageProps {
  theme: string;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ theme }) => {
  const lastUpdated = "October 15, 2023";

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-b from-black via-black/95 to-black"
                : "bg-gradient-to-b from-white via-white/95 to-white"
            }`}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Last updated: {lastUpdated}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Privacy Principles */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } backdrop-blur-xl rounded-[2rem] border p-8 md:p-12 overflow-hidden`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <span
                    className={`text-sm font-medium tracking-widest ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } uppercase`}
                  >
                    Our Privacy Principles
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    We take your privacy seriously
                  </h3>

                  <div
                    className={`space-y-6 ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    <p>
                      At Tredumo, we believe that privacy is a fundamental
                      right. We are committed to being transparent about our
                      data practices and providing you with control over your
                      information.
                    </p>
                    <p>
                      Our privacy policy explains how we collect, use, and
                      protect your personal information when you use our
                      services. We've designed it to be clear and
                      straightforward, avoiding complex legal jargon wherever
                      possible.
                    </p>
                    <p>
                      If you have any questions about our privacy practices,
                      please don't hesitate to contact us at
                      privacy@tredumo.com.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: (
                        <Shield
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Data Protection",
                      description:
                        "We implement robust security measures to protect your data from unauthorized access.",
                    },
                    {
                      icon: (
                        <Lock
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Encryption",
                      description:
                        "All data is encrypted in transit and at rest using industry-standard protocols.",
                    },
                    {
                      icon: (
                        <Eye
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Transparency",
                      description:
                        "We're clear about what data we collect and how we use it.",
                    },
                    {
                      icon: (
                        <FileText
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Compliance",
                      description:
                        "We adhere to global privacy regulations including GDPR, CCPA, and FERPA.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl ${
                        theme === "dark"
                          ? "bg-white/5 border-white/5"
                          : "bg-black/5 border-black/5"
                      } backdrop-blur-xl border`}
                    >
                      <div className="mb-4">{item.icon}</div>
                      <h4
                        className={`text-lg font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-2`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        } text-sm`}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`prose ${
              theme === "dark" ? "prose-invert" : ""
            } max-w-none`}
          >
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how Tredumo ("we", "us", "our")
              collects, uses, and discloses information about you when you use
              our services, including our website, mobile applications, and
              other online products and services (collectively, the "Services").
            </p>
            <p>
              By using our Services, you agree to the collection, use, and
              disclosure of your information as described in this Privacy
              Policy. If you do not agree with our policies and practices, do
              not use our Services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide to Us</h3>
            <p>We collect information you provide directly to us when you:</p>
            <ul>
              <li>Create an account or profile</li>
              <li>Fill out forms or surveys</li>
              <li>Communicate with us via email, phone, or otherwise</li>
              <li>Participate in interactive features of our Services</li>
              <li>Provide feedback or contact us</li>
            </ul>
            <p>
              The types of information we may collect include your name, email
              address, postal address, phone number, password, educational
              institution, job title, and any other information you choose to
              provide.
            </p>

            <h3>2.2 Information We Collect Automatically</h3>
            <p>
              When you use our Services, we automatically collect certain
              information, including:
            </p>
            <ul>
              <li>
                <strong>Log Information:</strong> We collect log information
                about your use of the Services, including the type of browser
                you use, access times, pages viewed, your IP address, and the
                page you visited before navigating to our Services.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information
                about the computer or mobile device you use to access our
                Services, including the hardware model, operating system and
                version, unique device identifiers, and mobile network
                information.
              </li>
              <li>
                <strong>Usage Information:</strong> We collect information about
                your usage of the Services, such as the actions you take (e.g.,
                features you use, content you view) and how you interact with
                our Services.
              </li>
              <li>
                <strong>Location Information:</strong> We may collect
                information about your location when you access our Services,
                including precise location information if you grant us
                permission through your device settings.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information</li>
              <li>
                Send you technical notices, updates, security alerts, and
                support and administrative messages
              </li>
              <li>Respond to your comments, questions, and requests</li>
              <li>
                Communicate with you about products, services, offers,
                promotions, and events
              </li>
              <li>
                Monitor and analyze trends, usage, and activities in connection
                with our Services
              </li>
              <li>
                Detect, investigate, and prevent fraudulent transactions and
                other illegal activities
              </li>
              <li>
                Personalize and improve the Services and provide content or
                features that match user profiles or interests
              </li>
              <li>
                Facilitate contests, sweepstakes, and promotions and process and
                deliver entries and rewards
              </li>
              <li>
                Carry out any other purpose described to you at the time the
                information was collected
              </li>
            </ul>

            <h2>4. How We Share Your Information</h2>
            <p>
              We may share information about you as follows or as otherwise
              described in this Privacy Policy:
            </p>
            <ul>
              <li>
                With vendors, consultants, and other service providers who need
                access to such information to carry out work on our behalf
              </li>
              <li>
                In response to a request for information if we believe
                disclosure is in accordance with, or required by, any applicable
                law, regulation, or legal process
              </li>
              <li>
                If we believe your actions are inconsistent with our user
                agreements or policies, or to protect the rights, property, and
                safety of Tredumo or others
              </li>
              <li>
                In connection with, or during negotiations of, any merger, sale
                of company assets, financing, or acquisition of all or a portion
                of our business by another company
              </li>
              <li>
                Between and among Tredumo and our current and future parents,
                affiliates, subsidiaries, and other companies under common
                control and ownership
              </li>
              <li>With your consent or at your direction</li>
            </ul>
            <p>
              We may also share aggregated or de-identified information that
              cannot reasonably be used to identify you.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We store the information we collect about you for as long as is
              necessary for the purpose(s) for which we originally collected it.
              We may retain certain information for legitimate business purposes
              or as required by law.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <h3>6.1 Account Information</h3>
            <p>
              You may update, correct, or delete your account information at any
              time by logging into your account or contacting us. Note that we
              may retain certain information as required by law or for
              legitimate business purposes.
            </p>

            <h3>6.2 Cookies</h3>
            <p>
              Most web browsers are set to accept cookies by default. If you
              prefer, you can usually choose to set your browser to remove or
              reject browser cookies. Please note that if you choose to remove
              or reject cookies, this could affect the availability and
              functionality of our Services.
            </p>

            <h3>6.3 Promotional Communications</h3>
            <p>
              You may opt out of receiving promotional emails from Tredumo by
              following the instructions in those emails. If you opt out, we may
              still send you non-promotional emails, such as those about your
              account or our ongoing business relations.
            </p>

            <h3>6.4 Your Data Protection Rights</h3>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, such as:
            </p>
            <ul>
              <li>
                The right to access personal information we hold about you
              </li>
              <li>
                The right to request that we correct inaccurate or incomplete
                personal information
              </li>
              <li>
                The right to request that we delete your personal information
              </li>
              <li>
                The right to restrict the processing of your personal
                information
              </li>
              <li>The right to data portability</li>
              <li>
                The right to object to our processing of your personal
                information
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at
              privacy@tredumo.com.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our Services are not directed to children under 16. We do not
              knowingly collect personal information from children under 16. If
              we learn we have collected or received personal information from a
              child under 16 without verification of parental consent, we will
              delete that information. If you believe we might have any
              information from or about a child under 16, please contact us.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              We are based in the United States and process and store
              information in the U.S. and other countries. If you are located
              outside the United States, we may transfer, process, and store
              your information in countries where data protection laws may be
              less comprehensive than those in your country.
            </p>

            <h2>9. Changes to this Privacy Policy</h2>
            <p>
              We may change this Privacy Policy from time to time. If we make
              changes, we will notify you by revising the date at the top of the
              policy and, in some cases, we may provide you with additional
              notice (such as adding a statement to our website or sending you a
              notification). We encourage you to review the Privacy Policy
              whenever you access the Services to stay informed about our
              information practices.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>
              Tredumo
              <br />
              123 Market Street, Suite 400
              <br />
              San Francisco, CA 94105
              <br />
              Email: privacy@tredumo.com
              <br />
              Phone: +1 (415) 555-1234
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <h2
                className={`text-3xl md:text-4xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6 tracking-tight`}
              >
                Have questions about our privacy practices?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Our team is here to help. Contact us with any questions or
                concerns about how we handle your data.
              </p>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
