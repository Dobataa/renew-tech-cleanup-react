import { useState, useEffect } from "react";

const GetOne = (id) => {
    const [solution, setSolution] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/data/solutions/${id}`)
            .then(res => res.json())
            .then(response => {
                setSolution(response)
            });
    }, []);

    return solution;

};

export default GetOne;