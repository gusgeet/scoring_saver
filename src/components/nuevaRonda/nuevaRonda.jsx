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
        <h4>Agregar puntos de nueva ronda</h4>
        { 
          jugadores.map((player, idx) => {
          return <section key={idx} className="puntos-container">
                    <label htmlFor={("puntaje" + player.id)}>{player.nombre}</label>
                    <input type="tel" className="puntaje-anotador" id={("puntaje" + player.id)} min="-999" max="99999"
                       onInput={(e) => {
                        e.target.value = e.target.value.replace(/(?!^-)\D/g, "");}}
                     />
                  </section>
          })
        }
      </div>
      <button onClick={() => handleAnotar()}>Anotar</button>
    </section>
  )
}

export default NuevaRonda;