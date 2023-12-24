import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogsList from '../BlogsList';
import { API_BASE_URL } from '../../utils/constants';

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/blogs`)
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
            <BlogsList
              blogs={blogs}
              class_properties={'col-12 col-sm-6 col-md-4 mb-4 mb-md-0'}
            />
          </div>
        </div>
      </div>
      {/* End Blog Section */}
    </>
  );
};

export default FeaturedBlogs;
