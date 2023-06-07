import axios from 'axios';

const agendaFetch = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/EdsonLLima/fakeapi-test',
  baseURL: 'http://estudolaravel.mempreendimentos.com.br/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default agendaFetch;
