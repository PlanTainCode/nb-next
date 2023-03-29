import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SideBar({types, callBar}) {
  return (
    <div className="sidebar">
      <ul>
        {types.map((type, index) => 
          <li key={`${index}__${type.id}`} className={callBar ? "active" : ""}>
            <Link href={type.attributes.link} className={callBar ? 'active' : ''}>
              <Image 
                  width={type.attributes.pic.data.attributes.width}
                  height={type.attributes.pic.data.attributes.height}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + type.attributes.pic.data.attributes.url} 
                  alt={type.attributes.pic.data.attributes.alternativeText || ""}
              />
              <p>{type.attributes.title}</p>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SideBar