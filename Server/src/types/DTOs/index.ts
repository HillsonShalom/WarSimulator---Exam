import DispatchStatus from "../models/enums";

export interface ITableItem {
    id: string;
    launchTime: Date | null;
    name: string;
    fromOrg: string;
    toRegion: string
    timeToHit: string;
    status: DispatchStatus
}