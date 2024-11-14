import { createDto } from "../types/DTOs/requests/attackDTOs";

const baseUrl = "http://localhost:8201/api/attack";

export const fetchLoadMissile = async (dto: createDto): Promise<returnType> => {
  try {
    const token = localStorage.getItem("Authorization");
    if (!token) throw new Error("login first!")
    const res = await fetch(baseUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(dto),
    }).then(d => d.json()) as {id: string}
    if (!res) throw new Error(`login first!`);

    return [true, res.id]
  } catch (err) {
    return [false, (err as Error).message]
  }
};

export const fetchLaunch = async (dto: string): Promise<returnType> => {
    try {
      const token = localStorage.getItem("Authorization");
    if (!token) throw new Error("login first!")
    const res = await fetch(baseUrl + "/" + dto, {
      method: "PATCH",
      headers: {
        "Authorization": token
      }
    })
    if (res.status != 200) throw new Error(`login first!`);

    return [true, ""]
    } catch (err) {
      return [false, (err as Error).message]
    }
  };

type returnType = [boolean, string];
