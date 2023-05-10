import img1 from './assets/bingo/img1.png';
import img2 from './assets/bingo/img2.png';
import img3 from './assets/bingo/img3.png';
import img4 from './assets/bingo/img4.png';
import img5 from './assets/bingo/img5.png';
import img6 from './assets/bingo/img6.png';
import img7 from './assets/bingo/img7.png';
import img8 from './assets/bingo/img8.png';
import img9 from './assets/bingo/img9.png';
import img10 from './assets/bingo/img10.png';
import img11 from './assets/bingo/img11.png';
import img12 from './assets/bingo/img12.png';
import img13 from './assets/bingo/img13.png';
import img14 from './assets/bingo/img14.png';
import img15 from './assets/bingo/img15.png';
import img16 from './assets/bingo/img16.png';
import img17 from './assets/bingo/img17.png';
import img18 from './assets/bingo/img18.png';
import img19 from './assets/bingo/img19.jpg';
import img20 from './assets/bingo/img20.jpg';
import img21 from './assets/bingo/img21.png';
import img22 from './assets/bingo/img22.png';
import img23 from './assets/bingo/img23.png';
import img24 from './assets/bingo/img24.png';
import { Typography } from '@mui/material';

export default function Bingo() {
  function generateBingo() {
    const imgArr = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
      img22,
      img23,
      img24,
    ];
    const bingArr = [];
    let count = 0;
    for (let i = 0; i < 5; i++) {
      const rowArr = [];
      for (let j = 0; j < 5; j++) {
        count++;
        if (count === 13) {
          rowArr.push(
            <div
              style={{
                width: '16vw',
                height: '16vw',
                border: '1px solid #ccc',
                margin: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                style={{
                  textAlign: 'center',
                  fontFamily: `'Rubik Burned', cursive !important`,
                }}
              >
                Lenny 6th Birthday
              </Typography>
            </div>
          );
        } else {
          const rand = Math.floor(Math.random() * imgArr.length);
          rowArr.push(
            <div
              style={{
                width: '16vw',
                height: '16vw',
                backgroundImage: `url(${imgArr[rand]})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                border: '1px solid #aaa',
                margin: 10,
                boxSizing: 'border-box',
              }}
            ></div>
          );
          imgArr.splice(rand, 1);
        }
      }
      bingArr.push(<div>{rowArr}</div>);
    }
    return bingArr;
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
          <Typography
            style={{
              fontSize: '5vw',
              fontFamily: `'Courier Prime', monospace`,
            }}
          >
            BINGO
          </Typography>
          <div style={{ display: 'flex' }}>{generateBingo()}</div>
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
