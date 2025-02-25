import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    const[id, setId] = useState(''); 
    const history = useHistory('');

    async function handleLogin(e){
        e.preventDefault(e);

        try{

            const ongName = (await api.post('sessions', {id})).data.name;

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', ongName);
            
            history.push('/profile');
        }
        catch(err){
            alert('Falha no Login. Tente de novo.');
        }
    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src= {logoImg} alt="Be The Hero"/>
                
                <form onSubmit = {handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder = 'Sua ID'
                            value = {id}
                            onChange= {e => setId(e.target.value)}
                    />
                    <button className= "button" type= "submit">Entrar</button>
                    
                
                    <Link className = "back-link" to = "/register">
                        <FiLogIn size= {16} color = "#E02041"/>
                        Não tenho cadastro
                    </Link>

                </form>
            
            </section>
            <img src = {heroesImg} alt = 'Heroes'/>
        </div>
    );
}