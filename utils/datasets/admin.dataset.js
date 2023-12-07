export default {
    teams: {
        instructions: {
            id: "team",
            title: "Teams Table",
            buttonText: "Team",
            text: "View all the records of Record",
        },
        fields: [
            { id: 'avatar', label: 'Avatar', align: 'center', borderRadius: "12px 0px 0px" },
            { id: 'id', label: 'ID' },
            { id: 'name', label: 'Fullname' },
            { id: 'position', label: 'Position' },
            { id: 'email', label: 'Email Address' },
            { id: 'action', label: 'Action', align: 'center', borderRadius: "0px 12px 0px 0px" }
        ],
        forms: [
            { id: "avatar", title: "Avatar", text: "", type: 4 },
            { id: "name", title: "Fullname", text: "", type: 1 },
            { id: "position", title: "Position", text: "", type: 3 },
            { id: "email", title: "Email Address", text: "", type: 1 },
            { id: "about", title: "Bio (optional)", text: "", type: 2 },
            { id: "facebook", title: "Facebook Link(optional)", text: "", type: 1 },
            { id: "instagram", title: "Instagram Link(optional)", text: "", type: 1 },
            { id: "twitter", title: "Twitter Link(optional)", text: "", type: 1 },
            { id: "linkedin", title: "Linked In Link(optional)", text: "", type: 1 },
        ],
        lists: {
            position: [
                'Adviser',
                'Committee - Communications',
                'Committee - Creatives',
                'Committee - Execitive',
                'Committee - Multimedia',
                'Committee - Technical',
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
                'Officer - Vice Precident Internal',
            ],
        },
        dataform: {
            "name": "",
            "position": "",
            "avatar": "",
            "about": "",
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedin": "",
            "email": ""
        },
    },

    events: {
        instructions: {
            id: "event",
            title: "Events Table",
            buttonText: "Event",
            text: "View all the records of Event Record",
        },
        fields: [
            { id: 'poster', label: 'Poster', align: 'center', borderRadius: "12px 0px 0px" },
            { id: 'name', label: 'Event Name' },
            { id: 'date', label: 'Date' },
            { id: 'venue', label: 'Venue' },
            { id: 'action', label: 'Action', align: 'center', borderRadius: "0px 12px 0px 0px" }
        ],
        forms: [
            { id: "poster", title: "Poster", type: 4 },
            { id: "name", title: "Event Name", type: 1 },
            { id: "description", title: "Description", type: 2 },
            { id: "date", title: "Date", type: 5 },
            { id: "venue", title: "Venue", type: 1 },
            { id: "startTime", title: "Start Time", type: 6 },
            { id: "endTime", title: "End Time", type: 6 },
            { id: "speaker", title: "Speaker", type: 7 },
            { id: "partnership", title: "Partnership", type: 7 },
        ],
        lists: {
            position: [
            
            ],
        },
        dataform: {
            "name": "",
            "description": "",
            "date": "",
            "venue": "",
            "startTime": "",
            "endTime": "",
            "poster": "",
            "speaker": [
                // { "name": "", "position": "", "avatar": "" }
            ],
            "partnership": [
                // { "name": "", "link": "", "logo": "" }
            ]
        },
    },
}