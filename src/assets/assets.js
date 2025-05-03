import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'


import logo from './logo.png'
import hero_img from './hero_img.webp'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.jpg'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Classic Cheeseburger",
        description: "A timeless favorite, featuring a juicy beef patty, melted cheddar cheese, lettuce, tomato, pickles, and ketchup, all sandwiched between a soft bun.",
        price: 100,
        image: [p_img1],
        category: "Burger",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Pepperoni Pizza",
        description: "Tomato sauce, mozzarella, and spicy pepperoni slices",
        price: 200,
        price: 200,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Medium", "Large", "Extra Large"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Classic BLT",
        description: "A simple, yet delicious sandwich with crispy bacon, fresh lettuce, and juicy tomato slices, all sandwiched between toasted bread with mayonnaise.",
        price: 220,
        image: [p_img3],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Large", "Extra Large"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Margherita",
        description: "Tomato sauce, fresh mozzarella, basil, and olive oil (inspired by the Italian flag)",
        price: 110,
        image: [p_img4],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Bacon Cheeseburger",
        description: "A classic cheeseburger with the added crunch and smokiness of crispy bacon, making it an irresistible combo of savory flavors.",
        price: 130,
        image: [p_img5],
        category: "Burger",
        subCategory: "Veg",
        sizes: ["Medium", "Large", "Extra Large"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Grilled Cheese",
        description: "A comforting sandwich made with melted cheese, typically cheddar, between two slices of buttered, toasted bread, often paired with a bowl of tomato soup.",
        price: 140,
        image: [p_img6],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Large", "Extra Large"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Hawaiian Pizza",
        description: "Ham, pineapple, mozzarella, and tomato sauce (divisive but iconic!).",
        price: 190,
        image: [p_img7],
        category: "Pizza",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Large", "Extra Large"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Quattro Formaggi ",
        description: "Four-cheese blend (e.g., mozzarella, gorgonzola, parmesan, fontina).",
        price: 140,
        image: [p_img8],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Club Sandwich",
        description: "A hearty triple-decker sandwich featuring turkey or chicken, crispy bacon, lettuce, tomato, and mayo, often served with a side of fries.",
        price: 100,
        image: [p_img9],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Medium", "Large", "Extra Large"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Vegetarian",
        description: "Loaded with veggies like mushrooms, bell peppers, onions, olives, and tomatoes.",
        price: 110,
        image: [p_img10],
        category: "Pizza",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Large", "Extra Large"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Chicago Deep-Dish ",
        description: "Thick, buttery crust layered with cheese, toppings, and chunky tomato sauce.",
        price: 120,
        image: [p_img11],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "New York-Style ",
        description: "Large, foldable slices with a thin, crispy crust.",
        price: 150,
        image: [p_img12],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Pork Belly Burger",
        description: "A rich and indulgent burger featuring tender, slow-cooked pork belly, pickled vegetables, and sometimes a tangy sauce to balance the richness",
        price: 130,
        image: [p_img13],
        category: "Burger",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "spanish corn sandwich",
        description: "A savory sandwich made with thinly sliced steak, sautéed onions, and melted cheese (usually provolone or American), all packed in a soft hoagie roll.",
        price: 160,
        image: [p_img14],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Neapolitan ",
        description: "Soft, chewy crust with San Marzano tomatoes and fresh mozzarella (traditional Italian).",
        price: 140,
        image: [p_img15],
        category: "Pizza",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Reuben Sandwich",
        description: "A classic deli sandwich with corned beef, Swiss cheese, sauerkraut, and Russian or Thousand Island dressing, all grilled between rye bread.",
        price: 170,
        image: [p_img16],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Sicilian",
        description: "Thick, rectangular crust topped with tomato sauce and cheese.",
        price: 150,
        image: [p_img17],
        category: "Pizza",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Chicken Caesar Wrap",
        description: "A wrap filled with grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing, all rolled up in a soft tortilla for a portable option.",
        price: 180,
        image: [p_img18],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Pulled Pork Sandwich",
        description: "A southern favorite, featuring tender, slow-cooked pulled pork, topped with barbecue sauce and often served with coleslaw on a soft bun.",
        price: 160,
        image: [p_img19],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Ranch Burger",
        description: "A classic burger topped with creamy ranch dressing, crispy bacon, lettuce, and cheese, making for a flavorful and satisfying bite.",
        price: 190,
        image: [p_img20],
        category: "Burger",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Buffalo Chicken Burger",
        description: "A spicy twist on the chicken burger, featuring a chicken patty or fillet coated in buffalo sauce, with blue cheese or ranch dressing",
        price: 170,
        image: [p_img21],
        category: "Burger",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Fried Chicken Burger",
        description: "A crispy, breaded chicken fillet served with pickles, lettuce, and mayo, offering a crunchy, satisfying alternative to a beef patty.",
        price: 200,
        image: [p_img22],
        category: "Burger",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Turkey and Avocado Sandwich",
        description: "A healthy and fresh option with sliced turkey, creamy avocado, lettuce, tomato, and a light mayo or mustard on whole grain bread.",
        price: 180,
        image: [p_img23],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Egg Salad Sandwich",
        description: "A creamy and comforting sandwich made with hard-boiled eggs, mayonnaise, mustard, and seasonings, served on soft bread or a roll.",
        price: 210,
        image: [p_img24],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Tuna Salad Sandwich",
        description: "A tasty option made with a mixture of canned tuna, mayo, relish, and seasonings, often topped with lettuce and served on a soft sandwich roll.",
        price: 190,
        image: [p_img25],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Sliders",
        description: "Miniature versions of traditional burgers, typically served in sets, perfect for a party or for sampling a variety of different toppings and fillings.",
        price: 220,
        image: [p_img26],
        category: "Burger",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Croque Monsieur",
        description: "A  French classic, featuring ham and melted Gruyère cheese between slices of bread, with a béchamel sauce, grilled to golden perfection.",
        price: 200,
        image: [p_img27],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "California-Style ",
        description: "Thin crust with fresh, non-traditional toppings like avocado or goat cheese.",
        price: 230,
        image: [p_img28],
        category: "Pizza",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Lamb Burger",
        description: "A gourmet burger featuring a juicy lamb patty, often paired with toppings like feta cheese, tzatziki sauce, and fresh veggies.",
        price: 210,
        image: [p_img29],
        category: "Burger",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Caprese Sandwich",
        description: "A fresh and light sandwich with mozzarella cheese, tomato slices, basil leaves, and a drizzle of balsamic glaze on crusty bread.",
        price: 240,
        image: [p_img30],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Roman Pizza (Pizza al Taglio)",
        description: "A lightweight, usually Square slices with a light, airy crust.",
        price: 220,
        image: [p_img31],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "BBQ Chicken Pizza",
        description: "A smoky and sweet pizza topped with grilled chicken, barbecue sauce, red onions, and mozzarella.",
        price: 250,
        image: [p_img32],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Chicken Salad Sandwich",
        description: "A refreshing sandwich made with tender chicken mixed with mayo, celery, grapes, or nuts, and served on a soft roll or bread.",
        price: 230,
        image: [p_img33],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Guacamole Burger",
        description: "A creamy, flavorful burger topped with fresh guacamole, cheddar cheese, lettuce, and sometimes jalapeños for a bit of spice.",
        price: 260,
        image: [p_img34],
        category: "Burger",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Hawaiian Burger",
        description: "A tropical-inspired burger with a juicy beef patty, grilled pineapple, teriyaki sauce, and often a slice of ham or bacon..",
        price: 240,
        image: [p_img35],
        category: "Burger",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Philly Cheesesteak Burger",
        description: "A burger with a twist on the classic Philly cheesesteak, featuring a beef patty topped with sautéed onions, peppers, melted provolone, and steak strips.",
        price: 270,
        image: [p_img36],
        category: "Burger",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Crispy Avocado Burger",
        description: "A fresh and creamy burger featuring a beef patty paired with crispy fried avocado slices, lettuce, tomato, and a zesty sauce.",
        price: 250,
        image: [p_img37],
        category: "Burger",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Four Cheese Pizza (Quattro Formaggi)",
        description: "A cheesy delight featuring a mix of four different cheeses such as mozzarella, gorgonzola, parmesan, and ricotta.",
        price: 280,
        image: [p_img38],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Meat Lovers Pizza",
        description: "A hearty pizza packed with a variety of meats, such as pepperoni, sausage, bacon, and ham, all on a cheesy base.",
        price: 260,
        image: [p_img39],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Buffalo Chicken Pizza",
        description: "A spicy twist on pizza, with buffalo sauce-coated chicken, mozzarella, and a drizzle of blue cheese dressing.",
        price: 290,
        image: [p_img40],
        category: "Pizza",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Supreme Pizza",
        description: "A combination of meat (like pepperoni, sausage, and bacon) and vegetables (such as onions, peppers, and olives), making for a loaded pizza.",
        price: 270,
        image: [p_img41],
        category: "Pizza",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Meatball Sub",
        description: "A hearty sandwich filled with Italian meatballs, marinara sauce, and melted mozzarella cheese, all nestled in a sub roll, often toasted.",
        price: 300,
        image: [p_img42],
        category: "Sandwich",
        subCategory: "Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Vegetarian Hummus Sandwich",
        description: "A healthy and flavorful sandwich featuring creamy hummus, cucumbers, avocado, sprouts, and roasted veggies, served on whole-grain bread.",
        price: 280,
        image: [p_img43],
        category: "Sandwich",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716658545448,
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Tandoori Chicken Burger",
        description: "An exotic, flavorful burger featuring a tandoori-spiced chicken patty, often paired with yogurt-based sauce, cucumber, and cilantro.",
        price: 310,
        image: [p_img44],
        category: "Burger",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Seafood Pizza",
        description: "A pizza topped with a medley of seafood like shrimp, mussels, clams, and anchovies, often paired with a garlic butter or tomato sauce.",
        price: 290,
        image: [p_img45],
        category: "Pizza",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "White Pizza (Pizza Bianca)",
        description: "A creamy, cheese-filled pizza with no tomato sauce, usually topped with ricotta, mozzarella, garlic, and spinach, or other veggies.",
        price: 320,
        image: [p_img46],
        category: "Pizza",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Pastrami on Rye",
        description: "A classic deli sandwich with thinly sliced pastrami, mustard, and sometimes Swiss cheese, served on rye bread.",
        price: 300,
        image: [p_img47],
        category: "Sandwich",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Pesto Pizza",
        description: "A fresh alternative, with pesto sauce as the base, topped with mozzarella, sun-dried tomatoes, and often grilled chicken or vegetables.",
        price: 330,
        image: [p_img48],
        category: "Pizza",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "aaabw",
        name: "Grilled Veggie Sandwich",
        description: "A satisfying sandwich with grilled vegetables like zucchini, eggplant, peppers, and onions, often paired with cheese or hummus for extra flavor.",
        price: 310,
        image: [p_img49],
        category: "Sandwich",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716665145448,
        bestseller: false
    },
    {
        _id: "aaabx",
        name: "French Dip",
        description: "A savory sandwich featuring thinly sliced roast beef, served on a hoagie roll, with a side of au jus (beef broth) for dipping.",
        price: 340,
        image: [p_img50],
        category: "Sandwich",
        subCategory: "Non-Veg",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716666245448, bestseller: false
    },
    {
        _id: "aaaby",
        name: "Poutine Burger",
        description: "A Canadian-inspired burger topped with crispy fries, cheese curds, and gravy, combining the comfort of poutine with the classic burger.",
        price: 320,
        image: [p_img51],
        category: "Burger",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "Caprese Pizza",
        description: "Inspired by the classic Italian salad, this pizza features fresh tomatoes, mozzarella, basil, and a drizzle of balsamic glaze.",
        price: 350,
        image: [p_img52],
        category: "Pizza",
        subCategory: "New-Launched",
        sizes: ["Regular", "Medium", "Large", "Extra Large"],
        date: 1716668445448,
        bestseller: false
    }

]