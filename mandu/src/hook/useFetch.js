import {useEffect, useState} from "react";

const useFetch = (api) => {
    //api는 service에서 지정해놓은 비동기 http요청 함수여야함.
    //고민 이 로딩 상태를 어떻게 처리할까 ? -> e


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
