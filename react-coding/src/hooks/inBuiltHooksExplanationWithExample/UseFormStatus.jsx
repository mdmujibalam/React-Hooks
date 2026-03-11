import React from 'react'
import {useFormStatus} from "react-dom"

const UseFormStatus = () => {
    const {pending, data, method, action}= useFormStatus();
    console.log("pending==>", pending);
    console.log("data==>", data);
    console.log("method==>", method);
    console.log("action==>", action);
  return (
    <div></div>
  )
}

export default UseFormStatus