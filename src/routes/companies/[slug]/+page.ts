import { error } from '@sveltejs/kit';
import { companies } from '$lib/data/companies';
import type { PageLoad } from './$types';

export const entries = () => companies.map((company) => ({ slug: company.slug }));
export const load: PageLoad = ({ params }) => {
  const company = companies.find((entry) => entry.slug === params.slug);
  if (!company) error(404, 'مجموعه موردنظر یافت نشد');
  return { company };
};
