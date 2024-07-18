import Construction from "@/components/under_construction";

const Store = () => {
  const products = [
    {
      name: "TASA Hoodie 2024",
      price: 45.0,
      imageFront: "/store/hoodiefront2024.png",
      imageBack: "/store/hoodieback2024.JPG",
    },
    {
      name: "TASA T-Shirt 2024",
      price: 15.0,
      imageFront: "/store/tshirtfront2024.JPG",
      imageBack: "/store/tshirtback2024.jpeg",
    },
    {
      name: "TASA Hoodie 2023",
      price: 30.0,
      imageFront: "/store/hoodiefront2023.jpg",
      imageBack: "/store/hoodieback2023.jpg",
    },
    {
      name: "TASA T-Shirt 2023",
      price: 12.0,
      imageFront: "/store/tshirtfront2023.jpg",
      imageBack: "/store/tshirtback2023.jpg",
    },
    {
      name: "TASA Crewneck 2022",
      price: 10.0,
      imageFront: "/store/design2022.jpeg",
    },
  ];

  return (
    <div>
      <></>
      <div className="px-4 py-8 text-center w-screen bg-gray-100 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 uppercase">Store</h2>
        <p className="text-gray-600">
          If you'd like to purchase any of our merch, please fill out the order
          form!
        </p>
        <p className="text-gray-600 font-semibold ">
          Pickup will be at our General Meetings or coordinate with us on
          Instagram @tasa.ucsb.
        </p>
        <div className="gap-4 mt-4 flex  flex-wrap justify-center w-{80%}">
          {products.map((product, index) =>
            product.imageBack ? (
              <div key={index} className="bg-white p-4 border rounded shadow">
                <div className="h-80 w-80 relative group">
                  <div
                    className="h-80 w-80 bg-center bg-no-repeat bg-contain group-hover:opacity-0 transition-opacity duration-200 ease-in-out"
                    style={{ backgroundImage: `url(${product.imageFront})` }}
                  ></div>
                  <div
                    className="h-80 w-80 opacity-0 group-hover:opacity-100 bg-center bg-no-repeat bg-contain absolute top-0 left-0 transition-opacity duration-200 ease-in-out"
                    style={{ backgroundImage: `url(${product.imageBack})` }}
                  ></div>
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            ) : (
              <div key={index} className="bg-white p-4 border rounded shadow">
                <div className="h-80 w-80 relative group">
                  <div
                    className="h-80 w-80 bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${product.imageFront})` }}
                  ></div>
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            )
          )}
        </div>
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-36"
          href="https://docs.google.com/forms/d/e/1FAIpQLScOrI62k881MTWlfMApAVFMcj6134Xkr0X_V2sKSPuOfJiPJA/viewform"
          target="_blank"
          rel="noreferrer noopener"
        >
          Order Now
        </a>
      </div>
      {/* <Construction></Construction> */}
    </div>
  );
};

export default Store;
