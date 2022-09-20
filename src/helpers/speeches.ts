export const speechObject = (paramIn: string) => {
  switch (paramIn) {
    case 'skills':
      return { bold: 'OK Cool', text: `Here's my CV` };
      break;

    case 'aboutMe':
      return {
        bold: `That's me!`,
        text: `In case you're wondering... yes I am actually greyscale. I don't have magical butterflies though.....one day maybe. This image took about 5 minutes to make. The original photo was really poor quality so I put a newspaper filter over the top and added a splash and some butterflies`,
      };
      break;

    case 'radio':
      return {
        bold: `It's cool isn't it`,
        text: `Click the track name to change colour! I ran into so many problems making this widget but in the end it came out well. This uses the Spotify API with "Authorization Code Flow". The bars use setInterval to go up and down at random times and CSS transitions make them move smoothly. I had to build a micro Node API to store the Spotify refresh token and that in itself is an awesome little tool. `,
      };
      break;

    default:
      return {
        bold: 'Hi',
        text: `Click on things and I'll tell you more about it`,
      };
      break;
  }
};

export const skillSpeech = (index: number) => {
  switch (index) {
    case 0:
      return {
        bold: 'Oooh React',
        text: `I've been using React daily for 6 years`,
      };
      break;
    case 1:
      return {
        bold: 'Oooh Node',
        text: `I've been using React daily for 6 years`,
      };
      break;
    case 2:
      return {
        bold: 'Oooh Typescript',
        text: `Now we're talking`,
      };
      break;

    default:
      return {
        bold: 'And Node.JS',
        text: `I've been using asssaReact daily for 6 years`,
      };
      break;
  }
};
