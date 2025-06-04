export type AxiosDataErrorProps = { status: string; message: string };

export interface ICreateDataResponse<T> {
  status: string;
  data: T;
}
