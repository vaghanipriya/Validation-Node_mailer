const { admin_Services } = require("../services");
const nodemailer = require("nodemailer");

const create_admin = async (req, res) => {
    try {
        //services

        const data = req.body;
        const new_admin = await admin_Services.create_admin_s(data);

        // send mail to admin mail
        // nodemailer

        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "vaghanipriya23@gmail.com",
                pass: "vzkcbnqsmrbnreoi",
            },
        });

        const mail_sent = await transport.sendMail({
            from: "vaghanipriya23@gmail.com",
            to: "hiralkunjadiya9@gmail.com",
            subject: "On this subject: DEMO MAIL",
            text: "HII HIRAL....... ",
        });

        if(!mail_sent){
            throw new Error("try this............")
        }


        res.status(200).json({
            success: true,
            message:"Admin created successfully & mail sent successfully",
            // data: new_admin,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_admin,
};
