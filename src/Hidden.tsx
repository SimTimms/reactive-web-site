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

const findArr = [img1];

export default function Hidden() {
  function generateBingo() {
    const imgArr = [
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
    const nbr = 20;
    let count = 0;
    for (let i = 0; i < nbr; i++) {
      const rowArr = [];
      for (let j = 0; j < nbr; j++) {
        count++;

        // const rand = Math.floor(Math.random() * imgArr.length);
        const rand = Math.floor(Math.random() * imgArr.length);

        const shouldDisplay = Math.floor(Math.random() * (nbr * nbr)) - count;

        console.log(shouldDisplay, shouldDisplay <= 0 && findArr);

        const imgA =
          shouldDisplay <= 0 && findArr.length > 0 ? findArr[0] : imgArr[rand];
        findArr.length > 0 && shouldDisplay <= 0 && findArr.splice(0, 1);
        rowArr.push(
          <div
            style={{
              width: `calc(${100 / nbr}vw - ${20 / nbr}px)`,
              height: `calc(${100 / nbr}vw - ${20 / nbr}px)`,
              backgroundImage: `url(${imgA})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              border: '1px solid #fff',
              boxSizing: 'border-box',
            }}
          ></div>
        );
        //  imgArr.splice(rand, 1);
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
      <div
        style={{
          width: `calc(${10}vw - ${20 / 10}px)`,
          height: `calc(${10}vw - ${20 / 10}px)`,
          backgroundImage: `url(${img1})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          border: '6px solid #aaa',
          boxSizing: 'border-box',
          borderRadius: '50%',
        }}
      ></div>
      {createLots(1)}
    </div>
  );
}
