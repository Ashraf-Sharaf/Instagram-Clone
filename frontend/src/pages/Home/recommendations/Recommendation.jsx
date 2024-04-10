import { useEffect, useState } from "react";
import RecommendationCard from "./recommendationCard";

function Recommendation() {
  const data = [
    {
      username: "ashraf",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s'
    },

    {
      username: "rabih",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s"
    },
    {
      username: "ali",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s"
    },
    {
      username: "ali",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s"
    },
    {
      username: "ali",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s"
    },
    {
      username: "ali",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREy2PfYLs2DTQHoHyMSM5Loh7Ff3JlpfQFQidcNwZ9aQ&s"
    },
  ];


  const [recommendations, setRecommendations] = useState(data);


    return <div className="recommendations container">
            {recommendations.map((recommendation) => {
        return <RecommendationCard recommendation={recommendation}  />;
      })}
    </div>
  }
  
  export default Recommendation;
  