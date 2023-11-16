import React, { useState } from 'react'
import VajillaService from '../services/VajillaService';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css'

const AddVajillaComponent = () => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    
    const navigate = useNavigate();

    const saveVajilla = (e) => {
        e.preventDefault();
        const vajilla = { nombre, cantidad, descripcion };
        //console.log(vajilla);
        VajillaService.createVajilla(vajilla)
            .then((response) => {
            console.log(response.data);
            navigate('/vajillas');
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div className='container'>
        <h2>Registro de Vajilla</h2>
        &nbsp; &nbsp;
        <div>
        <form>
          <div className='form-group'>
             <div>
                    <label htmlFor='miNombre' >Nombre</label>
                    <input 
                        id='miNombre'
                        type='text' 
                        placeholder='Ingrese el nombre'
                        name='nombre'
                        className='form-control'
                        value = { nombre }
                        onChange={ (e) => setNombre(e.target.value) }
                    />
</div>
<div>
                <label htmlFor='miCantidad'>Cantidad</label>
                <input 
                    id='miCantidad'
                    type='text' 
                    placeholder='Ingrese la cantidad'
                    name='cantidad'
                    className='form-control'
                    value = { cantidad }
                    onChange={ (e) => setCantidad(e.target.value) }
                />
     </div>
     <div>           
                <label htmlFor='miDescripcion'>Descripcion</label>
                <input 
                    id='miDescripcion'
                    type='text' 
                    placeholder='Ingrese la descripcion'
                    name='descripcion'
                    className='form-control'
                    value = { descripcion }
                    onChange={ (e) => setDescripcion(e.target.value) }
                />
                </div>
                </div>
            <button  onClick={ (e) => saveVajilla(e) }>Guardar</button>
            &nbsp; &nbsp;
            <Link to='/vajillas' className='Cancelar'>Cancelar</Link>
        </form>
        </div>
    </div>     
  )
}

export default AddVajillaComponent;