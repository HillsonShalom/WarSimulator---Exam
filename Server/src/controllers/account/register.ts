import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AppResError from "../../types/extensions/AppResError";
import { registerDTO } from "../../types/DTOs/accountDTOs";
import Organization from "../../types/schemas/organizationSchema";
import User from "../../types/schemas/userSchema";

const register = async (req: Request<any, any, registerDTO>, res: Response) => {
  try {
    const org = await Organization.findOne({ name: req.body.organization });
    if (!org) throw new AppResError(404, "Organization not found!");

    const user = new User({
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 5),
      organization: org.id,
    });
    
    const id = (await user.save()).id;
    res
      .status(201)
      .json({ message: "Your accout has created successfully", id });
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default register;
