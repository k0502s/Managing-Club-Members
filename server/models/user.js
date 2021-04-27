import mongoose from 'mongoose';
import moment from 'moment';

// Create Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User',
    },
    cart: {
        type: Array,
        default: [],
    },
    register_date: {
        type: Date,
        default: moment().format('YYYY-MM-DD hh:mm:ss'),
    },
});

const User = mongoose.model('User', UserSchema);

export default User;
