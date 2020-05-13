declare module "YanPredictor" {
  interface PredictOptions {
    query: String;
    lang?: String;
    limit?: Number;
  }

  readonly apiVerion: string;
  constructor(apiKey: string);

  function predict(options: PredictOptions): Promise<any>;
  function languages(): Promise<any>;
}
