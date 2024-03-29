import Swal from "sweetalert2";

const errorAlert = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}

const successAlert = (message) => {
  return Swal.fire({
    position: "top",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500
  });
}

export { 
  errorAlert,
  successAlert
}