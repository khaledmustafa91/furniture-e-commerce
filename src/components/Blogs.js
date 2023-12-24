import { useEffect, useState } from 'react';
import MainHero from './MainHero';
import BlogsList from './BlogsList';
import { API_BASE_URL } from '../utils/constants';

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/blogs`)
      .then((res) => {
        return res.json();
      })
      .then((blogs) => {
        setBlogs(blogs);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <MainHero
        title="Blog"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      {/* Start Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="row">
            <BlogsList
              blogs={blogs}
              class_properties={'col-12 col-sm-6 col-md-4 mb-5'}
            />
          </div>
        </div>
      </div>
      {/* End Blog Section */}
    </>
  );
};

export default Blogs;
