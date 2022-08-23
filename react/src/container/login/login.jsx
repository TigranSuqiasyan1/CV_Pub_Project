import "./login.scss";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { SAGA_LOGIN_USER } from "../../store/saga/typeSaga";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch({ type: SAGA_LOGIN_USER, data, navigate })
  };
  return (


    <div className="login_form_div">
      <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
        Email
        <input type="text"
          placeholder="Enter Email"
          
          required
          {...register('username')} />
          
        Password
        <input type="password"
            placeholder="Enter Password"
            
            required
          {...register('password')}  />
         <button className="login_button" type="submit">Login</button>
      </form>
    </div>
  );
};
