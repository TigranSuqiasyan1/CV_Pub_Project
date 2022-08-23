import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SAGA_DELETE_EVENT, SAGA_EVENT } from "../../../store/saga/typeSaga";
import { SAGA_GET_ALL_USER } from "../../../store/saga/typeSaga";
import "./all_event.scss";

export const AllEvent = () => {
    
    const deleteEvent = (id) => {
        dispatch({type:SAGA_DELETE_EVENT,data:id});
      };

    const data = useSelector(state => state.eventReducer.arr)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: SAGA_GET_ALL_USER })
        dispatch({ type: SAGA_EVENT })
    }, [])

    return (
        <div className="main_all_event">
            <div className="admin_event_table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>PicUrl</th>
                            <th>Price</th>
                            <th>Event By</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data?.map(e => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.description}</td>
                                    <td>{e.date}</td>
                                    <td><img src={"http://localhost:8080/images/event/" + e.picUrl} width='100'></img></td>
                                    {e.bool == '1' ? <td>Free entrance</td> : <td>Ticket price: {e.price} AMD</td>}
                                    <td>{e.user?.name}</td>
                                    <td><button onClick={() => deleteEvent(e)}>delete</button></td>
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