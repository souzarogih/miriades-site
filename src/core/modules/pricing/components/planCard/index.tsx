import React from 'react';
import './styles.scss';
import { FaCheck } from "react-icons/fa";

interface PlanCardProps {
  title: string;
  subtitle: string;
  price: string;
  descriptions: string[];
  buttonText: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, subtitle, price, descriptions, buttonText }) => {
  return (
    <div className="plan-card">
      <div className="plan-card__header">
        <h2 className="plan-card__title">{title}</h2>
        <p className="plan-card__subtitle">{subtitle}</p>
      </div>
      <div className="plan-card__price-section">
        <h3 className="plan-card__price">{price}</h3>
        <p className="plan-card__price-info">/mês por todos os recursos disponíveis</p>
      </div>
      <ul className="plan-card__features">
        {descriptions.map((desc, index) => (
          <li key={index} className="plan-card__feature">
            <FaCheck /> {desc}
          </li>
        ))}
      </ul>
      <button className="plan-card__button">{buttonText}</button>
    </div>
  );
}

export default PlanCard;
