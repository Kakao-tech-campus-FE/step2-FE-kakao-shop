import { useCallback, useEffect } from "react";

const ToastBox = ({ toastlist, setList }) => {
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <div className="container">
      {toastlist.map((toast, i) => (
        <div
          key={i}
          style={{ backgroundColor: toast.backgroundColor }}
          className="notification"
        >
          <button className="button" onClick={() => deleteToast(toast.id)}>
            X
          </button>
          <div>
            <p className="title">{toast.title}</p>
            <p className="description">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ToastBox;
