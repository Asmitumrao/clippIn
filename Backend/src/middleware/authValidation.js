import joi from "joi";

const signUpValidation = (req, res, next) => {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        console.log("enter all fields properly")
        return res.status(400).json({ message: "Enter All fields Properly", success: false })
    }

    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        console.log("enter all fields properly")
        return res.status(400).json({ message: error?.details?.[0]?.message ?? "Enter All fields Properly",success: false })
    }
    next();
}


const loginValidation = (req, res, next) => {
    const { email , password } = req.body;
    if ( !email || !password) {
        console.log("enter all fields properly")
        return res.status(400).json({ message: "Enter All fields Properly", success: false })
    }
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        console.log(error?.details?.[0]?.message);
        return res.status(400).json({ message: error?.details?.[0]?.message ?? "Enter All fields Properly",success: false });
    }
    console.log("login validated");
    next();
}


export { signUpValidation, loginValidation };