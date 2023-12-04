import Image from "next/image"
import picture1 from "@/assets/events/generalassembly.jpg"

const Events = () => {
  return (
    <div>
        <div>
            <div className='flex justify-start '>
              <div>
                <Image src={picture1} alt="image1" className="object-cover w-52 h-52 "></Image>
              </div>
          
            </div>
        </div>
    </div>
  )
}

export default Events
