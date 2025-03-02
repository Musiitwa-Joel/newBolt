import express from 'express';
import pool from '../db.js';
import { authenticate, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/content
// @desc    Get all content
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { type } = req.query;
    
    let query = 'SELECT * FROM content';
    const queryParams = [];
    
    if (type) {
      query += ' WHERE type = ?';
      queryParams.push(type);
    }
    
    query += ' ORDER BY updated_at DESC';
    
    const [content] = await pool.query(query, queryParams);
    
    // Get tags for each content item
    for (const item of content) {
      const [tags] = await pool.query(
        'SELECT tag FROM content_tags WHERE content_id = ?',
        [item.id]
      );
      
      item.tags = tags.map(t => t.tag);
    }
    
    res.json(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/content/:id
// @desc    Get content by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const [content] = await pool.query(
      'SELECT * FROM content WHERE id = ?',
      [req.params.id]
    );
    
    if (content.length === 0) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    const contentItem = content[0];
    
    // Get tags
    const [tags] = await pool.query(
      'SELECT tag FROM content_tags WHERE content_id = ?',
      [contentItem.id]
    );
    
    contentItem.tags = tags.map(t => t.tag);
    
    res.json(contentItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/content
// @desc    Create new content
// @access  Private (Admin only)
router.post('/', authenticate, isAdmin, async (req, res) => {
  const { 
    type, 
    title, 
    content, 
    slug, 
    author, 
    featured, 
    image, 
    category, 
    tags,
    position,
    company
  } = req.body;
  
  try {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();
      
      // Insert content
      const [result] = await connection.query(
        `INSERT INTO content 
         (type, title, content, slug, author, featured, image, category, position, company) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [type, title, content, slug, author, featured || false, image, category, position, company]
      );
      
      const contentId = result.insertId;
      
      // Insert tags if provided
      if (tags && tags.length > 0) {
        const tagValues = tags.map(tag => [contentId, tag]);
        await connection.query(
          'INSERT INTO content_tags (content_id, tag) VALUES ?',
          [tagValues]
        );
      }
      
      await connection.commit();
      
      // Get the created content with tags
      const [newContent] = await connection.query(
        'SELECT * FROM content WHERE id = ?',
        [contentId]
      );
      
      const [contentTags] = await connection.query(
        'SELECT tag FROM content_tags WHERE content_id = ?',
        [contentId]
      );
      
      const createdContent = newContent[0];
      createdContent.tags = contentTags.map(t => t.tag);
      
      connection.release();
      res.status(201).json(createdContent);
    } catch (err) {
      await connection.rollback();
      connection.release();
      throw err;
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/content/:id
// @desc    Update content
// @access  Private (Admin only)
router.put('/:id', authenticate, isAdmin, async (req, res) => {
  const { 
    type, 
    title, 
    content, 
    slug, 
    author, 
    featured, 
    image, 
    category, 
    tags,
    position,
    company
  } = req.body;
  
  try {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();
      
      // Update content
      await connection.query(
        `UPDATE content 
         SET type = ?, title = ?, content = ?, slug = ?, author = ?, 
             featured = ?, image = ?, category = ?, position = ?, company = ?
         WHERE id = ?`,
        [type, title, content, slug, author, featured || false, image, category, position, company, req.params.id]
      );
      
      // Delete existing tags
      await connection.query(
        'DELETE FROM content_tags WHERE content_id = ?',
        [req.params.id]
      );
      
      // Insert new tags if provided
      if (tags && tags.length > 0) {
        const tagValues = tags.map(tag => [req.params.id, tag]);
        await connection.query(
          'INSERT INTO content_tags (content_id, tag) VALUES ?',
          [tagValues]
        );
      }
      
      await connection.commit();
      
      // Get the updated content with tags
      const [updatedContent] = await connection.query(
        'SELECT * FROM content WHERE id = ?',
        [req.params.id]
      );
      
      const [contentTags] = await connection.query(
        'SELECT tag FROM content_tags WHERE content_id = ?',
        [req.params.id]
      );
      
      const result = updatedContent[0];
      result.tags = contentTags.map(t => t.tag);
      
      connection.release();
      res.json(result);
    } catch (err) {
      await connection.rollback();
      connection.release();
      throw err;
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/content/:id
// @desc    Delete content
// @access  Private (Admin only)
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM content WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    res.json({ message: 'Content deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;