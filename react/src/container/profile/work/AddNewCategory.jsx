import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation} from 'react-router-dom';
import { SAGA_ADD_CATEGORY, SAGA_GET_CATEGORY_BY_ID } from '../../../store/saga/typeSaga';
import "./add_category.scss"
import { useEffect } from 'react';


export const AddNewCategory = () => {
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
            dispatch({ type: SAGA_ADD_CATEGORY, form })
        }
    };

    return (
        <div className='main_add_category'>
            <div className='form_div'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <input {...register('name', { required: true })} placeholder='enter category name' /><br />
                                </td>
                                <td>
                                    <input {...register('avatar', { required: true })} type='file' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td className='save_td'>
                                    <input type="submit" />
                                </td>
                                <td>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </form>
            </div>
        </div>
    )
}