"use strict"

const {db} = require("../fb");
const Trash = require("../models/trash");

let collectionName = "trash_JeanPierreProyect";

const createTrash = async (req, res) => {
    try {
        const model = {
            isFull: false,
            isEmpty: true,
            isActived: true,
            isDeleted: false,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        await db.collection(collectionName).add(model).then(()=>{
            res.status(201).send(model);
        }).catch((err)=>{
            res.status(400).send(err.message);
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getAllTrash = async (req, res) => {
    try {
        const trashList = [];
        const dataRef = db.collection(collectionName);
        const snapshot = await dataRef.get();
        if (snapshot.empty) {
            res.status(404).send("No trash found");
        } else {
            snapshot.forEach(doc => {
                const model = new Trash(
                    doc.id,
                    doc.data().isFull,
                    doc.data().isEmpty,
                    doc.data().isActived,
                    doc.data().isDeleted,
                    doc.data().createdAt,
                    doc.data().updatedAt
                );
                trashList.push(model);
            });
            res.send(trashList);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getTrashById = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = db.collection(collectionName).doc(id);
        const item = await doc.get();
        if (!item.exists) {
            res.status(404).send("Trash not found");
        } else {
            const model = new Trash(
                item.id,
                item.data().isFull,
                item.data().isEmpty,
                item.data().isActived,
                item.data().isDeleted,
                item.data().createdAt,
                item.data().updatedAt
            );
            res.send(model);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateTrashById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const doc = db.collection(collectionName).doc(id);
        const item = await doc.get();
        if (!item.exists) {
            res.status(404).send("Trash not found");
        } else {
            const model = {
                id: id,
                isFull: data.isFull,
                isEmpty: data.isEmpty,
                isActived: data.isActived,
                isDeleted: data.isDeleted,
                createdAt: data.createdAt,
                updatedAt: Date.now()
            };
            await doc.update(model).then(()=>{
                res.send(model);
            }).catch((err)=>{
                res.status(400).send(err.message);
            });
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteTrashById = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = db.collection(collectionName).doc(id);
        const item = await doc.get();
        if (!item.exists) {
            res.status(404).send("Trash not found");
        } else {
            await doc.delete().then(()=>{
                res.send("Trash deleted");
            }).catch((err)=>{
                res.status(400).send(err.message);
            });
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const markTrashAsFull = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = db.collection(collectionName).doc(id);
        const item = await doc.get();
        if (!item.exists) {
            res.status(404).send("Trash not found");
        } else {
            const model = {
                id: id,
                isFull: true,
                isEmpty: false,
                isActived: item.data().isActived,
                isDeleted: item.data().isDeleted,
                createdAt: item.data().createdAt,
                updatedAt: Date.now()
            };
            await doc.update(model).then(()=>{
                res.send(model);
            }).catch((err)=>{
                res.status(400).send(err.message);
            });
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const markTrashAsEmpty = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = db.collection(collectionName).doc(id);
        const item = await doc.get();
        if (!item.exists) {
            res.status(404).send("Trash not found");
        } else {
            const model = {
                id: id,
                isFull: false,
                isEmpty: true,
                isActived: item.data().isActived,
                isDeleted: item.data().isDeleted,
                createdAt: item.data().createdAt,
                updatedAt: Date.now()
            };
            await doc.update(model).then(()=>{
                res.send(model);
            }).catch((err)=>{
                res.status(400).send(err.message);
            });
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    createTrash,
    getAllTrash,
    getTrashById,
    updateTrashById,
    deleteTrashById,
    markTrashAsFull,
    markTrashAsEmpty
};