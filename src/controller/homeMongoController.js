const db = require("../models");
const CRUDMongoService = require("../services/CRUDMongoService");

// MongoDB CRUD functions
const getFindAllCrudMongo = async (req, res) => {
    try {
        let data = await CRUDMongoService.getAllUsersMongo();
        return res.render("findAllUserMongo.ejs", { datalist: data });
    } catch (error) {
        console.error("Error fetching MongoDB users:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const postCRUDMongo = async (req, res) => {
    try {
        let message = await CRUDMongoService.createNewUserMongo(req.body);
        console.log(message);
        getFindAllCrudMongo(req, res);
    } catch (error) {
        console.error("Error creating MongoDB user:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const getEditCRUDMongo = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        try {
            let userData = await CRUDMongoService.getUserInfoByIdMongo(userId);
            return res.render("editUserMongo.ejs", { data: userData });
        } catch (error) {
            console.error("Error fetching MongoDB user:", error);
            return res.status(500).send("Internal Server Error");
        }
    } else {
        return res.send("User not found");
    }
};

const putCRUDMongo = async (req, res) => {
    let data = req.body;
    try {
        let allUsers = await CRUDMongoService.updateUserMongo(data);
        return res.render("findAllUserMongo.ejs", { datalist: allUsers });
    } catch (error) {
        console.error("Error updating MongoDB user:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const deleteCRUDMongo = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        try {
            await CRUDMongoService.deleteUserMongo(userId);
            getFindAllCrudMongo(req, res);
        } catch (error) {
            console.error("Error deleting MongoDB user:", error);
            return res.status(500).send("Internal Server Error");
        }
    } else {
        return res.send("User not found");
    }

};

module.exports = {
    getFindAllCrudMongo,
    postCRUDMongo,
    getEditCRUDMongo,
    putCRUDMongo,
    deleteCRUDMongo
};


