import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Edit, 
  Image, 
  MessageSquare, 
  TrendingUp,
  Plus
} from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";
import { getRecentUpdates, getContentStats } from "../../utils/contentManager";

interface AdminDashboardProps {
  theme: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ theme }) => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    pages: 0,
    blogPosts: 0,
    testimonials: 0,
    media: 0
  });
  const [recentUpdates, setRecentUpdates] = useState<any[]>([]);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }

    // Get content stats
    const contentStats = getContentStats();
    setStats(contentStats);

    // Get recent updates
    const updates = getRecentUpdates(5);
    setRecentUpdates(updates);
  }, [navigate]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours === 0) {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
      }
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffDays} days ago`;
    }
  };

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar theme={theme} activePage="dashboard" />
        
        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                Dashboard
              </h1>
              
              <div className="flex space-x-4">
                <Link 
                  to="/admin/content/new" 
                  className={`flex items-center ${theme === "dark" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"} px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm`}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Content
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              <div 
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"} backdrop-blur-xl border`}
              >
                <p className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                  {stats.pages}
                </p>
                <p className={`${theme === "dark" ? "text-white/60" : "text-black/60"} text-sm`}>
                  Pages
                </p>
              </div>
              
              <div 
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"} backdrop-blur-xl border`}
              >
                <p className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                  {stats.blogPosts}
                </p>
                <p className={`${theme === "dark" ? "text-white/60" : "text-black/60"} text-sm`}>
                  Blog Posts
                </p>
              </div>
              
              <div 
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"} backdrop-blur-xl border`}
              >
                <p className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                  {stats.media}
                </p>
                <p className={`${theme === "dark" ? "text-white/60" : "text-black/60"} text-sm`}>
                  Media Files
                </p>
              </div>
              
              <div 
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"} backdrop-blur-xl border`}
              >
                <p className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                  {stats.testimonials}
                </p>
                <p className={`${theme === "dark" ? "text-white/60" : "text-black/60"} text-sm`}>
                  Testimonials
                </p>
              </div>
            </motion.div>
            
            {/* Recent Activity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Recent Updates */}
              <div className={`col-span-2 p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-xl border`}>
                <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                  Recent Updates
                </h2>
                
                <div className="space-y-4">
                  {recentUpdates.length > 0 ? (
                    recentUpdates.map((update) => (
                      <div 
                        key={update.id} 
                        className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition-colors`}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                            {update.title}
                          </h3>
                          <Link 
                            to={`/admin/content/edit/${update.id}`} 
                            className={`text-sm ${theme === "dark" ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"} transition-colors`}
                          >
                            Edit
                          </Link>
                        </div>
                        <div className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"} mt-1`}>
                          Updated {formatDate(update.updatedAt)} by {update.author}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={`p-4 text-center ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                      No recent updates
                    </div>
                  )}
                </div>
                
                <div className="mt-4 text-center">
                  <Link 
                    to="/admin/pages" 
                    className={`text-sm ${theme === "dark" ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"} transition-colors`}
                  >
                    View all content
                  </Link>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} backdrop-blur-xl border`}>
                <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                  Quick Actions
                </h2>
                
                <div className="space-y-3">
                  <Link 
                    to="/admin/pages" 
                    className={`flex items-center p-3 rounded-lg ${theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition-colors`}
                  >
                    <Home className={`h-5 w-5 mr-3 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />
                    <span>Manage Pages</span>
                  </Link>
                  
                  <Link 
                    to="/admin/blog" 
                    className={`flex items-center p-3 rounded-lg ${theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition-colors`}
                  >
                    <Edit className={`h-5 w-5 mr-3 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />
                    <span>Manage Blog Posts</span>
                  </Link>
                  
                  <Link 
                    to="/admin/media" 
                    className={`flex items-center p-3 rounded-lg ${theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition-colors`}
                  >
                    <Image className={`h-5 w-5 mr-3 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />
                    <span>Manage Media</span>
                  </Link>
                  
                  <Link 
                    to="/admin/testimonials" 
                    className={`flex items-center p-3 rounded-lg ${theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition-colors`}
                  >
                    <MessageSquare className={`h-5 w-5 mr-3 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />
                    <span>Manage Testimonials</span>
                  </Link>
                  
                  <Link 
                    to="/admin/content/new" 
                    className={`flex items-center p-3 rounded-lg ${theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition-colors`}
                  >
                    <Plus className={`h-5 w-5 mr-3 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />
                    <span>Create New Content</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;