import { ToastAndroid } from 'react-native';

function ResponseException(message) {
  this.message = message;
  this.name = 'ResponseException';
}

export const isResponseSuccessful = (status) => {
  console.tron.log(status);

  if (Number(status) >= 200 && Number(status) <= 300) return true;

  throw new ResponseException('Invalid status response');
};

export const showErrors = async (err) => {
  if (err !== null && err !== undefined) {
    const { message } = err;
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
};

export const showMessage = (msg) => {
  if (msg !== undefined && msg !== null) { ToastAndroid.show(msg, ToastAndroid.SHORT); }
};
