import MainMenu from "../components/MainMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Posts from "./Posts";

export default function PostsDetail() {

    const [posts, setPosts] = useState([])

    function fetchData(url = "http://localhost:3000/posts") {
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data.data))
            .catch(err => console.error(err))
    }





    return (
        <>








        </>
    )
}