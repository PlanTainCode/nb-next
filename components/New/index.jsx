import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function New({slug, type, date, title, pic, description}) {
  return (
    <div className="mainnew">
      <div className="mainnew__head">
        <p>#{type}</p>
        <span>{date}</span>
      </div>
      <div className="mainnew__body">
        <h2>{title}</h2>
        <p>{description}</p>
        <Image 
            width={pic.width}
            height={pic.height}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + pic.url} 
            alt={pic.alternativeText || ""}
        />
      </div>
      <div className="mainnew__footer">
        <Link href={slug}>
          Перейти к новости
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.43 5.93L30.5 12L24.43 18.07" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 12L30 12" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </Link>
      </div>
    </div>
  )
}

export default New