const FormContainer = ({ children }) => {
  return (
    <form className="form-container border border-solid border-gray-300 p-16 mx-auto w-[570px] whitespace-pre-wrap">
      {children}
    </form>
  );
};

export default FormContainer;
