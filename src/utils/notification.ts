import {SweetAlert} from 'shafa-bo';

class Notification {
  static error(error: any) {
    if (error.response === 'undefined') {
      SweetAlert({
        message:
          'خطای غیر منتظره رخ داد. این خطا ممکن است به  دلایل امنیتی یا عدم دسترسی شما به اینترنت رخ داده باشد.',
        type: 'error',
      });
    }
    if (error.response) {
      const { data } = error.response;

      SweetAlert({
        message: data?.error.message || 'خطایی رخ داده است.',
        type: 'error',
      });
    }
    SweetAlert({
      message: error || 'خطایی رخ داده است.',
      type: 'error',
    });
  }

  static success(message: string) {
    SweetAlert({
      message,
      type: 'success',
    });
  }
}
export default Notification;
