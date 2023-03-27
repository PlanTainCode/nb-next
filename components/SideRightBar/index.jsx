import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function SideRightBar({info}) {
  return (
    <div className="rightsidebar">
      <h1>{info.attributes.title}</h1>
      <p>{info.attributes.description}</p>
      <Link href={info.attributes.link} target='_blank'>
          <Image 
              width={info.attributes.pic.data.attributes.width}
              height={info.attributes.pic.data.attributes.height}
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + info.attributes.pic.data.attributes.url} 
              alt={info.attributes.pic.data.attributes.alternativeText || ""}
          />
          <p>{info.attributes.title}</p>
      </Link>
    </div>
  )
}

export default SideRightBar