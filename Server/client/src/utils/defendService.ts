import { interceptDto } from "../types/DTOs/requests/defendDTOs";

const baseUrl = "http://localhost:8201/api/defense";

export const fetchIntercept = async (dto: interceptDto): Promise<returnType> => {
    try {
      const token = localStorage.getItem("Authorization");
    if (!token) throw new Error("login first!")
    const res = await fetch(baseUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(dto)
    })
    if (res.status != 200) throw new Error(`login first!`);

    return [true, ""]
    } catch (err) {
      return [false, (err as Error).message]
    }
  };

type returnType = [boolean, string];
