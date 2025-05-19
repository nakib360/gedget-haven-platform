import React from "react";
import Card from "../Card/card";
import { useEffect, useState } from "react";

const MacBook = () => {
  const [gadgets, setData] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setData(data.electronics.macbooks));
  }, []);
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-200 overflow-auto">
          {gadgets.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MacBook;
