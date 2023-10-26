import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { fetchSkills } from "../../features/skills/skillsSlice";
import * as Yup from "yup";
import {
  toggleForm,
  postSkills,
  toggleSkillRemove,
} from "../../features/skills/skillsSlice";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.skills.skillsIsOpen);
  const skills = useSelector((state) => state.skills.data.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const handleOpen = () => {
    dispatch(toggleForm());
  };

  const handleClose = (skillId) => {
    dispatch(toggleSkillRemove(skillId));
  };

  const initialValues = {
    skillName: "",
    skillRange: "",
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(postSkills(values));
    resetForm();
  };

  const validationSchema = Yup.object({
    skillName: Yup.string().required("Skill name is required"),
    skillRange: Yup.number()
      .required("Skill range is required")
      .typeError("Skill range must be a 'number' type")
      .min(10, "Skill range must be greater than or equal to 10")
      .max(100, "Skill range must be less than or equal to 100"),
  });

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
        {isOpen && (
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, isValid }) => (
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
        )}
      </div>
      <div className="skills-form__data">
        {skills
          ? skills.map((skill) => {
              if (skill.isVisible) {
                return (
                  <div key={skill.id}>
                    <div
                      className="skills-form__name skills-form__range"
                      style={{ width: `${skill.range}%` }}
                    >
                      {skill.name}
                      <button
                        className="skills-close__click"
                        onClick={() => handleClose(skill.id)}
                      >
                        <span className="close__click-icon">
                          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </span>
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })
          : null}
      </div>
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
