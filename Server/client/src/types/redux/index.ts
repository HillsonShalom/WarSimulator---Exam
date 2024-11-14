import { IGetAccount, IOrganizationsOptions } from "../DTOs/response/fromAccount";

export enum DataStatus {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  IDLE = "IDLE",
}

interface statesParent {
    error: string | null;
    status: DataStatus;
}

export interface orgsState extends statesParent {
    orgs: IOrganizationsOptions[]
}

export interface accountState extends statesParent {
    account: IGetAccount | null
}