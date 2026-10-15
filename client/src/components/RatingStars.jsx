import "./RatingStars.css";

export default function RatingStars({ rating }) {
  return (
    <span className="rating-pill">
      <span className="rating-star">★</span>
      {rating.toFixed(1)}
    </span>
  );
}
