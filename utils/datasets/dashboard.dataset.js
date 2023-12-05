export default {
    navbar: [
        { id: '/', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'events', label: 'Events' },
        { id: 'teams', label: 'Teams' },
        { id: 'help', label: 'Help' },
    ],
    events: {
        events: [
            { id: 'Past Events', label: 'Past Events' },
            { id: 'Upcomming Events', label: 'Upcomming Events' },
        ]
    },
    team: [
        { id: 'Adviser', label: 'Adviser', description: 'Meet our dedicated school adviser, a guiding force committed to fostering academic growth, providing strategic direction, and inspiring educational excellence within our community' },
        { id: 'Officer', label: 'Officers', description: 'Discover the driving force behind our school organization as you meet our dedicated officer, a dynamic leader committed to fostering a positive and inclusive environment, ensuring smooth operations, and empowering our community towards excellence' },
        { id: 'Committee', label: 'Committee', description: 'Explore the collective vision and commitment to excellence embodied by our school committee, a cohesive team dedicated to shaping a positive learning environment, fostering innovation, and steering the institution towards success' },
    ],
    help: {
        contact: [
            { id: 'facebook', label: 'Join us', text: "Follow our facebook page", href: "https://www.facebook.com/UE.LITS", buttonText: 'Visit our page' },
            { id: 'messenger', label: 'Chat to us', text: "Speak to our friendly team", href: "https://www.facebook.com/UE.LITS", buttonText: 'Chat us' },
            { id: 'address', label: 'Visit us', text: "Visit our organization", static: "University of the East Caloocan" },
            { id: 'email', label: 'Email us', text: "Email us for questions", static: "@uelits2324@gmail.com" },
        ],
        faqs: [
            {
                title: "Who can join the organization?",
                text: "The organization is open to all students enrolled in the BSIT program at the University of the East – Caloocan.",
            },
            {
                title: "How can I join the organization?",
                text: "Interested students can apply for membership once the recruitment week starts. More details about the application process, such as membership fee, can be obtained from the organization’s official social media accounts. ",
            },
            {
                title: "What benefits do members receive?",
                text: "Members have access to a variety of resources and opportunities, including academic support, networking events, workshops, and more. They also have the opportunity to contribute to the IT community and gain valuable experience.",
            },
            {
                title: "Does the organization offer merchandise?",
                text: "Yes, the organization offers a range of merchandise including t-shirts, lanyards, and other items featuring the organization’s logo and colors will be soon available.",
            },
            {
                title: "Where can I purchase the organization’s merchandise?",
                text: "The organization’s merchandise can be purchased during the recruitment week. Members will be able to preorder their chosen merchandise.",
            },
            {
                title: "Can non-members purchase the organization’s merchandise?",
                text: "No, only official members of the organization are welcome to purchase our merchandise.",
            },
            {
                title: "How much is your merchandise? ",
                text: "The prices vary from time to time. More information about the pricing will be announced on our official social media accounts.",
            },
        ]
    }
}