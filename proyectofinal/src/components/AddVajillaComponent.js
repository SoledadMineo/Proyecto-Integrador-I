import React, { useState } from 'react'
import VajillaService from '../services/VajillaService';
import { Link, useNavigate } from 'react-router-dom';

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
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2>Registro de Vajilla</h2>
                    <div className='card body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Nombre</label>
                                <input 
                                    type='text' 
                                    placeholder='Ingrese el nombre'
                                    name='nombre'
                                    className='form-control'
                                    value = { nombre }
                                    onChange={ (e) => setNombre(e.target.value) }
                                    />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Cantidad</label>
                                <input 
                                    type='text' 
                                    placeholder='Ingrese la cantidad'
                                    name='cantidad'
                                    className='form-control'
                                    value = { cantidad }
                                    onChange={ (e) => setCantidad(e.target.value) }
                                    />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Descripcion</label>
                                <input 
                                    type='text' 
                                    placeholder='Ingrese la descripcion'
                                    name='descripcion'
                                    className='form-control'
                                    value = { descripcion }
                                    onChange={ (e) => setDescripcion(e.target.value) }
                                    />
                            </div>
                            <button className='btn btn-success' onClick={ (e) => saveVajilla(e) }>Guardar</button>
                            &nbsp; &nbsp;
                            <Link to='/vajillas' className='btn btn-danger'>Cancelar</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default AddVajillaComponent;