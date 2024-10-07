import React from 'react';
import Footer from '../../../components/footer';
import { Navbar } from '../../../components/navbar';
import background from "../../../../assets/images/miriades-bg.svg";
import bgLeft from "../../../../assets/images/miriades-bg-white.svg";
import bgRight from "../../../../assets/images/miriades-bg-dark-blue.svg";
import solutions from "../../../../assets/images/solutions.svg";
import "./styles.scss";
import { EmblaOptionsType } from 'embla-carousel'
import imgCarousel1 from "../../../../assets/images/carousel/banner2.svg";
import imgCarousel2 from "../../../../assets/images/carousel/banner3.svg";
import imgCarousel3 from "../../../../assets/images/carousel/banner4.svg";
import imgCarousel4 from "../../../../assets/images/carousel/banner5.svg";
import EmblaCarousel from '../components/carousel';
import { ImCloudUpload } from "react-icons/im";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FcTwoSmartphones } from "react-icons/fc";
import { AiFillPieChart } from "react-icons/ai";

export const Home: React.FC = () => {

    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
    const images = [
        imgCarousel1,
        imgCarousel2,
        imgCarousel3,
        imgCarousel4,
    ]

    return (
        <main className="home">
            <section className="home__navbar">
                <Navbar />
            </section>

            <section className="home__content">
                <div className="home__content--background">
                    <img src={background} className="home__content--background-image" alt="" />
                    <section className="home__content--background-description">
                        <h1>Startup Innovation Tech</h1>
                        <p>Simplifique pagamentos, facilite vendas!</p>
                        <button>CONHECER SOLUÇÕES</button>
                    </section>
                </div>

                <div className="home__content--carousel" >
                    <EmblaCarousel slides={images} options={OPTIONS} />
                </div>


                <section className="home__content--slide--description">
                    <h2>Queremos transformar sua forma de fazer negócio!</h2>
                    <h1>Nossas soluções de software acompanham o crescimento do seu negócio.</h1>
                    <img src={background} className="home__content--slide--description--background" alt="" />
                    <img src={solutions} className="home__content--slide--description--solutions" alt="" />
                    <h1>Impulsione negócios e aumente vendas</h1>
                    <div className="home__content--slide--description--options">
                        <button className="home__content--slide--description--options--button">ENTRE EM CONTATO</button>
                        <button className="home__content--slide--description--options--button">CONFIRA MAIS</button>
                    </div>

                </section>

                <section className="home__content--inovation--description">
                    <img src={bgLeft} className="home__content--inovation--description--background--left" alt="" />
                    <img src={bgRight} className="home__content--inovation--description--background--right" alt="" />

                    <h1>Como inovar e sair na frente em seu mercado de atuação.</h1>
                    <div className="home__content--inovation--grid">
                        <div className="home__content--inovation--card">
                            <div className="home__content--inovation--title">
                                <div className="home__content--inovation--icon"> <ImCloudUpload size={40} /> </div>
                                <h3>Vendas online</h3>
                            </div>

                            <p>Plataforma de vendas online interligada às vendas físicas, tudo centralizado em uma plataforma de gestão e
                                acompanhamento da evolução do seu negócio.</p>
                        </div>
                        <div className="home__content--inovation--card">
                            <div className="home__content--inovation--title">
                                <div className="home__content--inovation--icon"> <BsFillCreditCard2FrontFill size={35} /></div>
                                <h3>Vendas físicas</h3>
                            </div>
                            <p>Realize vendas físicas em seu negócio, tenha acesso a dados de vendas, receba os valores de forma rápida e
                                facilitada.</p>
                        </div>
                        <div className="home__content--inovation--card">
                            <div className="home__content--inovation--title">
                                <div className="home__content--inovation--icon"> <FcTwoSmartphones size={35} /> </div>
                                <h3>Sites e apps de vendas</h3>
                            </div>
                            <p>Soluções digitais para vendas online, com controle de estoque, gestão de consumidores, acesso a dados para
                                tomada de decisão.</p>
                        </div>
                        <div className="home__content--inovation--card">
                            <div className="home__content--inovation--title">
                                <div className="home__content--inovation--icon"> <AiFillPieChart size={40} /> </div>
                                <h3>Análise de dados</h3>
                            </div>
                            <p>Tenha acesso a relatórios, dados e gráficos relacionados ao seu negócio para tomar a decisão certa para seu
                                negócio.</p>
                        </div>
                    </div>
                </section>

                <section className="home__content--platform-section">
                    <div className="home__content--platform-section-info">
                        <h2>Plataforma sob-medida para negócios</h2>
                        <p>
                            Benefícios e funcionalidades principais de nossa soluções que irão impactar seu negócio.
                            Oferecemos uma plataforma de notificação aprimorada que facilita a comunicação com seus clientes
                            através de e-mails, SMS, whatsapp, notificação de apps e redes sociais. Possuímos solução de
                            precificação e fatura digital cobrança de consumidores, otimizando a gestão financeira do seu negócio.
                        </p>
                        <h2>Dados para tomada de ações em negócios</h2>
                        <p>
                            Nossa soluções oferecem insights valiosos sobre o comportamento de consumidores e tendências de
                            pagamento dos seus clientes, ajudamos a otimizar suas estratégias de vendas e finanças.
                        </p>
                    </div>

                    <div className="home__content--solutions">
                        <div className="home__content--solutions-background"></div>
                        <div className="home__content--solutions-card">
                            <div className="home__content--solutions-card--icon"></div>
                            <div className="home__content--solutions-content">
                                <h3>Solução para notificação</h3>
                                <p>
                                    Evoluímos nossa plataforma de notificação para que seu negócio tenha comunicação com seus clientes
                                    através de e-mails, sms e redes sociais.
                                </p>
                            </div>
                        </div>

                        <div className="home__content--solutions-card">
                            <div className="home__content--solutions-card--icon"></div>
                            <div className="home__content--solutions-content">
                                <h3>Solução de faturas e precificação</h3>
                                <p>
                                    Desenvolvemos uma solução para precificar suas vendas e cobrança de consumidores através de um
                                    app de faturas para seu negócio.
                                </p>
                            </div>
                        </div>

                        <div className="home__content--solutions-card">
                            <div className="home__content--solutions-card--icon"></div>
                            <div className="home__content--solutions-content">
                                <h3>Gerenciamento de consumidores</h3>
                                <p>
                                    Nossas soluções oferecem ao seu negócio acesso aos insights com performance de interesse dos
                                    seus clientes aos seus produtos e serviços.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
            <section className="home__footer">
                <Footer />
            </section>
        </main>
    );
}