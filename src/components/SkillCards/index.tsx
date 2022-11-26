import React, { useEffect, useState } from 'react';
import { skillCards } from '../../data/skillCards';
import { GridCard } from '../../modules/module-grid-card';
import { ThemeContext } from '../../context/ctxSpeech';
import { skillSpeech } from '../../helpers/speeches';
import { ISpeech } from '../../interface/ISpeech';
export const SkillCards = React.memo(
  (props: { toggleTheme: (value: ISpeech) => void }) => {
    const [renderArr, setRenderArr] = useState<JSX.Element[]>([]);
    useEffect(() => {
      let arr = [];

      arr = skillCards.map((card, index) => (
        <GridCard
          key={`card_${index}_${Math.random() * 300}`}
          card={card}
          onClickEvent={() =>
            props.toggleTheme({ bold: card.bold, text: card.text })
          }
          delay={index + 1}
          powerOn={true}
          arrCount={skillCards.length}
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
