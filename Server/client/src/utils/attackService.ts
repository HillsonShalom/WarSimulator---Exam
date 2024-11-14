export const fetchLoadMissile = async (): Promise<returnType> => {
  try {

    return [true, ""]
  } catch (err) {
    return [false, (err as Error).message]
  }
};

export const fetchLaunch = async (): Promise<returnType> => {
    try {
      
      return [true, ""]
    } catch (err) {
      return [false, (err as Error).message]
    }
  };

type returnType = [boolean, string];
