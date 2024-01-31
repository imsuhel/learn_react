import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [cateData, setCateData] = useState([]);

  useEffect(() => {
    const getCates = async () => {
      const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      let respJson = await resp.json();
      if (respJson.categories) {
        setCateData(respJson.categories);
      }
    };

    getCates();
  }, []);

  return (
    <div className="row">
      {cateData?.map((item) => (
        <div className="card">
          <Link
            className="absoluteLink"
            to="/all_dish"
            state={{
              subCate: item.strCategory,
            }}
          />
          <img src={item.strCategoryThumb} alt="" />
          <h5>{item.strCategory}</h5>
          <p>{item.strCategoryDescription.substring(1, 50)}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
