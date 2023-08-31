import React from "react";

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <ul>
        {countries.map((country, i) => (
          <li>
            {country.name}
            <img src={country.flag} alt="flag" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
