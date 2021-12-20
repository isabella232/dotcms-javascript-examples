import type { LoaderFunction } from "remix";
import { useLoaderData, json } from "remix";
import { Column } from "~/components/Column";
import { Contentlet } from "~/components/Contentlet";
import { Row } from "~/components/Row";
import { Layout } from "~/models/Layout.model";
import { ContentletModel } from "~/models/Contentlet.model";

type IndexData = {
  description: string;
  title: string;
  layout: Layout;
  containers: any;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`https://demo.dotcms.com/api/v1/page/render/${params['*'] || 'index'}`, {
    "headers": {
      "Authorization": `Bearer ${process.env.DOTCMS_API_KEY}`
    },
    "method": "GET",
  });
  const { entity } = await res.json();


  // https://remix.run/api/remix#json
  return json({
    title: entity.page?.seoTitle || entity.page?.title,
    description: entity.page?.seodescription || entity.page?.description,
    layout: entity.layout,
    containers: entity.containers
  });
};

export function meta({
  data
}: {
  data: IndexData | undefined;
}) {

  return {
    title: data?.title || data?.title,
    description: data?.description
  };
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();
  const { layout, containers } = data;
  const { body: { rows } } = layout;
  const containersData = containers;

  return (
    <main className="prose lg:prose-xl m-auto max-w-7xl">
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      {rows.map(({ columns }, i) => (
        <Row key={`row-${i}`}>
          {columns.map(({ leftOffset, width, containers }, k) => (
            <Column leftOffset={leftOffset} width={width} key={`col-${k}`}>
              {containers.map(({ identifier, uuid }, l) => {
                const contentlets: ContentletModel[] =
                  containersData[identifier].contentlets[`uuid-${uuid}`];

                return (
                  <div key={`container-${l}`}>
                    {contentlets.map((contentlet, m) => {
                      return <Contentlet {...contentlet} key={`contentlet-${m}`} />;
                    })}
                  </div>
                );
              })}
            </Column>
          ))}
        </Row>
      ))}
    </main>
  );
}
