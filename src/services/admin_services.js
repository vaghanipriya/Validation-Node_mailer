const { Admin } = require("../model");

const create_admin_s = (data) => {
    return Admin.create(data);
};

module.exports = {
    create_admin_s,
};
