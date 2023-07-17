interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="wrapper block text-center">
      <span className="wsite-logo">
        <a href="">
          <span
            id="wsite-title"
            className="font-bebas uppercase text-[60px] tracking-light font-bold"
          >
            {title}
          </span>
        </a>
      </span>
    </div>
  );
};

export default Header;
