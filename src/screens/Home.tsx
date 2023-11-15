import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'; // Certifique-se de importar seus estilos corretamente

interface Nome {
  nome: string;
}

export function Home() {
  const navigate = useNavigate();
  const [Nome, setNome] = useState("");
  const [Nomes, setNomes] = useState<Nome[]>([]);

  function handleAddNome(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const stateNomes = [...Nomes];

    const criarNome: Nome = {
      nome: Nome
    };

    stateNomes.push(criarNome);

    //@ts-ignore
    handleNavigate(Nome)

    setNomes(stateNomes);
    setNome("");
  }

  function handleNavigate(Nome: Nome) {
    navigate(`/Visualizar2/${Nome}`, { state: { Nome } });
  }

  return (
    <body className="bodyHome">
      <div className="quadradoBranco">
        <h1>Digite seu nome</h1>
        <form onSubmit={handleAddNome}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={Nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </body>
  );
}
