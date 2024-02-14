import { IMode } from '../models/IMode.ts';

const gameModes:IMode[] = [
  {
    clientMode: 'Bullet',
    clientTime: '1+0',
    serverMode: 'ultra-bullet',
  },
  {
    clientMode: 'Bullet',
    clientTime: '2+1',
    serverMode: 'bullet',
  },
  {
    clientMode: 'Blitz',
    clientTime: '3+0',
    serverMode: 'ultra-blitz',
  },
  {
    clientMode: 'Blitz',
    clientTime: '3+2',
    serverMode: 'hyper-blitz',
  },
  {
    clientMode: 'Blitz',
    clientTime: '5+0',
    serverMode: 'super-blitz',
  },
  {
    clientMode: 'Blitz',
    clientTime: '5+3',
    serverMode: 'blitz',
  },
  {
    clientMode: 'Rapid',
    clientTime: '10+0',
    serverMode: 'ultra-rapid',
  },
  {
    clientMode: 'Rapid',
    clientTime: '10+5',
    serverMode: 'hyper-rapid',
  },
  {
    clientMode: 'Rapid',
    clientTime: '15+10',
    serverMode: 'rapid',
  },
  {
    clientMode: 'Classical',
    clientTime: '30+0',
    serverMode: 'ultra-classical',
  },
  {
    clientMode: 'Classical',
    clientTime: '30+20',
    serverMode: 'classical',
  }
];

export default gameModes;