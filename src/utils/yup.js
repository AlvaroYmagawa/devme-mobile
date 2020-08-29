// Get YUP errors
export function getYupErrors(yupErr) {
  const validationErrors = {};

  yupErr.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
