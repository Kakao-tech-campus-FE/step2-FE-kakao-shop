import { useMutation } from "@tanstack/react-query";
import { updateCart } from "../../Servicies/cart";

const DeleteButton = ({ contents }) => {
  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  const deleteCart = () => {};

  return (
    <button onClick={deleteCart} className="text-center text-xs m-2 h-[30px] px-[10px] border rounded bg-white">
      삭제
    </button>
  );
};

export default DeleteButton;
