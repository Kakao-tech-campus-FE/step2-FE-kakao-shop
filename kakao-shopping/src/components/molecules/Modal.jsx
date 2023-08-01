const Modal = ({handleCancelDelete, handleConfirmDelete }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded">
        <p className="">해당 상품 장바구니에서 삭제하시겠습니까?</p>
        <div className="mt-4 flex justify-around">
          <button onClick={handleCancelDelete}>
            취소
          </button>
          <button onClick={handleConfirmDelete}>
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;