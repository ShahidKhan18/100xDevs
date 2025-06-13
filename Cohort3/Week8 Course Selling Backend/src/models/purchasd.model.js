const mongoose = require("mongoose");

const purchasedSchema = new mongoose.Schema({
    userId: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    courseId: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    purchaseDate: {
        require: true,
        type: Date,
        default: Date.now,
    }
});

const Purchased = mongoose.model("Purchased", purchasedSchema);
module.exports = Purchased;
