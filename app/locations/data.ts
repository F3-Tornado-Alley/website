// Central source of truth for all workout locations (AOs) and regions.
// City pages (/locations/[city]) and the locations index both read from here.

export interface ScheduleEntry {
  day: string;
  time: string;
  type: string;
}

export interface Workout {
  name: string;
  address: string;
  schedule: ScheduleEntry[];
  notes?: string;
  mapUrl: string;
  latitude: number;
  longitude: number;
}

export interface City {
  slug: string;
  name: string;
  region: string;
  aos: Workout[];
}

export const cities: City[] = [
  {
    slug: "edmond",
    name: "Edmond",
    region: "Tornado Alley",
    aos: [
      {
        name: "Ground Zero",
        address: "2221 E Memorial Rd, Edmond, OK 73013",
        schedule: [
          { day: "Monday", time: "0530-0615", type: "Bootcamp" },
          { day: "Wednesday", time: "0530-0615", type: "Bootcamp" },
          { day: "Friday", time: "0530-0615", type: "Bootcamp" },
          { day: "Saturday", time: "0700-0745", type: "Bootcamp" },
        ],
        latitude: 35.6092652,
        longitude: -97.4722437,
        mapUrl: "https://map.f3nation.com/?lat=35.6092652&lon=-97.4722437&zoom=15",
      },
      {
        name: "Iron Pup Tire Co.",
        address: "1901 W 15th St, Edmond, OK 73013",
        schedule: [{ day: "Saturday", time: "0530-0615", type: "Bootcamp" }],
        notes: 'Santa Fe High School - meet in the parking lot near the football stadium "The Wolf Den"',
        latitude: 35.6422334520722,
        longitude: -97.5101519855726,
        mapUrl: "https://map.f3nation.com/?lat=35.6422334520722&lon=-97.5101519855726&zoom=15",
      },
      {
        name: "The Gas Station",
        address: "4901 Explorer Dr, Edmond, OK 73012",
        schedule: [
          { day: "Monday", time: "0530-0615", type: "Bootcamp" },
          { day: "Wednesday", time: "0530-0615", type: "Bootcamp" },
        ],
        latitude: 35.6776422385679,
        longitude: -97.5488619498245,
        mapUrl: "https://map.f3nation.com/?lat=35.6776422385679&lon=-97.5488619498245&zoom=15",
      },
      {
        name: "The Jungle",
        address: "2733 Marilyn Williams Dr, Edmond, OK 73003",
        schedule: [
          { day: "Tuesday", time: "0530-0615", type: "Run" },
          { day: "Friday", time: "0530-0615", type: "Ruck" },
        ],
        notes: "Typically a 5K Run on Tuesdays. Fridays are Ruck - bring a weighted vest or backpack!",
        latitude: 35.683104,
        longitude: -97.507206,
        mapUrl: "https://map.f3nation.com/?lat=35.683104&lon=-97.507206&zoom=15",
      },
      {
        name: "The Junkyard",
        address: "1034 S Bryant Ave, Edmond, OK 73034",
        schedule: [
          { day: "Tuesday", time: "0530-0615", type: "Bootcamp" },
          { day: "Thursday", time: "0530-0615", type: "Bootcamp" },
        ],
        notes: "E.C. Hafer Park - meet at the second parking lot in the back left past the baseball diamonds",
        latitude: 35.645888,
        longitude: -97.456338,
        mapUrl: "https://map.f3nation.com/?lat=35.645888&lon=-97.456338&zoom=15",
      },
      {
        name: "Forged",
        address: "4600 E 2nd St, Edmond, OK 73034",
        schedule: [
          { day: "Monday", time: "0530-0615", type: "Bootcamp" },
          { day: "Wednesday", time: "0530-0615", type: "Bootcamp" },
          { day: "Friday", time: "0530-0615", type: "Bootcamp" },
        ],
        latitude: 35.6495231,
        longitude: -97.4214131,
        mapUrl: "https://map.f3nation.com/?lat=35.6495231&lon=-97.4214131&zoom=15",
      },
      {
        name: "The Ubermensch",
        address: "4509 Integris Parkway, Edmond, OK 73034",
        schedule: [{ day: "Sunday", time: "0500-0600", type: "Ruck" }],
        latitude: 35.6439035798384,
        longitude: -97.4236528568886,
        mapUrl: "https://map.f3nation.com/?lat=35.6439035798384&lon=-97.4236528568886&zoom=15",
      },
    ],
  },
];

export interface Region {
  name: string;
  description: string;
  statsUrl: string;
  regionInfoUrl: string | null;
  citySlugs: string[];
}

export const regions: Region[] = [
  {
    name: "Tornado Alley",
    description: "Edmond, Oklahoma workout locations",
    statsUrl: "https://pax-vault.f3nation.com/stats/region/35003",
    regionInfoUrl: "https://regions.f3nation.com/tornado-alley",
    citySlugs: ["edmond"],
  },
];

export const getCity = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

export const googleMapsDir = (w: Workout): string =>
  `https://www.google.com/maps/dir/?api=1&destination=${w.latitude},${w.longitude}`;

// Stable anchor id for an AO, shared by the ticker links and the city-page cards.
export const aoSlug = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
