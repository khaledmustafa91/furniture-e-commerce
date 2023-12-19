import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((blogs) => {
        const featuredBlogs = blogs.filter((blog) => blog.featured === true);
        setBlogs(featuredBlogs);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {/* Start Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Recent Blog</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <Link to="/blogs" className="more">
                View All Posts
              </Link>
            </div>
          </div>
          <div className="row">
            {blogs &&
              blogs.map((blog) => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0"
                    key={blog.id}
                  >
                    <div className="post-entry">
                      <a href="#" className="post-thumbnail">
                        <img
                          src={blog.photo}
                          alt="post-1"
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-content-entry">
                        <h3>
                          <a href="#">{blog.title}</a>
                        </h3>
                        <div className="meta">
                          <span>
                            by <a href="#">{blog.author}</a>
                          </span>{' '}
                          <span>
                            on <a href="#">{blog.date}</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* End Blog Section */}
    </>
  );
};

export default Blogs;
