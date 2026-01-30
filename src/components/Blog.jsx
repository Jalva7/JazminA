import '../App.css';
import './Blog.css'



const Blog = () => {



return (
    <div className="page-content active" >
          <div className="blog-container">
            <h2 className="page-title">Blog</h2>
            <div className="blog-section">
              <h3>Welcome!</h3>
              <h4>January 30, 2026</h4>
              <p>I have earned my Bachelor's degree in Computer Science last December (2025). Right now, I am actively looking for entry level opportunities in web development
                and software engineering.</p>

              <p>Currently, I'm working on setting up my blog platform. I have finished my senior project and I'll be adding it on the <b>Projects</b> tab. I have some ideas for posts, but it's still a work in progress. In the meantime, feel free to check out <a href="https://github.com/Jalva7" target="_blank" rel="noopener noreferrer">my GitHub</a> for some
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