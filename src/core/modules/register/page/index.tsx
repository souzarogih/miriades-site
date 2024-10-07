import React, { useState } from 'react';
import { Navbar } from '../../../components/navbar';
import Footer from '../../../components/footer';
import './styles.scss';
import background from "../../../../assets/images/miriades-bg-register.svg";
import bgWhite from "../../../../assets/images/miriades-contact-bg-white.svg";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Register: React.FC = () => {

    return (
        <section className="register">
            <div className="register__navbar">
                <Navbar />
            </div>
            <article className="register__header">
                <h1>Buscamos o crescimento compartilhado!</h1>
                <h2>O sucesso do seu negócio, <br />
                    é o nosso sucesso!</h2>
            </article>

            <section className="register__content">
                <div className="register__content--main">
                    <img className="register__content--main--bg" src={background} alt="Background" />
                    <div className="register__content-title">
                        <h2>Formulário de Cadastro</h2>
                    </div>

                    <section className="register__content--section">
                        <div className="register__content--info">
                            <img className="register__content--info--bg" src={bgWhite} alt="Background" />
                            <div className="register__content--info--title" style={{position:'relative', zIndex:'1'}}>
                                <h2>Vamos <strong>crescer</strong> juntos e ser <strong>visto</strong> pelos <strong>clientes?</strong></h2>
                                <p>Fale com nosso consultor de vendas.</p>
                                <button><PiWhatsappLogo size={28} /> FALE COM CONSULTOR</button>
                                <div className="register__content--info--contact">
                                    <p><strong>Nosso contato</strong></p>
                                    <p><FaPhoneAlt /> +55 83 98856-9659</p>
                                    <p><FaPhoneAlt /> +55 83 99904-5993</p>
                                    <p id="email-contact"><MdEmail style={{ paddingTop: "5px" }} /> comercialmiriades@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="register__content--form">
                            <form>
                                <label htmlFor="email">E-mail <strong>*</strong></label>
                                <input type="email" id="email" name="email" required />

                                <label htmlFor="telefone">Telefone de contato <strong>*</strong></label>
                                <input type="text" id="telefone" name="telefone" required />

                                <label htmlFor="nome">Nome completo <strong>*</strong></label>
                                <input type="text" id="nome" name="nome" required />

                                <label htmlFor="negocio">Nome do negócio</label>
                                <input type="text" id="negocio" name="negocio" />

                                <label htmlFor="cpfcnpj">CPF/CNPJ</label>
                                <input type="text" id="cpfcnpj" name="cpfcnpj" />

                                <section className="register__content--form--message">
                                    <label htmlFor="mensagem">Deixe sua mensagem</label>
                                    <textarea id="mensagem" name="mensagem"></textarea>

                                    <div className="register__content--form--message--group">
                                        <input type="checkbox" required />
                                        <p>Ao enviar o formulário estou de acordo com os termos de <a href="">Política de Privacidade.</a></p>
                                    </div>
                                </section>

                                <div className="register__content--form--options">
                                    <div className="register__content--form--options--comercial">
                                        <legend>Deseja receber nosso contato?</legend>

                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
                                            <section className="register__content--form--options--comercial--option">
                                                <input type="checkbox" />
                                                <legend>Receber contato comercial</legend>
                                            </section>

                                            <section className="register__content--form--options--comercial--option">
                                                <input type="checkbox" />
                                                <legend>Receber novidades</legend>
                                            </section>
                                        </div>

                                    </div>

                                    <div className="register__content--form--options--email">
                                        <legend>Como gostaria de receber nosso contato?</legend>
                                        <section className="register__content--form--options--email--option">
                                            <input type="checkbox" value="email" />
                                            <legend>E-mails</legend>
                                        </section>

                                        <section className="register__content--form--options--email--option">
                                            <input type="checkbox" value="email" />
                                            <legend>SMSs</legend>
                                        </section>

                                        <section className="register__content--form--options--email--option">
                                            <input type="checkbox" value="email" />
                                            <legend>Mensagem whatsapp</legend>
                                        </section>
                                    </div>
                                </div>

                                <button id="submit" type="submit">ENVIAR</button>
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
