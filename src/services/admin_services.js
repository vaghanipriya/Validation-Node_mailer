const { Admin } = require("../model");

const create_admin_s = (data) => {
    return Admin.create(data);
};

const get_admin_S = () => {
    return Admin.find()
}


module.exports = {
    create_admin_s,
    get_admin_S
};
