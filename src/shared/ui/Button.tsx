interface ButtonProps {
  className?: string;
}

export default function Button(props: ButtonProps) {
  const { className = '', ...otherProps } = props;

  return (
    <button type="button" className={className} {...otherProps}>
      <h1>Button</h1>
    </button>
  );
}
