import './Hero.scss';

import bgBlue from '@/shared/assets/bg/blue.png';
import bgRed from '@/shared/assets/bg/red.png';
import bgEntity from '@/shared/assets/entity1.png';
import { ButtonMain } from '@/shared/ui';

interface HeroProps {
  className?: string;
}

export default function Hero(props: HeroProps) {
  const { className = '', ...otherProps } = props;

  return (
    <section className={`${className} hero`} {...otherProps}>
      <header className="absolute top-8 w-full flex justify-center items-center z-10">
        <ButtonMain noBorder className="mr-6 w-40 text-lg h-14">
          How It Works
        </ButtonMain>
        <ButtonMain className="w-40 text-lg h-14">Buy Salt AI</ButtonMain>
      </header>
      <img src={bgEntity} draggable={false} alt="" className="heroEntity" />
      <img
        className="bgImgHero bgImgHeroBlue"
        draggable={false}
        src={bgBlue}
        alt=""
      />
      <img
        src={bgRed}
        alt=""
        draggable={false}
        className="bgImgHero bgImgHeroRed"
      />
      <div className="heroContent">
        <h1 className="mainTitle">
          A new economic primitive for funding decentralized AI
        </h1>
        <p className="subTitle">
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>
        <div>
          <ButtonMain className="w-52 h-[75px] text-2xl mt-9">
            Buy Salt AI
          </ButtonMain>
          <ButtonMain noBorder className="w-40 h-[75px] text-2xl mt-9">
            Try Now
          </ButtonMain>
        </div>
      </div>
    </section>
  );
}
