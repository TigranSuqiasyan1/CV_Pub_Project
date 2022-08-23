import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SAGA_DELETE_USER, SAGA_GET_ALL_USER } from "../../../store/saga/typeSaga";
import "./all_user.scss"
export const AllUser = () => {
    const deleteUser = (id) => {
        dispatch({type:SAGA_DELETE_USER,data:id});
      };
    const data = useSelector(state => state.userReducer.arr)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: SAGA_GET_ALL_USER })
    }, [])

    return (
        <div className="main_all_user">
         <div className="admin_table">
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>picUrl</th>
                        <th>type</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(e => {
                        return (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.surname}</td>
                                <td>{e.email}</td>
                                <td>{e.age}</td>
                                <td>{e.phone}</td>
                                <td><img src={"http://localhost:8080/images/user/" + e.picUrl} width='100'></img></td>
                                <td>{e.type?"manager":"admin"}</td>
                                <td><button onClick={()=>deleteUser(e)}>delete</button></td>
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