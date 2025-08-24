const express = require('express');
const homeController = require('../controller/homeController.js');
const homeMongoController = require('../controller/homeMongoController.js');

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Pham Ngoc Duy');
    });

    // SEQUELIZE ROUTES 
    router.get('/home', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.getFindAllCrud);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    // MONGODB ROUTES
    router.get('/crud-mongo', homeController.getCRUD);
    router.post('/post-crud-mongo', homeMongoController.postCRUDMongo);
    router.get('/get-crud-mongo', homeMongoController.getFindAllCrudMongo);
    router.get('/edit-crud-mongo', homeMongoController.getEditCRUDMongo);
    router.post('/put-crud-mongo', homeMongoController.putCRUDMongo);
    router.get('/delete-crud-mongo', homeMongoController.deleteCRUDMongo);

    return app.use('/', router);

};

module.exports = initWebRoutes;