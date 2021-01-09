import { fetchPostSlugs } from "../../fetchBlogSlugs";
import dynamic from "next/dynamic";

export default function Post({ slug, metadata }: any) {
  let mdx;

  if (process.browser) {
    const Mdx = dynamic(() => import(`../../content/posts/${slug}/index.mdx`));

    mdx = <Mdx />;
  } else {
    const Component = require(`../../content/posts/${slug}/index.mdx`).default;
    const ReactDOMServer = require("react-dom/server");

    const ssr = ReactDOMServer.renderToString(<Component />) as string;

    mdx = <div dangerouslySetInnerHTML={{ __html: ssr }} />;
  }

  return (
    <article>
      <h1>{metadata.title}</h1>
      <small>{metadata.date}</small>
      {mdx}
    </article>
  );
}
export async function getStaticPaths() {
  const slugs = await fetchPostSlugs();

  return {
    paths: slugs?.map((slug) => ({ params: { slug } })),
    fallback: false, // In a static-only build, we don't need fallback rendering.
  };
}

export const getStaticProps = (ctx: any) => {
  const slug = ctx.params?.slug;

  return {
    props: {
      slug,
      metadata: require(`../content/posts/${slug}/index.mdx`).metadata,
    },
  };
};
