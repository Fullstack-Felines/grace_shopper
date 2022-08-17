const kittens = [
  {
    name: "Henry",
    breed: "short hair",
    description: "Sweetest boi",
    price: 4000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672899/pexels-alex-bargain-1472999_dvhhtl.jpg",
    available: true,
  },
  {
    name: "Garfield",
    breed: "Tabby",
    description: "Looooves lasagna",
    price: 20,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672812/My_project_1_aq61ly.jpg",
    available: true,
  },
  {
    name: "Carl",
    breed: "Calico",
    description: "Real cool calico cat",
    price: 20000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: false,
  },
  {
    name: "Toby",
    breed: "Tabby",
    description: "Super chill tabby named Toby",
    price: 800,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Mello",
    breed: "Siamese",
    description: "Sweet lil kitty",
    price: 9000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Sobu",
    breed: "Maine Coon",
    description: "Super hairy boy",
    price: 30000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
];

const customers = [
  {
    name: "Charles the Super Cool",
    address: "123 this street",
    phonenumber: "123456778",
    username: "CoolCharles",
    password: "test",
    email: "CharlesCool@email.com",
  },
  {
    name: "Arnold Grant",
    address: "123 that street",
    phonenumber: "123456779",
    username: "ArntOld",
    password: "test",
    email: "HeyArnold@email.com",
  },
  {
    name: "Priscilla Humboldt",
    address: "123 There street",
    phonenumber: "123456708",
    username: "PrisciHumdinger",
    password: "test",
    email: "Prispriskittykiss@email.com",
  },
  {
    name: "Margery Stuart Baxter",
    address: "123 Primrose Street",
    phonenumber: "123456738",
    username: "Marbax",
    password: "test",
    email: "MarBax@email.com",
  },
];

const orders = [
  {
    customer_id: 1,
    total_amount: 0,
    is_active: true,
    shipping_address: "test",
  },
];

const orders_kitten = [
  {
    order_id: 1,
    kitten_id: 1,
  },

  { order_id: 1, kitten_id: 2 },
];

module.exports = { kittens, customers, orders, orders_kitten };
