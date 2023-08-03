import { useState } from "react";

// useFetch는 GET 요청에서 주로 만들어 이용, 데이터를 불러오고, 에러, 로딩 상태 관리 할때 이용
const useFetch = (url, options) => {
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // 위와 같은 부분들을 프로젝트 할 때 마다 반복되게 이용하니까 라이브러리로 만들어 진 것이 react-query
  fetch(url, options)
    .then((res) => res.json())
  return [];
}