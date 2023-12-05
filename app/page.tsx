"use client"

import Image from "next/image"
import Logo from "@/assets/litslogo.png"

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {
  const navigate = useRouter()

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="flex justify-center items-center" style={{ height: '70vh' }}>
      <center>
        <div className="w-9/12">
          <Image src={Logo} alt="logo" className="w-52 mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"/>
          <h1 className="quicksand text-5xl" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Explore the Realm of Infinite Possibles: League of <span className="yellow">Information Technology</span> Students</h1>
          <p className="poppins text-15 mt-8" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="900">Welcome to League of Information Technology Students or LITS, where we cultivate a dynamic learning environment, empowering students to excel academically, socially, and creatively on their journey towards a bright and inspired future.</p>
          {/* <button
            className="bg-sky-500 transition-all hover:bg-sky-600 px-5 py-2 rounded-md quicksand text-15 mt-5"
            onClick={()=> navigate.push(`/about`)}
            data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1200"
          >
            Get Started</button> */}
        </div>
      </center>
    </div>
  )
}
