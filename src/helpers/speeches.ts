export const speechObject = (paramIn: string) => {
  switch (paramIn) {
    case 'skills':
      return { bold: 'OK Cool', text: `Here's my CV` };
      break;

    default:
      return { bold: 'Hi', text: 'How can I help you?' };
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
