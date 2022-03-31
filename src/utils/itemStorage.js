import { useState } from "react";

export default function ItemStorage() {

  const [itemsData, setItemsData] = useState(() => {
    const string = localStorage.getItem("itemsData");
    if(string){
      const object = JSON.parse(string);
      if(object) return object;
      else return null;
    }
    else return null;
  });
  
  const storeItems = (itemsData) => {
    localStorage.setItem("itemsData", JSON.stringify(itemsData));
    setItemsData(itemsData);
  };

  return { storeItems, itemsData };
}
