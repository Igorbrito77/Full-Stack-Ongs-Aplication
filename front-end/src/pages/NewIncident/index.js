import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'; 

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title, description, value
        };

        try{

            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }
            });

            history.push('/profile'); 

        }catch(err){
            alert('Erro ao cadastrar');
        }

    }

    return(
        <div className="new-incident-container">
            <div className="content">
            <section>
                <img src={logoImg} alt = "Be The Hero"/>
                
                <h1>Cadastrar novo caso</h1>
                <p>Faça o cadastro de um novo caso da sua ONG </p>

                <Link className = "back-link" to = "/profile">
                    <FiArrowLeft size= {16} color = "#E02041"/>
                    Voltar para Home
                </Link>
            </section>

            <form onSubmit = {handleNewIncident}>
                <input 
                    placeholder = "Título do caso "
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                />

                <textarea 
                    placeholder="Descrição"
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                />

                <input 
                    placeholder= "Valor em Reais"
                    value = {value}
                    onChange = {e => setValue(e.target.value)}
                />


                <button className= "button" type= "submit">Cadastrar</button>
            </form>
        </div>
    </div>
    
    );
}

export default NewIncident;