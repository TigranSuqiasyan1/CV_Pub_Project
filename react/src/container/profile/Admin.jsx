import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import "./admin.scss";


export const Admin = () => {
  const data = useSelector(st => st.userReducer.profile)
  return (
   <div className="main">
    <div className="admin_page">
      <div className="admin">
        <div className="admin_img">
          <Link to="/profile"> <img
            src={"http://localhost:8080/images/user/" + data.picUrl} width='200'
            alt=""
          /></Link>
        </div>
        <div className="admin_name_div">
          <span> <Link to='/profile'>{data.name}</Link> </span>
          <span> <Link to='/profile'>{data.surname}</Link></span>
        </div>
      </div>
    </div>    
   </div>

  )
}







