import { ContentletModel } from "~/models/Contentlet.model";
import { Activity } from "~/components/Activity";
import { Banner } from "~/components/Banner";

const Components: { [key: string]: Function } = {
  Activity,
  Banner
}

function Fallback(): JSX.Element | null {
  return null;
}

export function Contentlet(contentlet: ContentletModel): JSX.Element {
  const Component = Components[contentlet.contentType] || Fallback;
  return <Component {...contentlet} />
}

type Props = {
  children: React.ReactNode;
  leftOffset: number;
  width: number;
};

export function Column({ children, leftOffset, width }: Props): JSX.Element {
  const end = leftOffset + width;
  return <div className={`col-start-${leftOffset} col-end-${end}`}>{children}</div>;
}
