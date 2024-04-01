import React, { useState} from "react";
import { useScoreStore } from "../../store/scoreStore";
let nextId = 0;

const Inscripcion = () => {
  const { jugadores, agregarJugador, comenzar, eliminarJugador } = useScoreStore()
  const [name, setName] = useState('');

  if(!jugadores) return
  const handlePlayers = (e) => {
    const nuevoJugador = { id: nextId++, nombre: e, puntaje: [] }
    agregarJugador(nuevoJugador)
    setName('')
  }

  const filterPlayer = (id) => {
    eliminarJugador(id)
  }

  const handleIniciar = () => {
    comenzar()
  }

  return(
    <section>
      <h1>Inscribir jugadores:</h1>
      <div className="contador-container">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => {
          handlePlayers(name)        
        }}>Agregar</button>
      </div>
      <section>
          <h2>Jugadores:</h2>
          <ul>
            {jugadores.map(artist => (
              <div key={artist.id} className="jugador-ul">
                <li>{artist.nombre}</li>
                <button onClick={() => filterPlayer(artist.id)} className="jugador-remove">X</button>
              </div>
            ))}
          </ul>
          {jugadores.length > 1 &&
            <button onClick={() =>handleIniciar()}>Comenzar</button>
          }
      </section>
    </section>
  )
}

export default Inscripcion;