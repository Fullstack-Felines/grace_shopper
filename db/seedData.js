const kittens = [
  {
    name: "Luna",
    breed: "American Shorthair",
    description:
      "I love to be around people and play with toys and other cats. I’m also great with kids!",
    price: 100,
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
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660797843/My_project_2_xu2uld.jpg",
    available: true,
  },
  {
    name: "Charlie",
    breed: "European Burmese",
    description:
      "I have such a sweet little spirit about me and I know in a patient home, I will just be the most amazing companion!",
    price: 80,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660800042/My_project_10_ei5b1p.jpg",
    available: false,
  },
  {
    name: "Bella",
    breed: "Tabby",
    description:
      "I’m a little timid right now and I’m not ready to seek out affection from humans quite yet, but I’m having so much fun learning all about the world and how to be a cat.",
    price: 160,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672812/My_project_1_aq61ly.jpg",
    available: true,
  },
  {
    name: "Simba",
    breed: "Siamese",
    description:
      "I love to run and play with my siblings! I am especially good at chasing my toy mouse and leaping up into the air once I capture it!",
    price: 1600,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660798114/My_project_2_tozhrk.jpg",
    available: true,
  },
  {
    name: "Penny",
    breed: "British Shorthair",
    description:
      "I haven't had a lot of experience being around humans so I'm initially a little bit shy around new people. But I'm very sweet and receptive if you approach me slowly!",
    price: 80,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660797968/My_project_2_jeo58c.jpg",
    available: true,
  },
  {
    name: "Loki",
    breed: "Tabby/Maine Coone mix",
    description:
      "I am an expert at climbing my scratching posts and I win the race to the top against my sister Peppa every time!",
    price: 100,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660798359/My_project_4_iddqeb.jpg",
    available: false,
  },
  {
    name: "Stella",
    breed: "Persian",
    description:
      "I am a very sweet girl and I love ear scratches and chin rubs! I’m ready to play with you!",
    price: 20,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660798228/My_project_3_uvzzmo.jpg",
    available: true,
  },
  {
    name: "Lola",
    breed: "Calico",
    description:
      "I am a fun and playful little guy with lots of energy, but I can also nap like a champ in your lap! ",
    price: 250,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660798476/My_project_5_kpy6hu.jpg",
    available: true,
  },
  {
    name: "Daisy",
    breed: "Russian Blue",
    description:
      "I use the litter box, and scratch posts like a big boy, and my foster mom says I’m a good eater! I look forward to meeting you!",
    price: 2500,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660798709/My_project_7_d9ratz.jpg",
    available: false,
  },
  {
    name: "Willow",
    breed: "Norwegian Forest Cat",
    description:
      "Right now I am full of energy and very curious. I meet guests at the door and love nothing more than to run and chase my best friend and fostermate, Zeus.",
    price: 3000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660798632/My_project_6_nrqtvs.jpg",
    available: true,
  },
  {
    name: "Finn",
    breed: "American Bobtail",
    description:
      " My foster says I have no bad habits, am litterbox trained and that I make her laugh all day.",
    price: 80,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1660672611/My_project_v3xnoy.jpg",
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
