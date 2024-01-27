const User = require('../models/crud');

const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const data = await User.create({
            name,
            email,
            password
        });
        if (data) {
            res.status(200).json({
                status: 'Successfull!',
                data
            });
        } else {
            res.status(404).json({
                status: 'failed!',
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 'failed!',
            err
        });
    }
}

const getData = async (req, res) => {
    try {
        const data = await User.find();
        if (data) {
            res.status(200).json({
                status: 'Successfull!',
                data
            });
        } else {
            res.status(404).json({
                status: 'Failed!',
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 'Failed!',
            err
        });
    }
}

const getDataById = async (req, res) => {
    try {
        const _id = req?.params?.id;
        const data = await User.findById({ "_id": _id });
        if (data) {
            res.status(200).json({
                status: 'Successfull!',
                data
            });
        } else {
            res.status(404).json({
                status: 'No Data Found!',
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 'Failed!',
            err
        });
    }
}

const upDateData = async (req, res) => {
    try {
        const _id = req?.params?.id;
        const upDatedData = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        if (upDatedData) {
            res.status(200).json({
                status: 'Successfull!',
                upDatedData
            });
        } else {
            res.status(404).json({
                status: 'failed!'
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 'failed!',
            err
        });
    }
}

const deleteData = async (req, res) => {
    try {
        const _id = req?.params?.id;
        const deletedData = await User.findByIdAndDelete(_id);
        if (deletedData) {
            res.status(200).json({
                status: 'Successfull!',
                deletedData
            });
        } else {
            res.status(404).json({
                status: 'Failed!'
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 'Failed!',
            err
        });
    }
}

module.exports = {
    create,
    getData,
    getDataById,
    upDateData,
    deleteData
}