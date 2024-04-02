import { create } from "zustand";

export const useScoreStore = create((set) => ({
  jugadores: [],
  jugadorEditar: false,
  iniciarJuego: true,
  nuevaRonda: false,
  comenzar: () => 
    set((state) => ({
      iniciarJuego: !state.iniciarJuego,
      jugadores: [...state.jugadores],
      jugadorEditar: null,
      nuevaRonda: state.nuevaRonda
    })),
  agregarJugador: (player) => 
    set((state) => ({
      jugadores: [...state.jugadores, player]
    })),
  actualizarPuntaje: (id, nuevoPuntaje) => 
    set((state) => ({
      jugadores: state.jugadores.map(item => {
        if(item.id === id) {
          return {
            ...item,
            puntaje: [...item.puntaje, nuevoPuntaje]
          }
        }
        else {
          return item
        }})
    })),
  limpiarTablero: () => set((state) => ({
    jugadores: []
  })),
  mostrarNuevaronda: (mostrar) => set((state) => ({
    nuevaRonda: mostrar,
    jugadores: [...state.jugadores],
    jugadorEditar: state.jugadorEditar,
    iniciarJuego: state.iniciarJuego
  })),
  eliminarJugador: (id) => 
    set((state) => ({
      jugadores: state.jugadores.filter(x => x.id !== id)
    })),
  editarJugador: (jugador) => 
    set((state) => ({
      jugadorEditar: jugador
    })),
  terminarEditar: () => 
    set((state) => ({
      jugadorEditar: null
    }))
}))

useScoreStore.subscribe(state => {
  localStorage.setItem("puntaje", JSON.stringify(state))
})

const initialState = JSON.parse(localStorage.getItem("puntaje")) || {
  jugadores: [],
  jugadorEditar: false,
  iniciarJuego: true,
  nuevaRonda: false,
}

const store = useScoreStore.setState(initialState)