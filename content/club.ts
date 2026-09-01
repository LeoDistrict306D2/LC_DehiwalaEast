import type { Club } from '@/lib/types';

/**
 * Leo Club of Dehiwala East — club record.
 *
 * TODO(content): charter date, roster, contact details, and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Dehiwala East',
  shortName: 'Dehiwala East',
  tagline: 'Work that holds the line.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A Leo club serving Dehiwala and the coast east of the railway line. We work where the sea, the canal and the city meet — on the beach, in the schools, and along the drains that flood every season.',
  charterDate: '2017-06-24',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Dehiwala East',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Dehiwala East emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Leo Club of Dehiwala East members during a coastal clean-up',
    width: 2000,
    height: 2667,
  },

  contact: {
    email: 'leodehiwalaeast@gmail.com',
    address: 'Dehiwala, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leoclubofdehiwalaeast',
    instagram: 'https://www.instagram.com/leodehiwalaeast',
    email: 'leodehiwalaeast@gmail.com',
  },

  siteUrl: 'https://dehiwalaeast.leo306d2.org',

  stats: [
    { id: 'years', value: 8, suffix: '+', label: 'Years of service' },
    { id: 'members', value: 52, label: 'Active members' },
    { id: 'projects', value: 61, label: 'Projects run' },
    { id: 'coast', value: 14, suffix: ' km', label: 'Coastline covered' },
  ],

  about: {
    story: [
      'Dehiwala East sits between the sea and the city, and both make demands. The club was chartered in 2017 by members who had spent a season helping neighbours bail out flooded houses and decided that turning up afterwards was not good enough.',
      'The work since has followed the geography. Coastal clean-ups on the beach side. Drain and canal clearing on the inland side. Schools in between, where most of our members came from.',
      'It is unglamorous, repetitive work, and repetition is the point. A beach cleaned once is a photograph. A beach cleaned every month is a different beach.',
    ],
    mission:
      'To keep the coast, canals and schools of Dehiwala East in better condition each year than the last, through work we repeat rather than announce.',
    vision:
      'A neighbourhood where the sea is swimmable, the drains run, and the young people fixing both grew up here.',
    values: [
      {
        title: 'Turn up again',
        description:
          'Every recurring project has a fixed date in the calendar. Consistency beats intensity.',
      },
      {
        title: 'Work with residents',
        description:
          'Nothing we do is handed over at the end. Residents are on the roster from day one, or we do not start.',
      },
      {
        title: 'Fix upstream',
        description:
          'Clearing a drain matters less than finding what blocked it. We follow problems back to their source.',
      },
      {
        title: 'Train the next lot',
        description:
          'Every project has a member shadowing the lead. Nobody runs their first project alone.',
      },
    ],
  },
};
