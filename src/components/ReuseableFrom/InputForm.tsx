import { TInputFormProps } from "../../types";

export const InputForm = ({
  label,
  register,
  type,
  errors,
  id,
}: TInputFormProps) => {
  return (
    <div className="w-full max-w-md ">
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input className="" {...register} type={type} name={id} id={id} />
      {errors[id]?.message && (
        <span className="text-xs text-red-500">{errors[id].message}</span>
      )}
    </div>
  );
};
