export default {
    team: {
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
            { id: "_id", title: "Student ID", text: "", type: 1, disabled: true },
            { id: "avatar", title: "Avatar", text: "", type: 4 },
            { id: "name", title: "Fullname", text: "", type: 1 },
            { id: "position", title: "Position", text: "", type: 3 },
            { id: "email", title: "Email Address", text: "", type: 1 },
            { id: "about", title: "Bio", text: "", type: 2 },
            { id: "facebook", title: "Facebook", text: "", type: 1 },
            { id: "instagram", title: "Instagram", text: "", type: 1 },
            { id: "twitter", title: "Twitter", text: "", type: 1 },
            { id: "linkedin", title: "Linked In", text: "", type: 1 },
        ],
        lists: {
            accountStatus: ['Active', 'Inactive'],
            examStatus: ['Exam Taken', 'Not Taken']
        },
        dataform: {
            "lrn": "",
            "firstname": "",
            "lastname": "",
            "section": "",
            "password": "na",
            "examStatus": "Not Taken",
            "accountStatus": "Active"
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