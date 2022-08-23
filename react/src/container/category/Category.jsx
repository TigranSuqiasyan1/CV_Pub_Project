import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SAGA_GET_ALL_CATEGORY } from '../../store/saga/typeSaga'
import "./category.scss";
import AOS from "aos";
import "aos/dist/aos.css";


export const Category = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: SAGA_GET_ALL_CATEGORY })
        AOS.init();
        AOS.refresh()
    }, [])
    
    const data = useSelector(st => st.categoryReducer.arr)

    return (
        <section>
            <div className="main_category_box">
                <div>
                    {data?.map((e) => {
                        return (
                            <div className="category_item" key={e.id} data-aos="flip-down" data-aos-duration="3000">
                                <div className='img_div'>
                                    <img
                                        className="img_category_responsive"
                                        src={"http://localhost:8080/images/category/" + e.picUrl}
                                        alt=""
                                    />
                                </div>
                                <div className="category_name" >
                                  <Link to={'/seeProducts/' + e.name}>
                                    <h4>{e.name}</h4>
                                  </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>




    )













    // <div className='main'>
    //     <div className="featured-element">
    // 			<div className="row">
    //                 {
    //                     data?.map(elm=>{
    //                         return (
    //                             <div className="col-md-3 col-sm-3 col-3" key={elm.id}>
    //                             <div className="featured-item ">
    //                                 <div className="figure">
    //                                     <img className="img-responsive" src={"http://localhost:8080/images/category/" + elm.picUrl}  alt=""/>
    //                                     {/* <p>There are many variations of passages available.</p> */}
    //                                 </div>
    //                                 <div className="featured-item-info">
    //                                   <Link to={'/seeProducts/'+elm.name}>
    //                                    <h4>{elm.name}</h4>
    //                                   </Link> 
    //                                 </div>
    //                             </div>

    //                         </div>
    //                         )
    //                     })
    //                 }
    // 			</div>
    // 		</div>
    // </div>)
} 