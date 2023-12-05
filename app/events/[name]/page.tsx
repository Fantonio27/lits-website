"use client"
import Image from "next/image"
import picture1 from "@/assets/events/LITSCHESS.png"
import picture7 from "@/assets/team/Business Manager-I𝗮𝗻 𝗚𝗮𝘀𝗽𝗮𝗿.jpg"
import picture8 from "@/assets/team/President- 𝗝𝗼𝗵𝗻 𝗛𝘆𝗻𝗲𝘀 𝗟𝗼𝗻𝗴𝗮𝗿𝗲𝘀.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Event = () => {
    const navigate = useRouter()

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="mb-20">
            <div className="flex gap-10">
                <div className="w-4/12">
                    <Image src={picture1} alt="event" className="rounded-2xl" data-aos="fade-up" data-aos-duration="1000" />
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <center>
                            <h1 className="text-2xl cinzel text-center mt-3 mb-3">Sa Letrang G: General Assembly</h1>
                            <a
                                target="_blank"
                                className="text-15 bg-sky-500 quicksand rounded-md px-5 py-2 transition-all hover:bg-sky-500/80"
                                href="https://dribbble.com/search/About-Page"
                            >
                                Register Now</a>
                        </center>
                    </div>
                </div>
                <div className="w-8/12">
                    <div >
                        <h1 className="yellow text-3xl quicksand" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">About this Event</h1>
                        <div className="divider" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000"></div>
                        <p className="leading-8 poppins mt-3" data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000">Chess enthusiasts, this one's for you! Engage in a cerebral battle of tactics and foresight in gambIT. Challenge your peers and prove your supremacy in this thrilling chess contest amongst your fellow LITSmates!</p>
                    </div>
                    <div className="mt-8">
                        <h1 className="yellow text-3xl quicksand" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1000">Details</h1>
                        <div className="divider" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1000"></div>
                        <div className="mt-3 poppins grid grid-cols-2 gap-y-3" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000">
                            <p><span className="yellow">Date:</span> October 4, 2023</p>
                            <p><span className="yellow">Time:</span> 1:00 PM - 5:00 PM</p>
                            <p><span className="yellow">Venue:</span> MPH 1, College of Engineering Building</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="yellow text-3xl quicksand " data-aos="fade-left" data-aos-delay="1800" data-aos-duration="1000">Speakers</h1>
                        <div className="divider" data-aos="fade-left" data-aos-delay="1800" data-aos-duration="1000"></div>
                        <div className="mt-5 poppins grid grid-cols-3 gap-10 w-max text-center" data-aos="fade-left" data-aos-delay="2100" data-aos-duration="1000">
                            {
                                [picture7, picture8].map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <Image src={picture7} alt="event" className="rounded-full object-cover w-44 h-44 mb-2" />
                                            <h1>Francis Louie G. Antonio</h1>
                                            <p className="yellow text-15">Student</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="yellow text-3xl quicksand" data-aos="fade-left" data-aos-delay="2400" data-aos-duration="1000">Partners</h1>
                        <div className="divider" data-aos="fade-left" data-aos-delay="2400" data-aos-duration="1000"></div>
                        <div className="mt-5 poppins grid grid-cols-3 gap-10 w-max text-center" data-aos="fade-left" data-aos-delay="2700" data-aos-duration="1000">
                            {
                                [1, 2].map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <a href="https://dribbble.com/search/About-Page" target="_blank">
                                                <Image src={picture1} alt="event" className="rounded-xl object-cover w-44 h-44 mb-2" />
                                                <h1>Key caps</h1>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Event