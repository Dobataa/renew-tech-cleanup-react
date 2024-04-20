import useFetch from "../hooks/useFetch";
import Solution from "./Solution";

function Solutions(){
    let solutions = useFetch();
    
    return (
        <>
            <h2>Solutions</h2>
            <section id="solutions">
                {solutions.length > 0 
                ? solutions.map(x => <Solution key={x._id} singleSolution={x}/>)
                : <h2 id="no-solution">No Solutions Added.</h2>}
            </section>
        </>
    )
}

export default Solutions;