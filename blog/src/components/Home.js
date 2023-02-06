import {useState} from 'react';  

const Home = () => {

const [blogs,setBlogs] = useState([
  //list using useState
  {title: "My new website", body:"blah blah blah", author:"Isha", id:1},
  {title: "food blog", body:"blah blah blah", author:"Ayesha", id:2},
  {title: "Make up blog", body:"blah blah blah", author:"Chris", id:3},
])
  return (
    <div className="home">
        {blogs.map((blog) => (
          //key id for unique property
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
