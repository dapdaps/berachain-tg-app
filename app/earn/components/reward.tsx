import LazyImage from '@/components/img';

const Reward = (props: Props) => {
  const { style, children, className } = props;

  return (
    <div
      className={`flex items-center gap-[5px] ${className}`}
      style={style}
    >
      <LazyImage src="/images/icon-bera-coin.svg" width={20} height={20} />
      <span className="text-black text-[14px] font-[600]">{children}</span>
    </div>
  );
};

export default Reward;

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children?: any;
}
