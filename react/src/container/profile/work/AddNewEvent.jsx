import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SAGA_ADD_NEW_EVENT } from "../../../store/saga/typeSaga";
import "./add_event.scss"



export const AddNewEvent = () => {
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
            form.append("description", data.description);
            form.append("price", data.price);
            form.append("date", data.date)
            form.append("bool", data.bool)
            dispatch({ type: SAGA_ADD_NEW_EVENT, form })
        }
    };

    return (
        <div className='main_add_event'>
            <div className='form_div'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>

                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <input {...register('name', { required: true })} placeholder='enter event name' /><br />
                                </td>
                                <td>
                                    <input {...register('description', { required: true })} placeholder='enter event description' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input {...register('date', { required: true })} placeholder='enter event date' type="date" /><br />
                                </td>
                                <td>
                                    <input {...register('price', { required: false })} placeholder='enter event price' /><br />
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <input {...register('avatar', { required: true })} type='file' /><br />
                                </td>
                                <td>
                                    <select {...register('bool', { required: true })}>
                                        <option  value={0}>pak</option>
                                        <option  value={1} >bac</option>
                                    </select>
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