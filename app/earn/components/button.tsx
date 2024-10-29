const Button = (props: Props) => {
  const { style, children, className } = props;

  return (
    <button
      type="button"
      className={`bg-[#FFF5A9] h-[36px] rounded-[18px] px-[21px] flex justify-center items-center gap-[4px] border-[2px] border-[#4B371F] text-[#4B371F] text-[16px] font-[700] ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children?: any;
}
