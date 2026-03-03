const mongoose=require("mongoose");
const Book=require("./models/Book");

mongoose.connect("mongodb+srv://kruti08:kruti0802@cluster0.iitpht4.mongodb.net/?appName=Cluster0");

const books = [
     {
        title: "Ikigai",
        author: "Héctor García & Francesc Miralles",
        price: 349,
        description: "Secrets to a long, happy life",
        image: "/images/ikigai.jpg"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 399,
        description: "Inspirational journey of self-discovery",
        image: "/images/image.png"
    },
    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 299,
        description: "Lessons on wealth and behavior",
        image: "/images/money.jpg"
    },
    {
        title: "Start With Why",
        author: "Simon Sinek",
        price: 349,
        description: "Discover your purpose and inspire",
        image: "/images/start.jpg"
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        price: 399,
        description: "Focus and productivity mastery",
        image: "/images/work.jpg"
    },
    {
        title: "Zero to One",
        author: "Peter Thiel",
        price: 399,
        description: "Build innovative startups",
        image: "/images/zero.jpg"
    }
];

Book.insertMany(books)
.then(()=>{
    console.log("Books Added");
    mongoose.connection.close();
});