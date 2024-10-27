import { lazy, Suspense, useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import { STATS_GET } from '../../api';
import Loading from '../Helper/Loading';

const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'));

function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      try {
        const { url, options } = STATS_GET();
        await request(url, options);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
}

export default UserStats;
