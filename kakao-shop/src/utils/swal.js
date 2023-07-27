import Swal from "sweetalert2";

// 기본 toast
export const defaultToast = (message) =>
  Swal.fire({
    text: message,
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1500,
  });

// 바로가기 기능이 있는 toast
export const goToToast = (successMessage, to, navigate) =>
  Swal.fire({
    text: successMessage,
    toast: true,
    position: "top",
    confirmButtonText: "바로가기",
    confirmButtonColor: "#000000",
    timer: 3000,
  }).then((result) => {
    if (result.isConfirmed) {
      navigate(to);
    }
  });

export const simpleAlert = (text) =>
  Swal.fire({ text: text, confirmButtonText: "확인" });
