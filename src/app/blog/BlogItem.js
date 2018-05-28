import React from 'react'
import BlogNav from './BlogNav'
import BlogContent from './BlogContent'
const BlogItem = (props) => (
  <div className="box">
    <BlogContent limit={150} {...props }>
      <BlogNav date={props.date} status={props.status} to={{
        pathname: `/post/${props.path}`,
        state: { props }
      }} buttonText="Read more" />
    </BlogContent>
  </div>
)
export default BlogItem