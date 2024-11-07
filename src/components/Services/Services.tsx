// src/components/Services/Services.tsx

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Serviços</h1>

      <Tabs>
        <TabList className="react-tabs__tab-list">
          <Tab className="react-tabs__tab">Software</Tab>
          <Tab className="react-tabs__tab">Eletrônica</Tab>
          <Tab className="react-tabs__tab">Prototipacao 3D</Tab>
          <Tab className="react-tabs__tab">Négocios</Tab>
        </TabList>

        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <h2>Desenvolvimento Web</h2>
              <p>Criação de websites responsivos e modernos utilizando as tecnologias mais recentes.</p>
            </div>
            <div className="service-item">
              <h2>Desenvolvimento Mobile</h2>
              <p>Aplicativos móveis para Android e iOS com performance nativa e ótima experiência de usuário.</p>
            </div>
            <div className="service-item">
              <h2>Cloud</h2>
              <p>Serviços em nuvem para armazenamento, processamento e escalabilidade de aplicações.</p>
            </div>
            <div className="service-item">
              <h2>IoT</h2>
              <p>Integração e desenvolvimento de soluções para a Internet das Coisas.</p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <h2>Manutenção de Veículos Elétricos</h2>
              <p>Serviços de manutenção para todos os tipos de veículos elétricos.</p>
            </div>
            <div className="service-item">
              <h2>Recuperação de Baterias de Lítio</h2>
              <p>Recuperação e recondicionamento de baterias de lítio para aumentar a vida útil.</p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <h2>Desenho 3D</h2>
              <p>Criação de modelos tridimensionais detalhados para uma variedade de aplicações.</p>
            </div>
            <div className="service-item">
              <h2>Impressão 3D</h2>
              <p>Transforme seus desenhos digitais em objetos físicos com nossas impressoras 3D de alta qualidade.</p>
            </div>
          </div>
        </TabPanel>


        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <h2>Plano de negocio</h2>
              <p>Criação de modelos de negocios para empresas que querem iniciar na era digital.</p>
            </div>
            
            <div className="service-item">
              <h2>Metodologia Agil</h2>
              <p>Implementação de metologias ageis para melhorar a eficiencia de negocios e empresas.</p>
            </div>


            <div className="service-item">
              <h2>Sistema de gestão</h2>
              <p>Sistema de gestão de projetos, para maximizar a eficiencia do negocio ou projeto .</p>
            </div>

          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Services;
