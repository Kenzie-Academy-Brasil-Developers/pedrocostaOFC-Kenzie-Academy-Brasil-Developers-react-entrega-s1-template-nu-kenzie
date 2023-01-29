import { useState } from "react";
import "./count.css";
import App from "../../App";
import logo from "../assests/nklogo2.svg";
import trash from "../assests/trash-light.svg";

export function Count() {
  const [Page, setCount] = useState(false);

  const [value, setValue] = useState("");

  const [list, setList] = useState([]);

  const [type, setType] = useState("");

  const [Text, setText] = useState("");

  const totalValue = list.reduce(
    (acc, item) => acc + parseFloat(item.value),

    0
  );

  // button for delete
  const handleDelete = (index) => {
    const updatedList = list.filter((item, i) => i !== index);

    setList(updatedList);
  };

  return (
    <>
      {Page ? (
        <App />
      ) : (
        <div className="container">
          <header className="menu">
            <img src={logo} alt="Logo Nu Kenzie" />
            <button
              type="button"
              className="inicio"
              onClick={() => setCount(true)}
            >
              Inicio
            </button>
          </header>
          <main className="mainContente">
            <div className="type-count">
              <div className="form">
                <form>
                  <p className="description">Descrição</p>
                  <input
                    placeholder="Digite aqui sua descrição"
                    className="input"
                    value={Text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <p className="exemple">Ex: Compra de roupas</p>
                  <p className="value">Valor</p>
                  <input
                    placeholder="1"
                    className="input-value"
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <p className="sifra">R$</p>

                  <p className="typeAmount">Tipo de valor</p>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Entrada</option>
                    <option>Despesa</option>
                  </select>

                  <button
                    type="button"
                    className="btnValue"
                    onClick={() => setList([...list, { Text, value, type }])}
                  >
                    Inserir valor
                  </button>
                </form>

                <div className="list">
                  <div className="resumeTotal">
                    <p className="valor-total">Valor total:</p>
                    <p className="cash">$ {totalValue}</p>
                    <p className="referentValue">O valor referente ao saldo</p>
                  </div>
                </div>
              </div>

              <h1 className={`before ${list.length > 0 ? "hidden" : ""}`}>
                Você ainda não possui nenhum lançamento
              </h1>
              <div className="list-click">
                <h3>Resumo financeiro</h3>
                <ul className="list-scroll">
                  {list.map((item, index) => (
                    <li key={index}>
                      <div className="CardCount">
                        <div className="tittlesCard">
                          <h4 className="listTitle">{item.Text}</h4>
                          <p className="clickProto">{item.type}</p>
                        </div>
                        <div className="CardDif">
                          <p className="clickCash">R$ {item.value}</p>

                          <button
                            type="button"
                            className="btn-trash"
                            onClick={() => handleDelete(index)}
                          >
                            <img src={trash} className="trash"></img>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
