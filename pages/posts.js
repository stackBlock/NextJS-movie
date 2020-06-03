import React from "react";
import { getPosts } from "../actions/index";

class Posts extends React.Component {
  static async getInitialProps() {
    const posts = await getPosts();

    return { posts };
  }

  render() {
      const {posts} = this.props
    return (
      <div className="container">
        <h1>I am posts page</h1>
        {
        posts.map(p => (
            <div>{`name: ${p.title}`}
            <h3>{`id: ${p.id}`}</h3> 
            <h3>{`User ID: ${p.userId}`}</h3> 
            <h3>{`body: ${p.body}`}</h3> 
            </div>
        ))
        }
      </div>
    );
  }
}

export default Posts;
