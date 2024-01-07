import "./style.scss";
import { foodData } from "./foodData";
import Header from "@/components/header/Header";
import FoodCard from "@/components/FoodCard/FoodCard";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="foods">
          <div className="wrapper">
            <div className="title-wrapper">
              <h1 className="title">อาหาร</h1>
            </div>
            <div className="food-wrapper">
              {foodData.map((i) => (
                <FoodCard
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  price={i.price}
                  description={i.description}
                  src={i.src}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
