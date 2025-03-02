import express from 'express';
import pool from '../db.js';
import { authenticate, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/media
// @desc    Get all media
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { type } = req.query;
    
    let query = 'SELECT * FROM media';
    const queryParams = [];
    
    if (type) {
      query += ' WHERE type = ?';
      queryParams.push(type);
    }
    
    query += ' ORDER BY created_at DESC';
    
    const [media] = await pool.query(query, queryParams);
    res.json(media);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/media/:id
// @desc    Get media by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const [media] = await pool.query(
      'SELECT * FROM media WHERE id = ?',
      [req.params.id]
    );
    
    if (media.length === 0) {
      return res.status(404).json({ message: 'Media not found' });
    }
    
    res.json(media[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/media
// @desc    Add new media
// @access  Private (Admin only)
router.post('/', authenticate, isAdmin, async (req, res) => {
  const { 
    type, 
    title, 
    url, 
    thumbnail_url, 
    file_size, 
    dimensions, 
    uploaded_by 
  } = req.body;
  
  try {
    const [result] = await pool.query(
      `INSERT INTO media 
       (type, title, url, thumbnail_url, file_size, dimensions, uploaded_by) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [type, title, url, thumbnail_url, file_size, dimensions, uploaded_by]
    );
    
    const [newMedia] = await pool.query(
      'SELECT * FROM media WHERE id = ?',
      [result.insertId]
    );
    
    res.status(201).json(newMedia[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/media/:id
// @desc    Delete media
// @access  Private (Admin only)
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM media WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Media not found' });
    }
    
    res.json({ message: 'Media deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;