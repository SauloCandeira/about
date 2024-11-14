import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css'; // Arquivo de estilo específico para o botão

interface WhatsappButtonProps {
  phoneNumber: string; // Número de telefone para o WhatsApp
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ phoneNumber }) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      {/* Tamanho do ícone ajustado via prop 'size' */}
      <FaWhatsapp size={40} style={{ color: '#fff' }} />
    </a>
  );
};

export default WhatsappButton;
