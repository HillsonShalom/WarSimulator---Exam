import { Role } from "./enums";

interface IOrganization {
  name: string;
  role: Role;
  resources: {
    name: string;
    amount: number;
  }[];
  budget: number;
}

export default IOrganization;
