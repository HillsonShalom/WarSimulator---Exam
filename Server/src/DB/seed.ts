import fs from 'fs/promises'
import IMissile from '../types/models/missile'
import IOrganization from '../types/models/organization';
import Missile from '../types/schemas/missileSchema';
import Organization from '../types/schemas/organizationSchema';

export const seedMissiles = async () => {
    try {
        const missiles = await fs.readFile('./missiles.json', {encoding: 'utf-8'}).then(s => JSON.parse(s) as IMissile[] | undefined);
        if (!missiles) throw new Error("an error occurred when loading missile.json file")

        missiles.forEach(async (m) => {
            const missile = new Missile(m)
            await missile.save()
        });

        console.log("missiles have seeded successfully");
    } catch(err) {
        console.error((err as Error).message)
    }
}

export const seedOrganizations = async () => {
    try {
        const organizations = await fs.readFile('./organizations.json', {encoding: 'utf-8'}).then(s => JSON.parse(s) as IOrganization[] | undefined);
        if (!organizations) throw new Error("an error occurred when loading organizations.json file");

        organizations.forEach(async (o) => {
            const organization = new Organization(o);
            await organization.save()
        });

        console.log("organizations have seeded successfully");
    } catch(err) {
        console.error((err as Error).message)
    }
}