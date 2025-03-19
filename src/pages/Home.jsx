import React from "react";
import Layout from "../components/Layout";
import Category from "../components/Category";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState("Главная");

  return (
    <>
      <Layout onSelectCategory={setSelectedCategory} />
      <Category category={selectedCategory} />
    </>
  );
}