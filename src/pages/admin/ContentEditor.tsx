import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Save, 
  ArrowLeft,
  Image,
  Tag,
  X
} from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";
import { 
  getContentById, 
  createContent, 
  updateContent, 
  generateSlug, 
  ContentItem 
} from "../../utils/contentManager";

interface ContentEditorProps {
  theme: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ theme }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contentType = queryParams.get('type') || 'page';
  
  const [formData, setFormData] = useState<Partial<ContentItem>>({
    type: contentType as 'page' | 'blog' | 'testimonial',
    title: '',
    content: '',
    slug: '',
    author: 'Admin',
    featured: false,
    category: '',
    tags: [],
    position: '',
    company: '',
    image: ''
  });
  
  const [currentTag, setCurrentTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      const content = getContentById(id);
      if (content) {
        setFormData(content);
      } else {
        setError('Content not found');
      }
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'title' && !id && !formData.slug) {
      // Auto-generate slug from title for new content
      setFormData(prev => ({
        ...prev,
        [name]: value,
        slug: generateSlug(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Reset saved state when form changes
    setIsSaved(false);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
    setIsSaved(false);
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    if (currentTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), currentTag.trim()]
      }));
      setCurrentTag('');
      setIsSaved(false);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: (prev.tags || []).filter(tag => tag !== tagToRemove)
    }));
    setIsSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Validate required fields
      if (!formData.title || !formData.content || !formData.slug) {
        throw new Error('Title, content, and slug are required');
      }
      
      // Create or update content
      if (id) {
        updateContent(id, formData);
      } else {
        createContent(formData as Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>);
      }
      
      setIsSaved(true);
      setTimeout(() => {
        // Navigate back after successful save
        if (formData.type === 'page') {
          navigate('/admin/pages');
        } else if (formData.type === 'blog') {
          navigate('/admin/blog');
        } else if (formData.type === 'testimonial') {
          navigate('/admin/testimonials');
        }
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const getPageTitle = () => {
    if (id) {
      return `Edit ${formData.type === 'blog' ? 'Blog Post' : formData.type === 'testimonial' ? 'Testimonial' : 'Page'}`;
    }
    return `New ${formData.type === 'blog' ? 'Blog Post' : formData.type === 'testimonial' ? 'Testimonial' : 'Page'}`;
  };

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar theme={theme} activePage={formData.type === 'blog' ? 'blog' : formData.type === 'testimonial' ? 'testimonials' : 'pages'} />
        
        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <button
                  onClick={() => navigate(-1)}
                  className={`mr-4 p-2 rounded-lg ${theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} transition-colors`}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h1 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                  {getPageTitle()}
                </h1>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`flex items-center ${theme === "dark" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"} px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <Save className="h-4 w-4 mr-2" />
                {isLoading ? 'Saving...' : isSaved ? 'Saved!' : 'Save'}
              </button>
            </div>
            
            {error && (
              <div className={`mb-6 p-4 rounded-lg ${theme === "dark" ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-red-500/10 text-red-600 border border-red-500/20"}`}>
                {error}
              </div>
            )}
            
            {isSaved && (
              <div className={`mb-6 p-4 rounded-lg ${theme === "dark" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-green-500/10 text-green-600 border border-green-500/20"}`}>
                Content saved successfully! Redirecting...
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                <div className="space-y-6">
                  {/* Content Type */}
                  {!id && (
                    <div>
                      <label className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                        Content Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-white/5 text-white border-white/10"
                            : "bg-black/5 text-black border-black/10"
                        } border focus:outline-none focus:ring-1 ${
                          theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                        }`}
                      >
                        <option value="page" className={theme === "dark" ? "bg-black" : "bg-white"}>Page</option>
                        <option value="blog" className={theme === "dark" ? "bg-black" : "bg-white"}>Blog Post</option>
                        <option value="testimonial" className={theme === "dark" ? "bg-black" : "bg-white"}>Testimonial</option>
                      </select>
                    </div>
                  )}
                  
                  {/* Title */}
                  <div>
                    <label htmlFor="title" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg ${
                        theme === "dark"
                          ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                          : "bg-black/5 text-black placeholder-black/40 border-black/10"
                      } border focus:outline-none focus:ring-1 ${
                        theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                      }`}
                      placeholder="Enter title"
                    />
                  </div>
                  
                  {/* Slug */}
                  <div>
                    <label htmlFor="slug" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                      Slug
                    </label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg ${
                        theme === "dark"
                          ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                          : "bg-black/5 text-black placeholder-black/40 border-black/10"
                      } border focus:outline-none focus:ring-1 ${
                        theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                      }`}
                      placeholder="enter-slug"
                    />
                    <p className={`mt-1 text-xs ${theme === "dark" ? "text-white/40" : "text-black/40"}`}>
                      Used in the URL: example.com/{formData.slug}
                    </p>
                  </div>
                  
                  {/* Author */}
                  <div>
                    <label htmlFor="author" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg ${
                        theme === "dark"
                          ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                          : "bg-black/5 text-black placeholder-black/40 border-black/10"
                      } border focus:outline-none focus:ring-1 ${
                        theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                      }`}
                      placeholder="Author name"
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <label htmlFor="content" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                      Content
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows={10}
                      className={`w-full px-4 py-2 rounded-lg ${
                        theme === "dark"
                          ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                          : "bg-black/5 text-black placeholder-black/40 border-black/10"
                      } border focus:outline-none focus:ring-1 ${
                        theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                      }`}
                      placeholder="Enter content"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Additional fields based on content type */}
              {formData.type === 'blog' && (
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                  <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                    Blog Post Details
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Featured */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="featured"
                        name="featured"
                        checked={formData.featured || false}
                        onChange={handleCheckboxChange}
                        className={`h-4 w-4 ${
                          theme === "dark"
                            ? "bg-white/5 border-white/10 text-white focus:ring-white/20"
                            : "bg-black/5 border-black/10 text-black focus:ring-black/20"
                        } rounded focus:ring-2`}
                      />
                      <label htmlFor="featured" className={`ml-2 block text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        Featured post
                      </label>
                    </div>
                    
                    {/* Category */}
                    <div>
                      <label htmlFor="category" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                        Category
                      </label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category || ''}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                            : "bg-black/5 text-black placeholder-black/40 border-black/10"
                        } border focus:outline-none focus:ring-1 ${
                          theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                        }`}
                        placeholder="e.g. Technology, Education"
                      />
                    </div>
                    
                    {/* Tags */}
                    <div>
                      <label htmlFor="tags" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                        Tags
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="tags"
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          onKeyDown={handleTagKeyDown}
                          className={`flex-grow px-4 py-2 rounded-lg ${
                            theme === "dark"
                              ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                              : "bg-black/5 text-black placeholder-black/40 border-black/10"
                          } border focus:outline-none focus:ring-1 ${
                            theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                          }`}
                          placeholder="Add a tag and press Enter"
                        />
                        <button
                          type="button"
                          onClick={addTag}
                          className={`ml-2 px-4 py-2 rounded-lg ${
                            theme === "dark"
                              ? "bg-white/10 text-white hover:bg-white/20"
                              : "bg-black/10 text-black hover:bg-black/20"
                          } transition-colors`}
                        >
                          Add
                        </button>
                      </div>
                      
                      {/* Tag list */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(formData.tags || []).map((tag, index) => (
                          <div
                            key={index}
                            className={`flex items-center px-3 py-1 rounded-full ${
                              theme === "dark"
                                ? "bg-white/10 text-white"
                                : "bg-black/10 text-black"
                            }`}
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            <span className="text-sm">{tag}</span>
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="ml-2 focus:outline-none"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Image URL */}
                    <div>
                      <label htmlFor="image" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                        Featured Image URL
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="image"
                          name="image"
                          value={formData.image || ''}
                          onChange={handleChange}
                          className={`flex-grow px-4 py-2 rounded-lg ${
                            theme === "dark"
                              ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                              : "bg-black/5 text-black placeholder-black/40 border-black/10"
                          } border focus:outline-none focus:ring-1 ${
                            theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                          }`}
                          placeholder="https://example.com/image.jpg"
                        />
                        <div className={`ml-2 p-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-white/10"
                            : "bg-black/10"
                        }`}>
                          <Image className="h-5 w-5" />
                        </div>
                      </div>
                      <p className={`mt-1 text-xs ${theme === "dark" ? "text-white/40" : "text-black/40"}`}>
                        Enter a URL for the featured image
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {formData.type === 'testimonial' && (
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                  <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                    Testimonial Details
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Position */}
                    <div>
                      <label htmlFor="position" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                        Position
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position || ''}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                            : "bg-black/5 text-black placeholder-black/40 border-black/10"
                        } border focus:outline-none focus:ring-1 ${
                          theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                        }`}
                        placeholder="e.g. CEO, Director of Education"
                      />
                    </div>
                    
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                        Company/Institution
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company || ''}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                            : "bg-black/5 text-black placeholder-black/40 border-black/10"
                        } border focus:outline-none focus:ring-1 ${
                          theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                        }`}
                        placeholder="e.g. Nkumba University"
                      />
                    </div>
                    
                    {/* Image URL */}
                    <div>
                      <label htmlFor="image" className={`block text-sm font-medium ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-2`}>
                        Profile Image URL
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="image"
                          name="image"
                          value={formData.image || ''}
                          onChange={handleChange}
                          className={`flex-grow px-4 py-2 rounded-lg ${
                            theme === "dark"
                              ? "bg-white/5 text-white placeholder-white/40 border-white/10"
                              : "bg-black/5 text-black placeholder-black/40 border-black/10"
                          } border focus:outline-none focus:ring-1 ${
                            theme === "dark" ? "focus:ring-white/20" : "focus:ring-black/20"
                          }`}
                          placeholder="https://example.com/profile.jpg"
                        />
                        <div className={`ml-2 p-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-white/10"
                            : "bg-black/10"
                        }`}>
                          <Image className="h-5 w-5" />
                        </div>
                      </div>
                      <p className={`mt-1 text-xs ${theme === "dark" ? "text-white/40" : "text-black/40"}`}>
                        Enter a URL for the person's profile image
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className={`mr-4 px-6 py-3 rounded-lg ${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } transition-colors`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex items-center ${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? 'Saving...' : isSaved ? 'Saved!' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;