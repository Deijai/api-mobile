export interface Item {
  [key: string]: {
    id: number;
    versionCode: number;
    versionName: string;
    features?: Array<string>;
    bugfixs?: Array<string>;
  }
}