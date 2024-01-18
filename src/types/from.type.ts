/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  double?: boolean;
};

export type TInputFormProps = {
  label: string;
  register: any;
  type: string;
  errors: any;
  id: string;
  customErrorMessage?: string;
};
