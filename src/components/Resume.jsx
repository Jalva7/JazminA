import { useNavigate } from 'react-router-dom';
import '../App.css';


const Resume = () => {
    const navigate = useNavigate();
    const resumeData = {
    education: [
      { 
        degree: 'Bachelor of Science in Computer Science', 
        institution: 'University of North Georgia', 
        year: 'Fall 2025',
        description: 'On my final semester, focusing on my senior project.'
      },
    ],
    projects: [
      {
        name: 'J.Timer',
        technologies: 'React, CSS3, JavaScript, HTML5, Spotify API',
        description: 'A customizable timer application that allows users to set work and break intervals to enhance productivity using the Pomodoro technique along with a task list.',
        status: 'Completed'
      },
      {
        name: 'Creative Challenges',
        technologies: 'React, CSS3, JavaScript, HTML5, MySQL2, Express.js',
        description: 'A web application that offers creative challenges to inspire and engage users in various activities including design, art, writing, and photography. This project is for my senior project course at UNG.',
        status: 'In Progress'
      },
      {
        name: 'Personal Portfolio Website',
        technologies: 'React, CSS3, JavaScript',
        description: 'A responsive portfolio showcasing my skills and projects with modern design principles. This very website!',
        status: 'Constantly Updating'
      },
      {
        name: 'Runners Wish Website',
        technologies: 'undecided',
        description: 'A website designed to connect generous donors with passionate runners—support a cause by donating, or volunteer to run on behalf of someone who can\'t.',
        status: 'In Progress'
      }
    ],
    experience: [
      {
        title: 'Receiver',
        company: 'Makita',
        time: 'May 2025 - Aug 2025',
        responsibilities: [
          'Identified and reported damaged or defective items to appropriate departments for resolution',
          'Organized and stocked tools, equipment, and materials in designated storage locations for optimal accessibility',
          'Received, inspected, and verified incoming shipments to ensure ideal destination.Identified and reported damaged or defective items to appropriate departments for resolution. Organized and stocked tools, equipment, and materials in designated storage locations for optimal accessibility. Received, inspected, and verified incoming shipments to ensure ideal destination'
        ]
      }, 
      {
        title: 'Fulfillment Associate',
        company: 'Amazon',
        time: 'May 2024 - Aug 2024',
        responsibilities: [
          'Processed and fulfilled orders efficiently',
          'Maintained a clean and organized work environment',
          'Collaborated with team members to meet daily targets',
          'Ensured accuracy in order picking and packing'
        ]
      },
      {
        title: 'Assistant Sales Manager',
        company: 'Rue21',
        time: 'Jan 2023 - Aug 2023',
        responsibilities: [
          'Assisted in managing daily store operations',
          'Trained and supervised new staff',
          'Maintained store inventory and merchandising standards',
          'Monitored inventory levels, maintained store standards, and implemented visual merchandising strategies to align with Rue21\'s brand identity',
        ]
      },
      {
        title: 'Sales Associate',
        company: 'Rue21',
        time: 'May 2022 - Jan 2023',
        responsibilities: [
          'Greeted and assisted customers with their shopping needs',
          'Operated cash registers and handled transactions',
          'Operational successes included handling transactions accurately, assisting with inventory, and preventing losses through diligent adherence to policies'
        ]
      }     
    ]
  }


  return (
         <div className="page-content active">
          <div className="resume-container">
            <h2 className="page-title">Experience</h2>
            <div className="resume-scroll-hint">Scroll Down ↓</div>
            
            {/* Education Section */}
            <div className="resume-section">

              <h3>Education</h3>  
              {resumeData.education.map((edu, index) => (
                <div key={index} className="resume-item">
                  <div className='resume-item-header'>
                    <h4>{edu.degree}</h4>
                    <span className='resume-year'>{edu.year}</span>
                  </div>
                  <p className='resume-institution'>{edu.institution}</p>
                  <p className='resume-description'>{edu.description}</p>
                </div>
              ))}
              
            </div>

            {/* Projects Section */}
            <div className='resume-section'>
              <h3>Projects</h3>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="resume-item">
                  <div className='resume-item-header'>
                    <h4>{project.name}</h4>
                    <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className='technologies'>
                    <strong>Tech Stack:</strong> {project.technologies}
                  </p>
                  <p className='description'>{project.description}</p>
                </div>
              ))} 
            </div>
            
            {/* Experience Section */}
            <div className="resume-section">
              <h3>Work Experience</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="resume-item">
                  <div className='resume-item-header'>
                    <h4>{exp.title}</h4>
                    <span className='period'>{exp.time}</span>
                  </div>
                  <p className='company'>{exp.company}</p>
                  <ul className='responsibilities'>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>    
        );
    };

export default Resume;
