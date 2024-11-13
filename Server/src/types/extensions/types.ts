import Dispatch from "../schemas/dispatchSchema";
import Missile from "../schemas/missileSchema";
import Organization from "../schemas/organizationSchema";
import Purchase from "../schemas/purchaseSchema";
import User from "../schemas/userSchema";

const user = new User({});
export type UserType = typeof user;

const org = new Organization({});
export type OrganizationType = typeof org;

const missile = new Missile({});
export type MissileType = typeof missile;

const dispatch = new Dispatch({});
export type DispatchType = typeof dispatch;

const purchase = new Purchase({});
export type PurchaseType = typeof purchase;
