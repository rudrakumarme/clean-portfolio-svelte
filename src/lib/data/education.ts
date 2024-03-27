import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Computer Software and Database Development',
		description: '',
		location: 'Toronto, Canada',
		logo: Assets.Unknown,
		name: '',
		organization: 'Loyalist College',
		period: { from: new Date(2023, 9, 7), to: new Date() },
		shortDescription: '',
		slug: 'loyalist-college',
		subjects: ['PhP', 'Java', 'Go', 'MySQL', 'Project Management', 'Networking', 'Business Communications']
	},
	{
		degree: 'Bachelor of Computer Applications',
		description: '',
		location: 'India',
		logo: Assets.Unknown,
		name: '',
		organization: 'Maharishi Dayanand University',
		period: { from: new Date(2016, 5, 1), to: new Date(2019, 5, 1) },
		shortDescription: '',
		slug: 'mdu',
		subjects: ['C', 'C++', 'Java', 'PHP (Possibly)', 'Database Management', 'Web Development', 'Problem-Solving', 'Communication', 'Teamwork', 'Time Management', 'Adaptability']
	}
];

export const title = 'Education';
