import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url="https://www.instagram.com/p/C73EgaBu7r_/?hl=en"
        width={480}
      />
    </div>
  );
};

export default Instagram;
