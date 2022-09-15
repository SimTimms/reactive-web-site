import { ICard } from '../modules/module-business-card/interface/ICard';
import { ssa, vmi, noble, savidant } from '../assets';

export const businessCards: ICard[] = [
  {
    type: 'Freelance Client',
    name: 'Cameron Paine',
    image: ssa,
    description:
      'I am delighted to say that I can and do recommend him wholeheartedly to anyone.',
    company: 'Sussex Sword Academy',
    date: '2017-2022',
    bold: 'Thanks Cameron',
    text: `I built the SSA website, It's outdated now so I'm refreshing it`,
  },
  {
    type: 'Freelance Client',
    name: 'Andrea Munoz',
    image: vmi,
    description:
      'Fantastic service, friendly and professional! Huge knowledge, highly recommend',
    company: 'VMI',
    date: '2022',
    bold: 'Thanks Andrea',
    text: `I've done a bit of freelancing for VMI, somtime Three.js and some React & Node.js`,
  },
  {
    type: 'Freelance Client',
    name: 'Jamie Noble-Frier',
    image: noble,
    description: `
I'd recommend Tim for any development project, and will continue to work with him in future.
`,
    company: 'The Noble Artist',
    date: '2018-2022',
    bold: 'Cheers Jamie',
    text: 'Jamie and I worked together on DoodleMeeple and a couple of other little projects.',
  },
  {
    type: 'Freelance Client',
    name: 'Ian Bailey',
    image: savidant,
    description: `
Very easy to work with and just "gets it"
`,
    company: 'Savidant',
    date: '2022',
    bold: 'Nice One Ian!',
    text: `I'm helping Ian out with his Savidant website, we've fixed up some responsive issues and adding some PayPal functionality`,
  },
];
