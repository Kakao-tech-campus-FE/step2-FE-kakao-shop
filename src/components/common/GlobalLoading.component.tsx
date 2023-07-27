import classNames from "classnames";

const GlobalLoading = ({ isLoading = false }) => {
  return (
    <div
      className={classNames(
        "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none",
        { "opacity-0": !isLoading }
      )}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default GlobalLoading;
