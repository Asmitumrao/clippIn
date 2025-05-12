import jwt from "jsonwebtoken";


const userValidate = (req, res, next) => {

    const token = req.cookies.token ?? req.headers['token'];

    if(!token) {
        console.log("no token provided")
        return res.status(409).json({
            message: "user not logged in",
            success: false
        });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded);
        if(!decoded) {
            console.log("token not valid")
            return res.status(409).json({
                message: "user not logged in",
                success: false
            });
        }
        console.log("token verified", decoded);
    
        req.user = decoded;
        next();
    }
    catch(error){
        return res.status(410).json({
            message: "jwt expired",
            success: false
        });
    }
}


const sellerValidate = (req, res, next) => {
    const token = req.cookies.sellerToken ?? req.headers['sellerToken'];

    if(!token) {
        console.log("no token provided")
        return res.status(409).json({
            message: "seller not logged in",
            success: false
        });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded);
        if(!decoded) {
            console.log("token not valid")
            return res.status(409).json({
                message: "user not logged in",
                success: false
            });
        }
        console.log("token verified", decoded);
    
        req.seller = decoded;
        next();
    }
    catch(error){
        return res.status(410).json({
            message: "jwt expired",
            success: false
        });
    }

}
export { userValidate, sellerValidate };