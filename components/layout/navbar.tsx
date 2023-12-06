"use client"
import Image from 'next/image'
import Logo from '@/assets/litslogo.png'
import '@/styles/navbar.css'

import dataset from '@/utils/datasets/dashboard.dataset'
import { getURL } from '@/utils/globalFunctions'
import { useState} from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const navbarLinks = dataset.navbar;
    const navigate = useRouter()

    const activelink = getURL(2) == "teams" || getURL(2) == "events" ? getURL(2) : getURL(1)
    const [link, setLink] = useState(activelink)

    const Riderect = (url : string) => {
        setLink(url)
        navigate.push(`/${url}`)
    }

    return (
        <div className='w-full flex justify-between items-center py-6 px-5 xl:px-52 lg:px-28 md:px-20 sm:px-12 fixed z-10 glass-background'>
            <div>
                <Image src={Logo} alt="Lits" className='w-16' />
            </div>
            <div className="flex gap-10 h-max quicksand">
                {
                    navbarLinks.map((value, index) => {
                        const active = link == value.id || (link == "" && value.id == "/")

                        return (
                            <div className='navbar-button flex flex-col tracking-wider cursor-pointer' key={index} onClick={()=> Riderect(value.id)}>
                                {/* <Link href={`/${value.id}`}>{value.label}</Link> */}
                                <p className={`${active && 'yellow'}`}>{value.label}</p>
                                <center><div className={`line ${active && 'navbar-active'}`}></div></center>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar
