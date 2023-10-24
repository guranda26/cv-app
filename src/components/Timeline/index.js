import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Info from "../Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { fetchEducation } from "../../features/education/educationsSlice";

const Timeline = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.educations.data);
  const status = useSelector((state) => state.educations.status);

  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);

  return (
    <section id="education" data-testid="timeline-component">
      <h2 className="education__title">Education</h2>
      <div className="education__timeline">
        <div className="education__timeline-container">
          {status === "loading" && (
            <div className="loading-overlay">
              <FontAwesomeIcon
                className="loading-overlay__icon"
                icon={faSyncAlt}
                spin
              />
            </div>
          )}
          {status === "failure" && (
            <div className="error-message">
              Something went wrong; please review your server connection!
            </div>
          )}
          {status === "success" &&
          Array.isArray(data.educations) &&
          data.educations.length > 0 ? (
            data.educations.map((event, index) => (
              <div className="education__timeline-event" key={index}>
                <div className="timeline-event__date">
                  {event.date} <div className="timeline-event__line"></div>
                </div>
                <div className="timeline-event__details">
                  <Info title={event.title} text={event.description} />
                  <div className="timeline-event__arrow"></div>
                </div>
              </div>
            ))
          ) : status === "success" && data.educations.length === 0 ? (
            <div className="error-message">No education data available.</div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export { Timeline };
