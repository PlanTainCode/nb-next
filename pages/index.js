import { Layout } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "../lib/api";

export default function Home({global}) {
  return (
    <>
      <Head>
        <title>Вы на главной</title>
      </Head>
      <Layout global={global}>
        <div>smth</div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const globalRes = await fetchAPI("/global",
    {populate: "deep,5"}
  )


  return {
    props: {
      global: globalRes.data,
    },
    revalidate: 1,
  };
}