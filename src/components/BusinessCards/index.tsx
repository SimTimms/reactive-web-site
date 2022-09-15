import React, { useEffect, useState } from 'react';
import { businessCards } from '../../data/businessCards';
import BusinessCard from '../../modules/module-business-card';
import { ISpeech } from '../../interface/ISpeech';

export const BusinessCards = React.memo(
  (props: { toggleTheme: (value: ISpeech) => void }) => {
    const [renderArr, setRenderArr] = useState<JSX.Element[]>([]);
    useEffect(() => {
      let arr = [];

      arr = businessCards.map((card, index) => (
        <BusinessCard
          key={`card_${index}_${Math.random() * 300}`}
          card={card}
          onClickEvent={() =>
            props.toggleTheme({ bold: card.bold, text: card.text })
          }
          delay={index + 1}
        />
      ));
      setRenderArr(arr);
    }, []);

    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          opacity: 1,
          transition: 'all 700ms',
          position: 'relative',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {renderArr}
      </div>
    );
  }
);
