export interface ShaparakErrorItems {
  id: number;
  errorCode: number;
  errorDesc: string;
  refName: string;
  orginalValue?: string;
  extraData?: string;
  resErrorsType?: string;
  message?: string;
}

export interface ShaparkErrorQueryParam {
  errorCode: number;
  errorDesc: number;
  refName: number;
  message: string;
}
