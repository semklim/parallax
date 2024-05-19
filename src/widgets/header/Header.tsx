import { ButtonMain } from '@/shared/ui';

interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  const { className = '', ...otherProps } = props;

  return (
    <header
      className={`${className} flex justify-center items-center`}
      {...otherProps}
    >
      <ButtonMain noBorder className="mr-6 w-40 text-lg h-14">
        How It Works
      </ButtonMain>
      <ButtonMain className="w-40 text-lg h-14">Buy Salt AI</ButtonMain>
    </header>
  );
}
