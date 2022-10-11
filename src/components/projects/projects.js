import Slider from 'react-slick';
import data from './data';
import './projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* eslint-disable react/jsx-props-no-spreading */

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="container_build">
      <div className="projects">
        <h1>Projects</h1>
        <div className="projects__container">
          <Slider {...settings}>
            {data.map((project) => (
              <div className="projects__container__card" key={project.id}>
                <img src={project.image} alt={project.title} className="card_img" />
                <h3 className="title_card">{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="project_btn">
                  <button type="button" className="mx-[20px]">View Project</button>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
