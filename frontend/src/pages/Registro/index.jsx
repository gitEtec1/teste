import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../service/api';

import './style.css';

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWahtsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(event){
        event.preventDefault();

        try{
            const data = {
                name, email, whatsapp, city, uf
            };
            const response = await api.post('/ongs', data);
            
            alert(`Seu ID de acesso é: ${response.data.id}`);

            setName('');
            setEmail('');
            setWahtsapp('');
            setCity('');
            setUF('');

            history.push('/');

        } catch(error){
            alert(`Erro no cadastro. Tente novamento. \nCodigo Erro: ${error}`);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be The Hero."/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="button-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o Login.
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input type="text" 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}          
                        required
                    />
                    <input type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input type="text" 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWahtsapp(e.target.value)}
                        required
                    />

                    <div className="input-group">
                        <input type="text" 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                        <input type="text" 
                            placeholder="UF" 
                            style={{width:80}}
                            value={uf}
                            onChange={e => setUF(e.target.value)}
                            required
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;