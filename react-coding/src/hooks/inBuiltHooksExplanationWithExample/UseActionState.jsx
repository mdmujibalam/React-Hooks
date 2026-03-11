import React, { useActionState } from "react";
import UseFormStatus from "./UseFormStatus";

const UseActionState = () => {

  const initialState={
    email:"",
    password:""
  }


  const handleSubmit = async (prevState, formData) => {
    const emailId = formData.get("email");
    const password = formData.get("password");

    // console.log("emailId & pasword==>", emailId, password);

    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          status: "success",
          response: "Login Successful !!!",
        });
      }, 3000);
    });

    console.log(result);

    return {
      status: result.status,
      message: result.response,
    };
  };

  const [formState, dispatchAction, isPending] = useActionState(handleSubmit,initialState);

  //console.log("formState==>", formState)

  return (
    <div>
      <form action={dispatchAction}>
        <input type="text" name="email" defaultValue={formState.email}/>
        <input type="text" name="password" defaultValue={formState.password}/>
        <UseFormStatus/>
        <button type="submit">Submit</button>
      </form>
      {isPending && <span>Submitting Data, Plz Wait !</span>}
      {formState?.status === "success" && <span>{formState?.message}</span>}
    </div>
  );
};

export default UseActionState;
