export interface ProductResponse<T> {
  StatusCode: number;
  Message: string;
  Data: T;
}
