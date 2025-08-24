const bcrypt = require('bcrypt');
const User = require('../models/user_mongo.js');

const salt = bcrypt.genSaltSync(10);

const createNewUserMongo = async (data) => {
    try {
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        const newUser = new User({
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender === '1' ? true : false,
            roleId: data.roleId,
        });
        await newUser.save();
        return newUser;
    } catch (error) {
        throw error;
    }
};

const hashUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) reject(err);
            resolve(hash);
        });
    });
};

const getAllUsersMongo = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await User.find({}).lean();
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
};

const getUserInfoByIdMongo = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findById(userId).lean();
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
};

const updateUserMongo = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findById(data.id);
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.name = `${data.firstName} ${data.lastName}`;
                await user.save();
                let allUsers = await User.find({}).lean();
                resolve(allUsers);
            } else {
                reject(new Error('User not found'));
            }
        } catch (error) {
            reject(error);
        }
    });
};

const deleteUserMongo = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findById(userId);
            if (user) {
                await User.findByIdAndDelete(userId);
                resolve('User deleted successfully');
            } else {
                reject(new Error('User not found'));
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUserMongo,
    getAllUsersMongo,
    getUserInfoByIdMongo,
    updateUserMongo,
    deleteUserMongo
};
