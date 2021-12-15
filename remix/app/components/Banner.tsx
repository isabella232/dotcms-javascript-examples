import { ContentletModel } from "~/models/Contentlet.model";

interface BannerModel extends ContentletModel {
  title: string;
  image: string;
  caption: string;
}

export function Banner({ title, image, caption }: BannerModel) {
  return (
    <div className="relative">
      <img className="w-full" src={`https://demo.dotcms.com/${image}`} alt={title} />
      <div className="not-prose absolute top-12 left-2/4 -translate-x-2/4 backdrop-sepia-0 bg-white/60 p-6">
        <h3 className="m-0 text-6xl">{title}</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}
