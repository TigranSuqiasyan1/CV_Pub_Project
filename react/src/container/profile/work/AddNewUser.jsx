import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { SAGA_REGISTER_USER } from '../../../store/saga/typeSaga';
import "./add_user.scss"



export const AddNewUser = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        if (data.avatar.length) {
            const form = new FormData()
            form.append("avatar", data.avatar[0]);
            form.append("name", data.name);
            form.append("surname", data.surname);
            form.append("phone", data.phone);
            form.append("age", data.age);
            form.append("email", data.email);
            form.append("password", data.password);
            form.append("passwordConfirm", data.passwordConfirm);
            dispatch({ type: SAGA_REGISTER_USER, form })
        }
    };

    return (
        <div className='main_add_user'>
            <div className='form_div'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>

                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <input {...register('name', { required: true })} placeholder='enter user name' /><br />
                                </td>
                                <td>
                                    <input {...register('surname', { required: true })} placeholder='enter user surname' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input {...register('age', {
                                        required: true,
                                         pattern: {
                                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                            message: 'is not  integer'
                                        }
                                    })} placeholder='enter user age' /><br />
                                </td>
                                <td>
                                    <input {...register('phone', { required: true })} placeholder='enter user phone' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input {...register('avatar', { required: true })} type='file' /><br />
                                </td>
                                <td>
                                    <input {...register('email', { required: true })} type="email" placeholder='enter user email' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="password" {...register('password', { required: true })} placeholder='enter user password' /><br />
                                </td>
                                <td>
                                    <input type="password" {...register('passwordConfirm', { required: true })} placeholder='enter user passwordConfirm' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td className='save_td'>
                                    <input type="submit" />
                                </td>
                            </tr>

                        </thead>

                    </table>
                </form>

            </div>
        </div>
    );
}