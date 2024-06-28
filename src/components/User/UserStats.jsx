import React from "react";
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

export default function UserStats() {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        async function getData() {
            const { url, options } = GET_STATS();
            request(url, options)
        }
        getData()
    }, [request])

    if (loading) return <Loading />
    if (error) return <Error error={error} />
    if (data)

        return (
            <React.Suspense fallback={<div></div>}>
                <Head title="Estatisticas" />
                <UserStatsGraphs data={data} />
            </React.Suspense>
        );
    else return null;
}