import LazyImage from '@/components/img';
import Card from '@/app/earn/components/card';
import Reward from '@/app/earn/components/reward';
import Button from '@/app/earn/components/button';

const Task = (props: Props) => {
  const { style, icon, title, reward, finished, className } = props;

  return (
    <Card className={`w-full ${className}`} style={style}>
      <div className="flex items-center gap-[11px]">
        <LazyImage
          src={icon as string}
          width={58}
          height={58}
        />
        <div className="flex flex-col">
          <div className="">{title}</div>
          <Reward className="mt-[9px]">
            +{reward}
          </Reward>
        </div>
        <div className="ml-auto flex justify-end items-center">
          {
            finished ? (
              <LazyImage src="/images/icon-done.svg" width={24} height={24} />
            ) : (
              <Button>
                Start
              </Button>
            )
          }
        </div>
      </div>
    </Card>
  );
};

export default Task;

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title: string;
  reward: string | number;
  finished?: boolean;
  icon?: string;
}
