const mongoose = require("mongoose");

const admin_schema = mongoose.Schema(
    {
        admin_name: {
            type: String,
            trim: true
        },
        admin_contact: {
            type: Number, 
            default: 0
        },
    },
    {
        timestamps: true
    }
);

const admin = mongoose.model("Admin",admin_schema)

module.exports = admin