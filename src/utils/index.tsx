import { MdStarBorder, MdStarHalf, MdStar } from "react-icons/md";

export const generateStarRating = (rate?: number) => {
  const stars = [];
  const fullStars = Math.floor(rate || 0);
  const hasHalfStar = (rate || 0) - fullStars > 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<MdStar key={i} className="star-filled-icon" />);
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<MdStarHalf key={i} className="star-half-icon" />);
    } else {
      stars.push(<MdStarBorder key={i} className="star-empty-icon" />);
    }
  }
  return stars;
};

export const truncateTitle = (title?: string) => {
  if (title && title.length > 50) {
    return title.substring(0, 50) + "...";
  }
  return title;
};
