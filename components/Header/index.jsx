import Image from 'next/image'
import React from 'react'

function Header({global, func}) {
  return (
    <header className='header'>
        <div className="header__left-col">
            <div className='header__left-col--icon' onClick={() => func()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo">
                <Image 
                    width={global.attributes.defaultSeo.favicon.data.attributes.width}
                    height={global.attributes.defaultSeo.favicon.data.attributes.height}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + global.attributes.defaultSeo.favicon.data.attributes.url} 
                    alt={global.attributes.defaultSeo.favicon.data.attributes.alternativeText || ""}
                />
            </div>
        </div>
        <div className="header__center-col">
            <input type="text" placeholder='поиск' />
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 5H20" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 8H17" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>искать</p>

            </button>
        </div>
        <div className="header__right-col">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.11V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.11C21 7 21 7 19 5.65L13.5 2.47C12.68 1.99 11.33 1.99 10.5 2.47L5 5.65C3 7 3 7 3 9.11Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </header>
  )
}

export default Header