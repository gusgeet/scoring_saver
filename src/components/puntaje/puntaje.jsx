import './puntaje.css'
import { useScoreStore } from '../../store/scoreStore'

const Puntaje = (Jugador) => {
  const { agregarJugador, actualizarPuntaje, limpiarTablero, jugadorEditar, jugadores, terminarEditar } = useScoreStore()
  const { puntaje } = Jugador
  let listaPuntos = puntaje.puntaje

  const agregarPuntajeAJugador = (id) => {
    const puntajeASumar = Number(document.getElementById('agregarValor').value)
    actualizarPuntaje(id, puntajeASumar)
    terminarEditar()
  }
  const cerrarModal = () => {
    terminarEditar()
  }

  return (
    <div className='puntaje-modal'>
      <h3>Agregar puntaje a {puntaje.nombre}</h3>
      <div className='puntaje-agregar'>
        <section>
          <label htmlFor='agregarValor'>Puntos</label>
          <input id='agregarValor' type='number' min="1" />
        </section>
        <button onClick={() => agregarPuntajeAJugador(puntaje.id)}>Agregar</button>
      </div>
        <table>
          <thead>
            <tr>
              <th><label>Puntos del jugador</label></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              listaPuntos.length ?
                listaPuntos.map((p, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{p}</td>
                      <td></td>
                    </tr>
                  )
                }) :
                <tr>
                  <td>
                    <label>Sin puntos previos</label>
                  </td>
                </tr>
            }
          </tbody>
        </table>
      <button onClick={() => cerrarModal()}>Cerrar</button>
    </div>
  )
}

export default Puntaje;