import { RiLockPasswordFill } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";

const schema = yup.object().shape({
  password: yup.string().required(),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

export default function ResetPassword() {
  const { token } = useParams();
  const history = useHistory();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const obj = await fetch(`http://localhost:5000/resetPassword/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: data.password,
      }),
    });

    console.log(await obj.json());
    console.log(token);

    if (obj.status !== 422) {
      alert(
        "Password reset successful.\nPress 'Okay' to login with new password."
      );
      reset();
      history.push("/login");
    } else {
      alert("Invalid attempt!");
    }
  };
  return (
    <div className="generateForm aligned login">
      <p>{"{ Reset-Password }"}</p>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex b-border">
          <RiLockPasswordFill className="form-icon" />
          <input
            type="password"
            placeholder="New Password"
            name="password"
            {...register("password")}
          />
        </div>
        <p className="message">{errors.password?.message}</p>

        <div className="flex b-border">
          <RiLockPasswordFill className="form-icon" />
          <input
            type="password"
            placeholder="Confirm New Password"
            name="cpassword"
            {...register("cpassword")}
          />
        </div>
        <p className="message">
          {errors.cpassword && "⚠ Oops! Passwords should match!"}
        </p>

        <input type="submit" value="Reset" />
      </form>
    </div>
  );
}
