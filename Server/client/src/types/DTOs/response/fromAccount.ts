export interface IOrganizationsOptions {
  name: string;
  role: string;
  region?: string;
}

export interface IGetAccount {
  username: string;
  organization: {
    name: string;
    role: ERole;
    region?: string;
    resources: {
      id: {
        name: string;
        description: string;
        speed: number;
        intercepts: string[];
        price: number;
      };
      amount: number;
    }[];
  };
}


export enum ERole {
    ATTAK = "att",
    DEFENSE = 'def'
}
