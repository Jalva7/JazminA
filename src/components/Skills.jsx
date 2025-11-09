import { useNavigate } from 'react-router-dom';
import '../App.css';


const Skills = () => {
    const navigate = useNavigate();
    const skillsData = {
    technical: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Python', 'Git', 'VS Code'],
    soft: ['Attention to Detail', 'Problem Solving', 'Teamwork', 'Adaptability', 'Communication'],
    learning: ['Node.js', 'Responsive Design', 'Web APIs', 'MySQL', 'Express.js']
  }

  return (
    <div className="page-content active">
          <div className="skills-container">
            <h2 className="page-title">Skills & Expertise</h2>
            
            <div className="skills-grid">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="skill-category">
                  <h3>
                    {category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 'Currently Learning'}
                  </h3>
                  <div className="skill-list" role='list'>
                    {skills.map((skill, index) => (
                      <span key={index} className='skill-tag' role='listitem'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                ))}
              </div>
            </div>
        </div>
    );
};

export default Skills;