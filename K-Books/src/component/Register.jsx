import React from "react";
import { ToastContainer, toast } from "react-toastify";
import {useSelector,useDispatch} from 'react-redux'
import { storeFormData } from "../utils/redux/action";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
export default function Register() {
  const { register , handleSubmit , watch ,reset ,formState: { errors }} = useForm();
  const dispatch = useDispatch()
  const formData = useSelector((data)=>{
    return data.formData
  })

  //^ Function that will execute for the data which is submitted
  const FormSubmitHandler = (data) => {
    console.log(data);
    localStorage.setItem("user-data", JSON.stringify(data))
    dispatch(storeFormData(data))
    toast.success("Form Submitted Successfully");
    reset();
  };
  const clearData = ()=>{
    dispatch(storeFormData({}))
    localStorage.clear()
  }
  const confirmPass = watch("password");
  console.log(formData)
  return (
    <div id="home">

            {/* Toast */}
          <ToastContainer />                              



          {/* Form Data  */}
      {Object.keys(formData).length !=0 ? (

        // successfully form submitted
        <div className="successful">
          <div >Registered!</div>
          <div className="buttons">
            <Link><button onClick={clearData}>Reset</button></Link>
            <Link to={"/"}><button>Back to books</button></Link>
          </div>
        </div>
      ) : (

        // Form Started 
        <div id="form">
          <fieldset>
            <legend>Registration</legend>

            <form onSubmit={handleSubmit(FormSubmitHandler)}>
              <div>
                <label> Name : </label>
                <input
                  type="text"
                  name="firstName"
                  {...register("firstName", {
                    required: "First Name Required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                    maxLength: {
                      value: 30,
                      message: "Maximun 30 characters only",
                    },
                  })}
                />
                {errors.firstName && <p className="err">{errors.firstName.message}</p>}
              </div>

              <div>
                <label> Email : </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email Required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                <p className="err">{errors.email?.message}</p>
              </div>

              <div>
                <label> Password : </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "Password Required",
                    minLength: {
                      value: 8,
                      message: "Minimum 8 characters required",
                    },
                    pattern: {
                      value: /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/,
                      message:
                        "Use at least one Special Character",
                    },
                  })}
                />
                <p className="err">{errors.password?.message}</p>
              </div>

              <div>
                <label> Confirm Password : </label>
                <input
                  type="password"
                  name="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Password Required",
                    validate: (value) =>
                      value == confirmPass || "Password does not match",
                  })}
                />
                <p className="err">{errors.confirmPassword?.message}</p>
              </div>

              <div className="regBtn">
                <input className="subBtn" type="submit" value="Register" />
              </div>
            </form>
          </fieldset>
        </div>
      )}
    </div>
  );
}