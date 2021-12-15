type Props = {
  children: React.ReactNode;
  leftOffset: number;
  width: number;
};

export function Column({ children, leftOffset, width }: Props): JSX.Element {
  const end = leftOffset + width;
  return <div className={`col-start-${leftOffset} col-end-${end}`}>{children}</div>;
}
