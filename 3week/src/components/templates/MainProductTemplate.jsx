import { useDispatch, useSelector } from "react-redux"
import Container from "../atoms/Container"
import ProductGrid from "../organisms/ProductGrid"
import { Suspense, useEffect, useState } from "react"
import { getProducts } from "../../store/modules/product"

const MainProductTemplate = () => {
  const [page, setPage] = useState(0)
  const bottomObserver = useRef(null)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  const loading = useSelector((state) => state.product.loading)
  const error = useSelector((state) => state.product.error)
  const isEnd = useSelector((state) => state.product.isEnd)

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isEnd) {
        setPage((page) => page + 1)
      }
    })
  }, {
    threshold: 1,
  })

  useEffect(() => {
    io.observe(bottomObserver.current)
  }, []) // 최초 렌더링 마운트 1회만 선언

  useEffect(() => {
    dispatch(getProducts(page))
  }, [dispatch, page])

  // 조건부 렌더링 (예전 방식)
  // if (loading) return <div>로딩중...</div>
  // if (error) return <div>에러 발생!</div>

  return(
  <Container>
    <ProductGrid products={products} /> {/* 렌더링 새로 발생 */}
    <div ref={bottomObserver}></div>
  </Container>
  )
}

export default MainProductTemplate