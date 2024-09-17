import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "100%", maxWidth: "2000px" }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C8drbvItbX9/?hl=en&img_index=1"
          width="100%"  // Set width to 100%
        />
      </div>
    </div>
  );
};

export default Instagram;
