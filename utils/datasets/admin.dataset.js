export default {
    teams: {
        instructions: {
            id: "team",
            title: "Team Table",
            buttonText: "Team",
            text: "View all the records of Team",
        },
        fields: [
            { id: 'avatar', label: 'Avatar', align: 'center', borderRadius: "12px 0px 0px"},
            { id: 'id', label: 'ID'},
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
            { id: "facebook", title: "Facebook (optional)", text: "", type: 1 },
            { id: "instagram", title: "Instagram (optional)", text: "", type: 1 },
            { id: "twitter", title: "Twitter (optional)", text: "", type: 1 },
            { id: "linkedin", title: "Linked In (optional)", text: "", type: 1 },
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
        SearchList: [
            { id: 'All', label: 'All' },
            { id: 'lrn', label: 'LRN' },
            { id: 'firstname', label: 'FirstName' },
            { id: 'lastname', label: 'LastName' },
            { id: 'section', label: 'Section' },
        ]
    },
}