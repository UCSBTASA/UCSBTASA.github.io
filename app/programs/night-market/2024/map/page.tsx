import Image from "next/image";

const map = () => {
  return (
    <div className="px-4 py-8 text-center w-screen h-auto bg-gray-100 flex-col flex items-center">
      <h2 className="text-3xl font-bold text-gray-900 uppercase">
        Night Market Map
      </h2>

      <Image
        src={"/nm_visuals/nm-map-2024.png"}
        alt="Night Market Image"
        width={1000}
        height={1000}
        className="bg-cover m-10 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
};

export default map;
