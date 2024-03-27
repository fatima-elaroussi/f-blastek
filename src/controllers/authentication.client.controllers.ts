import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Client from "../models/client";
import dotenv from "dotenv";
import crypto from 'crypto';
import { sendEmail } from "../utils/email";
const maxage = 60 * 60 * 24 * 7 * 1000;
dotenv.config();
const secret_key: any = process.env.SECRET_KEY;

export const registerClient = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log(email)

    const clientExist = await Client.findOne({ email });
    if (clientExist) {
      return res.status(400).json({ Message: "Client already exists" });
    }
    const newClient = new Client(req.body);

    await newClient.save();
    res.json({ message: "Client registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginClient = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const clientExist = await Client.findOne({ email });

  if (clientExist) {
    bcrypt
      .compare(password, clientExist.password)
      .then((isMatch: boolean) => {
        if (isMatch) {
          const payload = { id: clientExist.id, user_type_id: "client"};
          const token = jwt.sign(
            payload,
            secret_key,
            { expiresIn: "7d" },
            (err, token) => {
              if (err) {
                return res
                  .status(500)
                  .json({ Message: "Faild to generate token", Error: err });
              }
              console.log(token);
              res.cookie('user_token', token, { httpOnly: true, maxAge: maxage });
              res.json({
                Message: "The client Logged successfully",
                success: true,
                token: token,
              });
            }
          );
          
        } else {
          res.status(400).json({ Message: "Email or Password incorrect" });
        }
      })
      .catch((err) => {
        res.status(500).json({
          Message: "Error Comparing Password",
          Error: err,
        });
      });
  } else {
    return res.status(404).json({ message: "The client does not exist" });
  }
};

export const logoutClient = (req: Request, res: Response) => {

  return res.clearCookie('user_token').status(200).json({Message:"Loged out Successfully "})

}

export const forgotPasswordClient =async(req:Request,res:Response)=>{

 try{
  const email = req.body.email;
   
  const clientExist= await Client.findOne({email});

  if(!clientExist){
res.status(404).json({message:"there is no client with the given email"});
  }
if(clientExist){

  
  const resetToken = crypto.randomBytes(32).toString("hex");
  const tenMinutes = 10*60*1000;
  const currentTime = Date.now();
  const expiredTime = new Date(tenMinutes+currentTime);
  clientExist.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  clientExist.resetPasswordExpire  = expiredTime ;

 await clientExist.save({validateBeforeSave:false});
res.status(200).json({Message: "Generate Reset token successfully"})

  const resetUrl = `http://localhost:${process.env.PORT}/resetPasswordClient/:${resetToken}`
  await sendEmail({
    email: email,
    subject: "Reset Your Password",
    message: `we have received a password reset request please use the below link to reset your password\n\n${resetUrl}`,
  });

}else{
res.status(400).json({Message: "Faild to Generate Reset token "})

}
   
 }catch(err){
  res.status(500).json({ error: "Internal server error" });
 } 

}

export const resetPasswordClient=async (req:Request,res:Response)=>{


}