const EmployeeModule = (function (){
    const employees = [
        {
            name: "Chef Tony",
            image:"cheftony.jpg",
            role: "Head chef",
            restaurant: "Bjerke"
        },
        {
            name: "Junior",
            image:"junior.png",
            role: "Pizza virtuoso",
            restaurant: "Bjerke"
        },{
            name: "Paulie",
            image:"paulie.jpg",
            role: "Capo",
            restaurant: "Bjerke"
        },{
            name: "Toto Riina",
            image:"toto.png",
            role: "Capo dei capi",
            restaurant: "Gamlebyen"
        },
        {
            name: "Bernardo",
            image:"bernardo.jpg",
            role: "Binnu u tratturi",
            restaurant: "Gamlebyen"
        },{
            name: "Silvio",
            image:"silvio.png",
            role: "Consigliere",
            restaurant: "Gamlebyen"
        },{
            name: "Vincenzo",
            image:"vincent.png",
            role: "The Oddfather",
            restaurant: "Gamlebyen"
        },{
            name: "Swedish Chef",
            image:"swedishchef.jpeg",
            role: "BORK BORK BORK",
            restaurant: "Gamlebyen"
        },
        {
            name: "Tony",
            image:"tony.png",
            role: "Waste management",
            restaurant: "Majorstuen"
        },
        {
            name: "Skinny Joey",
            image:"skinny.png",
            role: "Wiseguy",
            restaurant: "Majorstuen"
        },
        {
            name: "Nicky",
            image:"nicky.jpg",
            role: "Mr.Apple",
            restaurant: "Majorstuen"
        },
        {
            name: "Giovanni",
            image:"giovanni.jpg",
            role: "il maiale",
            restaurant: "Majorstuen"
        },
        {
            name: "Antonio",
            image:"antonio.jpg",
            role: "il furbo",
            restaurant: "Sagene"
        },
        {
            name: "Tommaso",
            image:"tommaso.jpg",
            role: "Pentito",
            restaurant: "Sagene"
        },
        {
            name: "Gotti",
            image:"gotti.jpg",
            role: "Teflon Don",
            restaurant: "Sagene"
        },
        {
            name: "Sammy",
            image:"sammy.jpg",
            role: "Made man",
            restaurant: "Sagene"
        },   
    ];

   

    const getAllEmployees = () => employees;
    return { getAllEmployees }
}());



export { EmployeeModule };