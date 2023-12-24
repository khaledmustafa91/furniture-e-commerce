import { Link } from 'react-router-dom';

const BlogsList = ({ blogs, class_properties }) => {
  return (
    <>
      {/* Start Blog Section */}
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className={class_properties}>
              <div className="post-entry">
                <Link to="" className="post-thumbnail">
                  <img
                    src={blog.photo}
                    alt={`blog-${blog.id}`}
                    className="img-fluid"
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to="">{blog.title}</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link to="">{blog.author}</Link>
                    </span>{' '}
                    <span>
                      on <Link to="">{blog.date}</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {/* End Blog Section */}
    </>
  );
};

export default BlogsList;
