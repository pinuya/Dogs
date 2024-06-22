import React from "react";
import { useParams } from "react-router-dom";
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import { PHOTO_GET } from "../../api";
import Head from './Helper/Head';

export default function Photo() {
    const { id } = useParams();
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(id);
        request(url, options);
    }, [request, id]);

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <section className="container mainContainer">
                <Head title={data.photo.data} />
                <PhotoContent single={true} data={data} />
            </section>
        );
    else return null;
};