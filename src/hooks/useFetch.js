// 일반적으로 GET 요청
const useFetch = (url, options) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    fetch(url, options)
        .then((res) => { res.json() })
        
    return [];
}