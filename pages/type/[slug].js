import { Layout, New, PreloadNew } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "../../lib/api";

export default function Type({global, types, info, type}) {
  console.log(type.attributes)
  return (
    <>
      <Head>
        <title>Вы на главной</title>
      </Head>
      <Layout global={global} types={types} info={info}>
        <div className='news'>

        {type.attributes.title === "Заметки" ? 
        (
            <div className='news__prenews'>
                {type.attributes.news.data.map((item) => 
                <PreloadNew title={item.attributes.title} description={item.attributes.description} date={item.attributes.date} />
                )}
            </div>
        )
            :
        (
            <div className='news__mainnews'>
                {type.attributes.news.data.map((item) => 
                <New slug={item.attributes.slug} type={item.attributes.types.data[0].attributes.title} date={item.attributes.date} title={item.attributes.title} description={item.attributes.description} pic={item.attributes.media.data.attributes}  />
                )}
            </div>
        )
        }

          
        </div>
      </Layout>
    </>
  )
}


export async function getStaticPaths() {
    const typesRes = await fetchAPI("/types", { fields: ["link"] });
    return {
      paths: typesRes.data.map((type) => ({
        params: {
          slug: type.attributes.link,
        },
      })),
      fallback: false,
    };
  }

export async function getStaticProps({params}) {

    const matchingTypes = await fetchAPI("/types", {
        filters: { link: params.slug },
        populate: "deep,5",
      });

  const [globalRes, typesRes, infoRes] = await Promise.all([
    fetchAPI("/global", {populate: "deep,5"}),
    fetchAPI("/types", {populate: "deep,5"}),
    fetchAPI("/info", {populate: "deep,5"}),
  ])




  return {
    props: {
      type: matchingTypes.data[0],
      global: globalRes.data,
      types: typesRes.data,
      info: infoRes.data,
    },
    revalidate: 1,
  };
}