import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AllDish() {
  const { state } = useLocation();
  const [dishList, setDishList] = useState([]);

  console.log(state.subCate, "subCate");
  useEffect(() => {
    getDishes();
  }, []);

  const getDishes = async () => {
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${state.subCate}`
    );
    const respJson = await resp.json();

    if (respJson.meals) {
      setDishList(respJson.meals);
    }
  };
  return (
    <div className="row">
      {dishList?.map((item) => (
        <div className="card">
          <Link className="absoluteLink" to="/all_dish" />
          <img src={item.strMealThumb} alt="" />
          <h5>{item.strMeal}</h5>
        </div>
      ))}
    </div>
  );
}

export default AllDish;
