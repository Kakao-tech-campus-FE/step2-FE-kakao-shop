import {useEffect, useState} from "react";

const useFetch = (api) => {
    //api는 service에서 지정해놓은 비동기 http요청 함수여야함.

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setError(null);
            setData(null);
            setLoading(true);
            const result = await api();
            setData(result);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [api]);

    return {
        data,
        error,
        loading,
    }
}

export default useFetch;
