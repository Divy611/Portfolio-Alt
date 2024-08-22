import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <span className="ml-3 text-xl">Divy Parikh</span>
                </a>
                {/* <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"></p> */}
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
                    <a href='https://github.com/Divy611' className="ml-5 text-white hover:text-gray-900">
                        <i className='fa-brands text-xl fa-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/divyparikh611/' className="ml-5 text-white hover:text-blue-700">
                        <i className='fa-brands text-xl fa-linkedin'></i>
                    </a>
                    <a href='https://www.instagram.com/divy_parikh/' className="ml-5 text-white hover:text-pink-500">
                        <i className='fa-brands text-xl fa-instagram'></i>
                    </a>
                </span>
            </footer>
        </>
    )
}
