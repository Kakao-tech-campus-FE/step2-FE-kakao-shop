import { useNavigate } from 'react-router-dom';
import { useQueryClient, useMutation } from 'react-query';
import { Pay } from '../../../api/Pay';
import Spinner from '../../common/atoms/Spinner';
import queryKey from '../../../constants/queryKey';

function PayBtn({ approved }: { approved: boolean }) {
  const navigator = useNavigate();
  const queryClient = useQueryClient();
  const payMutation = useMutation(() => Pay(), {
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey.Pay, data.response);
      navigator('/paySuccess');
    },
    onError: () => {
      alert('결제실패');
    },
  });
  const handleBtn = () => {
    if (!approved) {
      alert('필수 동의 항목을 체크해주세요');
    } else {
      payMutation.mutate();
    }
  };
  if (payMutation.isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner width={60} height={60} />
      </div>
    );
  return (
    <button
      type="button"
      disabled={!approved}
      className={approved ? 'bg-yellow-300 w-full p-3 font-semibold' : 'bg-gray-400 w-full p-3 font-semibold text-white'}
      onClick={handleBtn}
    >
      결제하기
    </button>
  );
}

export default PayBtn;
