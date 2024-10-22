import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../../../components/navbar';
import Footer from '../../../components/footer';
import './styles.scss';
import background from "../../../../assets/images/miriades-bg-register.svg";
import bgWhite from "../../../../assets/images/miriades-contact-bg-white.svg";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        phones: '',
        fullName: '',
        businessName: '',
        documentNumber: '',
        message: '',
        termAgreement: false,
        receiveCommercialContact: false,
        receiveNews: false,
        contactByEmail: false,
        contactBySms: false,
        contactByWhatsappMessage: false,
    });

    const [errorMessage, setErrorMessage] = useState('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/miriades/registration', formData);
            console.log('Dados enviados com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <section className="register">
            <div className="register__navbar">
                <Navbar />
            </div>
            <article className="register__header">
                <h1>Buscamos o crescimento compartilhado!</h1>
                <h2>O sucesso do seu negócio, <br /> é o nosso sucesso!</h2>
            </article>

            <section className="register__content">
                <div className="register__content--main">
                    <img className="register__content--main--bg" src={background} alt="Background" />
                    <div className="register__content-title">
                        <strong>Formulário de Cadastro</strong>
                    </div>

                    <section className="register__content--section">
                        <div className="register__content--info">
                            <img className="register__content--info--bg" src={bgWhite} alt="Background" />
                            <div className="register__content--info--title">
                                <h2>Vamos <strong>crescer</strong> juntos e  ser <strong>visto</strong> pelos <strong>clientes</strong>?</h2>
                                <p>Fale com nosso consultor de vendas.</p>
                                <button><PiWhatsappLogo size={28} /> FALE COM CONSULTOR</button>
                                <div className="register__content--info--contact">
                                    <p><strong>Nosso contato</strong></p>
                                    <p><FaPhoneAlt /> +55 83 98856-9659</p>
                                    <p><FaPhoneAlt /> +55 83 99904-5993</p>
                                    <p id="email-contact"><MdEmail /> comercialmiriades@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="register__content--form">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">E-mail <strong>*</strong></label>
                                <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />

                                <label htmlFor="phones">Telefone de contato <strong>*</strong></label>
                                <input type="number" id="phones" name="phones" required onChange={handleChange} value={formData.phones} />

                                <label htmlFor="fullName">Nome completo <strong>*</strong></label>
                                <input type="text" id="fullName" name="fullName" required onChange={handleChange} value={formData.fullName} />

                                <label htmlFor="businessName">Nome do negócio</label>
                                <input type="text" id="businessName" name="businessName" onChange={handleChange} value={formData.businessName} />

                                <label htmlFor="documentNumber">CPF/CNPJ</label>
                                <input type="number" id="documentNumber" name="documentNumber" onChange={handleChange} value={formData.documentNumber} />

                                <section className="register__content--form--message">
                                    <label htmlFor="message">Deixe sua mensagem</label>
                                    <textarea id="message" name="message" onChange={handleChange} value={formData.message}></textarea>

                                    <div className="register__content--form--message--group">
                                        <input type="checkbox" name="termAgreement" required onChange={handleChange} checked={formData.termAgreement} />
                                        <p>Ao enviar o formulário estou de acordo com os termos de <a href="">Política de Privacidade.</a></p>
                                    </div>
                                </section>

                                <div className="register__content--form--options">
                                    <div className="register__content--form--options--comercial">
                                        <legend>Deseja receber nosso contato?</legend>
                                        <div>
                                            <section style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                                                <input type="checkbox" name="receiveCommercialContact" onChange={handleChange} checked={formData.receiveCommercialContact} />
                                                <legend>Receber contato comercial</legend>
                                            </section>

                                            <section style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                                                <input type="checkbox" name="receiveNews" onChange={handleChange} checked={formData.receiveNews} />
                                                <legend>Receber novidades</legend>
                                            </section>
                                        </div>
                                    </div>

                                    <div className="register__content--form--options--email">
                                        <legend>Como gostaria de receber nosso contato?</legend>
                                        <section style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                                            <input type="checkbox" name="contactByEmail" onChange={handleChange} checked={formData.contactByEmail} />
                                            <legend>E-mails</legend>
                                        </section>

                                        <section style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                                            <input type="checkbox" name="contactBySms" onChange={handleChange} checked={formData.contactBySms} />
                                            <legend>SMSs</legend>
                                        </section>

                                        <section style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                                            <input type="checkbox" name="contactByWhatsappMessage" onChange={handleChange} checked={formData.contactByWhatsappMessage} />
                                            <legend>Mensagem whatsapp</legend>
                                        </section>
                                    </div>
                                </div>

                                <button style={{cursor: 'pointer'}} onClick={handleSubmit} id="submit" type="submit">ENVIAR</button>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
            <section className="register__footer">
                <Footer />
            </section>
        </section>
    );
};
