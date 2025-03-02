import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag, Search } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPageProps {
  theme: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ theme }) => {
  const featuredPost = {
    title: "The Future of Education Management in the AI Era",
    excerpt:
      "Explore how artificial intelligence is transforming education management systems and what this means for institutions worldwide.",
    date: "October 15, 2023",
    author: "Sarah Johnson",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    readTime: "8 min read",
  };

  const posts = [
    {
      title: "How Data Analytics is Improving Student Outcomes",
      excerpt:
        "Discover how educational institutions are leveraging data analytics to identify at-risk students and improve academic performance.",
      date: "September 28, 2023",
      author: "Michael Chen",
      category: "Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      readTime: "6 min read",
    },
    {
      title: "Streamlining Admissions: A Case Study",
      excerpt:
        "Learn how Stanford University transformed their admissions process using Tredumo, resulting in a 78% increase in efficiency.",
      date: "September 15, 2023",
      author: "Emily Rodriguez",
      category: "Case Study",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
      readTime: "5 min read",
    },
    {
      title: "The Importance of Mobile-First Design in EdTech",
      excerpt:
        "Why educational technology must prioritize mobile experiences to meet the needs of today's students and educators.",
      date: "August 30, 2023",
      author: "David Kim",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80",
      readTime: "4 min read",
    },
    {
      title: "Security Best Practices for Educational Institutions",
      excerpt:
        "Essential cybersecurity measures that every educational institution should implement to protect sensitive data.",
      date: "August 22, 2023",
      author: "Priya Patel",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      readTime: "7 min read",
    },
    {
      title: "The Role of AI in Personalized Learning",
      excerpt:
        "How artificial intelligence is enabling truly personalized learning experiences and what this means for the future of education.",
      date: "August 10, 2023",
      author: "James Wilson",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80",
      readTime: "9 min read",
    },
    {
      title: "Building a Culture of Innovation in Education",
      excerpt:
        "Strategies for fostering innovation within educational institutions and embracing new technologies effectively.",
      date: "July 28, 2023",
      author: "Sarah Johnson",
      category: "Leadership",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      readTime: "5 min read",
    },
  ];

  const categories = [
    "Technology",
    "Analytics",
    "Case Study",
    "Design",
    "Security",
    "Leadership",
    "Best Practices",
    "Industry News",
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
      transition: { duration: 0.5 },
    },
  };

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
              Insights & Resources
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              The latest news, articles, and resources from the world of
              education management and technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto"
            >
              <div
                className={`relative ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } backdrop-blur-xl rounded-full border overflow-hidden`}
              >
                <input
                  type="text"
                  placeholder="Search articles..."
                  className={`w-full px-6 py-4 ${
                    theme === "dark"
                      ? "bg-transparent text-white placeholder-white/40"
                      : "bg-transparent text-black placeholder-black/40"
                  } focus:outline-none`}
                />
                <button
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  }`}
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Post */}
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
              } backdrop-blur-xl rounded-[2rem] border overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      theme === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-black/10 text-black"
                    } mb-6`}
                  >
                    Featured Post
                  </span>

                  <h3
                    className={`text-3xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    {featuredPost.title}
                  </h3>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } mb-6`}
                  >
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-4 mb-8">
                    <div className="flex items-center">
                      <Calendar
                        className={`h-4 w-4 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mr-2`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        {featuredPost.date}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <User
                        className={`h-4 w-4 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mr-2`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        {featuredPost.author}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Tag
                        className={`h-4 w-4 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mr-2`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/blog"
                    className={`inline-flex items-center ${
                      theme === "dark" ? "text-white" : "text-black"
                    } font-medium group`}
                  >
                    Read full article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`blog-card ${
                      theme === "dark"
                        ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                        : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                    }`}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-xs font-medium ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {post.date}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {post.readTime}
                        </span>
                      </div>

                      <h3
                        className={`text-xl font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-3`}
                      >
                        {post.title}
                      </h3>

                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        } text-sm mb-4`}
                      >
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User
                            className={`h-4 w-4 ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            } mr-2`}
                          />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            }`}
                          >
                            {post.author}
                          </span>
                        </div>

                        <Link
                          to="/blog"
                          className={`inline-flex items-center text-sm ${
                            theme === "dark" ? "text-white" : "text-black"
                          } font-medium group`}
                        >
                          Read
                          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  Load more articles
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          to="/blog"
                          className={`flex items-center justify-between ${
                            theme === "dark"
                              ? "text-white/80 hover:text-white"
                              : "text-black/80 hover:text-black"
                          } transition-colors`}
                        >
                          <span>{category}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Subscribe
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-4`}
                  >
                    Get the latest articles and resources straight to your
                    inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-white/5 focus:ring-white/20 text-white placeholder-white/40 border-white/10"
                          : "bg-black/5 focus:ring-black/20 text-black placeholder-black/40 border-black/10"
                      } rounded-lg focus:outline-none focus:ring-2 border`}
                    />
                    <button
                      className={`w-full ${
                        theme === "dark"
                          ? "bg-white text-black hover:bg-gray-100"
                          : "bg-black text-white hover:bg-gray-900"
                      } px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm tracking-wide`}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
                Want to contribute to our blog?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                We're always looking for industry experts to share their
                insights and experiences with our community.
              </p>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                Contact our editorial team
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
