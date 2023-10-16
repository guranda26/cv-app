import bkImg from "../../assets/images/background.png";
import Button from "../../components/Button/index";
import PhotoBox from "../../components/PhotoBox/index";
import { Link } from "react-router-dom";
const IntroPage = () => {
  return (
    <section className="intro-page">
      <img
        src={bkImg}
        alt="background"
        className="intro-page__background-image"
      />
      <div className="intro-page__shadow"></div>
      <div className="intro-page__content">
        <PhotoBox
          name="John Doe"
          avatar="..assets/images"
          title="Programmer. Creative. Innovator"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        />
        <Link to="/inner" className="intro-page__button">
          <Button text="Know more"></Button>
        </Link>
      </div>
    </section>
  );
};

export default IntroPage;
