import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash } from 'react-icons/fi';

import api from '../../service/api';

import './style.css';

import logoImg from '../../assets/logo.svg';

function Profile(){

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    useEffect( () => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incidentCase => incidentCase.id !== id));
        } catch(error){
            alert(`Não foi possível deletar o item. \nErro: ${error}`);
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo Be The Hero"/>
                <span>Bem Vindo, {ongName}</span>
            
                <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>
                <button type="button">
                    <Link onClick={handleLogout}>
                        <FiPower size="18" color="#E02041" />
                    </Link>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incidentCase => (
                    <li key={incidentCase.id}>
                        <strong>CASO:</strong>
                        <p>{incidentCase.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incidentCase.description}</p>
                        
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incidentCase.value)}</p>

                        <button type="button" onClick={ () => {handleDeleteIncident(incidentCase.id)} }>
                            <FiTrash size={28} color="#e02041" title="Excluir"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        
    )

}

export default Profile;