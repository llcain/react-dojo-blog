import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

   const { data: blogs, isPending } = useFetch('http://localhost:8000/blogs');

    

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);

    // }

   

    return ( 
        <div className="home">
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            
        </div>
     );
}
 
export default Home;