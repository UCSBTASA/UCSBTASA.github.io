import Construction from "@/components/under_construction";

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
  ];

  return (
    <div>
      <Construction></Construction>
    </div>
  );
};

export default Store;
