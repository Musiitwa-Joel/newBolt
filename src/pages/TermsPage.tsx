import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Shield,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

import { motion } from "framer-motion";

interface TermsPageProps {
  theme: string;
}

const TermsPage: React.FC<TermsPageProps> = ({ theme }) => {
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
              Terms of Service
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

      {/* Introduction Section */}
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
                    Introduction
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    Please read these terms carefully
                  </h3>

                  <div
                    className={`space-y-6 ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    <p>
                      These Terms of Service ("Terms") govern your access to and
                      use of Tredumo's website, mobile applications, and other
                      online products and services (collectively, the
                      "Services").
                    </p>
                    <p>
                      By accessing or using our Services, you agree to be bound
                      by these Terms. If you do not agree to these Terms, you
                      may not access or use the Services.
                    </p>
                    <p>
                      If you have any questions about these Terms, please
                      contact us at legal@tredumo.com.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: (
                        <FileText
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Legal Agreement",
                      description:
                        "These Terms form a legally binding agreement between you and Tredumo.",
                    },
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
                        "We protect your data in accordance with our Privacy Policy.",
                    },
                    {
                      icon: (
                        <AlertTriangle
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Compliance",
                      description:
                        "Using our Services requires compliance with these Terms and applicable laws.",
                    },
                    {
                      icon: (
                        <HelpCircle
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Support",
                      description:
                        "Our support team is available to help with any questions about these Terms.",
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

      {/* Terms Content */}
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Services, you represent that you are at
              least 18 years old and have the legal capacity to enter into these
              Terms. If you are using the Services on behalf of an organization,
              you represent and warrant that you have the authority to bind that
              organization to these Terms.
            </p>

            <h2>2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. If we make changes, we will
              provide notice of such changes, such as by sending an email
              notification, providing notice through the Services, or updating
              the "Last Updated" date at the beginning of these Terms. Your
              continued use of the Services following the effective date of any
              changes constitutes your acceptance of the modified Terms.
            </p>

            <h2>3. Privacy Policy</h2>
            <p>
              Please refer to our{" "}
              <Link to="/privacy" className="underline">
                Privacy Policy
              </Link>{" "}
              for information about how we collect, use, and disclose
              information about you. By using our Services, you agree to our
              collection, use, and disclosure of information as described in our
              Privacy Policy.
            </p>

            <h2>4. Account Registration and Security</h2>
            <p>
              To access certain features of the Services, you may be required to
              register for an account. When you register, you agree to provide
              accurate, current, and complete information about yourself and to
              update this information to maintain its accuracy. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account.
              You agree to notify us immediately of any unauthorized use of your
              account.
            </p>

            <h2>5. Subscription and Payment Terms</h2>
            <h3>5.1 Subscription Plans</h3>
            <p>
              Tredumo offers various subscription plans with different features
              and pricing. The specific features and limitations of each plan
              are described on our website. We reserve the right to modify,
              terminate, or otherwise amend our offered subscription plans.
            </p>

            <h3>5.2 Payment</h3>
            <p>
              You agree to pay all fees associated with your subscription plan.
              All fees are in U.S. dollars and are non-refundable except as
              expressly provided in these Terms. You authorize us to charge the
              payment method you provide for all fees related to your use of the
              Services.
            </p>

            <h3>5.3 Subscription Term and Renewal</h3>
            <p>
              Subscriptions automatically renew for the same subscription term
              unless you cancel your subscription before the end of the current
              term. You may cancel your subscription at any time through your
              account settings or by contacting us.
            </p>

            <h3>5.4 Free Trials</h3>
            <p>
              We may offer free trials of our Services. At the end of the trial
              period, your subscription will automatically convert to a paid
              subscription unless you cancel before the trial ends.
            </p>

            <h2>6. User Content</h2>
            <h3>6.1 User Content Generally</h3>
            <p>
              "User Content" means any content that users submit, post, or
              otherwise make available through the Services, including text,
              images, videos, and other materials. You retain ownership of your
              User Content, but you grant us a worldwide, non-exclusive,
              royalty-free license to use, copy, modify, create derivative works
              based on, distribute, publicly display, and publicly perform your
              User Content in connection with operating and providing the
              Services.
            </p>

            <h3>6.2 User Content Representations and Warranties</h3>
            <p>
              You are solely responsible for your User Content. You represent
              and warrant that:
            </p>
            <ul>
              <li>
                You own or have the necessary rights to use and authorize us to
                use your User Content as described in these Terms
              </li>
              <li>
                Your User Content does not violate any third party's
                intellectual property rights, privacy rights, publicity rights,
                or other personal or proprietary rights
              </li>
              <li>
                Your User Content complies with these Terms and all applicable
                laws and regulations
              </li>
            </ul>

            <h2>7. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Services in any manner that could interfere with,
                disrupt, negatively affect, or inhibit other users from fully
                enjoying the Services
              </li>
              <li>
                Use the Services in any way that violates applicable laws or
                regulations
              </li>
              <li>
                Use the Services to engage in any harassing, threatening,
                intimidating, or predatory conduct
              </li>
              <li>
                Attempt to circumvent any content-filtering techniques we employ
                or attempt to access areas or features of the Services that you
                are not authorized to access
              </li>
              <li>
                Develop or use any third-party applications that interact with
                the Services without our prior written consent
              </li>
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>
                Engage in any activity that could compromise the security or
                integrity of the Services
              </li>
            </ul>

            <h2>8. Intellectual Property Rights</h2>
            <h3>8.1 Tredumo's Intellectual Property</h3>
            <p>
              The Services and all content, features, and functionality thereof,
              including but not limited to all information, software, text,
              displays, images, video, and audio, and the design, selection, and
              arrangement thereof (excluding User Content), are owned by
              Tredumo, its licensors, or other providers and are protected by
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </p>

            <h3>8.2 Limited License</h3>
            <p>
              Subject to your compliance with these Terms, we grant you a
              limited, non-exclusive, non-transferable, non-sublicensable
              license to access and use the Services for your internal business
              purposes.
            </p>

            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your access to the Services at any
              time, with or without cause, and with or without notice. Upon
              termination, your right to use the Services will immediately
              cease, and you must cease all use of the Services and delete any
              copies of the Services in your possession.
            </p>

            <h2>10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT
              NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. TREDUMO DOES
              NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE,
              THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES ARE FREE OF
              VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TREDUMO SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS,
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM
              YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
              SERVICES.
            </p>

            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Tredumo and its
              officers, directors, employees, agents, and affiliates from and
              against any and all claims, liabilities, damages, losses, costs,
              expenses, or fees (including reasonable attorneys' fees) that such
              parties may incur as a result of or arising from your violation of
              these Terms.
            </p>

            <h2>13. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and your use of the Services shall be governed by and
              construed in accordance with the laws of the State of California,
              without giving effect to any choice or conflict of law provision
              or rule. Any legal suit, action, or proceeding arising out of or
              related to these Terms or the Services shall be instituted
              exclusively in the federal courts of the United States or the
              courts of the State of California, in each case located in San
              Francisco County.
            </p>

            <h2>14. Dispute Resolution</h2>
            <h3>14.1 Mandatory Arbitration</h3>
            <p>
              Any dispute arising from or relating to these Terms or the
              Services shall be resolved by final and binding arbitration
              administered by the American Arbitration Association under its
              Commercial Arbitration Rules.
            </p>

            <h3>14.2 Class Action Waiver</h3>
            <p>
              YOU AND TREDUMO AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
              ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR
              CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
            </p>

            <h2>15. Miscellaneous</h2>
            <h3>15.1 Entire Agreement</h3>
            <p>
              These Terms constitute the entire agreement between you and
              Tredumo regarding your use of the Services and supersede all prior
              and contemporaneous written or oral agreements between you and
              Tredumo.
            </p>

            <h3>15.2 Waiver</h3>
            <p>
              Our failure to exercise or enforce any right or provision of these
              Terms shall not operate as a waiver of such right or provision.
            </p>

            <h3>15.3 Severability</h3>
            <p>
              If any provision of these Terms is held to be invalid or
              unenforceable, such provision shall be struck and the remaining
              provisions shall be enforced.
            </p>

            <h3>15.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms, by operation of law or
              otherwise, without our prior written consent. We may assign these
              Terms without restriction.
            </p>

            <h2>16. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Tredumo
              <br />
              123 Market Street, Suite 400
              <br />
              San Francisco, CA 94105
              <br />
              Email: legal@tredumo.com
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
                Have questions about our terms?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Our legal team is here to help. Contact us with any questions or
                concerns about our Terms of Service.
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

export default TermsPage;
