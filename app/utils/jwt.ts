
import jwt from "jsonwebtoken"

export const verifyToken = (token : string , secret : string) =>{
    try{
        const verifiedToken = jwt.verify(token,secret)
        return {
            success : true,
            data : verifiedToken
        }
    }
    catch(err : any){
        return {
            success  : false,
            message : err.message
        }
    }

}