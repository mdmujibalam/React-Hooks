import React, { useState } from "react";
import useFetch from "../hooks/customHooks/useFetch";

const UseFetchWrapper = () => {
  const { isLoading, error, data } = useFetch(
    "https://dummyjson.com/products",
  );

  if (isLoading) return <div>Loading !!!</div>;

  if (error) return <div>Some Error Occurred - {error}</div>;

  //console.log("data here==>", data);

  return (
    <div>
      <ul>
        {data?.map((item, index) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseFetchWrapper;
