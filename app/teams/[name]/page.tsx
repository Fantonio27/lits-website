"use client"
import dataset from "@/utils/datasets/dashboard.dataset"
import pic1 from "@/assets/team/1st Year Rep-𝗞𝗲𝗹𝗰𝗲𝘆 𝗖𝗿𝘂𝘇.jpg"
import facebook from "@/assets/icons/icons8-facebook-48.png"
import instagram from "@/assets/icons/icons8-instagram-48 (2).png"
import twitter from "@/assets/icons/icons8-twitter-48.png"
import linkedin from "@/assets/icons/icons8-linked-in-48.png"

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image"

const page = () => {
    const navigate = useRouter()

    useEffect(() => {
        Aos.init()
    }, [])

    const OnClick = (url: string) => {
        navigate.push(`events/${url}`)
    }
    return (
        <div>
            <div className="flex items-center" style={{ height: '70vh' }}>
                <div className="flex rounded-xl h-max" data-aos="fade-left" data-aos-duration="1000">
                    <div className="w-4/12">
                        <Image src={pic1} alt="team" className="rounded-xl" />
                    </div>
                    <div className="w-8/12 p-10">
                        <p className="quicksand yellow" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">Committee in creatives</p>
                        <p className="text-4xl quicksand" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">Hi I'm Francis Louie G. Antonio</p>
                        <p className="quicksand text-15" data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000">@antonio.francislouie.ue.edu.ph</p>

                        <div className="flex gap-1 mt-3" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1000">
                            {
                                [facebook, instagram, twitter, linkedin].map((value, index) => {
                                    return (
                                        <div key={index} className="w-7 h-7  flex justify-center items-center">
                                            <a href="https://dribbble.com/search/About-Page" target="_blank">
                                                <Image src={value} alt={String(index)} className="" />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="mt-10">
                            <h1 className="yellow cinzel text-2xl" data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000">About Me</h1>
                            <div className="divider" data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000"></div>
                            <p className=" mt-3 poppins text-justify text-15 leading-7" data-aos="fade-right" data-aos-delay="1800" data-aos-duration="1000">Hello there! I'm Francis Louie Antonio, a it with a passion for programming. I thrive on the endless possibilities that come with exploring new ideas and embracing challenges. Whether I'm Basketball, diving into the world of Your Field of Interest, or simply savoring a good book, I believe in the power of continuous learning and personal growth. My journey has been shaped by Any Relevant Experiences or Achievements, and I am excited to share my insights and experiences with you. Join me as I navigate through life's adventures, always seeking inspiration and finding joy in the journey. Let's connect, share stories, and embark on this fascinating exploration together!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page