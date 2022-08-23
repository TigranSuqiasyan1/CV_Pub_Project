import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SAGA_ADD_NEW_PRODUCT, SAGA_GET_ALL_CATEGORY } from "../../../store/saga/typeSaga";
import "./add_product.scss"



export const AddNewProduct = () => {
    const dispatch = useDispatch()
    const dataCat = useSelector(state => state.categoryReducer.arr)
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
            form.append("price", data.price);
            form.append("description", data.description);
            form.append("categoryId", data.categoryId);
            dispatch({ type: SAGA_ADD_NEW_PRODUCT, form })
        }
    };

    useEffect(() => {
        dispatch({ type: SAGA_GET_ALL_CATEGORY })
    }, [])

    return (
        <div className='main_add_product'>
            <div className='form_div'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <input {...register('name', { required: true })} placeholder='enter product name' /><br />
                                </td>

                                <td>
                                    <input {...register('price', { required: true })} placeholder='enter product price' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input {...register('description',)} placeholder='enter product description' /><br />
                                </td>
                                <td>
                                    <select  {...register('categoryId', { required: true })}>
                                        {
                                         dataCat?.map(e=>{
                                            return (
                                                <>
                                                 <option key={e.id} value={e.id}>{e.name}</option>
                                                </>
                                            )
                                         })   
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input {...register('avatar', { required: true })} type='file' /><br />
                                </td>
                            </tr>
                            <tr>
                                <td className='save_td'>
                                    <button>SAVE</button> 
                                </td>
                            </tr>
                        </thead>
                    </table>
                </form>
            </div>
        </div>
    );
}