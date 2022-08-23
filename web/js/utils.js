export const getCSRFToken = () => document.querySelector('[name="csrf-token"]')?.content;

export const http = async (url, options = {}) => {
  const response = await fetch(url, {
    ...{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
    },
    ...options
  });
  const { ok, status, statusText } = response;

  if (!ok) throw new Error(`[${url}] HTTP REQUEST ERROR ${status}: ${statusText}`);

  return await response.json();
};

export const makePostRequest = async (url, data) => await http(
  url,
  {
    method: 'POST',
    body: JSON.stringify({ _csrf: getCSRFToken(), data })
  }
);