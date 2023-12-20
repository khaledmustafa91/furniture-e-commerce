import { useEffect, useState } from 'react';
import MainHero from './MainHero';

const BlogsList = ({ blogs, class_properties }) => {
  return (
    <>
      {/* Start Blog Section */}
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className={class_properties}>
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src={blog.photo}
                    alt={`blog-${blog.id}`}
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
      {/* End Blog Section */}
    </>
  );
};

export default BlogsList;
