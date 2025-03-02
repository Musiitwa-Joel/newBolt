import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  ArrowUpDown,
  User
} from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";
import { getContentByType, deleteContent, ContentItem } from "../../utils/contentManager";

interface TestimonialsManagerProps {
  theme: string;
}

const TestimonialsManager: React.FC<TestimonialsManagerProps> = ({ theme }) => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState<ContentItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<"author" | "updatedAt">("updatedAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    const allTestimonials = getContentByType("testimonial");
    setTestimonials(allTestimonials);
  };

  const handleSort = (field: "author" | "updatedAt") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleDelete = (id: string) => {
    setDeleteId(id);
    setIsDeleting(true);
  };

  const confirmDelete = () => {
    if (deleteId) {
      deleteContent(deleteId);
      loadTestimonials();
      setIsDeleting(false);
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleting(false);
    setDeleteId(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  // Filter and sort testimonials
  const filteredTestimonials = testimonials
    .filter(testimonial => 
      testimonial.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (testimonial.company && testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortField === "author") {
        return sortDirection === "asc" 
          ? a.author.localeCompare(b.author)
          : b.author.localeCompare(a.author);
      } else {
        return sortDirection === "asc"
          ? new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
          : new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar theme={theme} activePage="testimonials" />
        
        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                Testimonials
              </h1>
              
              <Link 
                to="/admin/content/new?type=testimonial" 
                className={`flex items-center ${theme === "dark" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"} px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm`}
              >
                <Plus className="h-4 w-4 mr-2" />
                New Testimonial
              </Link>
            </div>
            
            {/* Search */}
            <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border mb-6`}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-5 w-5 ${theme === "dark" ? "text-white/40" : "text-black/40"}`} />
                </div>
                <input
                  type="text"
                  placeholder="Search testimonials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                      : "bg-black/5 text-black placeholder-black/40 border-black/10"
                  } border focus:outline-none focus:ring-1 ${
                    theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                  }`}
                />
              </div>
            </div>
            
            {/* Testimonials Table */}
            <div className={`rounded-xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border overflow-hidden`}>
              <table className="w-full">
                <thead>
                  <tr className={`${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    <th className="px-6 py-3 text-left">
                      <button
                        onClick={() => handleSort("author")}
                        className="flex items-center font-medium text-sm"
                      >
                        Author
                        <ArrowUpDown className="h-4 w-4 ml-1" />
                      </button>
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-sm">Position & Company</th>
                    <th className="px-6 py-3 text-left font-medium text-sm">Content</th>
                    <th className="px-6 py-3 text-left">
                      <button
                        onClick={() => handleSort("updatedAt")}
                        className="flex items-center font-medium text-sm"
                      >
                        Last Updated
                        <ArrowUpDown className="h-4 w-4 ml-1" />
                      </button>
                    </th>
                    <th className="px-6 py-3 text-right font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredTestimonials.length > 0 ? (
                    filteredTestimonials.map((testimonial) => (
                      <tr 
                        key={testimonial.id} 
                        className={`${theme === "dark" ? "hover:bg-white/5" : "hover:bg-black/5"} transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-white/10" : "bg-black/10"} mr-3`}>
                              <User className={`h-4 w-4 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />
                            </div>
                            <span className="font-medium">{testimonial.author}</span>
                          </div>
                        </td>
                        <td className={`px-6 py-4 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {testimonial.position && (
                            <div>{testimonial.position}</div>
                          )}
                          {testimonial.company && (
                            <div className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                              {testimonial.company}
                            </div>
                          )}
                        </td>
                        <td className={`px-6 py-4 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          <div className="truncate max-w-xs">
                            {testimonial.content}
                          </div>
                        </td>
                        <td className={`px-6 py-4 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {formatDate(testimonial.updatedAt)}
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <Link
                            to={`/admin/content/edit/${testimonial.id}`}
                            className={`inline-flex items-center justify-center p-2 rounded-lg ${
                              theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                            } transition-colors`}
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(testimonial.id)}
                            className={`inline-flex items-center justify-center p-2 rounded-lg ${
                              theme === "dark" ? "bg-red-500/10 hover:bg-red-500/20" : "bg-red-500/10 hover:bg-red-500/20"
                            } transition-colors`}
                            title="Delete"
                          >
                            <Trash2 className={`h-4 w-4 ${theme === "dark" ? "text-red-400" : "text-red-500"}`} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center">
                        {searchTerm 
                          ? "No testimonials found matching your search." 
                          : "No testimonials found. Add your first testimonial!"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {isDeleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={cancelDelete}
          ></div>
          <div className={`relative w-full max-w-md rounded-2xl ${theme === "dark" ? "bg-black border-white/10" : "bg-white border-black/10"} border p-6`}>
            <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Confirm Deletion
            </h3>
            <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-6`}>
              Are you sure you want to delete this testimonial? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelDelete}
                className={`px-4 py-2 rounded-lg ${
                  theme === "dark" ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"
                } transition-colors`}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className={`px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsManager;