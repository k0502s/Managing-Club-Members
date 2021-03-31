import express from 'express';
import multer from 'multer';
import Member from '../../models/member.js';

const router = express.Router();

//=================================
//             Member
//=================================

import multerS3 from 'multer-s3';
import path from 'path';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
});

const uploadS3 = multer({
    storage: multerS3({
        s3,
        bucket: 'jinseokproject1/upload',
        region: 'ap-northeast-2',
        key(req, file, cb) {
            const ext = path.extname(file.originalname); // 파일 확장자
            const basename = path.basename(file.originalname, ext); //
            cb(null, basename + new Date().valueOf() + ext); // 파일 중복이 없도록 설정하는 것들
        },
    }),
    limits: { fileSize: 100 * 1024 * 1024 }, //파일 용량 사이즈 설정
});

router.post('/image', uploadS3.single('file'), function (req, res, next) {
    res.json({ success: true, filePath: req.file.location, fileName: req.file.originalname });
});

router.post('/', async (req, res) => {
    try {
        const member = new Member(req.body);

        await member.save(() => {
            res.status(200).json({ success: true });
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(err);
    }
});

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

router.get('/', async (req, res) => {
    try {
        const { page, size, name } = req.query;
        var condition = name ? { name: { $regex: new RegExp(name), $options: 'i' } } : {};

        const { limit, offset } = getPagination(page, size);

        await Member.paginate(condition, { offset, limit, sort: { createdAt: -1 } }).then((data) => {
            console.log(data);
            res.send({
                totalItems: data.totalDocs,
                memberdata: data.docs,
                totalPages: data.totalPages,
                currentPage: data.page - 1,
            });
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Member.findByIdAndRemove(id, { useFindAndModify: false }).then((data) => {
            res.send({
                success: true,
            });
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        await Member.findById(id).then((data) => {
            if (!data) res.status(404).send({ message: 'Not found id ' });
            res.send(data);
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Member.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then((data) => {
            res.send({ message: 'updated successfully.' });
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(err);
    }
});

export default router;
