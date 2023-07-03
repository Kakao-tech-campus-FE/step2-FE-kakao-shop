// GET, 데이터를 불러오고, 에러, 로딩 상태 관리
const useFetch = (url, options) => {

    fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    return {data, error, isLoading}
}