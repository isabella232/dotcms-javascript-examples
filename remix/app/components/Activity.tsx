import { ContentletModel } from "~/models/Contentlet.model";

interface ActivityModel extends ContentletModel {
  title: string;
  image: string;
  description: string;
}

export function Activity({ title, image, description }: ActivityModel) {
  return (
    <article>
      <img className="w-full" src={`https://demo.dotcms.com/${image}`} alt={title} />
      <h3>{title}</h3>
      <p className="text-clip overflow-hidden h-28">{description}</p>
    </article>
  );
}
