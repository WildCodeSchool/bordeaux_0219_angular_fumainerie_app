import { GouvernancePersonality } from '../shared/models/gouvernance-personality';
const url = '../../../assets/images/Temp';

export const gouvernanceMock: GouvernancePersonality[] =
  [{
    id: 0,
    name: 'Ambre Diazabakana',
    picture: url + '1.jpg',
    details: '"Tout le monde savait que c\'était impossible. Il est venu un imbécile qui ne le savait pas et qui l\'a fait.”',
    citation: 'Marcel Pagnol'
  },
  {
    id: 1,
    name: 'Amélie Colle',
    picture: url + '2.jpg',
    details: '“Le monde déteste le changement, c\'est pourtant la seule chose qui lui a permis de progresser.”',
    citation: 'Charles F. KetteringRole'
  },
  {
    id: 2,
    name: 'Valentin Pommier',
    picture: url + '3.jpg',
    details: '“L’Homme est un simple élément, constitutif mais non nécessaire, de la Nature et en aucun cas son maître.”',
    citation: 'Romain Guilleaumes'
  },
  {
    id: 3,
    name: 'Maïlys Horiot',
    picture: url + '4.jpg',
    // tslint:disable-next-line: max-line-length
    details: '“L’Homme est fou. Il adore un Dieu invisible et détruit une nature visible, inconscient que la Nature qu’il détruit est le Dieu qu’il vénère.”',
    citation: 'Hubert Reeves'
  },
  {
    id: 4,
    name: 'Mathieu Preel',
    picture: url + '5.jpg',
    details: '“Rien ne se perd, rien ne se créé, tout se transforme.”',
    citation: ' A. Lavoisier'
  },
  {
    id: 5,
    name: 'Aurélie Morin',
    picture: url + '6.jpg',
    details: '',
    citation: ''
  },
  {
    id: 6,
    name: 'Eric Bosc',
    picture: url + '6.jpg',
    details: '',
    citation: ''
  },
  {
    id: 7,
    name: 'Johny Hardy',
    picture: url + '6.jpg',
    details: '',
    citation: ''
  },
  {
    id: 8,
    name: 'Jean-Christophe Aguas',
    picture: url + '6.jpg',
    details: '',
    citation: ''
  },

  // a compléter ci dessous par les membres supplémentaires le cas échéant
  // {
    //   id: 9,
    //   name: 'Nom Prénom',
    //   picture: url + '6.jpg',
    //   details: 'citation,
    // citation: 'Marcel Pagnol'
  // },
  // {
  //   id: 10,
  //   name: 'Nom Prénom',
  //   picture: url + '6.jpg',
  //   details: 'Role au sein de l\'association'
  // },
    // {
    //   id: 11,
    //   name: 'Nom Prénom',
    //   picture: url + '6.jpg',
    //   details: 'Role au sein de l\'association'
    // },

  ];

