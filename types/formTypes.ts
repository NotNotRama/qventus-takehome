import { requirementsMap } from '@/utils/requirementsMap';

export type FormInput = {
  input: string;
};
export type ValidationRules = Record<string, (value: string) => boolean>;
export type ReqType = (keyof typeof requirementsMap)[];

export type Keys<T> = {
  [K in keyof T as K extends string ? K : never]: K;
};
