import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Welcome to my React 201 project. <br/>
              For this project we designed a movie browser so you can search movie titles and access their details.
              <br/> Please enjoy this project!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
