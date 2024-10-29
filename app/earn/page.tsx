'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@/app/earn/components/card';
import Button from '@/app/earn/components/button';
import LazyImage from '@/components/img';
import Reward from '@/app/earn/components/reward';
import Task from '@/app/earn/components/task';

const DailyList = [
  { key: 1, title: 'Daily Check-in', icon: '', reward: 100 },
  { key: 2, title: 'GM in TG', icon: '', reward: 100 },
  { key: 3, title: 'Share', icon: '', reward: 100 },
  { key: 4, title: 'Like, comment, retweet', icon: '', reward: 100 },
  { key: 5, title: 'Join Telegram group', icon: '', reward: 100 },
];

const TaskList = [
  { key: 1, title: 'Follow Beraciaga', icon: '', reward: 100, finished: true },
  { key: 2, title: 'Like, comment, retweet', icon: '', reward: 100 },
  { key: 3, title: 'Join Telegram group', icon: '', reward: 100 },
  { key: 4, title: 'Join Discord channel', icon: '', reward: 100 },
];

const Earn = () => {

  return (
    <div>
      <section className="mt-[20px]">
        <div className="text-[18px] text-[#4B371F] font-[700] pl-[16px]">
          Daily
        </div>
        <div className="mt-[10px] pl-[12px]">
          <Swiper
            spaceBetween={8}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{
              paddingRight: 72,
            }}
          >
            {
              DailyList.map((item) => (
                <SwiperSlide key={item.key}>
                  <Card className="w-full shrink-0 flex flex-col items-center">
                    <LazyImage
                      src={item.icon}
                      width={58}
                      height={58}
                    />
                    <div className="w-full mt-[8px] text-center whitespace-nowrap overflow-hidden overflow-ellipsis">{item.title}</div>
                    <Reward className="mt-[9px] justify-center">
                      +{item.reward}
                    </Reward>
                    <Button className="mt-[10px] mx-auto">
                      GM
                    </Button>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="mt-[12px] px-[12px]">
          <Card className="w-full">
            <div className="flex items-center gap-[11px]">
              <LazyImage
                src=""
                width={58}
                height={58}
              />
              <div className="flex flex-col">
                <div className="">Watching Ads</div>
                <Reward className="mt-[9px]">
                  +100
                </Reward>
              </div>
              <Button className="mt-[10px] ml-auto">
                Start
              </Button>
            </div>
          </Card>
        </div>
      </section>
      <section className="mt-[20px]">
        <div className="text-[18px] text-[#4B371F] font-[700] pl-[16px]">
          Social
        </div>
        <div className="flex flex-col gap-[10px] mt-[10px] px-[12px]">
          {
            TaskList.map((item) => (
              <Task key={item.key} title={item.title} reward={item.reward} icon={item.icon} finished={item.finished} />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Earn;
