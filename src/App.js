import React from "react";
import Header from "./components/Header";
import Heroes from "./components/Heroes";
import { getCharacters, getCharactersName } from "./services/api";

function App() {
  const [entrada, setEntrada] = React.useState("");
  const [erro, setErro] = React.useState(null);
  const [herois, setHerois] = React.useState([]);

  const handleChangeInput = event => {
    const { value } = event.target;

    if (value.includes("@")) {
      setErro("Caracter Inválido");
    } else {
      setErro("");
    }

    setEntrada(value);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      getCharactersName(entrada)
        .then(json => setHerois(json.data.results))
        .catch(e => {
          console.log("Erro", e);
          setHerois([]);
        });
    }
  };

  React.useEffect(() => {
    getCharacters()
      .then(json => setHerois(json.data.results))
      .catch(e => {
        console.log("Erro", e);
        setHerois([]);
      });
  }, []);

  return (
    <div className="App">
      <Header
        value={entrada}
        onChange={handleChangeInput}
        erro={erro}
        onKeyPress={handleKeyPress}
      />
      {herois.length ? (
        <Heroes herois={herois} />
      ) : (
        <p>
          404
          <br />
          Não Encontrado
        </p>
      )}
    </div>
  );
}

export default App;
