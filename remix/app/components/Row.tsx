type Props = {
  children: React.ReactNode
};

export function Row({ children }: Props): JSX.Element {
  return <section className="grid grid-cols-12 gap-8 my-2">{children}</section>
}
