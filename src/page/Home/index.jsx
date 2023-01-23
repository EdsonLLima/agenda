import agendaFetch from "../../axios/config";
import { useState, useEffect } from "react";
export function Home() {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const response = await agendaFetch.get("/cliente");
      const data = response.data;
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <h1>Home - Lista(Ainda não foi estilizado)</h1>
      {list.length === 0 ? (
        <p>carregando...</p>
      ) : (
        list.map((list) => (
          <div className="list" key={list.id}>
            <h2>{list.name}</h2>
            <p>{list.phone}</p>
            <p>{list.email}</p>
          </div>
        ))
      )}
    </>
  );
}
