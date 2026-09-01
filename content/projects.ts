import type { Project } from '@/lib/types';

/**
 * Projects.
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1200,
});

export const projects: Project[] = [
  {
    id: 'shoreline',
    slug: 'shoreline',
    title: 'Shoreline',
    summary:
      'A monthly beach clean on the Dehiwala stretch, run on the first Sunday, every month, since 2019.',
    category: 'environment',
    year: '2025/26',
    date: '2025-09-07',
    location: 'Dehiwala beach',
    featured: true,
    heroImage: placeholder('Volunteers collecting waste on Dehiwala beach at dawn'),
    story: [
      'The first Sunday of every month, 6 a.m., at the railway crossing. That has not changed in six years.',
      'We weigh what comes off the beach and log it, because the weight is the only way to tell whether the beach is getting better or whether we are just getting better at collecting. It is going down: the 2019 average was 340 kg a session, last year it was 190 kg.',
      'The rise in single-use plastic after the 2023 season showed up in our log two months before it showed up anywhere else. That is the argument for keeping records.',
    ],
    objectives: [
      'Clear the Dehiwala stretch on a fixed monthly schedule',
      'Weigh and log every collection to track the trend',
      'Keep at least fifteen residents on each roster',
    ],
    impact: [
      { id: 'sessions', value: 78, label: 'Sessions run' },
      { id: 'waste', value: 17400, suffix: ' kg', label: 'Waste removed' },
      { id: 'volunteers', value: 1240, label: 'Volunteer turnouts' },
    ],
  },
  {
    id: 'floodline',
    slug: 'floodline',
    title: 'Floodline',
    summary:
      'Mapping and clearing the canal drains inland of the railway before each monsoon, with the residents who flood.',
    category: 'community-service',
    year: '2025/26',
    date: '2025-04-19',
    location: 'Dehiwala East canal network',
    featured: true,
    heroImage: placeholder('Volunteers clearing a blocked canal drain'),
    story: [
      'We spent the first season not clearing anything — just walking the network and marking every blockage on a map. Ninety-one of them.',
      'Clearing came second, and it went faster because we knew where to go. The map is now maintained by the residents’ associations of four lanes, who update it after every heavy rain.',
    ],
    objectives: [
      'Map every blockage in the East canal network',
      'Clear the priority points before the October monsoon',
      'Hand the map to the residents’ associations to maintain',
    ],
    impact: [
      { id: 'mapped', value: 91, label: 'Blockages mapped' },
      { id: 'cleared', value: 74, label: 'Cleared before monsoon' },
      { id: 'houses', value: 210, label: 'Houses out of the flood line' },
    ],
  },
  {
    id: 'sea-school',
    slug: 'sea-school',
    title: 'Sea School',
    summary:
      'Swim-safety and water-awareness sessions for Grade 6–8 students at three coastal schools.',
    category: 'education',
    year: '2024/25',
    date: '2024-11-16',
    location: 'Dehiwala',
    featured: true,
    heroImage: placeholder('A water-safety session with schoolchildren'),
    story: [
      'Sri Lanka loses people to drowning every year within sight of the shore, and a surprising number of children who live beside the sea cannot swim.',
      'Run with two qualified instructors and the schools’ PE staff, so the sessions continue on the timetable after we finish.',
    ],
    impact: [
      { id: 'students', value: 186, label: 'Students trained' },
      { id: 'schools', value: 3, label: 'Schools' },
      { id: 'swimmers', value: 71, label: 'Now swimming unaided' },
    ],
  },
  {
    id: 'lantern',
    slug: 'lantern',
    title: 'Lantern',
    summary: 'Vesak lantern workshop and display with the children of the fishing community.',
    category: 'youth-development',
    year: '2024/25',
    date: '2024-05-23',
    location: 'Dehiwala',
    heroImage: placeholder('Children assembling Vesak lanterns'),
    impact: [
      { id: 'children', value: 94, label: 'Children took part' },
      { id: 'lanterns', value: 94, label: 'Lanterns made' },
    ],
  },
  {
    id: 'bookshelf',
    slug: 'bookshelf',
    title: 'Bookshelf',
    summary: 'Restocking three school libraries with Sinhala, Tamil and English titles.',
    category: 'education',
    year: '2023/24',
    date: '2024-02-08',
    location: 'Dehiwala East',
    heroImage: placeholder('Books sorted for distribution to school libraries'),
    impact: [
      { id: 'books', value: 1450, label: 'Books placed' },
      { id: 'languages', value: 3, label: 'Languages' },
    ],
  },
  {
    id: 'first-aid',
    slug: 'first-aid',
    title: 'First Aid on the Sand',
    summary:
      'Basic first-aid and rescue training for lifeguards and vendors working the beach.',
    category: 'health',
    year: '2023/24',
    date: '2023-08-12',
    location: 'Dehiwala beach',
    heroImage: placeholder('A first-aid training session on the beach'),
    impact: [
      { id: 'trained', value: 38, label: 'People certified' },
      { id: 'kits', value: 12, label: 'Kits placed along the beach' },
    ],
  },
];
