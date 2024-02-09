export interface IMode {
  mode: string;
  time: string;
  value: IModeValue
}

export interface IModeValue {
  mode: string;
  time: IModeTime
}

interface IModeTime {
  totalTime: number;
  increment: number
}