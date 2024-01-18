import Components from "./components/ui/Components";
import {
  Form,
  FormSection,
  FormSubmit,
  InputForm,
} from "./components/ReuseableFrom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, TNormalForm } from "./components/normalForm/Validation";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TNormalForm>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Components>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <InputForm
            type={"text"}
            register={register("name")}
            errors={errors}
            label={"Name"}
            id={"name"}
          />
          <InputForm
            type={"email"}
            register={register("email")}
            errors={errors}
            label={"Email"}
            id={"email"}
          />
          <InputForm
            type={"password"}
            register={register("password")}
            errors={errors}
            label={"Password"}
            id={"password"}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Components>
  );
}

export default App;
