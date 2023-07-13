const Container = ({ children }) => {
  return (
    <div className="absolute top-1/2 left-1/2 w-2/5 mt-8 px-10 py-10 transform -translate-x-1/2 -translate-y-1/2 box-border shadow-lg rounded-lg">
      {children}
    </div>
  );
};

export default Container;
