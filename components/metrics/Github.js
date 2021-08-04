import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function GitHub() {
  const { data } = useSWR('/api/github', fetcher);
  console.log(data?.stars)
  console.log('hi')

  const stars = new Number(data?.stars);
  const link = 'https://github.com/nguyenvukhang';

  return <MetricCard header="GitHub Stars" link={link} metric={stars} />;
}
