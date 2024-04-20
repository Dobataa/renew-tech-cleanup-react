import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/solutions?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(response => {
                setSolutions(response)
            });
    }, []);

    return solutions;

};

export default useFetch;