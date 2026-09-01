import type { Achievement } from '@/lib/types';

/** TODO(content): confirm against the club's award records. */
export const achievements: Achievement[] = [
  {
    id: 'env-2025',
    title: 'Environmental Project of the Year',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description: 'For Shoreline, and specifically for six unbroken years of monthly data.',
  },
  {
    id: 'community-2024',
    title: 'Best Community Partnership',
    competition: 'Leo District 306 D2 Convention',
    year: '2024',
    level: 'winner',
    description: 'For handing the Floodline canal map to four residents’ associations.',
  },
  {
    id: 'club-2023',
    title: 'Most Active Club',
    competition: 'Leo District 306 D2 Convention',
    year: '2023',
    level: 'runner-up',
  },
];
