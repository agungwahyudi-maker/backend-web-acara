import { Types } from "mongoose";
import jwt from "jsonwebtoken";
import { SECRET } from "./env";
import { User } from "../models/user.model";

export interface IUserToken extends Omit<User, "password" | "activationCode" | "isactive" | "email" | "fullName" | "profilePicture" | "username"> {
  id?: Types.ObjectId;
}

export const generateToken = (user: IUserToken): string => {
  const token = jwt.sign(user, SECRET, {
    expiresIn: "1h",
  });
  return token;
};
export const getUserData = (token: string) => {
  const user = jwt.verify(token, SECRET) as IUserToken;
  return user;
};
