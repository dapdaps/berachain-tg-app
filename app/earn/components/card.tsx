const Card = (props: Props) => {
  const { style, children, className } = props;

  return (
    <div
      className={`bg-[#F7F9EA] backdrop-blur-[5px] border border-[#4B371F] rounded-[16px] p-[10px_10px_14px] text-[#4B371F] text-[16px] font-[700] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children?: any;
}
