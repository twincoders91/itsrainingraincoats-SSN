import food from "../assets/food.svg";
import personalcare from "../assets/personalcare.svg";
import clothes from "../assets/clothes.svg";
import electronics from "../assets/electronics.svg";
import applicances from "../assets/applicances.svg";

import bicycle from "../assets/bicycle.svg";

const donateCategory = [
  {
    name: "Food & Drinks",
    image: food,
    items: [
      { name: "rice/noodles", icon: "riceandnoodles.svg" },
      { name: "hot meals", icon: "meals.svg" },
    ],
  },
  {
    name: "Personal Care",
    image: personalcare,
    items: [
      { name: "Soap", icon: "soap.svg" },
      { name: "Toothbrush", icon: "toothbrush.svg" },
      { name: "Spectacles", icon: "spectacles.svg" },
      { name: "Shaver", icon: "shaver.svg" },
      { name: "Towel", icon: "towel.svg" },
      { name: "Water bottle", icon: "waterbottle.svg" },
      { name: "Blanket", icon: "blanket.svg" },
    ],
  },
  {
    name: "Clothing",
    image: clothes,
    items: [
      { name: "Shirt", icon: "shirt.svg" },
      { name: "Suit", icon: "suit.svg" },
      { name: "Pants", icon: "pants.svg" },
      { name: "Cap", icon: "cap.svg" },
      { name: "Safety boots", icon: "safetyboots.svg" },
      { name: "Shoes", icon: "shoes.svg" },
      { name: "Sunglasses", icon: "sunglasses.svg" },
      { name: "Raincoat", icon: "raincoat.svg" },
    ],
  },
  {
    name: "Electronics",
    image: electronics,
    items: [
      { name: "earbuds", icon: "earbuds.svg" },
      { name: "smartphone", icon: "mobilephone.svg" },
      { name: "portable power bank", icon: "powerbank.svg" },
      { name: "laptop", icon: "laptop.svg" },
      { name: "data card", icon: "datacard.svg" },
      { name: "extension cord", icon: "plug.svg" },
    ],
  },
  {
    name: "Applicances",
    image: applicances,
    items: [
      { name: "blender", icon: "blender.svg" },
      { name: "microwave", icon: "microwave.svg" },
      { name: "iron", icon: "iron.svg" },
      { name: "ironing board", icon: "ironingboard.svg" },
      { name: "fridge", icon: "fridge.svg" },
      { name: "water heater", icon: "waterheater.svg" },
      { name: "toaster", icon: "toaster.svg" },
      { name: "kettle", icon: "kettle.svg" },
      { name: "fan", icon: "fan.svg" },
      { name: "washing machine", icon: "washingmachine.svg" },
      { name: "rice cooker", icon: "ricecooker.svg" },
    ],
  },
  {
    name: "Sports & Games",
    image: bicycle,
    items: [
      { name: "dumbbells", icon: "dumbbell.svg" },
      { name: "cricket gear", icon: "cricket.svg" },
      { name: "board games", icon: "boardgame.svg" },
      { name: "bicycle", icon: "bicycle.svg" },
    ],
  },
];

export default donateCategory;
