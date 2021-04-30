import mongoose from 'mongoose';

const MapSchema = mongoose.Schema({
    La: String,
    Ma: String
}, { timestamps: true });

const Map = mongoose.model('Map', MapSchema);

export default Map;
