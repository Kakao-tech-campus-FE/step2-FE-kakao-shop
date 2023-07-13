import React from 'react'
import { useQuery, useInfiniteQuery } from 'react-query';
import getProducts from '../../api/getProducts';


const Test = ( {match} ) => {

  const { data: obj, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      ['CommentList'],
      ({ pageParam = 0 }) => getProducts(pageParam),
      {
        getNextPageParam: (lastPageData, allPages) => {
          if (lastPageData.data.response.length < 9) {
            return undefined
          }
          
          const lastPage = parseInt((lastPageData.data.response[0].id - 1) / 9)
  
          return lastPage + 1;
        },
      }
    );
  return (
    <div>
      <ul>
        {obj?.pages.map((page) =>
          page.data.response.map((comment) => (
            <li style={{fontSize:300}} key={comment.commentId} className="">
              {"내용"}
            </li>
          ))
        )}
      </ul>

        <button
          className="font-medium m-1 text-sm md:text-base"
          onClick={fetchNextPage}
        >
          댓글 더 보기
        </button>

      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  );
}

export default Test