import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/footer";
import Construction from "../_components/under_construction";

const Store = () => {
  const products = [
    {
      name: "TASA Hoodie 2023",
      price: 35.0,
      imageSrc: "/store/merch_2023.png",
    },
    {
      name: "TASA T-Shirt 2023",
      price: 20.0,
      imageSrc: "/store/merch_tshirt.png",
    },
    // {
    //   name: "Keychain 1",
    //   price: 9.99,
    //   imageSrc: "/keychain1.jpg",
    // },
    // {
    //   name: "Keychain 2",
    //   price: 7.99,
    //   imageSrc: "/keychain2.jpg",
    // },
  ];

  return (
    <div>
      <Header title="UCSB TASA" />
      <NavBar />
      <></>
      {/* <div className="px-4 py-8 text-center w-screen bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 uppercase">Store</h2>
        <p className="text-gray-600">
          If you'd like to purchase any of our merch, please fill out the order
          form and we'll reach out to you about pickup options!
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 border rounded shadow">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={300}
                height={300}
                style={{ display: "inline" }}
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div> */}
      <Construction></Construction>
      <Footer></Footer>
    </div>
  );
};

export default Store;
