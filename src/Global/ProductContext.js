import React, { createContext, useState } from "react";

export const ProductContext = createContext();
const ProductContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: "Mobile 5G",
      price: 300,
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
      status: "hot",
    },
    {
      id: 2,
      name: "Mobile 5G",
      price: 400,
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
      status: "new",
    },
    {
      id: 3,
      name: "Headphone",
      price: 500,
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70",
      status: "hot",
    },
    {
      id: 4,
      name: "Headphone",
      price: 600,
      image:
        "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
      status: "new",
    },
    {
      id: 5,
      name: "Headphone",
      price: 700,
      image:
        "https://rukminim2.flixcart.com/image/612/612/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70",
      status: "hot",
    },
    {
      id: 6,
      name: "Headphone",
      price: 750,
      image:
        "https://rukminim2.flixcart.com/image/612/612/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70",
      status: "new",
    },  {
      id: 7,
      name: "Headphone",
      price: 800,
      image:
        "https://rukminim2.flixcart.com/image/612/612/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70",
      status: "hot",
    },  {
      id: 8,
      name: "Headphone",
      price: 900,
      image:
        "https://rukminim2.flixcart.com/image/612/612/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70",
      status: "new",
    },
   
  ]);
  return (
    <div>
      <ProductContext.Provider value={{ products: [...products] }}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
