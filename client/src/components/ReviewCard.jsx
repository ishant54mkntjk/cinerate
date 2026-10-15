import "./ReviewCard.css";

export default function ReviewCard({ review }) {
  const initials = review.userName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="review-card">
      <div className="review-avatar">{initials}</div>
      <div className="review-body">
        <div className="review-head">
          <span className="review-user">{review.userName}</span>
          <span className="review-rating">★ {review.rating}/10</span>
        </div>
        <p className="review-text">{review.text}</p>
      </div>
    </div>
  );
}
