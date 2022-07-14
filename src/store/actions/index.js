export function apiAction({
  url = '/',
  method = 'GET',
  data = null,
  onSuccess = data => console.log(data),
  onFailure = null,
}) {
  return {
    type: 'API',
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
    },
  };
}
