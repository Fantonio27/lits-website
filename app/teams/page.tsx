"use client"

import Image from "next/image"
import dataset from "@/utils/datasets/dashboard.dataset"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Fetch } from "@/utils/teams/api"
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebase";

const Teams = () => {
    const navigate = useRouter()

    const data = dataset.team

    const [number, setNumber] = useState(8)

    useEffect(() => {
        Aos.init()
    }, [])

    const onMore = () => {
        setNumber(prev => prev + 8)
    }

    const OnClick = (url: string) => {
        navigate.push(`teams/${url}`)
    }

    const [Dataform, setDataform] = useState([])
    const [ImageList, setImageList] = useState([])

    useEffect(() => {
        async function Get() {
            const res = await Fetch('teams')
            getImage(res)
            setDataform(res)
        }

        Get()
    }, [])

    const getImage = (response : any) => {
        response.map((res : any)=>{
            getDownloadURL(ref(storage, `teams/${res.avatar}`)).then((url) => {
                setImageList((prev : any) => ({ ...prev, [res.id]: url }))
            })
        })
    
    }

    const committee = [
        'Committee - Communications',
        'Committee - Creatives',
        'Committee - Execitive',
        'Committee - Multimedia',
        'Committee - Technical',]

    const officer = [
        'Officer - 1st Year Representative',
        'Officer - 2nd Year Representative',
        'Officer - 3rd Year Representative',
        'Officer - 4th Year Representative',
        'Officer - Audito',
        'Officer - Business Manager',
        'Officer - President',
        'Officer - PRO',
        'Officer - Secretary',
        'Officer - Treasurer',
        'Officer - Vice Precident External',
        'Officer - Vice Precident Internal'
    ]

    // console.log(Dataform.filter((data: any) => data.position == "Adviser").slice(0, number))
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
                    const filtered = Dataform.filter((data: any) => officer.includes(data.position) ? "Officers" == value.label : committee.includes(data.position) ? "Committee" == value.label : data.position == value.label)
                    return (
                        <div className=" mb-32 flex justify-center items-center" key={index}>
                            <center>
                                <div data-aos="zoom-in" data-aos-duration="1000">
                                    <h1 className="text-3xl cinzel yellow">{value.label}</h1>
                                    <div className="divider"></div>
                                    <p className="mt-3 poppins text-15 w-9/12">{value.description}</p>
                                </div>
                                <div className={`mt-10 grid gap-x-10 gap-y-5 ${filtered.length >= 4 ? 'grid-cols-4' : `grid-cols-${String(filtered.length)}`} w-max justify-items-center`}>
                                    {
                                        filtered
                                            .slice(0, number).map((value: any, index) => {
                                                const trans = (index < 4) || (index < 12 && index >= 8)
                                                return (
                                                    <div key={index} data-aos={trans ? `fade-left` : `fade-right`} data-aos-duration="1000">
                                                        <div className="w-48 h-48 bg-black overflow-hidden rounded-full">
                                                            <img src={ImageList[value.id]} alt="picture"
                                                                className=" object-cover object-center cursor-pointer transition-all hover:scale-105"
                                                                onClick={() => OnClick(value.id)} />
                                                        </div>

                                                        <p className="cursor-pointer mt-3" onClick={() => OnClick(value.id)}>{value.name}</p>
                                                        <p className="text-15 yellow">{value.position}</p>
                                                    </div>
                                                )
                                            })
                                    }
                                </div>
                                <button className={`${number >= filtered.length && 'hidden'} mt-10 bg-sky-500 darkblue px-5 py-2 rounded-md hover:bg-sky-500/75 text-15 quicksand`} onClick={() => onMore()} >Load More</button>

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