import axios from 'axios';

const agendaFetch = axios.create({
  baseURL: 'https://my-json-server.typicode.com/EdsonLLima/fakeapi-test',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default agendaFetch;
