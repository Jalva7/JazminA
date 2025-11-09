import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
        image: '/JazminA/images/projects/jtimer.png',
        name: 'J.Timer',
        technologies: 'React, CSS3, JavaScript, HTML5, Spotify API',
        description: 'A customizable timer application that allows users to set work and break intervals to enhance productivity using the Pomodoro technique along with a task list.',
        status: 'Completed',
        live_demo: 'https://jalva7.github.io/J.Timer/',
        github: 'https://github.com/Jalva7/J.Timer'
      },
      {
        image: '/JazminA/images/projects/challenge.png',
        name: 'Creative Challenges',
        technologies: 'React, CSS3, JavaScript, HTML5, MySQL2, Express.js',
        description: 'A web application that offers creative challenges to inspire and engage users in various activities including design, art, writing, and photography. This project is for my senior project course at UNG.',
        status: 'In Progress',
        github: 'https://github.com/Jalva7/creative-challenge-tracker'
      },
      {
        image: '/JazminA/images/projects/portfolio.png',
        name: 'Personal Portfolio Website',
        technologies: 'React, CSS3, JavaScript',
        description: 'A responsive portfolio showcasing my skills and projects with modern design principles. This very website!',
        status: 'Constantly Updating',
        live_demo: 'https://jalva7.github.io/JazminA/',
        github: 'https://github.com/Jalva7/JazminA'
      },
      {
        image: '/JazminA/images/projects/cute.jpg',
        name: 'Runners Wish Website',
        technologies: 'undecided',
        description: 'A website designed to connect generous donors with passionate runners—support a cause by donating, or volunteer to run on behalf of someone who can\'t.',
        status: 'In Progress'
      }

    ];

    return (
        <div className="page-content active">
          <div className="projects-container">
            <h2 className="project-title">Projects</h2>
            <div className="projects-grid">
              {projectsData.map((project, index) => (
                <div key={index} className="project-card">
                <h3 className='project-name'>{project.name}</h3>
                <img src={project.image} alt={project.name} className="project-image" />
                  <p><strong>Technologies:</strong> {project.technologies}</p>
                  <p>{project.description}</p>
                  <p><strong>Status:</strong> {project.status}</p>
                  <div className="project-links">
                    {project.live_demo && (
                      <a href={project.live_demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Projects;
    

