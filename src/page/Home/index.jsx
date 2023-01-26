import agendaFetch from '../../axios/config';
import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import './style.css';

export function Home() {
  const [client, setClient] = useState([]);

  const getClient = async () => {
    try {
      const response = await agendaFetch.get('/cliente');
      const data = response.data;
      setClient(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <>
      <h1 className="title"> Agenda de Contatos</h1>
      {client.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <TableContainer>
          <Table variant="striped" colorScheme="cyan" size="sm">
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Telefone</Th>
                <Th>E-mail</Th>
              </Tr>
            </Thead>
            <Tbody>
              {client.map((client) => (
                <Tr className="client" key={client.id}>
                  <Td>{client.name}</Td>
                  <Td>{client.phone}</Td>
                  <Td>{client.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
