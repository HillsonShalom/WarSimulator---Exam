import { Role } from "../types/models/enums";
import IMissile from "../types/models/missile";
import IOrganization from "../types/models/organization";
import Missile from "../types/schemas/missileSchema";
import Organization from "../types/schemas/organizationSchema";

const seed = async () => {
  const iron_dome = new Missile({
    name: "Iron Dome",
    description:
      "A mobile all-weather air defense system designed to intercept and destroy short-range rockets and artillery shells.",
    speed: 3,
    intercepts: ["Qassam", "M-75", "Fajr-5", "Zelzal-2"],
    price: 50000,
  });
  await iron_dome.save();
  const iron_dome_id = (await Missile.findOne({ name: "Iron Dome" }))!.id;

  const davids_sling = new Missile({
    name: "David's Sling",
    description:
      "A mid-to-long range air defense system capable of intercepting large caliber rockets and short-range ballistic missiles.",
    speed: 4,
    intercepts: ["Shahab-3", "Fateh-110", "Quds-1"],
    price: 80000,
  });
  await davids_sling.save();
  const davids_sling_id = (await Missile.findOne({ name: "David's Sling" }))!
    .id;

  const patriot = new Missile({
    name: "Patriot",
    description:
      "A long-range air defense system that intercepts tactical ballistic missiles, cruise missiles, and advanced aircraft.",
    speed: 5,
    intercepts: ["Shahab-3", "Zelzal-2"],
    price: 100000,
  });
  await patriot.save();
  const patriot_id = (await Missile.findOne({ name: "Patriot" }))!.id;

  const arrow = new Missile({
    name: "Arrow",
    description:
      "A family of anti-ballistic missiles designed to intercept and destroy incoming missile threats at high altitudes.",
    speed: 5,
    intercepts: ["Shahab-3", "Fateh-110"],
    price: 120000,
  });
  await arrow.save();
  const arrow_id = (await Missile.findOne({ name: "Arrow" }))!.id;

  const qassam = new Missile({
    name: "Qassam",
    description:
      "A simple, locally made rocket used by militant groups for attacks at relatively short distances.",
    speed: 12,
    intercepts: [],
    price: 5000,
  });
  await qassam.save();
  const qassam_id = (await Missile.findOne({ name: "Qassam" }))!.id;

  const m_75 = new Missile({
    name: "M-75",
    description:
      "A medium-range rocket used by armed groups to target areas beyond the immediate borders.",
    speed: 13,
    intercepts: [],
    price: 15000,
  });
  await m_75.save();
  const m_75_id = (await Missile.findOne({ name: "M-75" }))!.id;

  const fajr_5 = new Missile({
    name: "Fajr-5",
    description:
      "A long-range rocket used for targeting urban centers and military installations.",
    speed: 14,
    intercepts: [],
    price: 30000,
  });
  await fajr_5.save();
  const fajr_5_id = (await Missile.findOne({ name: "Fajr-5" }))!.id;

  const zelzal_2 = new Missile({
    name: "Zelzal-2",
    description:
      "A heavy artillery rocket designed for long-distance bombardment with significant explosive power.",
    speed: 15,
    intercepts: [],
    price: 45000,
  });
  await zelzal_2.save();
  const zelzal_2_id = (await Missile.findOne({ name: "Zelzal-2" }))!.id;

  const shahab_3 = new Missile({
    name: "Shahab-3",
    description:
      "A medium-range ballistic missile developed for strategic strikes, capable of targeting distant locations.",
    speed: 15,
    intercepts: [],
    price: 70000,
  });
  await shahab_3.save();
  const shahab_3_id = (await Missile.findOne({ name: "Shahab-3" }))!.id;

  const fateh_110 = new Missile({
    name: "Fateh-110",
    description:
      "A short-range ballistic missile with precision targeting capabilities.",
    speed: 14,
    intercepts: [],
    price: 60000,
  });
  await fateh_110.save();
  const fateh_110_id = (await Missile.findOne({ name: "Fateh-110" }))!.id;

  const badr_1 = new Missile({
    name: "Badr-1",
    description:
      "A short-range ballistic missile used by the Houthis for regional attacks.",
    speed: 13,
    intercepts: [],
    price: 20000,
  });
  await badr_1.save();
  const badr_1_id = (await Missile.findOne({ name: "Badr-1" }))!.id;

  const quds_1 = new Missile({
    name: "Quds-1",
    description:
      "A cruise missile developed by regional forces for longer-range precision attacks.",
    speed: 14,
    intercepts: [],
    price: 40000,
  });
  await quds_1.save();
  const quds_1_id = (await Missile.findOne({ name: "Quds-1" }))!.id;

  /*********************************************************************************************** */

  const missiles = await Missile.find({});

  const idf1 = new Organization({
    name: "IDF - North",
    resources: [
      {
        id: iron_dome_id,
        amount: 25,
      },
      {
        id: davids_sling_id,
        amount: 15,
      },
    ],
    budget: 8000000,
    role: Role.DEFENSE,
    region: "north",
  });
  idf1.save();

  const idf2 = new Organization({
    name: "IDF - South",
    resources: [
      {
        id: iron_dome_id,
        amount: 30,
      },
      {
        id: patriot_id,
        amount: 20,
      },
    ],
    budget: 9000000,
    role: Role.DEFENSE,
    region: "south",
  });
  idf2.save();

  const idf3 = new Organization({
    name: "IDF - Center",
    resources: [
      { id: iron_dome_id, amount: 40 },
      { id: arrow_id, amount: 10 },
    ],
    budget: 10000000,
    role: Role.DEFENSE,
    region: "center",
  });
  idf3.save();

  const idf4 = new Organization({
    name: "IDF - West Bank",
    resources: [{ id: iron_dome_id, amount: 10 }],
    budget: 7000000,
    role: Role.DEFENSE,
    region: "west",
  });
  idf4.save();

  const enemy1 = new Organization({
    name: "Hezbollah",
    resources: [
      { id: fajr_5_id, amount: 20 },
      { id: zelzal_2_id, amount: 10 },
    ],
    budget: 3000000,
    role: Role.ATTACK,
  });
  enemy1.save();

  const enemy2 = new Organization({
    name: "Hamas",
    resources: [
      { id: qassam_id, amount: 50 },
      { id: m_75_id, amount: 30 },
    ],
    budget: 2500000,
    role: Role.ATTACK,
  });
  enemy2.save();

  const enemy3 = new Organization({
    name: "IRGC",
    resources: [
      { id: shahab_3_id, amount: 15 },
      { id: fateh_110_id, amount: 25 },
    ],
    budget: 4000000,
    role: Role.ATTACK,
  });
  enemy3.save();

  const enemy4 = new Organization({
    name: "Houthis",
    resources: [
      { id: badr_1_id, amount: 20 },
      { id: quds_1_id, amount: 15 },
    ],
    budget: 2000000,
    role: Role.ATTACK,
  });
  enemy4.save();
};

export default seed;
