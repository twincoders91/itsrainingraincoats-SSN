import sharanpic from "../assets/sharanpic.svg";
import rashmi from "../assets/rashmi.svg";
import randomman1 from "../assets/randomman1.jpeg";
import randomwoman1 from "../assets/randomwoman1.jpeg";
import randomwoman2 from "../assets/randomwoman2.jpeg";

const volunteerData = [
  // WEST
  {
    name: "Sharan",
    image: sharanpic,
    mobile: 90107079,
    area: "WEST areas",
    locationTown: "Jurong West",
    locationRoad: "Jurong St 22",
    availableTime: {
      weekdayFrom: "13:00",
      weekdayTo: "19:00",
      weekendFrom: "08:00",
      weekendTo: "17:00",
    },
    availableDay: {
      weekdayFrom: "Monday",
      weekdayTo: "Friday",
      weekendFrom: "Saturday",
      weekendTo: "Sunday",
    },
  },

  {
    name: "Rashmi",
    image: rashmi,
    mobile: 91297658,
    area: "WEST areas",
    locationTown: "Watten Estate",
    locationRoad: "Adam Road",
    availableTime: {
      weekdayFrom: "13:00",
      weekdayTo: "19:00",
      weekendFrom: "08:00",
      weekendTo: "17:00",
    },
    availableDay: {
      weekdayFrom: "Monday",
      weekdayTo: "Friday",
      weekendFrom: "Saturday",
      weekendTo: "Sunday",
    },
  },
  // NORTH
  {
    name: "Normay",
    image: randomwoman1,
    mobile: 91010101,
    area: "NORTH areas",
    locationTown: "Seletar",
    locationRoad: "North Road",
    availableTime: {
      weekdayFrom: "10:10",
      weekdayTo: "23:59",
      weekendFrom: "08:00",
      weekendTo: "17:00",
    },
    availableDay: {
      weekdayFrom: "Monday",
      weekdayTo: "Tuesday",
      weekendFrom: "Saturday",
      weekendTo: "Sunday",
    },
  },
  {
    name: "Norton",
    image: randomman1,
    mobile: 92020202,
    area: "NORTH areas",
    locationTown: "Seletar",
    locationRoad: "LHL Road",
    availableTime: {
      weekdayFrom: "11:11",
      weekdayTo: "23:58",
      weekendFrom: "08:00",
      weekendTo: "17:00",
    },
    availableDay: {
      weekdayFrom: "Monday",
      weekdayTo: "Thursday",
      weekendFrom: "Sunday",
      weekendTo: "Sunday",
    },
  },
  {
    name: "Nanja Monja",
    image: randomwoman2,
    mobile: 92020202,
    area: "NORTH areas",
    locationTown: "Punggol",
    locationRoad: "North Shore Road",
    availableTime: {
      weekdayFrom: "11:11",
      weekdayTo: "23:58",
      weekendFrom: "08:00",
      weekendTo: "17:00",
    },
    availableDay: {
      weekdayFrom: "Monday",
      weekdayTo: "Thursday",
      weekendFrom: "Sunday",
      weekendTo: "Sunday",
    },
  },
];

export default volunteerData;
