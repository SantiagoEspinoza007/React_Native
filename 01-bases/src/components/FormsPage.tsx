import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

const FormsPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "santiago@gmail.com",
      password: "123456",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formularios</h3>
      <div className="flex flex-col space-y-2 w-[500px]">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-xl border-gray-300 border-2"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-xl border-gray-300 border-2"
          {...register("password", { required: true })}
        />
        <button className="bg-blue-500 text-white p-2 rounded-xl">
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default FormsPage;
