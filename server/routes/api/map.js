import express from 'express';
import Map from '../../models/map.js';

const router = express.Router();

router.post('/address', async (req, res) => {
    try {
        const map = new Map(req.body);
        map.save(() => {
            res.status(200).json({ success: true });
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

export default router;
