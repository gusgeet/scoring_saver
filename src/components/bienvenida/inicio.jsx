import { useState } from "react"
import Puntaje from "../puntaje/puntaje";
import TablaJugadores from "../tablaJugadores/tabla";
import './inicio.css'
import { useScoreStore } from "../../store/scoreStore";
import Inscripcion from "../inscribir/inscribir";
import NuevaRonda from "../nuevaRonda/nuevaRonda";

let nextId = 0;

export default function welcome() {
  const { jugadorEditar, iniciarJuego, nuevaRonda } = useScoreStore()
  return (
    <main>
      <Inscripcion />
      {
        !iniciarJuego && <TablaJugadores />
      }
      {
        jugadorEditar ? <Puntaje puntaje={jugadorEditar}/> : null 
      }
      {
        nuevaRonda && <NuevaRonda />
      }
    </main>
  );
}
