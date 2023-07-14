import '../../Styles/Skeleton.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../../Styles/ProductGrid.css'

const productSkeleton = () => {
  const skeletonElement = () => {
    
  }

  return (
    <div className='skeleton-grid'>
      {[1, 2, 3, 4].map(() => (
        <div className='bg-slate-300'>
          <Skeleton  />
          <div className='w-4/5 h-2 p-4 pt-7 bg-black'></div>
          <div className="w-4/5 h-2 p-4 pt-3 pb-7 bg-black"></div>
        </div>
      ))}
    </div>
  )
}


export default productSkeleton;