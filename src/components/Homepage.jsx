import { useNavigate } from 'react-router-dom';
import '../App.css';


const Homepage = () => {
    const navigate = useNavigate();


  return (
    <div className="page-content active">
          <section className="about-section" aria-labelledby="about-heading">
            <div className="hero-content">
              <h1 className="hero-title">Developing & Learning</h1>
              <p className="hero-subtitle">
                Hello, I'm Jazmin Alvarado, a web developer focusing 
                on frontend development with modern technologies.
              </p>
              </div>
              <div className="about-details">
              <div className="about-text">
                <h3>Know Me</h3>
                <p>
                  I am still learning how to code and I am passionate about creating 
                  beautiful and functional websites. I want to continuously expand 
                  my skills in Web Development and UX Design. I am also interested in exploring software engineering.
                </p>
                <p>
                  Welcome to my digital space where I showcase my journey, 
                  skills, and aspirations in the world of coding.
                </p>
              </div>
              
              <div className="about-image">
                <img src="/JazminA/images/me24.JPEG" alt="Jazmin Alvarado" />
              </div>
            </div>
            <div className="scroll-hint">Scroll Down ↓</div>
          </section>
        </div>
    );
};

export default Homepage;