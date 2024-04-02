import React from "react";
import './nuevaRonda.css'
import { useScoreStore } from "../../store/scoreStore";

const NuevaRonda = () => {
  const { jugadores, actualizarPuntaje, mostrarNuevaronda } = useScoreStore()
  const handleAnotar = () => {
    const anotadores =Array.from(document.getElementsByClassName('puntaje-anotador'))
    anotadores.forEach(element => {
      let id = Number(element.id.replace("puntaje", ""))
      let numero = Number(element.value)
      actualizarPuntaje(id, numero)
    });
    mostrarNuevaronda(false)
  }
  
  return (
    <section id="nuevaRonda">
      <div>
        <label>Agregar puntos de nueva ronda</label>
        { 
          jugadores.map((player, idx) => {
          return <section key={idx} className="puntos-container">
                    <label htmlFor={("puntaje" + player.id)}>{player.nombre}</label>
                    <input type="number" className="puntaje-anotador" id={("puntaje" + player.id)} min="0" />
                  </section>
          })
        }
      </div>
      <button onClick={() => handleAnotar()}>Anotar</button>
    </section>
  )
}

export default NuevaRonda;