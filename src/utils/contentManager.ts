import api from './api';

// Content types
export type ContentType = 'page' | 'blog' | 'testimonial' | 'media';

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  content: string;
  slug: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  image?: string;
  category?: string;
  tags?: string[];
  position?: string; // For testimonials
  company?: string; // For testimonials
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'document';
  title: string;
  url: string;
  thumbnailUrl?: string;
  fileSize?: number;
  dimensions?: string;
  uploadedAt: string;
  uploadedBy: string;
}

// Initialize content (for backward compatibility)
export const initializeContent = () => {
  // This function is kept for backward compatibility
  // The actual data is now stored in MySQL
};

// Get all content
export const getAllContent = async (): Promise<ContentItem[]> => {
  try {
    const response = await api.get('/content');
    return response.data.map(formatContentFromApi);
  } catch (error) {
    console.error('Error fetching content:', error);
    return [];
  }
};

// Get content by type
export const getContentByType = async (type: ContentType): Promise<ContentItem[]> => {
  try {
    const response = await api.get(`/content?type=${type}`);
    return response.data.map(formatContentFromApi);
  } catch (error) {
    console.error(`Error fetching ${type} content:`, error);
    return [];
  }
};

// Get content by ID
export const getContentById = async (id: string): Promise<ContentItem | null> => {
  try {
    const response = await api.get(`/content/${id}`);
    return formatContentFromApi(response.data);
  } catch (error) {
    console.error(`Error fetching content with ID ${id}:`, error);
    return null;
  }
};

// Create new content
export const createContent = async (content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<ContentItem> => {
  try {
    const response = await api.post('/content', formatContentForApi(content));
    return formatContentFromApi(response.data);
  } catch (error) {
    console.error('Error creating content:', error);
    throw error;
  }
};

// Update content
export const updateContent = async (id: string, updates: Partial<ContentItem>): Promise<ContentItem | null> => {
  try {
    const response = await api.put(`/content/${id}`, formatContentForApi(updates));
    return formatContentFromApi(response.data);
  } catch (error) {
    console.error(`Error updating content with ID ${id}:`, error);
    throw error;
  }
};

// Delete content
export const deleteContent = async (id: string): Promise<boolean> => {
  try {
    await api.delete(`/content/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting content with ID ${id}:`, error);
    return false;
  }
};

// Get all media
export const getAllMedia = async (): Promise<MediaItem[]> => {
  try {
    const response = await api.get('/media');
    return response.data.map(formatMediaFromApi);
  } catch (error) {
    console.error('Error fetching media:', error);
    return [];
  }
};

// Add media
export const addMedia = async (media: Omit<MediaItem, 'id' | 'uploadedAt'>): Promise<MediaItem> => {
  try {
    const response = await api.post('/media', formatMediaForApi(media));
    return formatMediaFromApi(response.data);
  } catch (error) {
    console.error('Error adding media:', error);
    throw error;
  }
};

// Delete media
export const deleteMedia = async (id: string): Promise<boolean> => {
  try {
    await api.delete(`/media/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting media with ID ${id}:`, error);
    return false;
  }
};

// Generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Get recent updates
export const getRecentUpdates = async (limit: number = 5): Promise<ContentItem[]> => {
  try {
    const allContent = await getAllContent();
    return allContent
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, limit);
  } catch (error) {
    console.error('Error getting recent updates:', error);
    return [];
  }
};

// Get content stats
export const getContentStats = async () => {
  try {
    const [pages, blogPosts, testimonials, mediaItems] = await Promise.all([
      getContentByType('page'),
      getContentByType('blog'),
      getContentByType('testimonial'),
      getAllMedia()
    ]);
    
    return {
      pages: pages.length,
      blogPosts: blogPosts.length,
      testimonials: testimonials.length,
      media: mediaItems.length
    };
  } catch (error) {
    console.error('Error getting content stats:', error);
    return {
      pages: 0,
      blogPosts: 0,
      testimonials: 0,
      media: 0
    };
  }
};

// Helper functions to format data between API and frontend
function formatContentFromApi(apiContent: any): ContentItem {
  return {
    id: apiContent.id.toString(),
    type: apiContent.type,
    title: apiContent.title,
    content: apiContent.content,
    slug: apiContent.slug,
    author: apiContent.author,
    createdAt: apiContent.created_at,
    updatedAt: apiContent.updated_at,
    featured: Boolean(apiContent.featured),
    image: apiContent.image || undefined,
    category: apiContent.category || undefined,
    tags: apiContent.tags || [],
    position: apiContent.position || undefined,
    company: apiContent.company || undefined
  };
}

function formatContentForApi(content: Partial<ContentItem>): any {
  return {
    type: content.type,
    title: content.title,
    content: content.content,
    slug: content.slug,
    author: content.author,
    featured: content.featured,
    image: content.image,
    category: content.category,
    tags: content.tags,
    position: content.position,
    company: content.company
  };
}

function formatMediaFromApi(apiMedia: any): MediaItem {
  return {
    id: apiMedia.id.toString(),
    type: apiMedia.type,
    title: apiMedia.title,
    url: apiMedia.url,
    thumbnailUrl: apiMedia.thumbnail_url || undefined,
    fileSize: apiMedia.file_size || undefined,
    dimensions: apiMedia.dimensions || undefined,
    uploadedAt: apiMedia.created_at,
    uploadedBy: apiMedia.uploaded_by
  };
}

function formatMediaForApi(media: Partial<MediaItem>): any {
  return {
    type: media.type,
    title: media.title,
    url: media.url,
    thumbnail_url: media.thumbnailUrl,
    file_size: media.fileSize,
    dimensions: media.dimensions,
    uploaded_by: media.uploadedBy
  };
}