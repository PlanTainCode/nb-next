import { Layout, New, PreloadNew } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "../lib/api";

export default function Home({global, types, info}) {
  // console.log(types)
  return (
    <>
      <Head>
        <title>Вы на главной</title>
      </Head>
      <Layout global={global} types={types} info={info}>
        <div className='news'>
          <div className='news__prenews'>
            <PreloadNew />
            <PreloadNew />
            <PreloadNew />
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

  const globalRes = await fetchAPI("/global",
    {populate: "deep,5"}
  )

  const typesRes = await fetchAPI("/types",
    {populate: "deep,5"}
  )

  const infoRes = await fetchAPI("/info",
    {populate: "deep,5"}
  )


  return {
    props: {
      global: globalRes.data,
      types: typesRes.data,
      info: infoRes.data,
    },
    revalidate: 1,
  };
}