import express from 'express';
import * as controller from './controller.js';
import { validateOrder } from './validation.js';
const router = express.Router();

router.get('/', controller.getOrders);
router.get('/:id', controller.getOrder);
router.post('/', validateOrder, controller.createOrder);
router.put('/:id', validateOrder, controller.updateOrder);
router.delete('/:id', controller.deleteOrder);

export default router;