const Map = () => {
    return (
      <div className="px-4 py-8 text-center w-screen h-auto bg-gray-100 flex-col flex items-center">
        <h2 className="text-3xl font-bold text-gray-900 uppercase">
          Night Market Map
        </h2>
  
        <iframe
          src="/nm_2025/nm-map-2025.pdf"
          className="m-10 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          width="1000"
          height="1000"
          title="Night Market Map PDF"
        ></iframe>
      </div>
    );
  };
  
  export default Map;