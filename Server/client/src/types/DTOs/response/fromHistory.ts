export interface ITableItem {
  id: string;
  launchTime: Date | null;
  name: string;
  fromOrg: string;
  toRegion: string;
  timeToHit: string;
  status: DispatchStatus;
}

export enum DispatchStatus {
  LOADED = "LOADED",
  LAUNCHED = "LAUNCHED",
  INTERCEPTED = "INTERCEPTED",
  HIT = "HIT",
}
