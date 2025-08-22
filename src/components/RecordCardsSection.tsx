import React from "react";
import RecordCard from "./RecordCard";

interface RecordCardData {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

interface RecordCardsSectionProps {
  cards: RecordCardData[];
  getCardHref?: (card: RecordCardData) => string;
}

const RecordCardsSection: React.FC<RecordCardsSectionProps> = ({
  cards,
  getCardHref = (card) => `/record/${card.id}`,
}) => {
  return (
    <section className="py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {cards.map((card) => (
          <RecordCard
            key={card.id}
            image={card.image}
            alt={card.alt}
            title={card.title}
            subtitle={card.subtitle}
            href={getCardHref(card)}
          />
        ))}
      </div>
    </section>
  );
};

export default RecordCardsSection;
