import Validator from 'validatorjs';

const validateOrder = (req, res, next) => {
  let order = {
    'items': req.body.items,
    'totalQuantity': req.body.totalQuantity,
    'totalAmount': req.body.totalAmount,
  };
  let rules = {
    items: 'required|array',
    totalQuantity: 'required|numeric',
    totalAmount: 'required|numeric',
  };
  let validation = new Validator(order, rules);
  if (validation.passes()) {
    req.orderValidated = order;
    next();
  } else {
    let errors = validation.errors.all();
    res.status(400).json({ 'error': errors });
  }
}

export {
  validateOrder
}