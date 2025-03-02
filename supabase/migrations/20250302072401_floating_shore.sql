-- Tredumo Database Schema

-- Create database
CREATE DATABASE IF NOT EXISTS tredumo;
USE tredumo;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor', 'viewer') NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default admin user (password: admin123)
INSERT INTO users (username, email, password, role) VALUES 
('admin', 'admin@tredumo.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- Content table
CREATE TABLE IF NOT EXISTS content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('page', 'blog', 'testimonial') NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  author VARCHAR(255) NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  image VARCHAR(255),
  category VARCHAR(255),
  position VARCHAR(255),
  company VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Content tags table
CREATE TABLE IF NOT EXISTS content_tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content_id INT NOT NULL,
  tag VARCHAR(255) NOT NULL,
  FOREIGN KEY (content_id) REFERENCES content(id) ON DELETE CASCADE,
  UNIQUE KEY unique_content_tag (content_id, tag)
);

-- Media table
CREATE TABLE IF NOT EXISTS media (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('image', 'video', 'document') NOT NULL,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  thumbnail_url VARCHAR(255),
  file_size INT,
  dimensions VARCHAR(50),
  uploaded_by VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default pages
INSERT INTO content (type, title, content, slug, author) VALUES
('page', 'Home', 'Welcome to Tredumo, the revolutionary education management platform.', 'home', 'Admin'),
('page', 'About', 'Tredumo was founded in 2022 with a mission to transform education management.', 'about', 'Admin'),
('page', 'Privacy Policy', 'At Tredumo, we take your privacy seriously. This policy explains how we collect and use your data.', 'privacy', 'Admin'),
('page', 'Terms of Service', 'By using Tredumo, you agree to these terms of service.', 'terms', 'Admin');

-- Insert default blog posts
INSERT INTO content (type, title, content, slug, author, featured, category) VALUES
('blog', 'The Future of Education Management', 'Explore how AI is transforming education management systems worldwide.', 'future-education-management', 'Admin', TRUE, 'Technology'),
('blog', 'Streamlining Admissions Processes', 'Learn how to improve your institution\'s admissions workflow.', 'streamlining-admissions', 'Admin', FALSE, 'Best Practices');

-- Insert tags for blog posts
INSERT INTO content_tags (content_id, tag) VALUES
(5, 'AI'),
(5, 'Education'),
(5, 'Future'),
(6, 'Admissions'),
(6, 'Workflow'),
(6, 'Efficiency');

-- Insert default testimonials
INSERT INTO content (type, title, content, slug, author, position, company) VALUES
('testimonial', 'Transformed Our Institution', 'Tredumo has completely transformed how we manage our educational processes.', 'testimonial-1', 'Jude Lubega', 'Vice Chancellor', 'Nkumba University'),
('testimonial', 'Incredible Analytics', 'The AI-driven insights have helped us identify areas for improvement that we never would have noticed otherwise.', 'testimonial-2', 'Hakim Mulinde', 'CTO', 'Nkumba University');

-- Insert default media
INSERT INTO media (type, title, url, thumbnail_url, dimensions, uploaded_by) VALUES
('image', 'Dashboard Preview', 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=200', '1920x1080', 'Admin'),
('image', 'Analytics Dashboard', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200', '1920x1080', 'Admin');