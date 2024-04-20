import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                setSolutions(response)
            });
    }, []);

    return solutions;

};

export default useFetch;