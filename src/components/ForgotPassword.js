import { MdEmail } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function ForgotPassword() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const obj = await fetch("http://localhost:5000/forgotpassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
      }),
    });

    if (obj.status !== 422) {
      alert("Please check your Email to reset the password.");
      reset();
    } else {
      alert("Invalid Email-Id");
    }
  };
  return (
    <div className="generateForm aligned login">
      <p>{"{ Forgot-Password }"}</p>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex b-border">
          <MdEmail className="form-icon" />
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            {...register("email")}
          />
        </div>
        <p className="message">{errors.email && "⚠ Email is required!"}</p>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
