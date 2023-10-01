import { requirementsMap } from '@/utils/requirementsMap';

export type FormInput = {
  input: string;
};

// Define validation rules as a record of requirement keys and corresponding functions
export type ValidationRules = Record<string, (value: string) => boolean>;

// Define a type for requirement keys based on requirementsMap
export type ReqType = (keyof typeof requirementsMap)[];

// Define a utility type for extracting keys from an object
export type Keys<T> = {
  [K in keyof T as K extends string ? K : never]: K;
};
