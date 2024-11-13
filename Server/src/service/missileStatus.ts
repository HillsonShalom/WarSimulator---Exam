import DispatchStatus from "../types/models/enums";
import Dispatch from "../types/schemas/dispatchSchema";

export const setTimeHit = async () => {
  try {
    const threat = await Dispatch.findById("").exec();
    if (threat && threat.status === DispatchStatus.INTERCEPTED) {
      return;
    } else if (threat) {
      threat.status = DispatchStatus.HIT;
      await threat.save();

      // socket.io
    }
  } catch (err) {
    console.error((err as Error).message)
  }
};
