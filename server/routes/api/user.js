import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config/index.js';
import auth from '../../middleware/auth.js';
const { JWT_SECRET } = config;

import User from '../../models/user.js';
import Member from '../../models/member.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        if (!users) throw Error('No users');
        res.status(200).json(users);
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

router.post('/', (req, res) => {
    console.log(req);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: '모든 필드를 채워주세요' });
    }

    User.findOne({ email }).then((user) => {
        if (user) return res.status(400).json({ msg: '이미 가입된 유저가 존재합니다' });
        const newUser = new User({
            name,
            email,
            password,
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save().then((user) => {
                    jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                            },
                        });
                    });
                });
            });
        });
    });
});

router.post('/:userName/profile', auth, async (req, res) => {
    try {
        const { previousPassword, password, rePassword, userId, email, name } = req.body;
        console.log(req.body, 'userName Profile');
        const result = await User.findById(userId, 'password');
        // Check for existing user
        //  const user = User.findOne({ email })
        //     if (user)
        //       return res.status(400).json({ msg: "이미 가입된 유저가 존재합니다" });

        //   if(!user) {
        //     await User.findByIdAndUpdate(
        //       userId,
        //       {
        //         name,
        //         email,
        //       },
        //       { new: true } //몽고DB 업데이트 조건
        //     );
        //   }

        bcrypt.compare(previousPassword, result.password).then((isMatch) => {
            if (!isMatch) {
                return res.status(400).json({
                    match_msg: '기존 비밀번호와 일치하지 않습니다',
                });
            } else {
                if (password === rePassword) {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) throw err;
                            result.password = hash;
                            result.name = name;
                            result.email = email;
                            result.save();
                        });
                    });
                    res.status(200).json({ success_msg: '비밀번호 업데이트에 성공했습니다' });
                } else {
                    res.status(400).json({ fail_msg: '새로운 비밀번호가 일치하지 않습니다' });
                }
            }
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

router.post('/warn', auth, (req, res) => {
    User.findOne({ _id: req.user.id }, (err, userInfo) => {
        let duplicate = false;
        userInfo.cart.forEach((item) => {
            if (item.id === req.body.warndata) {
                duplicate = true;
            }
        });

        if (duplicate) {
            User.findOneAndUpdate(
                { _id: req.user.id, 'cart.id': req.body.warndata },
                //$inc 올려준다, 더해준다는 의미이며
                //$.quantity을 통해 cart의 quantity을 1 올려준다는 의미이다.
                { $inc: { 'cart.$.quantity': 1 } },

                { new: true },
                (err, userInfo) => {
                    if (err) return res.status(400).json({ success: false, err });
                    res.status(200).send(userInfo.cart);
                }
            );
        } else {
            User.findOneAndUpdate(
                { _id: req.user.id },
                {
                    $push: {
                        cart: {
                            id: req.body.warndata,
                            quantity: 1,
                            date: Date.now(),
                        },
                    },
                },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.status(400).json({ success: false, err });
                    res.status(200).send(userInfo.cart);
                }
            );
        }
    });
});

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

router.get('/warnlist_by_id', (req, res) => {
    console.log(req);
    const page = req.query.page;
    const size = req.query.size;

    const { limit, offset } = getPagination(page, size);
    const options = {
        limit: limit,
        offset: offset,
        populate: 'writier',
    };
    let type = req.query.type;
    let warnmemberIds = req.query.id;

    if (type === 'array') {
        let ids = req.query.id.split(',');
        warnmemberIds = ids.map((item) => {
            return item;
        });
    }
    //여러개 상품 id을 이용하여 여러 개 삼품 가져올 수 있게한다.
    const condition = { _id: { $in: warnmemberIds } };
    //warnmemberIds를 이용해서 DB에서 productId와 같은 상품의 정보를 가져온다. //id값이 여러개 들어 있는 배열을 못넣어서 $in을 사용함.
    Member.paginate(condition, { offset, limit, sort: { createdAt: -1 } }).then((warnmember) => {
        res.status(200).send({
            totalItems: warnmember.totalDocs,
            warndata: warnmember.docs,
            totalPages: warnmember.totalPages,
            currentPage: warnmember.page - 1,
        });
    });
});

router.get('/removeWarnMember', auth, (req, res) => {
    User.findOneAndUpdate(
        { _id: req.user.id },
        {
            $pull: { cart: { id: req.query.id } },
        },
        { new: true },
        (err, userInfo) => {
            let cart = userInfo.cart;
            let array = cart.map((item) => {
                return item.id;
            });

            Member.find({ _id: { $in: array } })
                .populate('writer')
                .exec((err, listInfo) => {
                    return res.status(200).json({
                        listInfo,
                        cart,
                    });
                });
        }
    );
});

export default router;
