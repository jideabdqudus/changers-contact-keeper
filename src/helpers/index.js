import { toast } from "react-toastify";

export const toastify = {
  alertError: (message, duration) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },

  alertSuccess: (message, duration) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },

  alertWarning: (message, duration) => {
    toast.warning(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },
};
