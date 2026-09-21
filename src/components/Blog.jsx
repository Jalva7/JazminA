import './Blog.css';

const Blog = () => {
  return (
    <div className="page-content active">
      <div className="blog-container">
        <h2 className="page-title">Blog</h2>
        <section className="blog-section" aria-label="Blog posts">
          <article className="blog-card">
            <h3>Welcome!</h3>
            <time dateTime="2026-09-21">September 21, 2026</time>
            <p>I have been busy with work but have also done some fun stuff on the side. I went skiing and on a cruise for the first time! Both trips with my best friends and I enjoy every second of it (most def the cruise).</p>
            <p>Another project I have been spending time on is a bookstagram! Me and two friends, Syd and Mikinna, loveeee reading so we created a book account! If you wanna check us out: <a href="https://www.instagram.com/theartofshelfindulgence/" target="_blank" rel="noopener noreferrer">@Shelf Indulgence</a></p>
          </article>

          <article className="blog-card">
            <time dateTime="2026-01-30">January 30, 2026</time>
            <p>I have earned my Bachelor's degree in Computer Science last December (2025).</p>
            <p>Currently, I'm working on setting up my blog platform. I have finished my senior project and I'll be adding it on the <strong>Projects</strong> tab. I have some ideas for posts, but it's still a work in progress. In the meantime, feel free to check out <a href="https://github.com/Jalva7" target="_blank" rel="noopener noreferrer">my GitHub</a> for some of my projects and code snippets that I do during my free time.</p>
          </article>
        </section>
      </div>
    </div>
  );

};

export default Blog;