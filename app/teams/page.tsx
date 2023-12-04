"use client"
import picture1 from "@/assets/team/Adviser- Dr. Froilan E. De Guzman.jpg"
import picture2 from "@/assets/team/1st Year Rep-𝗞𝗲𝗹𝗰𝗲𝘆 𝗖𝗿𝘂𝘇.jpg"
import picture3 from "@/assets/team/2nd Year Rep-𝗔𝗻𝗻 𝗦𝗶𝗺𝗯𝘂𝗹𝗮𝗻.jpg"
import picture4 from "@/assets/team/3rd Year Rep-𝗙𝗿𝗮𝗻𝗰𝗶𝘀 𝗛𝗼𝗽𝗲 𝗕𝗹𝗮𝗻𝗰𝗼.jpg"
import picture5 from "@/assets/team/4th Year Rep- 𝗟𝗲𝗶𝗴𝗵 𝗛𝗼𝗽𝗲 𝗤𝘂𝗶𝗻𝘁𝗼𝗻 copy.jpg"
import picture6 from "@/assets/team/Auditor- 𝗜𝘀𝗵 𝗥𝗮𝗺𝗶𝗿𝗲𝘇.jpg"
import picture7 from "@/assets/team/Business Manager-I𝗮𝗻 𝗚𝗮𝘀𝗽𝗮𝗿.jpg"
import picture8 from "@/assets/team/President- 𝗝𝗼𝗵𝗻 𝗛𝘆𝗻𝗲𝘀 𝗟𝗼𝗻𝗴𝗮𝗿𝗲𝘀.jpg"


import Image from "next/image"
import dataset from "@/utils/datasets/dashboard.dataset"
import { useState, useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Teams = () => {
    const data = dataset.team

    const [number, setNumber] = useState(8)
    const pic = [picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8,picture6, picture7, picture8,]

    useEffect(() => {
        Aos.init()
    }, [])

    const onMore = () => {
        setNumber(prev => prev + 8)
    }

    return (
        <div className="mb-20">
            <div className="flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" style={{ 'height': '80vh' }}>
                <div className="flex gap-10 text-justify">
                    <div className="w-10/12">
                        <h1 className="text-3xl cinzel yellow text-left">Meet the Team</h1>
                    </div>
                    <div>
                        <p className="poppins leading-7">Get to know the heart and soul behind our school organization through 'Meet the Team.' Dive into the stories and passions of our dedicated educators, administrators, and staff who work collaboratively to create a nurturing learning environment. Discover the unique talents and commitment that each team member brings to our school community, shaping the educational journey for our students and fostering a culture of excellence and innovation.</p>
                    </div>
                    <div>
                        <p className="poppins leading-7">By introducing you to our team, we aim to build a stronger connection between the school and our community. Learn about the individuals who play integral roles in shaping the educational landscape of our institution and creating an atmosphere where students can thrive. We invite you to explore the stories, passions, and expertise of our team members as we work together towards the shared goal of providing an exceptional and holistic education for every student.</p>
                    </div>
                </div>
            </div>

            {
                data.map((value, index) => {
                    return (
                        <div className=" mb-32 flex justify-center items-center" key={index}>
                            <center>
                                <div data-aos="zoom-in" data-aos-duration="1000">
                                    <h1 className="text-3xl cinzel yellow">{value.label}</h1>
                                    <div className="divider"></div>
                                    <p className="mt-3 poppins text-15 w-9/12">{value.description}</p>
                                </div>
                                <div className={`mt-10 grid gap-x-10 gap-y-5 grid-cols-${pic.length >= 4 ? '4' : String(pic.length)} w-max justify-items-center`}>
                                    {
                                        pic.slice(0, number).map((value, index) => {
                                            const trans = (index < 4) || (index < 12 && index >= 8) 
                                            return (
                                                <div key={index} data-aos={trans ? `fade-left` : `fade-right`} data-aos-duration="1000">
                                                    <Image src={value} alt="picture" className="rounded-lg object-cover object-center w-52 h-64 mb-1" />
                                                    <p>cacasc</p>
                                                    <p className="text-15 yellow">Adviser</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button className={`${number >= pic.length && 'hidden'} mt-10 bg-sky-500 darkblue px-5 py-2 rounded-md hover:bg-sky-500/75 text-15 quicksand`} onClick={() => onMore()} >Load More</button>

                            </center>
                        </div >
                    )
                })
            }


            {/* <div className="mt-10 flex justify-center items-center" style={{'height': '80vh'}}>
                <center>
                    <h1 className="text-3xl cinzel yellow">Officers</h1>
                    <div className="divider"></div>
                    <p className="mt-3 poppins text-15 w-10/12">Meet our dedicated school adviser, a guiding force committed to fostering academic growth, providing strategic direction, and inspiring educational excellence within our community</p>
                    <div className="grid gap-2 grid-cols-3 w-max justify-items-center">
                        {
                            ['1', '2', '3'].map((value, index) => {
                                return (
                                    <div className="w-52 h-52">
                                        <Image src={picture1} alt="picture" className=" rounded-lg object-cover object-center" />
                                        <p>Dr. Froilan E. De Guzman</p>
                                        <p className="text-15 yellow">Adviser</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </center>
            </div >

            <div className="mt-10 flex justify-center items-center" style={{'height': '80vh'}}>
                <center>
                    <h1 className="text-3xl cinzel yellow">Committee</h1>
                    <div className="divider"></div>
                    <p className="mt-3 poppins text-15 w-10/12">Meet our dedicated school adviser, a guiding force committed to fostering academic growth, providing strategic direction, and inspiring educational excellence within our community</p>
                    <div className="grid gap-2 grid-cols-3 w-max justify-items-center">
                        {
                            ['1', '2', '3'].map((value, index) => {
                                return (
                                    <div className="w-52 h-52">
                                        <Image src={picture1} alt="picture" className=" rounded-lg object-cover object-center" />
                                        <p>Dr. Froilan E. De Guzman</p>
                                        <p className="text-15 yellow">Adviser</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </center>
            </div > */}

        </div >
    )
}

export default Teams