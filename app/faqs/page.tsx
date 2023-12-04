"use client"
import { useState, useEffect } from 'react';

import { ListItemButton, Collapse, IconButton } from "@mui/material";
import ArrowIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Aos from 'aos'
import 'aos/dist/aos.css'

const faqs = () => {
    const [expanded, setExpanded] = useState(0);

    useEffect(()=> { 
        Aos.init()
    },[])

    const handleChange = (i: number) => () => {
        setExpanded(expanded === i ? -1 : i);
    }

    const FAQ = [
        {
            title: "How do we get the recommended course? ",
            text: "The student who participates in answering the Course Directory with Recommendation System will only receive a recommendation after they have previously completed the test, which will display the suggested course based on their performance. Furthermore, the system's results will give students an idea of what subject they have weaknesses in and enhance on it and what possible knowledge and skill set they can significantly improve before enlisting college courses or their suitable interests in their professions.",
        },
        {
            title: "How do we take the exam?",
            text: "Students can find the exam by navigating through the Course Directory with Recommendation System's side navigation bar; there, they can find the specified questions and answers that the recipient was given. There are 25 Science Questions and Answers, 25 Math Questions and Answers, 25 English Questions and Answers, and 25 Reading Comprehension Questions and Answers.",
        },
        {
            title: "Can other students see my Results?",
            text: "No, our team ensures that no one can see the student results and scores other than you, who answered the questions, the system administrator, and the teacher or professor in charge of the section.",
        },
        {
            title: "Can I retake the exam if I want to?",
            text: "Yes, and perhaps no. The student may retake the exam if they do not receive the desired score or outcomes. No, because the student can only take the exam in the computer lab of their school facility and under the supervision of the professor or teacher in charge of the unit. In conclusion, if the professor or teacher assigns a specific date for the student to take the exam and the student fails to do so on time or changes their mind about participating, it is up to the professor or teacher to supervise this student or to move this student to the next section that will take the exam next.",
        },
        {
            title: "Will I have to take the recommended course in my college years?",
            text: "It is up to the student to take the recommended course based on the results; the Course Directory with Recommendation System merely provides a recommendation on what corresponds with their examination scores. This will provide Caloocan High School students with a better understanding of what college career or another interest profession they wish to pursue. If the student wants to avoid following the recommendation, they have the freedom to select or pursue the profession of their choice; this system will provide them a glimpse of what they want in their career.",
        },
    ]

    return (
        <div className="mt-16">
            <div className="flex gap-16 ">
                <div className="w-6/12" data-aos="fade-left" data-aos-duration="1000">
                    <h1 className="text-4xl cinzel yellow mb-3">Frequently asked questions</h1>
                    <p className="poppins leading-7 text-justify">Explore our comprehensive FAQs to find quick and detailed answers to common questions, providing you with valuable insights and assistance on various topics related to our services. Streamline your experience by browsing through our frequently asked questions and enhance your understanding of our offerings </p>
                </div>

                <div className="w-6/12 rounded-xl p-10" style={{'backgroundColor': 'rgb(246, 248, 249, 0.9)'}}  data-aos="fade-right" data-aos-duration="1000">
                    {
                        FAQ.map((data, index) => {
                            const { title, text } = data
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
                                            borderBottom: index == Number(FAQ.length - 1) && expanded !== index ? '1px solid #adb5bd' : 'none'
                                        }}
                                        onClick={handleChange(index)}
                                    >
                                        <p className="darkblue quicksand text-base font-normal">{title}</p>
                                        <IconButton sx={{color : '#161A30'}}>
                                            {<ArrowIcon sx={{transition: '0.3s linear', transform: expand ?'rotate(180deg)' : 'rotate(0deg)'}}/>}
                                        </IconButton>
                                    </ListItemButton>
                                    <Collapse
                                        in={expand}
                                        sx={{borderBottom: index == Number(FAQ.length - 1)? '1px solid #adb5bd' : 'none'}}
                                        >
                                        <p className="darkblue poppins mb-5 text-justify leading-7" style={{'fontSize': '15px'}}>{text}</p>
                                    </Collapse>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default faqs
