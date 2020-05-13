import request from './request';

export default class YanPredictor {
  public host: string = 'predictor.yandex.net';
  public agent: boolean = false;
  protected apiKey: string;
  private readonly apiVerion: string = '/api/v1/predict.json';
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  public languages(): Promise<any> {
    return request({
      host: this.host,
      method: 'GET',
      agent: this.agent,
      path: `${this.apiVerion}/getLangs?key=${this.apiKey}`
    });
  }
  public predict({
            lang = 'ru',
            limit = 1,
            query = '',
          }): Promise<any> {
    return request({
      host: this.host,
      method: 'GET',
      agent: this.agent,
      path: `${this.apiVerion}/complete?key=${this.apiKey}&lang=${lang}&q=${encodeURI(query)}&limit=${limit}`
    })
  }
}
