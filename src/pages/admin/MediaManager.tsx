import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Plus, 
  Trash2, 
  Search,
  Image,
  FileText,
  Film,
  ArrowUpDown,
  Download,
  ExternalLink
} from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";
import { getAllMedia, deleteMedia, MediaItem, addMedia } from "../../utils/contentManager";

interface MediaManagerProps {
  theme: string;
}

const MediaManager: React.FC<MediaManagerProps> = ({ theme }) => {
  const navigate = useNavigate();
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "image" | "video" | "document">("all");
  const [sortField, setSortField] = useState<"title" | "uploadedAt">("uploadedAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [newMedia, setNewMedia] = useState({
    title: "",
    url: "",
    type: "image" as "image" | "video" | "document",
    thumbnailUrl: "",
    dimensions: "",
    uploadedBy: "Admin"
  });
  const [showUploadForm, setShowUploadForm] = useState(false);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = () => {
    const allMedia = getAllMedia();
    setMedia(allMedia);
  };

  const handleSort = (field: "title" | "uploadedAt") => {
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
      deleteMedia(deleteId);
      loadMedia();
      setIsDeleting(false);
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setIsDeleting(false);
    setDeleteId(null);
  };

  const handleUploadFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMedia(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadError("");
    
    try {
      // Validate required fields
      if (!newMedia.title || !newMedia.url) {
        throw new Error('Title and URL are required');
      }
      
      // Add new media
      addMedia(newMedia);
      loadMedia();
      
      // Reset form
      setNewMedia({
        title: "",
        url: "",
        type: "image",
        thumbnailUrl: "",
        dimensions: "",
        uploadedBy: "Admin"
      });
      
      setShowUploadForm(false);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsUploading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const getMediaTypeIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className={`h-5 w-5 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />;
      case 'video':
        return <Film className={`h-5 w-5 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />;
      case 'document':
        return <FileText className={`h-5 w-5 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />;
      default:
        return <FileText className={`h-5 w-5 ${theme === "dark" ? "text-white/60" : "text-black/60"}`} />;
    }
  };

  // Filter and sort media
  const filteredMedia = media
    .filter(item => 
      (item.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (typeFilter === "all" || item.type === typeFilter)
    )
    .sort((a, b) => {
      if (sortField === "title") {
        return sortDirection === "asc" 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else {
        return sortDirection === "asc"
          ? new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime()
          : new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
      }
    });

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar theme={theme} activePage="media" />
        
        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                Media Library
              </h1>
              
              <button 
                onClick={() => setShowUploadForm(true)}
                className={`flex items-center ${theme === "dark" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"} px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm`}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Media
              </button>
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
                    placeholder="Search media..."
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
                
                <div className="md:w-48">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value as "all" | "image" | "video" | "document")}
                    className={`w-full px-4 py-2 rounded-lg ${
                      theme === "dark"
                        ? "bg-white/5 text-white border-white/10"
                        : "bg-black/5 text-black border-black/10"
                    } border focus:outline-none focus:ring-1 ${
                      theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                    }`}
                  >
                    <option value="all" className={theme === "dark" ? "bg-black" : "bg-white"}>All Types</option>
                    <option value="image" className={theme === "dark" ? "bg-black" : "bg-white"}>Images</option>
                    <option value="video" className={theme === "dark" ? "bg-black" : "bg-white"}>Videos</option>
                    <option value="document" className={theme === "dark" ? "bg-black" : "bg-white"}>Documents</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Media Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMedia.length > 0 ? (
                filteredMedia.map((item) => (
                  <div 
                    key={item.id} 
                    className={`rounded-xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border overflow-hidden`}
                  >
                    <div className="relative aspect-square bg-gray-800">
                      {item.type === 'image' ? (
                        <img 
                          src={item.url} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                          {getMediaTypeIcon(item.type)}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-medium ${theme === "dark" ? "text-white" : "text-black"} truncate`}>
                          {item.title}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          theme === "dark" ? "bg-white/10 text-white/80" : "bg-black/10 text-black/80"
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <p className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-3`}>
                        {formatDate(item.uploadedAt)}
                      </p>
                      <div className="flex justify-between">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg ${
                            theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                          } transition-colors`}
                          title="View"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a
                          href={item.url}
                          download
                          className={`p-2 rounded-lg ${
                            theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                          } transition-colors`}
                          title="Download"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className={`p-2 rounded-lg ${
                            theme === "dark" ? "bg-red-500/10 hover:bg-red-500/20" : "bg-red-500/10 hover:bg-red-500/20"
                          } transition-colors`}
                          title="Delete"
                        >
                          <Trash2 className={`h-4 w-4 ${theme === "dark" ? "text-red-400" : "text-red-500"}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={`col-span-full p-8 text-center ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                  {searchTerm || typeFilter !== "all" 
                    ? "No media found matching your search criteria." 
                    : "No media found. Add your first media item!"}
                </div>
              )}
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
              Are you sure you want to delete this media item? This action cannot be undone.
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
      
      {/* Upload Media Modal */}
      {showUploadForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowUploadForm(false)}
          ></div>
          <div className={`relative w-full max-w-lg rounded-2xl ${theme === "dark" ? "bg-black border-white/10" : "bg-white border-black/10"} border p-6`}>
            <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Add Media
            </h3>
            
            {uploadError && (
              <div className={`mb-4 p-3 rounded-lg ${theme === "dark" ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-red-500/10 text-red-600 border border-red-500/20"}`}>
                {uploadError}
              </div>
            )}
            
            <form onSubmit={handleUploadSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                  Media Type
                </label>
                <select
                  name="type"
                  value={newMedia.type}
                  onChange={handleUploadFormChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-white/5 text-white border-white/10"
                      : "bg-black/5 text-black border-black/10"
                  } border focus:outline-none focus:ring-1 ${
                    theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                  }`}
                >
                  <option value="image" className={theme === "dark" ? "bg-black" : "bg-white"}>Image</option>
                  <option value="video" className={theme === "dark" ? "bg-black" : "bg-white"}>Video</option>
                  <option value="document" className={theme === "dark" ? "bg-black" : "bg-white"}>Document</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newMedia.title}
                  onChange={handleUploadFormChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                      : "bg-black/5 text-black placeholder-black/40 border-black/10"
                  } border focus:outline-none focus:ring-1 ${
                    theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                  }`}
                  placeholder="Enter media title"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                  URL
                </label>
                <input
                  type="text"
                  name="url"
                  value={newMedia.url}
                  onChange={handleUploadFormChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                      : "bg-black/5 text-black placeholder-black/40 border-black/10"
                  } border focus:outline-none focus:ring-1 ${
                    theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                  }`}
                  placeholder="https://example.com/image.jpg"
                />
                <p className={`mt-1 text-xs ${theme === "dark" ? "text-white/40" : "text-black/40"}`}>
                  Enter a URL for the media file
                </p>
              </div>
              
              {newMedia.type === 'image' && (
                <div>
                  <label className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                    Dimensions (optional)
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    value={newMedia.dimensions}
                    onChange={handleUploadFormChange}
                    className={`w-full px-4 py-2 rounded-lg ${
                      theme === "dark"
                        ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                        : "bg-black/5 text-black placeholder-black/40 border-black/10"
                    } border focus:outline-none focus:ring-1 ${
                      theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                    }`}
                    placeholder="e.g. 1920x1080"
                  />
                </div>
              )}
              
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowUploadForm(false)}
                  className={`px-4 py-2 rounded-lg ${
                    theme === "dark" ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"
                  } transition-colors`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className={`px-4 py-2 rounded-lg ${
                    theme === "dark" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"
                  } transition-colors ${isUploading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isUploading ? 'Adding...' : 'Add Media'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaManager;