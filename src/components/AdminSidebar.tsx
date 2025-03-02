import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Edit, 
  Image, 
  MessageSquare
} from 'lucide-react';

interface AdminSidebarProps {
  theme: string;
  activePage: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ theme, activePage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className={`w-64 fixed inset-y-0 ${theme === "dark" ? "bg-white/5 border-r border-white/10" : "bg-black/5 border-r border-black/10"} backdrop-blur-xl`}>
      <div className="flex flex-col h-full">
        <div className="p-6">
          <Link to="/admin/dashboard" className="block">
            <h2 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
              Tredumo Admin
            </h2>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link 
            to="/admin/dashboard" 
            className={`flex items-center px-4 py-3 rounded-lg ${
              activePage === 'dashboard' 
                ? theme === "dark" 
                  ? "bg-white/10 text-white" 
                  : "bg-black/10 text-black"
                : theme === "dark"
                  ? "text-white/80 hover:bg-white/5" 
                  : "text-black/80 hover:bg-black/5"
            } transition-colors`}
          >
            <Home className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          
          <Link 
            to="/admin/pages" 
            className={`flex items-center px-4 py-3 rounded-lg ${
              activePage === 'pages' 
                ? theme === "dark" 
                  ? "bg-white/10 text-white" 
                  : "bg-black/10 text-black"
                : theme === "dark"
                  ? "text-white/80 hover:bg-white/5" 
                  : "text-black/80 hover:bg-black/5"
            } transition-colors`}
          >
            <FileText className="h-5 w-5 mr-3" />
            Pages
          </Link>
          
          <Link 
            to="/admin/blog" 
            className={`flex items-center px-4 py-3 rounded-lg ${
              activePage === 'blog' 
                ? theme === "dark" 
                  ? "bg-white/10 text-white" 
                  : "bg-black/10 text-black"
                : theme === "dark"
                  ? "text-white/80 hover:bg-white/5" 
                  : "text-black/80 hover:bg-black/5"
            } transition-colors`}
          >
            <Edit className="h-5 w-5 mr-3" />
            Blog Posts
          </Link>
          
          <Link 
            to="/admin/media" 
            className={`flex items-center px-4 py-3 rounded-lg ${
              activePage === 'media' 
                ? theme === "dark" 
                  ? "bg-white/10 text-white" 
                  : "bg-black/10 text-black"
                : theme === "dark"
                  ? "text-white/80 hover:bg-white/5" 
                  : "text-black/80 hover:bg-black/5"
            } transition-colors`}
          >
            <Image className="h-5 w-5 mr-3" />
            Media
          </Link>
          
          <Link 
            to="/admin/testimonials" 
            className={`flex items-center px-4 py-3 rounded-lg ${
              activePage === 'testimonials' 
                ? theme === "dark" 
                  ? "bg-white/10 text-white" 
                  : "bg-black/10 text-black"
                : theme === "dark"
                  ? "text-white/80 hover:bg-white/5" 
                  : "text-black/80 hover:bg-black/5"
            } transition-colors`}
          >
            <MessageSquare className="h-5 w-5 mr-3" />
            Testimonials
          </Link>
          
          <Link 
            to="/admin/settings" 
            className={`flex items-center px-4 py-3 rounded-lg ${
              activePage === 'settings' 
                ? theme === "dark" 
                  ? "bg-white/10 text-white" 
                  : "bg-black/10 text-black"
                : theme === "dark"
                  ? "text-white/80 hover:bg-white/5" 
                  : "text-black/80 hover:bg-black/5"
            } transition-colors`}
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Link>
        </nav>
        
        <div className="p-4 mt-auto">
          <button 
            onClick={handleLogout}
            className={`flex items-center w-full px-4 py-3 rounded-lg ${theme === "dark" ? "text-white/80 hover:bg-white/5" : "text-black/80 hover:bg-black/5"} transition-colors`}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;