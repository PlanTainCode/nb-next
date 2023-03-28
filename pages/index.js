import { Layout, New, PreloadNew } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "../lib/api";

export default function Home({global, types, info, prenews}) {
  console.log(prenews)
  return (
    <>
      <Head>
        <title>Вы на главной</title>
      </Head>
      <Layout global={global} types={types} info={info}>
        <div className='news'>
          <div className='news__prenews'>
            {prenews.map((prenew) => 
              <PreloadNew title={prenew.attributes.title} description={prenew.attributes.description} date={prenew.attributes.date} />
            )}
            
          </div>
          <div className='news__mainnews'>
            <New />
            <New />
            <New />
            <New />
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const [globalRes, typesRes, infoRes] = await Promise.all([
    fetchAPI("/global", {populate: "deep,5"}),
    fetchAPI("/types", {populate: "deep,5"}),
    fetchAPI("/info", {populate: "deep,5"}),
  ])

  const preNewsRes = await fetchAPI("/newses",{
    sort: "publishedAt:desc",
    populate: "deep,5",
    filters: {
      types: {
        title: {
          $eq: "Заметки",
        }
      }
    },
    pagination: {
      page: 1,
      pageSize: 3,
    },
  }
  )

  return {
    props: {
      global: globalRes.data,
      types: typesRes.data,
      info: infoRes.data,
      prenews: preNewsRes.data,
    },
    revalidate: 1,
  };
}