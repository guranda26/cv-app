import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import {
  fetchSkills,
  toggleForm,
  postSkills,
} from "../../features/skills/skillsSlice";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export const Skills = () => {
  const dispatch = useDispatch();
  const [isContentVisible, setContentVisibility] = useState(false);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const handleOpen = () => {
    dispatch(toggleForm());
  };

  const localData = JSON.parse(localStorage.getItem("skills"));
  // localStorage.clear();
  const data = useSelector((state) => state.skills.data);
  const status = useSelector((state) => state.skills.status);

  const isOpen = useSelector((state) => state.skills.skillsIsOpen);

  const initialValues = {
    skillName: "",
    skillRange: "",
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(postSkills(values));
    console.log(values);
    resetForm();
    setContentVisibility(true);
  };

  const validationSchema = Yup.object({
    skillName: Yup.string().required("Skill name is required"),
    skillRange: Yup.number()
      .required("Skill range is required")
      .typeError("Skill range must be a 'number' type")
      .min(10, "Skill range must be greater than or equal to 10")
      .max(100, "Skill range must be less than or equal to 100"),
  });
  const isValid = true;

  return (
    <section id="skills" className="skills" data-testid="skills-component">
      <h2>Skills</h2>

      <Button
        icon={<FontAwesomeIcon icon={faPenToSquare} />}
        text="Open edit"
        id="skills"
        className="skills__button"
        onClick={handleOpen}
      />

      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors }) => (
            <Form
              className="skills-form"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <div className="skills-form__field">
                <label htmlFor="skillName">Skill name</label>
                <Field
                  name="skillName"
                  placeholder="Enter Skill name"
                  type="text"
                  id="skillName"
                  className={`field ${errors.skillName ? "error" : ""}`}
                />
                <div className="skills-form__error">
                  <ErrorMessage name="skillName" component="div" />
                </div>
              </div>
              <div className="skills-form__field">
                <label htmlFor="skillRange">Skill range</label>
                <Field
                  name="skillRange"
                  placeholder="Enter skill range"
                  type="number"
                  id="skillRange"
                  className={`field ${errors.skillRange ? "error" : ""}`}
                />
                <div className="skills-form__error">
                  <ErrorMessage name="skillRange" component="div" />
                </div>
              </div>
              <button
                type="submit"
                className={`skills-form__button ${
                  isValid ? "valid-button" : "invalid"
                }`}
                disabled={!isValid}
              >
                Add skill
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {isContentVisible && (
        <div className="skills-form__data">
          {localData &&
            localData.map((element) => {
              const range = element?.skill?.range;
              if (range !== undefined) {
                return (
                  <div key={element.skill.id}>
                    <div
                      className="skills-form__name skills-form__range"
                      style={{ width: `${range}%` }}
                    >
                      {element?.skill?.name}
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
      )}

      <div className="skills-container">
        <table>
          <tbody>
            <tr className="skills-container__range">
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr className="skills-container__text">
              <td>Beginner</td>
              <td>Proficient</td>
              <td>Expert</td>
              <td>Master</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
