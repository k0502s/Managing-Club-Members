import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const ChatSchema = mongoose.Schema({
    name: String,
    opinion: String,
    email: String,
    registerDate: Date,
    text: String,
});

ChatSchema.plugin(mongoosePaginate);

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;
