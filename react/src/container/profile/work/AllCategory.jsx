import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SAGA_DELETE_CATEGORY, SAGA_GET_ALL_CATEGORY } from "../../../store/saga/typeSaga";
import "./all_category.scss"


export const AllCategory = () => {
    
    const deleteCategory = (id) => {
        dispatch({type:SAGA_DELETE_CATEGORY,data:id});
      };

    const data = useSelector(state => state.categoryReducer.arr)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: SAGA_GET_ALL_CATEGORY })
    }, [])

    return (

        <div className="main_all_category">
            <div className="admin_category_table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>PicUrl</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data?.map(e => {
                            return (
                                 <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>
                                      <img src={"http://localhost:8080/images/category/" + e.picUrl} width='100'></img> 
                                    </td>

                                    <td><button onClick={()=>deleteCategory(e)}>delete</button></td>
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