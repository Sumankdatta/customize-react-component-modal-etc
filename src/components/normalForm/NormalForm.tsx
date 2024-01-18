import { FieldValues, useForm } from "react-hook-form";
import Button from "../ui/Button";
import cn from "../../utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./Validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "border border-gray-300 rounded-lg shadow-lg mt-10 p-5 mx-auto",
        {
          "max-w-4xl": double,
          "max-w-md": !double,
        }
      )}
    >
      <div
        className={cn("grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md ">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className=""
            {...register("name")}
            type="text"
            name="name"
            id="name"
          />
          {errors.name?.message && (
            <span className="text-xs text-red-500">{errors.name?.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            {...register("email")}
            type="email"
            name="email"
            id="email"
          />
          {errors.email?.message && (
            <span className="text-xs text-red-500">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-full"
            {...register("password")}
            type="password"
            name="password"
            id="password"
          />
          {errors.password?.message && (
            <span className="text-xs text-red-500">
              {errors.password?.message}
            </span>
          )}
        </div>
      </div>
      <div
        className={cn("grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
          <Button className="">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
