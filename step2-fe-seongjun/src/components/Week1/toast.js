import "../style/toast.css"

export default function Toast({msg="", show}) {
  return <div className={`toast-div ${show ? 'toast-show' : ''}`}>{msg}</div>;
}