import { useNavigate } from 'react-router-dom';
import { react } from 'react';
import '../App.css';
import './Blog.css'



const Blog = () => {
    const navigate = useNavigate();



return (
    <div className="page-content active" >
          <div className="blog-container">
            <h2 className="page-title">Blog</h2>
            <div className="blog-section">
              <h3>Welcome</h3>
              <p>Welcome to my blog! Here, I share my progress and experiences related to web development, 
              coding challenges, and my journey in the tech world. Stay tuned for updates!</p>

              <p>Currently, I'm working on setting up my blog platform. Although I just started this blog, I am also working on a 
              senior project that will be taking up most of my time. In the meantime, feel free to check out <a href="https://github.com/Jalva7" target="_blank" rel="noopener noreferrer">my GitHub</a> for some 
              of my projects and code snippets.</p>
              </div>

              <div className="blog-card">
                <div className='card-container'>
                  </div>
                </div>
            </div>
          </div>
)

};

export default Blog;