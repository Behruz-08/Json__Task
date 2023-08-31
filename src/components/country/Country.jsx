// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Countries from "./Countries";

// function Country() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [countriesPerPage] = useState(10);

//   useEffect(() => {
//     const getCountries = async () => {
//       setLoading(true);
//       const res = await axios.get("https://restcountries.com/v3.1/all");
//       // const res = await axios.get("https://restcountries.eu/rest/v2/all");

//       setCountries(res.data);

//       setLoading(false);
//     };
//     getCountries();
//   }, []);

//   return (
//     <div>
//       <Countries countries={countries} loading={loading} />
//     </div>
//   );
// }

// export default Country;
