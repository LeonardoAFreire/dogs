export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST', // Método POST para autenticação
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Certifique-se de que o body está sendo enviado no formato JSON
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST', // Método POST para autenticação
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET', // Método POST para autenticação
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST', // Método POST para autenticação
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Certifique-se de que o body está sendo enviado no formato JSON
    },
  };
}
