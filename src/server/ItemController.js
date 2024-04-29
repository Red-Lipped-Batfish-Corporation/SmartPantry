const item = require('./ItemModel');

const itemController = {

  async getItems(req, res, next) {
    try {
      const docs = await item.find();
      res.locals.doc = docs;
      console.log(docs);
      if (res.locals.doc === null) return next({
        log: 'Message: Item names not found in DB',
        status: 404,
        message: { error: 'Could not find items in DB!'},
      });
      return next();
    } catch (err) {
      return next({
        log: 'Error in itemController.getItem: ' + err,
        status: 500,
        message: { error: 'Message: ' + err},
      });
    }
  },

  async createItem(req, res, next) {
    try {
      const docs = await item.create({
        name: req.body.name,
        price: req.body.price,
        purchaseDate: req.body.purchaseDate,
        expirationDate: req.body.expirationDate
      });
      res.locals.doc = docs;
      return next();
    } catch (err) {
      return next({
        log: 'Error in itemController.createItem: ' + err,
        status: 500,
        message: { error: 'Message: ' + err },
      });
    }
  },

  async deleteItem(req, res, next) {
    try {
      const docs = await item.findOneAndDelete({
        name: req.body.name
      });
      res.locals.doc = docs; 
      return next();
    } catch (error) {
      return next({
        log: 'Error in itemController.deleteItem: ' + error,
        status: 500,
        message: { err: 'Message: ' + error},
      });
    }
  },
  async getItemsExpiringSoon (req, res, next)  {
    const now = new Date();
    const daysInAdvance = 3;
    const expiringSoonDate = new Date(now.getTime() + (daysInAdvance * 24 * 60 * 60 * 1000));
    
    try {
      const docs = await item.find({
        expirationDate: {
          $lte: expiringSoonDate
        }
      });
      res.locals.doc = docs;
      return next();
    } catch (err) {
      return next({
        log: 'Error in itemController.getItemsExpiringSoon: ' + err,
        status: 500,
        message: { error: 'An error occurred while fetching items expiring soon.' }
      });
    }
  },
};

module.exports = itemController;


/*
 * @Author: Christie Laferriere & Abel xabelpenguin@gmail.com
 * @Date: 2024-04-27 5:40 pm
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-04-29 19:14:23
 */