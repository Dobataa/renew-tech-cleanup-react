import { Link } from "react-router-dom";

function Solution(solution){
    
    return (
        <div className="solution">
            <img src={solution.singleSolution.imageUrl} alt="example1" />
            <div className="solution-info">
              <h3 className="type">{solution.singleSolution.type}</h3>
              <p className="description">
                {solution.singleSolution.description}
              </p>
              <Link className="details-btn" to={`details/${solution.singleSolution._id}`}>Learn More</Link>
            </div>
        </div>
    );
}

export default Solution;