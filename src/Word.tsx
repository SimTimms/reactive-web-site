import { Typography } from '@mui/material';

function randomLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
}
export default function Word() {
  function generateBingo() {
    const imgArr = ['XXXXXXX', 'ABBBA', 'ABBBA'];
    const bingArr = [];
    const nbr = 10;
    let count = 0;

    for (let row = 0; row < nbr; row++) {
      const rowArr: {
        isWord: boolean;
        word: string | null;
        letter: string;
        direction: string;
        count: number;
      }[] = [];
      for (let col = 0; col < nbr; col++) {
        rowArr.push({
          isWord: false,
          word: null,
          letter: randomLetter(),
          direction: '',
          count: 0,
        });
      }
      bingArr.push(rowArr);
    }

    let escape = 20;

    do {
      escape += -1;
      if (escape <= 0) {
        break;
      }

      const word = imgArr[0];
      const wordDirection = Math.random() > 0.5 ? 'down' : 'across';
      const startRow = Math.floor(Math.random() * (nbr - word.length));
      const startColumn = Math.floor(Math.random() * (nbr - word.length));

      const wordRow = bingArr[startRow];
      const wordArr = [];
      //Check if any letter is already a word
      let breakQ = false;
      for (let letter = 0; letter < word.length; letter++) {
        if (
          (wordRow[startColumn + letter].isWord &&
            wordRow[startColumn + letter].direction === wordDirection) ||
          (wordRow[startColumn + letter].isWord &&
            wordRow[startColumn + letter].direction !== wordDirection &&
            wordRow[startColumn + letter].letter !== word[letter])
        ) {
          console.log('Word already exists', wordRow[startColumn + letter]);
          breakQ = true;
          break;
        }
      }
      if (breakQ) {
        continue;
      }

      if (wordDirection === 'down') {
        for (let letter = 0; letter < word.length; letter++) {
          console.log(startColumn);
          bingArr[startRow + letter].splice(startColumn, 1, {
            isWord: true,
            word: word,
            letter: word[letter],
            direction: 'down',
            count: 0,
          });
        }
      } else if (wordDirection === 'across') {
        for (let letter = 0; letter < word.length; letter++) {
          wordArr.push({
            isWord: true,
            word: word,
            letter: word[letter],
            direction: 'across',
            count: 0,
          });
        }
        wordRow.splice(startColumn, word.length, ...wordArr);
      }
      imgArr.splice(0, 1);
    } while (imgArr.length > 0);

    const elementArr = [];
    for (let row = 0; row < bingArr.length; row++) {
      const elRowArr = [];
      const word = bingArr[row];
      for (let col = 0; col < word.length; col++) {
        count++;
        elRowArr.push(
          <div
            style={{
              width: `calc(${100 / nbr}vw - ${20 / nbr}px)`,
              height: `calc(${100 / nbr}vw - ${20 / nbr}px)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              border: '1px solid #fff',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: word[col].isWord ? '#000' : '#aaa',
            }}
          >
            {word[col].letter}
          </div>
        );
      }
      elementArr.push(<div style={{ display: 'flex' }}>{elRowArr}</div>);
      imgArr.splice(0, 1);
    }
    return elementArr;
  }

  function createLots(number: number) {
    const bingArr = [];
    for (let i = 0; i < number; i++) {
      bingArr.push(
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '10px solid #ccc',
            boxSizing: 'border-box',
            margin: 10,
          }}
        >
          {generateBingo()}
        </div>
      );
    }
    return bingArr;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        margin: 10,
      }}
    >
      {createLots(1)}
    </div>
  );
}
