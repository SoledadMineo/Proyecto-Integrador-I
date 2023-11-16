import React, { useEffect, useState } from 'react'
import VajillaService from '../services/VajillaService'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const ListVajillaComponent = () => {

  const [vajillas, setVajillas] = useState([])
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    VajillaService.getAllVajillas().then(response => {
        setVajillas(response.data);
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })
  }, [])

  const handleChange = e => {
    setBusqueda(e.target.value);
    buscar(e.target.value);
  }

  const buscar = (terminoBusqueda) => {
    var resultadoBusqueda = vajillas.filter((elemento) => {
        if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
            return elemento;
        }
    })
    setVajillas(resultadoBusqueda);
  }
  
  return (
    <div className='container'>
        <div>
        <h2>Lista de Vajillas</h2>
        
        <Link to='/add-vajilla' className='linkAgregar'>Agregar Vajilla</Link>
        </div>
        &nbsp; &nbsp;        
        <form>
        <div className="col-sm-12">
            <input
                type='text'
                value={busqueda}
                placeholder='Busqueda de vajilla'
                onChange={handleChange}
            />
            <button> <FontAwesomeIcon icon={faSearch}/></button>
        </div>  
        &nbsp; &nbsp;        
        <table className='table table-bordered table striped'>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Descripcion</th>
            </thead>
            <tbody>
                {
                    vajillas.map(
                        vajilla =>
                        <tr key={ vajilla.id }>
                            <td>{ vajilla.id }</td>
                            <td>{ vajilla.nombre }</td>
                            <td>{ vajilla.cantidad }</td>
                            <td>{ vajilla.descripcion }</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </form>
    </div>
  )
}

export default ListVajillaComponent;

