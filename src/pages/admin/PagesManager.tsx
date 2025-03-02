import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  Eye,
  ArrowUpDown
} from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";
import { getContentByType, deleteContent, ContentItem } from "../../utils/contentManager";

interface PagesManagerProps {
  theme: string;
}

const PagesManager: React.FC<PagesManagerProps> = ({ theme }) => {
  const navigate = useNavigate();
  const [pages, setPages] = useState<ContentItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<"title" | "updatedAt">("updatedAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = () => {
    const allPages = getContentByType("page");
    setPages(allPages);
  };

  const handleSort = (field: "title" | "updatedAt") => {
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
      loadPages();
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

  // Filter and sort pages
  const filteredPages = pages
    .filter(page => 
      page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.slug.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortField === "title") {
        return sortDirection === "asc" 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
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
        <AdminSidebar theme={theme} activePage="pages" />
        
        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                Pages
              </h1>
              
              <Link 
                to="/admin/content/new" 
                className={`flex items-center ${theme === "dark" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"} px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm`}
              >
                <Plus className="h-4 w-4 mr-2" />
                New Page
              </Link>
            </div>
            
            {/* Search and Filter */}
            <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border mb-6`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className={`h-5 w-5 ${theme === "dark" ? "text-white/40" : "text-black/40"}`} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search pages..."
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
            </div>
            
            {/* Pages Table */}
            <div className={`rounded-xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border overflow-hidden`}>
              <table className="w-full">
                <thead>
                  <tr className={`${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    <th className="px-6 py-3 text-left">
                      <button
                        onClick={() => handleSort("title")}
                        className="flex items-center font-medium text-sm"
                      >
                        Title
                        <ArrowUpDown className="h-4 w-4 ml-1" />
                      </button>
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-sm">Slug</th>
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
                  {filteredPages.length > 0 ? (
                    filteredPages.map((page) => (
                      <tr 
                        key={page.id} 
                        className={`${theme === "dark" ? "hover:bg-white/5" : "hover:bg-black/5"} transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium">{page.title}</div>
                        </td>
                        <td className={`px-6 py-4 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {page.slug}
                        </td>
                        <td className={`px-6 py-4 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {formatDate(page.updatedAt)}
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <Link
                            to={`/${page.slug}`}
                            target="_blank"
                            className={`inline-flex items-center justify-center p-2 rounded-lg ${
                              theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                            } transition-colors`}
                            title="View"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <Link
                            to={`/admin/content/edit/${page.id}`}
                            className={`inline-flex items-center justify-center p-2 rounded-lg ${
                              theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                            } transition-colors`}
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(page.id)}
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
                      <td colSpan={4} className="px-6 py-4 text-center">
                        {searchTerm ? "No pages found matching your search." : "No pages found. Create your first page!"}
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
              Are you sure you want to delete this page? This action cannot be undone.
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

export default PagesManager;