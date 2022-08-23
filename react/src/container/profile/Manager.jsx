import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import "./manager.scss";


export const Manager=()=>{
    const data = useSelector(st => st.userReducer.profile)
    return (
        <div className="manager_page">
          <div className="manager">
            <div className="manager_img">
              <Link to="/profile"> <img
                    src={"http://localhost:8080/images/user/" + data.picUrl} width='200' 
                     alt=""
                     /></Link> 
            </div>
            <div className="manager_name_div">
            <span> <Link to='/profile'>{data.name}</Link> </span>
            <span> <Link to='/profile'>{data.surname}</Link></span>
            </div>            
          </div> 
        </div>
    )
}