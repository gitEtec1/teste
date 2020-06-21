import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../service/api';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './style.css';

function Register(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(event){

        event.preventDefault(); 

        const data = {
            title, description, value
        }

        try{
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            setTitle('');
            setDescription('');
            setValue('');

            alert("Cadastro realizado com sucesso");
        } catch(error){
            alert(`Não possível cadastrar este novo caso. \nErro: ${error}`);
        }
    }

    return (
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be The Hero."/>
                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    
                    <Link className="button-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home.
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input type="number" 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;