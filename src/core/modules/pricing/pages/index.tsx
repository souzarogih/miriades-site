import React, { useState } from 'react';
import { Navbar } from '../../../components/navbar';
import Footer from '../../../components/footer';
import './styles.scss';
import PlanCard from '../components/planCard';
import background from "../../../../assets/images/miriades-bg.svg";

export const Pricing: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'precos' | 'solucoes'>('precos');

    const basicDescriptions = [
        'Faça até 500 vendas mensais',
        'Gerencie até 1000 produtos em sua base',
        'Receba 1 assinatura',
        'Envie 10 notificações mensais para seus consumidores',
        'Cadastre até 100 clientes em sua carteira',
        'Tenha acesso a dados de vendas, consumo e viabilidade para seu negócio',
    ];
    const starterDescriptions = [
        "Faça até 1500 vendas mensais",
        "Gerencie até 3000 produtos",
        "em sua base",
        "Receba 3 assinatura",
        "Envie 20 notificações mensais para seus consumidores",
        "Cadastre até 500 clientes em sua carteira",
        "Tenha acesso a dados vendas, consumo e viabilidade para seu negócio",
        "Publicidade de seus produtos nas redes sociais, até 10 propagandas por mês",
        "Insights de evolução do negócio",
        " Loja Física e Digital",
    ];
    const primeDescriptions = [
        "Faça até 3000 vendas mensais",
        "Gerencie até 8000 produto em sua base",
        "Receba 5 assinatura",
        "Envie 40 notificações mensais para seus consumidores",
        "Cadastre até 1500 clientes em sua carteira",
        "Tenha acesso a dados vendas, consumo e viabilidade para seu negócio",
        "Publicidade de seus produtos nas redes sociais, até 20 propagandas por mês",
        "Insights de evolução do negócio",
        "Loja Física e Digital",
    ];
    const customDescriptions = [
        "Faça vendas ilimitadas",
        "Gerencie produtos ilimitados em sua base",
        "Receba até 20 assinaturas",
        "Envie 100 notificações mensais para seus consumidores",
        "Cadastre até 10000 clientes em sua carteira",
        "Tenha acesso a dados vendas, consumo e viabilidade para seu negócio",
        "Publicidade de seus produtos nas redes sociais, até 50 propagandas por mês",
        "Insights de evolução do negócio",
        "Loja Física e Digital",
    ];

    return (
        <section className="pricing">
            <Navbar />
            <article className="pricing__header">
                <h1>Invista em seu negócio!</h1>
                <h2>Evolua seu negócio através da tecnologia</h2>
                <button className="pricing__header--button">CONHECER SOLUÇÕES</button>
                <div className="pricing__tabs">
                    <div className="pricing__tabs--content">
                        <button
                            className={`pricing__tab ${activeTab === 'precos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('precos')}>
                            PREÇOS
                        </button>
                        <button
                            className={`pricing__tab ${activeTab === 'solucoes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('solucoes')}>
                            SOLUÇÕES
                        </button>
                    </div>
                </div>
            </article>
            <section className="pricing__subtitle">
                <h3>Buscamos atender as demandas para todos os tamanhos de negócios, nossos preço são pensados na evolução dos negócios e agregar valor aos seus clientes.</h3>
            </section>

            <section className="pricing__content">
                {activeTab === 'precos' ? (
                    <>
                        <img className="pricing__content--bg" src={background}></img>
                        <PlanCard
                            title="Basic"
                            subtitle="Para pequenas negócios"
                            price="R$ 20"
                            descriptions={basicDescriptions}
                            buttonText="ADQUIRIR"
                        />
                        <PlanCard
                            title="Starter"
                            subtitle="Para médios negócios"
                            price="R$ 200"
                            descriptions={starterDescriptions}
                            buttonText="ADQUIRIR"
                        />
                        <PlanCard
                            title="Prime"
                            subtitle="Para negócios em crescimento"
                            price="R$ 500"
                            descriptions={primeDescriptions}
                            buttonText="ADQUIRIR"
                        />
                        <PlanCard
                            title="Custom"
                            subtitle="Para grandes negócios"
                            price="R$ ***"
                            descriptions={customDescriptions}
                            buttonText="ADQUIRIR"
                        />
                    </>
                )
                    : (
                        <article className="pricing__content--solutions">
                            <section className="pricing__content--solutions--left">
                                <h3>SOLUÇÕES PARA VENDAS</h3>
                                <div className="pricing__content--solutions--left--card">
                                    <div className="pricing__content--solutions--left--card--title">
                                        <h2>Presenciais</h2>
                                    </div>
                                    <div className="pricing__content--solutions--left--card--description">
                                        <ul>
                                            <li>Checkout de vendas PDV</li>
                                            <li>Terminal de checkout de vendas</li>
                                            <li>Terminal de auto atendimento</li>
                                            <li>Terminal de pagamento POS</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing__content--solutions--left--card">
                                    <div className="pricing__content--solutions--left--card--title">
                                        <h2>Digitais</h2>
                                    </div>
                                    <div className="pricing__content--solutions--left--card--description">
                                        <ul>
                                            <li>Link de pagamento</li>
                                            <li>Pagamento recorrente</li>
                                            <li>Carteira de pagamentos e serviços</li>
                                            <li>Checkout de vendas online</li>
                                            <li>Site ecommerce</li>
                                            <li>Marketplace de venda</li>
                                            <li>Aplicativo ecommerce</li>
                                            <li>Aplicativo marketplace de vendas</li>
                                        </ul>
                                    </div>

                                </div>
                                <h3>SOLUÇÕES PARA SAÚDE</h3>
                                <div className="pricing__content--solutions--left--card">
                                    <div className="pricing__content--solutions--left--card--title">
                                        <h2>Gestão de saúde</h2>
                                    </div>
                                    <div className="pricing__content--solutions--left--card--description">
                                        <ul>
                                            <li>Agendamento de consultas</li>
                                            <li>Controle receita</li>
                                            <li>Gestão de planos</li>
                                             
                                        </ul>
                                    </div>

                                </div>
                            </section>
                            
                            <section className="pricing__content--solutions--right">
                                <h3>SOLUÇÕES EDUCACIONAIS</h3>
                                <div className="pricing__content--solutions--right--card">
                                    <div className="pricing__content--solutions--right--card--title">
                                        <h2>Gestão de ensino</h2>
                                    </div>
                                    <div className="pricing__content--solutions--right--card--description">
                                        <ul>
                                            <li>Gestão de matrícula</li>
                                            <li>Controle acadêmico</li>
                                            <li>Cadastro de alunos e educadores</li>
                                            <li>Acompanhamento de atividades</li>
                                            <li>Pagamentos acadêmicos</li>
                                            <li>Gestão de vídeos aulas</li>
                                        </ul>
                                    </div>
                                </div>
 
                                <h3>SOLUÇÕES PARA NEGÓCIOS</h3>
                                <div className="pricing__content--solutions--right--card">
                                    <div className="pricing__content--solutions--right--card--title">
                                        <h2>Pagamentos</h2>
                                    </div>
                                    <div className="pricing__content--solutions--right--card--description">
                                        <ul>
                                            <li>Pinpad PDV</li>
                                            <li>Terminais de pagamento</li>
                                            <li>Gestão de pedidos</li>
                                            <li>Pagamentos online</li>
                                            <li>Gerenciamento de estoque</li>
                                            <li>Ads para negócios</li>
                                            <li>Serviço de notificação</li>
                                            <li>Solução de fatura e precificação</li>
                                            <li>Desenvolvimento de fanpages</li>
                                            <li>Desenvolvimento de app pages</li>
                                            <li>PayToYou</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </article>
                    )
                }
            </section>

            <section className="pricing__subtitle" >
                <h4>Precisa de ajuda para encontrar o plano certo para seu negócio?</h4>
                <p>Estamos aqui para ajudar a evolução de empresas de diversos tamanhos e localidade.</p>
                <button className="pricing__subtitle--button">FALAR COM CONSULTOR</button>
            </section>

            <section className="pricing__footer">
                <Footer />
            </section>
        </section>
    );
};
