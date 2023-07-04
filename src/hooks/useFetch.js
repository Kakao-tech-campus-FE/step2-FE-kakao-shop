// API 통신을 일괄적으로 관리하는 훅

// GET, 데이터를 불러오고 & 에러 & 로딩 상태 관리
// useFetch를 하도 많이 쓰니까 react-query라는 라이브러리가 따로 탄생하게 됨!
const useFetch = (url, options) => {
    fetch(url, options)
        .then((res) => res.json())

    return []
}