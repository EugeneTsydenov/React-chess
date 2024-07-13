export interface IMode {
  clientMode: string;
  clientTime: string;
  time: ITime;
  serverMode: string;
}

export interface ITime {
  totalTime: number,
  increment: number
}
