const Error = ({ message }) => {
  return (
    <div className="error text-center my-20">
      <span className="font-bold">{message}</span>
      <span className="block text-sm mt-2">잠시 후 다시 시도해 주세요.</span>
    </div>
  );
};

export default Error;
