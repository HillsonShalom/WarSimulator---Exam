import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import AppResError from "../../types/extensions/AppResError";
import { loginDTO } from "../../types/DTOs/accountDTOs";
import User from "../../types/schemas/userSchema";
import IOrganization from "../../types/models/organization";

const login = async (
  req: Request<any, any, loginDTO>,
  res: Response
) => {
  try {
    const user = await User.findOne({ username: req.body.username }).populate('organization').exec();
    if (!user) throw new AppResError(404, "Ther's no user with that name!");

    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new AppResError(404, "Wrong request");

    const token = jwt.sign({ id: user.id, role: (user.organization as IOrganization).role }, process.env.SECRET_KEY!, {
      expiresIn: "4h",
    });

    res.setHeader("Authorization", token);

    res.status(200).json({ token });
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default login