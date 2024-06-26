import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SolutionDetails(){
    const { id } = useParams();

    let solution = useFetch(`http://localhost:3030/data/solutions/${id}`);

    return (
        <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src={solution.imageUrl}
              alt="example1"
            />
            <div>
              <p id="details-type">{solution.type}</p>
              <div id="info-wrapper">
                <div id="details-description">
                  <p id="description">
                    {solution.description}
                  </p>
                  <p id="more-info">
                    {solution.learnMore}
                  </p>
                </div>
              </div>
              <h3>Like Solution:<span id="like">0</span></h3>

              <div id="action-buttons">
                <a href="#" id="edit-btn">Edit</a>
                <a href="#" id="delete-btn">Delete</a>
                
                <a href="#" id="like-btn">Like</a>
              </div>
            </div>
          </div>
        </section>
    );
}

export default SolutionDetails;