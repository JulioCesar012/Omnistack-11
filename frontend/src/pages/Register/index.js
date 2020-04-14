import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.svg'
import './style.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();


   //funcao responsavel por fazer o cadastro
   async function handleRegister(e) {
        e.preventDefault();

        const data = {
            city,
            email,
            name,
            uf,
            whatsapp,
        };

      try {
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
      }
      catch (err) {
        alert('Erro no Cadastro, Tente Novamente!');
      }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Be the Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrar os casos da sua ONG.
                </p>

                <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#e02041"/>
                Logar-se
                </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" 
                    value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" 
                    value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Whatsapp"
                    value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="UF" 
                        value={uf} onChange={e => setUf(e.target.value)} 
                        style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}