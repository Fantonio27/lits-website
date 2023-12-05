"use client"
import { useState, useEffect } from 'react';
import dataset from "@/utils/datasets/dashboard.dataset"

import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

import { ListItemButton, Collapse, IconButton, Box } from "@mui/material";
import ArrowIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Aos from 'aos'
import 'aos/dist/aos.css'

const faqs = () => {
    const [expanded, setExpanded] = useState(0);

    const data = dataset.help

    useEffect(() => {
        Aos.init()
    }, [])

    const handleChange = (i: number) => () => {
        setExpanded(expanded === i ? -1 : i);
    }

   

    const icons = [
        <LanguageRoundedIcon />,
        <ChatBubbleOutlineRoundedIcon />,
        <CorporateFareOutlinedIcon />,
        <MailOutlineRoundedIcon />
    ]

    return (
        <div className="">
            <div className='flex justify-center items-center' style={{ height: '80vh' }}>
                <div>
                    <div className='text-center'>
                        <h1 className='yellow text-4xl cinzel' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">Get in Touch</h1>
                        <p className='poppins text-15 mt-2' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Feel free to reach out and connect with us—your thoughts and inquiries are valuable, and we look forward to hearing from you</p>
                    </div>
                    <div className='grid grid-cols-4 gap-10 mt-10'>
                        {
                            data.contact.map((values, index) => {
                                return (
                                    <div className='bg-white/95 rounded-xl darkblue p-5' key={index} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay={300 + (300 * (index + 1))}>
                                        <div className=' w-6 h-6 bg-sky-200/50 rounded-lg flex justify-center items-center p-5'>
                                            <Box sx={{ color: '#00A5E9' }}>
                                                {icons[index]}
                                            </Box>
                                        </div>
                                        <h1 className='text-md blue quicksand mt-5 mb-1'>{values.label}</h1>
                                        <p className='text-15 quicksand mb-5'>{values.text}</p>
                                        {
                                            values.href ?
                                                <a href={values.href} className='text-white text-15 rounded-md bg-sky-500 transition-all hover:bg-sky-600 px-5 py-2'>
                                                    {values.buttonText}
                                                </a>
                                                :
                                                <p className='quicksand text-15 underline underline-offset-4'>{values.static}</p>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center' style={{ height: '100vh' }}>
                <div className="flex gap-16" >
                    <div className="w-6/12">
                        <h1 className="text-3xl cinzel yellow mb-3" data-aos="fade-left">Frequently asked questions</h1>
                        <p className="poppins leading-7 text-justify" data-aos="fade-left" data-aos-duration="1000">Explore our comprehensive FAQs to find quick and detailed answers to common questions, providing you with valuable insights and assistance on various topics related to our services. Streamline your experience by browsing through our frequently asked questions and enhance your understanding of our offerings </p>
                    </div>

                    <div className="w-6/12 rounded-xl p-10 bg-white" data-aos="fade-right" data-aos-duration="1000">
                        {
                            data.faqs.map((faq, index) => {
                                const { title, text } = faq
                                let expand = expanded === index

                                return (
                                    <div key={index}>
                                        <ListItemButton
                                            sx={{
                                                display: 'flex',
                                                alignContent: 'center',
                                                justifyContent: 'space-between',
                                                '&:hover': {
                                                    backgroundColor: 'inherit'
                                                },
                                                padding: '10px 0px',
                                                borderTop: '1px solid #adb5bd',
                                                borderBottom: index == Number(data.faqs.length - 1) && expanded !== index ? '1px solid #adb5bd' : 'none'
                                            }}
                                            onClick={handleChange(index)}
                                        >
                                            <p className="blue quicksand text-base font-normal">{title}</p>
                                            <IconButton sx={{ color: '#161A30' }}>
                                                {<ArrowIcon sx={{ transition: '0.3s linear', transform: expand ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
                                            </IconButton>
                                        </ListItemButton>
                                        <Collapse
                                            in={expand}
                                            sx={{ borderBottom: index == Number(data.faqs.length - 1) ? '1px solid #adb5bd' : 'none' }}
                                        >
                                            <p className="darkblue quicksand mb-5 text-justify leading-7" style={{ 'fontSize': '15px' }}>{text}</p>
                                        </Collapse>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default faqs
