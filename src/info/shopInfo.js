// filters info
export const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "XXX-Large",
];
export const categories = [
    "T-shirts",
    "Jackets",
    "Shoes",
    "Accessories",
    "Shirts",
    "Pants",
];
export const colors = [
    "bg-green-500",
    "bg-red-600",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-white",
    "bg-purple-500",
    "bg-rose-500",
    "bg-black",
];

// shop items info
import item1 from "../assets/images/shop/4914.jpg";
import item2 from "../assets/images/shop/2148851011.jpg";
import item3 from "../assets/images/shop/3800.jpg";
import item4 from "../assets/images/shop/wallet.jpg";
import item5 from "../assets/images/shop/3567.jpg";
import item6 from "../assets/images/shop/2148603031.jpg";
import item7 from "../assets/images/shop/cap.jpg";
import item8 from "../assets/images/shop/12826.jpg";

export const shopItems = [
    {
        name: "T-shirt with tape details",
        id: "T-shirt_with_tape_details",
        photo: item1,
        ratings: 2,
        price: 120,
        markedPrice: 180,
        category: "T-shirts",
        description: "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        sizes: ["Small", "Medium", "Large", "X-Large"],
        colors: ["bg-red-600", "bg-blue-500", "bg-white"], 
    },
    {
        name: "Classic Denim Jacket",
        id: "Classic_Denim_Jacket",
        photo: item2,
        ratings: 4,
        price: 300,
        markedPrice: 450,
        category: "Jackets",
        description: "A timeless classic, this denim jacket is designed for a rugged yet stylish look. It's made with durable fabric to keep you comfortable all day.",
        sizes: ["Medium", "Large", "X-Large", "XX-Large"], 
        colors: ["bg-blue-500", "bg-black", "bg-white"], 
    },
    {
        name: "Casual Sneakers",
        id: "Casual_Sneakers",
        photo: item3,
        ratings: 5,
        price: 220,
        markedPrice: 280,
        category: "Shoes",
        description: "These casual sneakers combine style and comfort, making them perfect for daily wear. The cushioned sole ensures all-day support.",
        sizes: ["Small", "Medium", "Large"], 
        colors: ["bg-white", "bg-black"], 
    },
    {
        name: "Leather Wallet",
        id: "Leather_Wallet",
        photo: item4,
        ratings: 3,
        price: 90,
        markedPrice: 120,
        category: "Accessories",
        description: "A sleek leather wallet that keeps your essentials organized. Crafted from high-quality leather, it is both stylish and durable.",
        sizes: ["Medium"], 
        colors: ["bg-brown", "bg-black"], 
    },
    {
        name: "Striped Polo Shirt",
        id: "Striped_Polo_Shirt",
        photo: item5,
        ratings: 4,
        price: 150,
        markedPrice: 200,
        category: "Shirts",
        description: "This striped polo shirt offers a classic and casual look. Made from breathable fabric, it's perfect for any relaxed outing.",
        sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"], 
        colors: ["bg-green-500", "bg-blue-500", "bg-white"], 
    },
    {
        name: "Slim Fit Chinos",
        id: "Slim_Fit_Chinos",
        photo: item6,
        ratings: 4,
        price: 250,
        markedPrice: 350,
        category: "Pants",
        description: "These slim-fit chinos are designed for a modern, tailored look. They provide a comfortable fit while maintaining a sharp silhouette.",
        sizes: ["Small", "Medium", "Large", "X-Large"], 
        colors: ["bg-olive-500", "bg-black"], 
    },
    {
        name: "Sports Cap",
        id: "Sports_Cap",
        photo: item7,
        ratings: 4,
        price: 50,
        markedPrice: 80,
        category: "Accessories",
        description: "Stay cool and stylish with this sports cap. It offers sun protection and comfort, making it a perfect accessory for outdoor activities.",
        sizes: ["One Size"], 
        colors: ["bg-black", "bg-blue-500", "bg-red-600"], 
    },
    {
        name: "Aviator Sunglasses",
        id: "Aviator_Sunglasses",
        photo: item8,
        ratings: 5,
        price: 180,
        markedPrice: 250,
        category: "Accessories",
        description: "These aviator sunglasses add a touch of sophistication to any outfit. With UV protection, they’re both stylish and functional.",
        sizes: ["One Size"], 
        colors: ["bg-gold", "bg-silver"], 
    }
];

