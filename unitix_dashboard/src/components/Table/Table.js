import React from "react";
import { useState } from "react";
import inventory from "../../data/inventory";
import "./Table.css";
export default function Table() {
  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState(inventory);
  const [tableFilter, setTableFilter] = useState([]);

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter(
        (o) =>
          Object.keys(o).some((k) =>
            String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
          ) //object.keys renvoie un tableau de clé | la méthode some teste si au moins un el du tableau est vrai |
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  }; // fonctionnalité qui permet d'executer la recherche sur la table d'utilisateurs.
  return (
    <div className="d-flex flex-column width">
      <div className="input-group mt-4">
        <div className="form-outline inputBtn">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search"
            onChange={filterData}
          />
          <label className="form-label" htmlFor="form1"></label>
        </div>
      </div>
      {/*searchbar*/}
      <div className="width-tablet">
        <h2 className="mt-3 text-center title">
          Compte créé au cours de l'année 2022
        </h2>
        <table className="table table-hover container">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Comptes créés</th>
              <th scope="col">Modifier</th>
              <th scope="col">Supprimer</th>
            </tr>
          </thead>
          {value.length > 0
            ? tableFilter.map((item) => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.create}</td>
                      <td>
                        <button className="btn btn-outline-primary">
                          Modifier
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger">
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            : dataSource.map((item) => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.create}</td>
                      <td>
                        <button className="btn btn-outline-primary">
                          Modifier
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger">
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
        </table>
      </div>
      {/*premier tableau*/}
      <div className="width-tablet">
        <h2 className="text-center mt-3 title">
          Compte supprimé au cours de l'année 2022
        </h2>
        <table className="table table-hover container">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Comptes supprimés</th>
              <th scope="col">Informations</th>
            </tr>
          </thead>
          {inventory.map((item) => (
            <tbody key={item.id}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.delete}</td>
                <td>
                  <button className="btn btn-outline-primary">
                    Informations
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {/*deuxieme tableau*/}
    </div>
  );
}
