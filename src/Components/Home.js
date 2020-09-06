import React, {useEffect, useState} from 'react';
import Cardss from "./Cardss";

const Home = () => {
    const [post,setPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data));
    });

    return (
        <div className="App">

            {
                post.map(p=> <Cardss post={p} hello="hi"></Cardss>)
            }

        </div>
    );
};

export default Home;
