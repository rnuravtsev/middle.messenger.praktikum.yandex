import HTTPTransport from '../services/HTTPTransport/HTTPTransport'
export default abstract class BaseAPI {
  protected http: HTTPTransport
  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint)
  }

  public abstract create?(data: unknown): Promise<unknown>;
  public abstract read?(id: string): Promise<unknown>;
  public abstract update?(data?: unknown, id?: string | number): Promise<unknown>;
  public abstract delete?(id: unknown): Promise<unknown>;
}
