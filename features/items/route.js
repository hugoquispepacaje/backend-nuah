import express from 'express';
import { getItems, getItem } from './controller.js';

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);

export default router;