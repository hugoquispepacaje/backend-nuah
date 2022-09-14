# Nuah Test Backend

Technical test for the FullStack programmer position at Nuah.

Small backend that has the following services:

* (GET) getItems: return all items. Route: https://nuah-test-back.herokuapp.com/nuah/item .
* (GET) getItem: return item by id. Route: http://nuah-test-back.herokuapp.com/nuah/item/:id .
* (GET) getOrders: return all orders. Route: http://nuah-test-back.herokuapp.com/nuah/order .
* (GET) getOrder: return order by id. Route: http://nuah-test-back.herokuapp.com/nuah/order/:id .
* (POST) createOrder: create an order. Route: http://nuah-test-back.herokuapp.com/nuah/order .
* (PUT) updateOrder: update an order. Route: http://nuah-test-back.herokuapp.com/nuah/order/:id .
* (DELETE) deleteOrder: delete an order. Route: http://nuah-test-back.herokuapp.com/nuah/order/:id .

Packages used:

* body-parser
* cors
* dotenv
* express
* mongoose
* morgan
* validatorjs

## Local deployment

To deploy the project locally, simply install the dependencies with the 'npm install' command and then enter 'npm start'.
