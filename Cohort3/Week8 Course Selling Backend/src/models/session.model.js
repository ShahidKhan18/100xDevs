const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    refreshToken: { type: String, required: true },
    used: { type: Boolean, default: false },
    expiresAt: { type: Date, required: true }
});

module.exports = mongoose.model('Session', sessionSchema);
