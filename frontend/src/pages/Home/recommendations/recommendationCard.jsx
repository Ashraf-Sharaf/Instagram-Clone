import './recommendation.css'
function RecommendationCard({recommendation}){
const {username,image}=recommendation;

return <div className="recommendation-card flex between center">
    
    <img src={image} className="imageRecommend" />
    <div>{username}</div>
    <button>Follow</button>
</div>
}
export default RecommendationCard;