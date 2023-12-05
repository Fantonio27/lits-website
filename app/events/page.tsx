"use client"

import Image from "next/image"
import picture1 from "@/assets/events/LITSCHESS.png"
import picture2 from "@/assets/events/generalassembly.jpg"
import picture3 from "@/assets/events/litstrato.jpg"
import picture4 from "@/assets/events/TETRIS.png"
import dataset from "@/utils/datasets/dashboard.dataset"

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Events = () => {
  const navigate = useRouter()

  const data = [picture1, picture2, picture3, picture4]
  const sets = dataset.events

  useEffect(() => {
    Aos.init()
  }, [])

  const OnClick = (url: string) => {
    navigate.push(`events/${url}`)
  }

  return (
    <div className=" mb-48">
      <div className="flex justify-center items-center" data-aos="zoom-in-up" data-aos-duration="800" style={{ 'height': '80vh' }}>
        <div>
          <h1 className="yellow cinzel text-3xl">Events</h1>
          <div className="divider"></div>
          <p className="poppins leading-7 mt-5">Embark on a journey of excitement and enrichment with our school events, meticulously curated to enhance the overall educational experience. From engaging workshops and insightful seminars to spirited sports competitions and vibrant cultural celebrations, our events calendar is a testament to our commitment to holistic learning. Join us in fostering a sense of community and school spirit as we create memorable moments that go beyond the classroom, providing students with opportunities to explore, learn, and grow together</p>
        </div>
      </div>
      {
        sets.events.map((set, index) => {
          return (
            <div className={`${index == 0 && 'mb-96'}`} key={set.id}>
              <div data-aos="fade-left">
                <h1 className="yellow cinzel text-3xl">{set.label}</h1>
                <div className="divider"></div>
              </div>

              <div className="grid gap-10 grid-cols-2 mt-8" >
                {
                  data.map((value, index) => {
                    const i = index % 2
                    return (
                      <div key={index} data-aos="fade-up">
                        <div className='flex gap-5 items-center poppins text-15'>
                          <Image src={value} alt="image1" className="object-cover rounded-lg cursor-pointer w-52 h-52 transition-all hover:scale-105" onClick={() => OnClick(String(index))} />
                          <div>
                            <h1 className="quicksand text-xl yellow cursor-pointer" onClick={() => OnClick(String(index))}>Sa Letrang G: General Assembly</h1>
                            <p className="mb-3">Chess enthusiasts, this one's for you! Engage in a cerebral battle of tactics and foresight in gambIT. Challenge your peers and prove your supremacy in this thrilling chess contest amongst your fellow LITSmates!
                            </p>
                            <div className="poppins">
                              <p><span className="yellow">Date:</span> October 4, 2023</p>
                              <p><span className="yellow">Venue:</span> MPH 1, College of Engineering Building</p>
                              <p><span className="yellow">Time:</span> 1:00 PM - 5:00 PM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Events
