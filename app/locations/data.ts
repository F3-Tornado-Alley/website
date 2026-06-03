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
    ],
  },
  {
    slug: "mustang",
    name: "Mustang",
    region: "Boomtown",
    aos: [
      {
        name: "The Corral",
        address: "Mustang, OK",
        schedule: [
          { day: "Wednesday", time: "0530-0615", type: "Bootcamp" },
          { day: "Saturday", time: "0600-0645", type: "Bootcamp" },
        ],
        latitude: 35.4045401542569,
        longitude: -97.72736293195,
        mapUrl: "https://map.f3nation.com/?lat=35.4045401542569&lon=-97.72736293195&zoom=15",
      },
    ],
  },
  {
    slug: "norman",
    name: "Norman",
    region: "Boomtown",
    aos: [
      {
        name: "Later Rather Than Sooner",
        address: "2501 Jenkins Ave, Norman, OK 73072",
        schedule: [{ day: "Saturday", time: "0600-0645", type: "Bootcamp" }],
        notes: "Meet in the parking lot south of the softball complex",
        latitude: 35.1948247,
        longitude: -97.4381404,
        mapUrl: "https://map.f3nation.com/?lat=35.1948247&lon=-97.4381404&zoom=15",
      },
    ],
  },
  {
    slug: "okc",
    name: "Oklahoma City",
    region: "Boomtown",
    aos: [
      {
        name: "Corporate",
        address: "The Village, Oklahoma City, OK",
        schedule: [{ day: "Saturday", time: "0600-0645", type: "Bootcamp" }],
        latitude: 35.534510509697,
        longitude: -97.5291069335429,
        mapUrl: "https://map.f3nation.com/?lat=35.534510509697&lon=-97.5291069335429&zoom=15",
      },
      {
        name: "The Bunker",
        address: "1212 Bedford Dr, Oklahoma City, OK 73116",
        schedule: [{ day: "Monday", time: "0530-0615", type: "Run/Ruck" }],
        notes: "Meet in the parking lot of Nichols Hills United Methodist Church",
        latitude: 35.54112,
        longitude: -97.53478,
        mapUrl: "https://map.f3nation.com/?lat=35.54112&lon=-97.53478&zoom=15",
      },
      {
        name: "Ol' Glory",
        address: "3701 S Lake Hefner Dr, Oklahoma City, OK 73120",
        schedule: [
          { day: "Tuesday", time: "0530-0615", type: "Bootcamp" },
          { day: "Thursday", time: "0530-0615", type: "Bootcamp" },
        ],
        notes: "Stars and Stripes Park - one of the best views in OKC!",
        latitude: 35.551505,
        longitude: -97.581957,
        mapUrl: "https://map.f3nation.com/?lat=35.551505&lon=-97.581957&zoom=15",
      },
      {
        name: "The Swamp",
        address: "415 S Robinson Ave, Oklahoma City, OK 73109",
        schedule: [
          { day: "Wednesday", time: "0530-0615", type: "Bootcamp" },
          { day: "Friday", time: "0530-0615", type: "Bootcamp" },
        ],
        notes:
          "Scissortail Park - meet at the stage on the north side near OKC Boulevard and Robinson, directly west of the Omni Hotel",
        latitude: 35.4613046,
        longitude: -97.5171868,
        mapUrl: "https://map.f3nation.com/?lat=35.4613046&lon=-97.5171868&zoom=15",
      },
    ],
  },
  {
    slug: "yukon",
    name: "Yukon",
    region: "Boomtown",
    aos: [
      {
        name: "Mill Hill",
        address: "500 W Vandament Ave, Yukon, OK 73099",
        schedule: [{ day: "Monday", time: "0515-0600", type: "Bootcamp" }],
        latitude: 35.5067,
        longitude: -97.7628,
        mapUrl: "https://map.f3nation.com/?lat=35.5067&lon=-97.7628&zoom=15",
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
    description: "Edmond area workout locations",
    statsUrl: "https://pax-vault.f3nation.com/stats/region/35003",
    regionInfoUrl: "https://regions.f3nation.com/tornado-alley",
    citySlugs: ["edmond"],
  },
  {
    name: "Boomtown",
    description: "Mustang, Norman, OKC, and Yukon area workout locations",
    statsUrl: "https://pax-vault.f3nation.com/stats/region/50857",
    regionInfoUrl: null,
    citySlugs: ["mustang", "norman", "okc", "yukon"],
  },
];

export const getCity = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

export const googleMapsDir = (w: Workout): string =>
  `https://www.google.com/maps/dir/?api=1&destination=${w.latitude},${w.longitude}`;
