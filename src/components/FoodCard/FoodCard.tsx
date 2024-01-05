import "./style.FoodCard.scss";

export default function FoodCard({
  name,
  price,
  description,
}: FoodInfoType): JSX.Element {
  return <div id={name} className="food-card-wrapper"></div>;
}
