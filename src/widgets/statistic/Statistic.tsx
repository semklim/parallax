import './Statistic.scss';

interface StatisticProps {
  className?: string;
}

export default function Statistic(props: StatisticProps) {
  const { className = '', ...otherProps } = props;

  return (
    <section
      className={`${className} relative flex justify-between items-center`}
      {...otherProps}
    >
      <div className="statisticWrapper">
        <h2 className="text-[64px] font-bold">1,873</h2>
        <p className="pt-5 text-lg">LLM models</p>
      </div>
      <div className="statisticWrapper">
        <h2 className="text-[64px] font-bold">$326,734</h2>
        <p className="pt-5 text-lg">Paid to data scientists</p>
      </div>
      <div className="statisticWrapper">
        <h2 className="text-[64px] font-bold">6,557</h2>
        <p className="pt-5 text-lg">Developers</p>
      </div>
    </section>
  );
}
