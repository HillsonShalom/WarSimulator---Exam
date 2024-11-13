import { Role } from "./enums";

interface IOrganization {
  name: string;
  role: Role;
  resources: {
    name: string;
    amount: number;
  }[];
  budget: number;
  region?: string;
}

export default IOrganization;
