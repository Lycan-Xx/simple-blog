import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum ....", author: "Bibi", id: 1 },
        { title: "Welcome party", body: "lorem ipsum ....", author: "Netanyahu", id: 2 },
        { title: "The boyscout", body: "lorem ipsum ....", author: "Calhourn", id: 3 },
        { title: "Artillery shells", body: "lorem ipsum ....", author: "Macron", id: 4 },
        { title: "Ground defence", body: "lorem ipsum ....", author: "Obama", id: 5 },
        { title: "Apache attack choppers", body: "lorem ipsum ....", author: "Zelenski", id: 6 },
        { title: "Dragunov", body: "lorem ipsum ....", author: "Obama", id: 7 },
        { title: "Web dev top tips", body: "lorem ipsum ....", author: "Bibi", id: 8 }
    ]);



    return (

        <div className="home">
            <h2> Welcome to my blog!</h2>
            <BlogList blogs={blogs} />
            <h2> Blogs by Bibi!</h2>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Bibi')} />

        </div>

    );
}

export default Home;
