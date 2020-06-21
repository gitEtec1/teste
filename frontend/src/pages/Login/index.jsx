import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import '../../global.css';

import {FiLogIn} from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import api from '../../service/api';

function Login(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(event){
        event.preventDefault();

        try{

            const response = await api.post('session', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch{
            alert('Falha ao realizar Login. \nVerifique se seu codigo da ONG está correto.');
        }

    }

    return(
        <div className="login-container">
            <section className="form">

            <img src={logoImg} alt="Logo Be The Hero."/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu Login</h1>

                <input type="text" 
                    placeholder="Sua ID"
                    onChange={e => setId(e.target.value)}
                    />
                <button className="button" type="submit">Acessar</button>
            
                <Link to="register" className="button-link">
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </form>

            </section>
            <img src={heroesImg} alt="Imagem da campanha."/>
        </div>
    )

}

export default Login;