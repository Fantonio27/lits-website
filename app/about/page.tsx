"use client"

import Image from "next/image"
import logo from "@/assets/litslogo.png"
import about from "@/assets/about/ga0.jpg"
import history from "@/assets/about/ga3.jpg"

import vission1 from "@/assets/about/chess9.jpg"
import vission2 from "@/assets/about/tetris0.jpg"
import vission3 from "@/assets/about/type1.jpg"

import pic1 from "@/assets/about/tetris9.jpg"
import pic2 from "@/assets/about/ga1.jpg"
import pic3 from "@/assets/about/chess2.jpg"
import pic4 from "@/assets/about/ga4.jpg"
import pic5 from "@/assets/about/ga9.jpg"

import '@/styles/about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="mt-20">
            <div className="" style={{'height' : '90vh'}}>
                <div className="flex gap-5">
                    <div className="w-3/12">
                        <h1 className="text-3xl cinzel tracking-wider">About Us</h1>
                        <div className="about-divider"></div>
                    </div>
                    <div className="w-9/12 leading-6">
                        <p className="poppins">The <span className="yellow">League of Information Technology Students</span> is a recognized student organization from the University of the East – Caloocan that has an objective to assist and meet the needs of information technology students at the aforementioned university. As the only organization for BSIT students, it aims to be unique. Hence, it seeks to be of service to every student as the organization continues to work towards excellence. Importantly, it is geared towards authenticity and efficiency.</p>
                    </div>
                </div>

                <div className="flex gap-2 mt-10">
                    <div>
                        <Image src={about} alt="lits" className="about-image1 rounded-md object-cover about-picture" priority={true} ></Image>
                    </div>

                </div>
            </div>

            <div className="" data-aos="fade-left" style={{ 'height': '90vh' }}>
                <div>
                    <div className="flex gap-10 items-center">
                        <div className="w-6/12 text-justify">
                            <h1 className="text-3xl cinzel tracking-wider">History</h1>
                            <div className="about-divider"></div>
                            <p className="poppins mt-5 leading-7">The <span className="yellow">League of Information Technology Students </span> has a rich history that dates back to 2004. It was founded by a visionary, who is now a respected professor at the University of the East – Caloocan, Professor Jherold Valdoz. Recognizing the need for a platform that would cater to the unique needs of Information Technology students, Professor Valdoz took the initiative to establish the organization. Today, the <span className="yellow">League of Information Technology Students </span> stands as a testament to Professor Valdoz’s vision and dedication. It continues to strive for excellence, serving as a valuable resource for IT students at the University of the East – Caloocan and contributing to the broader IT community. The organization’s history is a source of pride for its members and serves as a reminder of its mission and values. It is a story of perseverance, innovation, and a relentless pursuit of excellence. It is a story that continues to be written with each passing year.</p>
                        </div>
                        <div className="w-6/12">
                            <Image src={history} alt="lits" className=" w-full h-full object-cover mb-5 rounded-xl" priority={true} ></Image>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-out" style={{ 'height': '70vh' }}>
                <div>
                    <center>
                        <Image src={logo} alt="lits" className=" w-24 h-24 object-cover mb-3" priority={true} ></Image>
                        <h1 className="text-3xl cinzel tracking-wider text-center"> Our Mission</h1>
                        <div className="about-divider"></div>
                        <p className="poppins mt-5 w-8/12 text-center">To empower Information Technology students at the University of the East – Caloocan by providing resources, support, and opportunities that enhance their academic journey.</p>
                    </center>
                </div>
            </div>

            <div className="" data-aos="fade-right" style={{ 'height': '70vh' }} >
                <div className="poppins text-base" >
                    <center>
                        <h1 className="text-3xl cinzel tracking-wider">Our Vision</h1>
                        <div className="about-divider"></div></center>
                    <div className="flex gap-10 mt-10 items-center">
                        <div className="w-6/12 rounded-2xl flex justify-evenly h-full gap-2">
                            <div >
                                <Image src={vission1} alt="lits" className="about-image1 max-h-96 rounded-md object-cover object-center" priority={true}></Image>
                            </div>
                            <div id="">
                                <Image src={vission2} alt="lits" style={{ 'height': '450px' }} className=" max-h-96 rounded-md object-cover object-right" priority={true}></Image>
                            </div>
                            <div id="">
                                <Image src={vission3} alt="lits" className="about-image1 max-h-96 rounded-md object-cover object-center" priority={true}></Image>
                            </div>
                        </div>
                        <div className="w-6/12 h-max leading-8">
                            <p>To be a leading student organization that is recognized for its commitment to academic excellence, innovation, and service, making a significant impact on the IT community within and beyond the University of the East – Caloocan. </p>
                            <p className="mt-5">We envisioned ourselves to provide:</p>
                            <ul className="list-disc ml-5">
                                <li><span className="yellow">Service:</span> We are dedicated to serving the needs of our members and the broader IT community.</li>
                                <li><span className="yellow">Excellence:</span> We strive for the highest standards in all our endeavors.</li>
                                <li><span className="yellow">Innovation:</span> We encourage creativity and the exploration of new ideas and technologies.</li>
                                <li><span className="yellow">Authenticity:</span> We value honesty, transparency, and integrity in our actions.</li>
                                <li><span className="yellow">Efficiency:</span> We aim to deliver our services in the most effective and timely manner.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center" data-aos="fade-up" style={{ 'height': '100vh' }}>
                <div >
                    <center>
                        <h1 className="text-3xl cinzel tracking-wider">Our Culture</h1>
                        <div className="about-divider"></div></center>
                    <p className="mt-5 poppins leading-7 text-center">We foster a supportive environment where everyone is encouraged to learn, grow, and contribute to the betterment of the IT community. We celebrate achievements, learn from our failures, and continuously strive for improvement. We are not just an organization; we are a community united by our passion for technology and our commitment to making a difference. As LITSmates, we uplift one another as we all grasp the hands of success.</p>

                    <div className="grid grid-columns-2 grid-flow-col gap-2 mt-10" >
                        <div>
                            <Image src={pic1} alt="lits" className="h-full rounded-md object-cover" priority={true}></Image>
                        </div>
                        <div className="grid grid-columns-2 grid-rows-2 grid-flow-col gap-2">
                            <div>
                                <Image src={pic2} alt="lits" className=" max-h-96 rounded-md object-cover object-center" priority={true}></Image>
                            </div>
                            <div>
                                <Image src={pic3} alt="lits" className="max-h-96 rounded-md object-cover object-center" priority={true}></Image>
                            </div>
                            <div>
                                <Image src={pic4} alt="lits" className="max-h-96 rounded-md object-cover object-center" priority={true}></Image>
                            </div>
                            <div>
                                <Image src={pic5} alt="lits" className=" max-h-96 rounded-md object-cover object-center" priority={true}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About