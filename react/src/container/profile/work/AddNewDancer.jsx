import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { SAGA_ADD_NEW_DANCER } from '../../../store/saga/typeSaga';
import "./add_dancer.scss"



export const AddNewDancer = () => {
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
            form.append("description", data.description);
            form.append("age", data.age);
            dispatch({ type: SAGA_ADD_NEW_DANCER, form })
        }
    };
    return (

        <div className='main_add_dancer'>
            <div className='form_div'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>

                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <input {...register('name', { required: true })} placeholder='enter dancer name' /><br />
                                </td>
                                <td>
                                    <input {...register('surname', { required: true })} placeholder='enter dancer surname' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input {...register('age', { required: true, pattern: /\d+/ })} placeholder='enter dancer age' /><br />
                                </td>
                                <td>
                                    <input {...register('description', { required: true })} placeholder='enter dancer description' /><br />
                                </td>
                             
                            </tr>
                            <tr>
                                   <td>
                                    <input {...register('avatar', { required: true })} type='file' /><br />
                                </td>
                                <td className='save_td'>
                                    <input type="submit" />
                                </td>
                            </tr>
                        </thead>
                    </table>
                </form>
            </div>
        </div>
    )
}