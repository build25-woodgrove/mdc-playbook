// This is a test express app -
//
import express from 'express';

const router = express.Router();

// hello route
router.get('/hello', (req, res) => res.send(`Hello word, ${req.query.name}!`));

export default router;
