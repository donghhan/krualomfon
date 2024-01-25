import "./style.scss";
import { useTranslations } from "next-intl";
import food from "public/food.png";
import Header from "@/components/header/Header";
import FoodCard from "@/components/FoodCard/FoodCard";

export default function Home() {
  const t = useTranslations("Main");

  const foodData = [
    {
      id: "drunken-noodle",
      name: t("Dish.Drunken_Noodle.Name"),
      price: 40,
      description: t("Dish.Drunken_Noodle.Description"),
      src: food,
    },
    {
      id: "kuay-chap",
      name: t("Dish.Kuay_Chap.Name"),
      price: 40,
      description: t("Dish.Kuay_Chap.Description"),
      src: food,
    },
  ];

  return (
    <>
      <main id="main">
        <Header />
        <section className="container">
          <h1 className="section-title">{t("Section_Title")}</h1>
          <div className="card-wrapper">
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
        </section>
      </main>
    </>
  );
}
