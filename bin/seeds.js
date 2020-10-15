require("dotenv").config();
const Animal = require("../models/Animal");
const mongoose = require("mongoose");

const animals = [
{
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Simba",
    specie: "Lion",
    endangered:"Vulnerable",
    gender: "Male",
    age: "6 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Clarence",
    specie: "Lion",
    endangered:"Vulnerable",
    gender: "Male",
    age: "10 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Winnie",
    specie: "Lion",
    endangered:"Vulnerable",
    gender: "Female",
    age: "7 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Nala",
    specie: "Lion",
    endangered:"Vulnerable",
    gender: "Female",
    age: "4 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Keanu",
    specie: "Leopard",
    endangered:"Vulnerable",
    gender: "Male",
    age: "17 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Leo",
    specie: "Leopard",
    endangered:"Vulnerable",
    gender: "Male",
    age: "8 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Clarence",
    specie: "Lion",
    endangered:"Vulnerable",
    gender: "Male",
    age: "10 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Kovu",
    specie: "Cheetah",
    endangered:"Vulnerable",
    gender: "Male",
    age: "4 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Athena",
    specie: "Cheetah",
    endangered:"Vulnerable",
    gender: "Female",
    age: "8 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Bolt",
    specie: "Cheetah",
    endangered:"Vulnerable",
    gender: "Male",
    age: "3 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Flash",
    specie: "Cheetah",
    endangered:"Vulnerable",
    gender: "Male",
    age: "3 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Clarence",
    specie: "Lion",
    endangered:"Vulnerable",
    gender: "Male",
    age: "10 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Bilbo",
    specie: "Giraffe",
    endangered:"Vulnerable",
    gender: "Male",
    age: "6 months",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Chuck",
    specie: "Oryx",
    endangered:"Least concerned",
    gender: "Male",
    age: "10 years",
    description: "String",
    adopted: false,
  },
  {
    profileImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eb1e796352685.5eac47879affc.jpg",
    name: "Robyn",
    specie: "African Wild Dog",
    endangered:"Least concerned",
    gender: "Male",
    age: "10 years",
    description: "String",
    adopted: false,
  },

];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Animal.create(animals)
      .then((dbResult) => {
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });