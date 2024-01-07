import "./style.scss";
import Image from "next/image";
import { type StaticImageData } from "next/image";

interface FoodInfoType extends React.HTMLAttributes<HTMLDivElement | null> {
  name: string;
  price: number;
  description?: string;
  src: StaticImageData;
}

export default function FoodCard({
  id,
  name,
  price,
  description,
  src,
}: FoodInfoType): JSX.Element {
  return (
    <div id={id} className="food-card-wrapper">
      <Image src={src} alt="food thumbnail" />
      <span className="name">{name}</span>
      <p className="description">{description}</p>
      <div className="info-wrapper">
        <span className="price">฿{price}</span>
        <button className="order-button">เลี</button>
      </div>
    </div>
  );
}
