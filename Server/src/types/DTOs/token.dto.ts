import { Types } from "mongoose";

interface TokenDto {
  id: Types.ObjectId;
  role: "att" | "def" | "adm";
}

export default TokenDto;
