import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SAGA_DANCER, SAGA_DELETE_DANCER, SAGA_GET_ALL_USER} from "../../../store/saga/typeSaga";
import "./all_dancer.scss"
export const AllDancer = () => {
    const data = useSelector(state => state.dancerReducer.arr)
    console.log("all dancer===>", data);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:SAGA_GET_ALL_USER})
        dispatch({ type: SAGA_DANCER })
    }, [])

    const deleteDancer = (id) => {
        dispatch({type:SAGA_DELETE_DANCER,data:id});
      };
 
    return (
     
        <div className="main_all_dancer">
         <div className="admin_dancer_table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Description</th>
                        <th>PicUrl</th>
                        <th>Dancer By</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody> 
                                       
                    {
                        data.length!=0?
                    
                    data?.map(e => {
                        return (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.surname}</td>
                                <td>{e.age} years old</td>
                                <td>{e.description}</td>
                                <td><img src={"http://localhost:8080/images/dancer/" + e.picUrl} width='100'></img></td>
                                  <td>{e.user?.name}</td>

                                <td><button onClick={()=>deleteDancer(e)}>delete</button></td>
                            </tr>
                        )
                    })

                    :
                    <h1>No data</h1>
                    }  


                </tbody>



            </table>




        </div>           
        </div>


    )
}