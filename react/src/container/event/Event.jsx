import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAGA_EVENT } from "../../store/saga/typeSaga";
import "./event.scss";
import Moment from "moment";
import { MyContext } from "../../MyContext";
import AOS from "aos";
import "aos/dist/aos.css";



export const Event = () => {
  const dataEvent = useSelector((st) => st.eventReducer.arr);
  const arr = useContext(MyContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SAGA_EVENT });
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <section>
      <div className="main_event_box ">
        <div  className="event_top" data-aos="fade-up" data-aos-duration="3000">
          {dataEvent.map((e) => {
            const form = Moment(e.date);
            return (
              <div className="event_item" key={e.id}>
                <div>
                  <div className="event_date" >
                    {form.date()}{" "}
                    <span >
                      {arr[form.month()]} |{" "}
                      <sub> {form.year().toString().substring(2)}</sub>
                    </span>
                    <span >
                      {form.hour()}:{form.minute()} pm
                    </span>
                  </div>
                </div>

                <div>
                  <img
                    className="img_responsive"
                    src={"http://localhost:8080/images/event/" + e.picUrl}
                    alt=""
                  />
                </div>

                <div className="event_description" >
                  <span>{e.name}</span>
                  <hr />
                  <span>{e.description}</span>
                  <hr />
                  {e.bool == 1 ? <span >Free entrance</span> : <span>Ticket price: {e.price} AMD</span>}
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>

  );
};
