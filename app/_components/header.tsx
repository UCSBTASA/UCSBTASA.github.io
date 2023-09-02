interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="wrapper block text-center">
      <span className="wsite-logo">
        <a href="/">
          <span
            id="wsite-title"
            className="font-bebas uppercase sm:text-[60px] text-[40px] tracking-light font-bold"
          >
            {title}
          </span>
        </a>
      </span>
    </div>
  );
};

export default Header;
