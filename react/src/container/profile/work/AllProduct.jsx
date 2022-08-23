import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SAGA_DELETE_PRODUCT, SAGA_GET_ALL_PRODUCT, SAGA_GET_ALL_USER} from "../../../store/saga/typeSaga"
import "./all_product.scss";

export const AllProduct = ()=>{

    const deleteProduct = (id) => {
        dispatch({type:SAGA_DELETE_PRODUCT,data:id});
      };

    const user = useSelector(state =>state.userReducer.arr)
    const data = useSelector(state => state.productReducer.arr)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:SAGA_GET_ALL_USER})
        dispatch({ type: SAGA_GET_ALL_PRODUCT })
    }, [])

    return(
        <div className="main_all_product">
            <div className="admin_product_table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>PicUrl </th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Product By</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {data?.map(e => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td><img src={"http://localhost:8080/images/product/" + e.picUrl}  width='100'></img></td>
                                    <td>{e.price}</td>
                                    <td>{e.description}</td>
                                <td>{e.user?.name}</td>
                                    <td><button onClick={() => deleteProduct(e)}>delete</button></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}