import '../App.css';


const Homepage = () => {

                                    
  return (
    <div className="page-content active">
          <section className="about-section" aria-labelledby="about-heading">
            <div className="hero-content">
              <h1 className="hero-title">Developing & Learning</h1>
              <p className="hero-subtitle">
                Hello, I'm Jazmin Alvarado-Solis (<b>jazzie</b> for short), a 22 year old who likes coding, reading and art. 
                I have a passion for creating web applications and continuously expanding my knowledge in the field of technology and art.
              </p>
              </div>
              <div className="about-details">
              <div className="about-text">
                <h3>About Me</h3>
                <p>
                  Currently in tech support with a touch of hands-on experience 
                  building responsive, user-focused web applications using React, JavaScript, and Node.js.
                </p>
                <p>
                  I recently completed my Bachelor of Science in Computer Science at the University of North Georgia.
                  Alongside my technical education, my experience in tech support and customer service has strengthened my
                  communication, problem-solving, and customer experience skills. I developed a strong foundation in full-stack
                  development, RESTful APIs, and modern web technologies. Through academic and personal projects, I've worked
                  end-to-end on applications from designing interfaces and managing state in React to building backend services
                  with Express and deployment. I value continuous learning, adaptability, and teamwork, and I'm excited to grow
                  as an engineer while creating meaningful, well-designed software and positive experiences for the people who use it.
                </p>
                <p>
                  Welcome to my digital space where I showcase my journey, 
                  skills, and aspirations.
                </p>
              </div>
              
              <div className="about-image">
                <img src="/JazminA/images/me24.jpg" alt="Jazmin Alvarado" />
              </div>
            </div>
            <div className="scroll-hint">Scroll Down ↓</div>
          </section>
        </div>
    );
};

export default Homepage;