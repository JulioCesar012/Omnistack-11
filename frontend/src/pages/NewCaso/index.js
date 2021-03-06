import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './style.css';

import api from '../../services/api';

export default function NovoCaso() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

  async  function handleNewCasos(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
     await api.post('casos',data, {
        headers: {
            Authorization: ongId,
        }
    })

        history.push('/profile');
        }catch {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return (
        <div className="register-container">
        <div className="content">
            <section className="form">
                <img src={logo} alt="Be the Hero"/>
            <h1>Cadastrar Novo Caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.
            </p>

            <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Home
            </Link>
            </section>

            <form onSubmit={handleNewCasos}>            
                <input  
                placeholder="Titulo do Caso"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />

                <textarea   
                placeholder="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}
                />

                <input  
                placeholder="Valor em R$"
                value={value}
                onChange={e => setValue(e.target.value)}
                />


                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}