import agendaFetch from '../../axios/config';
import { IMaskInput } from 'react-imask';
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
      const response = await agendaFetch.get('/agenda');
      const data = response.data.data;
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
                {/* <Th>Telefone</Th> */}
                <Th>E-mail</Th>
              </Tr>
            </Thead>
            <Tbody>
              {client.map((client) => (
                <Tr className="client" key={client.id}>
                  <Td>{client.nome}</Td>
                  {/* <Td className="phone">
                    <IMaskInput
                      type="tel"
                      mask="(00) 00000-0000"
                      value={client.phone.toString()}
                      disabled
                    ></IMaskInput>
                  </Td> */}

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
