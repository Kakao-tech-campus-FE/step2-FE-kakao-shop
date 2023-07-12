// API 통신을 일괄적으로 관리하는 훅
// 해당 파일은 현재 따로 사용하고 있지는 않음(추후 사용할 수도?)

// GET, 데이터를 불러오고 & 에러 & 로딩 상태 관리
// useFetch를 하도 많이 쓰니까 react-query라는 라이브러리가 따로 탄생하게 됨!
const useFetch = (url, options) => {
    fetch(url, options)
        .then(res => {
        if(!res.ok) {
            throw new Error('네트워크 not ok')
        }
            return res;
        })
        .then((res) => res.json())
}