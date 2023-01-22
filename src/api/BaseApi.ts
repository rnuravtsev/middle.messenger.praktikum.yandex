import HTTPTransport from '../services/http';
export default abstract class BaseApi {
  protected http: HTTPTransport;
  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  public abstract create?(data: unknown): Promise<Response>;
  public abstract read?(id: string): Promise<Response>;
  public abstract update?(id: string, data: void): Promise<Response>;
  public abstract delete?(id: string): Promise<Response>;
}
