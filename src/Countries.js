import React from "react";

export default function Countries() {
  /* Challenge 2 
  let countries = ["France", "USA", "Australia", "Japan"];*/
  let countries = [
    {
      name: "France",
      capital: "Paris"
    },
    {
      name: "USA",
      capital: "Washington D.C."
    },
    {
      name: "Australia",
      capital: "Canberra"
    },
    {
      name: "Japan",
      capital: "Tokyo"
    }
  ];
  return (
    /* Challenge 2
    <ul>
      {countries.map(function (country, index) {
        return <li key={index}>{country}</li>;
      })}
    </ul>*/
    <div className="Countries">
      <ul>
        {countries.map(function (country, index) {
          return (
            <li key={index}>
              The capital city of {country.name} is {country.capital}.
            </li>
          );
        })}
      </ul>
    </div>
  );
}
