import React from "react";
import { useScoreStore } from "../../store/scoreStore";

const TablaJugadores = () => {
  const { jugadores, editarJugador, mostrarNuevaronda } = useScoreStore()
  
  const mostrarModalSuma = (jugador) => {
    editarJugador(jugador)
  }

  const handleNuevaRonda = () => {
    mostrarNuevaronda(true)
  }


  return (
    <section>
        <h2>Puntajes:</h2>
        <table id="table-players">
          <tbody>
            <tr>
              {
                jugadores.map((a, idx) => {
                  return <th key={idx}>
                      <label>
                        {a.nombre}
                      </label>
                    </th>
                })
              }
            </tr>
            <tr>
            {
              jugadores.map((a, idx) => {
                return <td key={idx}>
                  <label>
                  {
                    a.puntaje.reduce((acc, i) => acc + i, 0)
                  }
                  </label>
                </td>
              })
            }
            </tr>
            <tr>
              {
                jugadores.map((a, idx) => {
                  return <td key={idx}>
                    <button onClick={() => mostrarModalSuma(a)}>+</button>
                  </td>
                })
              }
            </tr>
          </tbody>
        </table>
        <section>
            <button onClick={() => handleNuevaRonda()}>Nueva ronda</button>
          </section>
      </section>
  )
}

export default TablaJugadores;