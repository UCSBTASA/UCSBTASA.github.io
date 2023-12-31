interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="wrapperblock text-center lg:pt-4">
      <a href="/">
        <span
          id="wsite-title"
          className="font-bebas uppercase sm:text-[60px] text-[40px] font-semibold tracking-light tracking-wider"
        >
          {title}
        </span>
      </a>
    </div>
  );
};

export default Header;
