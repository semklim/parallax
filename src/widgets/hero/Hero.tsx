import './Hero.scss';

import bgBlue from '@/shared/assets/bg/blue.png';
import bgRed from '@/shared/assets/bg/red.png';
import bgEntity from '@/shared/assets/entity1.png';
import Button from '@/shared/ui/Button';

interface HeroProps {
  className?: string;
}

export default function Hero(props: HeroProps) {
  const { className = '', ...otherProps } = props;

  return (
    <section className={`${className} hero`} {...otherProps}>
      <img src={bgEntity} alt="" className="heroEntity" />
      <img className="bgImgHero bgImgHeroBlue" src={bgBlue} alt="" />
      <img src={bgRed} alt="" className="bgImgHero bgImgHeroRed" />
      <div className="heroContent">
        <h1 className="mainTitle">
          A new economic primitive for funding decentralized AI
        </h1>
        <p className="subTitle">
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>
        <div>
          <Button />
          <Button />
        </div>
      </div>
    </section>
  );
}
