// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Contract {
  errors: any[];
  validate(model: any): boolean;
}
