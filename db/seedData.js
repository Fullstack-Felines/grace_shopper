const kittens = [
  {
    name: "Luna",
    breed: "short hair",
    description:
      "I love to be around people and play with toys and other cats. I’m also great with kids!",
    price: 4000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672899/pexels-alex-bargain-1472999_dvhhtl.jpg",
    available: true,
  },
  {
    name: "Oliver",
    breed: "Tabby",
    description:
      "If you’ve ever wanted a fluffy, sweet little friend who will make your day with adorable antics and the cutest cuddling, I’m here to make all your dreams come true!",
    price: 20,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672812/My_project_1_aq61ly.jpg",
    available: true,
  },
  {
    name: "Charlie",
    breed: "Calico",
    description:
      "I have such a sweet little spirit about me and I know in a patient home, I will just be the most amazing companion!",
    price: 20000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: false,
  },
  {
    name: "Bella",
    breed: "Tabby",
    description:
      "I’m a little timid right now and I’m not ready to seek out affection from humans quite yet, but I’m having so much fun learning all about the world and how to be a cat.",
    price: 800,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Simba",
    breed: "Siamese",
    description:
      "I love to run and play with my siblings! I am especially good at chasing my toy mouse and leaping up into the air once I capture it!",
    price: 9000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Penny",
    breed: "Maine Coon",
    description:
      "I haven't had a lot of experience being around humans so I'm initially a little bit shy around new people. But I'm very sweet and receptive if you approach me slowly!",
    price: 30000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Loki",
    breed: "Maine Coon",
    description:
      "I am an expert at climbing my scratching posts and I win the race to the top against my sister Peppa every time!",
    price: 30000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Stella",
    breed: "Maine Coon",
    description:
      "I am a very sweet girl and I love ear scratches and chin rubs! I’m ready to play with you!",
    price: 30000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Lola",
    breed: "Maine Coon",
    description:
      "I am a fun and playful little guy with lots of energy, but I can also nap like a champ in your lap! ",
    price: 30000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Daisy",
    breed: "Maine Coon",
    description:
      "I use the litter box, and scratch posts like a big boy, and my foster mom says I’m a good eater! I look forward to meeting you!",
    price: 30000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Willow",
    breed: "Maine Coon",
    description:
      "Right now I am full of energy and very curious. I meet guests at the door and love nothing more than to run and chase my best friend and fostermate, Zeus.",
    price: 30000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672999/pexels-mihai-bent%CC%A6a-9796799_1_tpn4o3.jpg",
    available: true,
  },
  {
    name: "Finn",
    breed: "Maine Coon",
    description:
      "I haven't had a lot of experience being around humans so I'm initially a little bit shy around new people. But I'm very sweet and receptive if you approach me slowly!",
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
