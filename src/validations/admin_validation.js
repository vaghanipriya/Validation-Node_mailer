const Joi = require("joi");

// => IDEAL OBJECT
// => OBJECT TO BE CHECKED

const create_admin_V = async (req, res, next) => {
    try {
        // const ideal_object = Joi.keys().object()
        const ideal_object = Joi.object({
            admin_name: Joi.string().required().trim().min(4),
            admin_contact: Joi.number().required(),
        });

        const result = await ideal_object.validate(req.body);

        console.log(result);

        if (result.error) {
            throw new Error("Validation error");
        }
        next();
        res.status(200).json({
            message: "Validation file",
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = {
    create_admin_V,
};
