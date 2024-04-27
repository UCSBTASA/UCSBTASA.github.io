import Stand from '../../components/nmstand';

const StandInfo = [
  {name: "CSU", x: 42.5, y: 32.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "KP", x: 42.5, y: 39.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "TSA", x: 42.5, y: 46.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},

  {name: "NSU", x: 42.5, y: 57.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "HKSA", x: 42.5, y: 64.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "KCM", x: 42.5, y: 71.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "SDO", x: 42.5, y: 78.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},

  {name: "TASA", x: 62.5, y: 57.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "TASA", x: 62.5, y: 64.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "TASA", x: 62.5, y: 71.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "TASA", x: 62.5, y: 78.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},

  {name: "TASA", x: 72.5, y: 27.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "TASA", x: 72.5, y: 34.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "TASA", x: 72.5, y: 41.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},
  {name: "TASA", x: 72.5, y: 48.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet"},


  {name: "CSSA", x: 82.5, y: 57.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet", color: "rgb(255, 175, 175)"},
  {name: "Honey Clementine Jewelry", x: 87, y: 64.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet", color: "rgb(255, 175, 175)"},
  {name: "Red Strings", x: 82.5, y: 71.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet", color: "rgb(255, 175, 175)"},
  {name: "Crochet Bandits", x: 87, y: 78.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet", color: "rgb(255, 175, 175)"},

  {name: "TASA Games", x: 67.5, y: 83.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet", color: "rgb(150, 150, 255)"},
  {name: "TASA Merch", x: 77.5, y: 83.5, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet", color: "rgb(150, 150, 255)"},

  {name: "Photobooth", x: 20, y: 15, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet", color: "rgb(150, 255, 150)"},
  {name: "Materials", x: 20, y: 22, height: 6, width: 9, blurb: "lorum ipsum dolor sit amet", color: "rgb(150, 255, 150)"},
];


const NightMarket = () => {
  return (
    <div className="px-4 py-8 text-center w-screen h-screen bg-gray-100 flex flex-col items-center">
      <>
        <div className = "absolute bg-cover rounded-2xl	drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" style={{ backgroundImage: "url(nm_map/nm_map.png)", width: '90vh', height: '90vh', backgroundRepeat: "no-repeat"}}>
            {StandInfo.map((stand) => <Stand color = {stand.color} name={stand.name} x={stand.x} y={stand.y} height={stand.height} width={stand.width} blurb={stand.blurb}/>)}
        </div>
      </>
    </div>
    
  );
};

export default NightMarket;
