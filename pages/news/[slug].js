import { Layout, New, PreloadNew } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { fetchAPI } from "../../lib/api";

export default function Type({global, types, info, news}) {
  console.log(news)
  return (
    <>
      <Head>
        <title>{news.attributes.title}</title>
      </Head>
      <Layout global={global} types={types} info={info}>
        <div className='news'>
            <h1>{news.attributes.title}</h1>
            <Image 
                width={news.attributes.media.data.attributes.width}
                height={news.attributes.media.data.attributes.height}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + news.attributes.media.data.attributes.url} 
                alt={news.attributes.media.data.attributes.alternativeText || ""}
            />
            <article>
                <ReactMarkdown children={news.attributes.content} />
            </article>
        </div>
      </Layout>
    </>
  )
}


export async function getStaticPaths() {
    const newsRes = await fetchAPI("/newses", { fields: ["slug"] });
    return {
      paths: newsRes.data.map((item) => ({
        params: {
          slug: item.attributes.slug,
        },
      })),
      fallback: false,
    };
  }

export async function getStaticProps({params}) {

    const newsRes = await fetchAPI("/newses", {
        filters: { slug: params.slug },
        populate: "deep,5",
      });

  const [globalRes, typesRes, infoRes] = await Promise.all([
    fetchAPI("/global", {populate: "deep,5"}),
    fetchAPI("/types", {populate: "deep,5"}),
    fetchAPI("/info", {populate: "deep,5"}),
  ])




  return {
    props: {
      news: newsRes.data[0],
      global: globalRes.data,
      types: typesRes.data,
      info: infoRes.data,
    },
    revalidate: 1,
  };
}