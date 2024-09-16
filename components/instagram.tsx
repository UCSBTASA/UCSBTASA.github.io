import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url="https://www.instagram.com/p/C8drbvItbX9/?hl=en&img_index=1"
        width={480}
      />
    </div>
  );
};

export default Instagram;
