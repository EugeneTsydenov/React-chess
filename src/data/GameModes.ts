import { IMode } from '../models/IMode.ts';

const gameModes:IMode[] = [
  {
    mode: 'Bullet',
    time: '1+0',
    value: {
      mode: 'bullet',
      time: {
        totalTime: 1,
        increment: 0
      }
    }
  },
  {
    mode: 'Bullet',
    time: '2+1',
    value: {
      mode: 'bullet',
      time: {
        totalTime: 2,
        increment: 1
      }
    }
  },
  {
    mode: 'Blitz',
    time: '3+0',
    value: {
      mode: 'blitz',
      time: {
        totalTime: 3,
        increment: 0
      }
    }
  },
  {
    mode: 'Blitz',
    time: '3+2',
    value: {
      mode: 'blitz',
      time: {
        totalTime: 3,
        increment: 2
      }
    }
  },
  {
    mode: 'Blitz',
    time: '5+0',
    value: {
      mode: 'blitz',
      time: {
        totalTime: 5,
        increment: 0
      }
    }
  },
  {
    mode: 'Blitz',
    time: '5+3',
    value: {
      mode: 'blitz',
      time: {
        totalTime: 5,
        increment: 3
      }
    }
  },
  {
    mode: 'Rapid',
    time: '10+0',
    value: {
      mode: 'rapid',
      time: {
        totalTime: 10,
        increment: 0
      }
    }
  },
  {
    mode: 'Rapid',
    time: '10+5',
    value: {
      mode: 'rapid',
      time: {
        totalTime: 10,
        increment: 5
      }
    }
  },
  {
    mode: 'Rapid',
    time: '15+10',
    value: {
      mode: 'rapid  ',
      time: {
        totalTime: 15,
        increment: 10
      }
    }
  },
  {
    mode: 'Classical',
    time: '30+0',
    value: {
      mode: 'classical',
      time: {
        totalTime: 30,
        increment: 0
      }
    }
  },
  {
    mode: 'Classical',
    time: '30+20',
    value: {
      mode: 'classical',
      time: {
        totalTime: 30,
        increment: 20
      }
    }
  },
];

export default gameModes;