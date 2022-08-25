const kittens = [
  {
    name: "Luna",
    breed: "American Shorthair",
    description:
      "I love to be around people and play with toys and other cats. I’m also great with kids!",
    price: 100,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661269947/BuJHgqzHm4I-png__700_epuwzp.jpg",
    available: true,
  },
  {
    name: "Oliver",
    breed: "Tabby",
    description:
      "If you’ve ever wanted a fluffy, sweet little friend who will make your day with adorable antics and the cutest cuddling, I’m here to make all your dreams come true!",
    price: 20,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661436389/GettyImages-540542926-scaled-e1619016093503_h8ut1x.jpg",
    available: true,
  },
  {
    name: "Charlie",
    breed: "European Burmese",
    description:
      "I have such a sweet little spirit about me and I know in a patient home, I will just be the most amazing companion!",
    price: 80,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661436510/sergey-semin-Y0WXj3xqJz0-unsplash_siku5d.jpg",
    available: false,
  },
  {
    name: "Bella",
    breed: "Tabby",
    description:
      "I’m a little timid right now and I’m not ready to seek out affection from humans quite yet, but I’m having so much fun learning all about the world and how to be a cat.",
    price: 160,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661436676/the-lucky-neko-QlF3uMnPZnw-unsplash_gypb1g.jpg",
    available: true,
  },
  {
    name: "Simba",
    breed: "Siamese",
    description:
      "I love to run and play with my siblings! I am especially good at chasing my toy mouse and leaping up into the air once I capture it!",
    price: 1600,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661437681/sincerely-media-wz2aU5cF3zQ-unsplash_adobe_express_fpizva.jpg",
    available: true,
  },
  {
    name: "Penny",
    breed: "British Shorthair",
    description:
      "I haven't had a lot of experience being around humans so I'm initially a little bit shy around new people. But I'm very sweet and receptive if you approach me slowly!",
    price: 80,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661437818/kym-ellis-yDfxzqUXFdI-unsplash_adobe_express_yhebbd.jpg",
    available: true,
  },
  {
    name: "Loki",
    breed: "Tabby/Maine Coone mix",
    description:
      "I am an expert at climbing my scratching posts and I win the race to the top against my sister Peppa every time!",
    price: 100,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661437011/remi-remino-E9kVmtiqqGE-unsplash_2_jnxxxp.jpg",
    available: false,
  },
  {
    name: "Stella",
    breed: "Persian",
    description:
      "I am a very sweet girl and I love ear scratches and chin rubs! I’m ready to play with you!",
    price: 20,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661434289/the-lucky-neko-55ClwmQyNiU-unsplash_t3302c.jpg",
    available: true,
  },
  {
    name: "Lola",
    breed: "Calico",
    description:
      "I am a fun and playful little guy with lots of energy, but I can also nap like a champ in your lap! ",
    price: 250,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661437349/the-lucky-neko-w2ii07oH92s-unsplash_adtib3.jpg",
    available: true,
  },
  {
    name: "Daisy",
    breed: "Russian Blue",
    description:
      "I use the litter box, and scratch posts like a big boy, and my foster mom says I’m a good eater! I look forward to meeting you!",
    price: 2500,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661270062/pexels-pixabay-45201_1_yq7opo.jpg",
    available: false,
  },
  {
    name: "Willow",
    breed: "Norwegian Forest Cat",
    description:
      "Right now I am full of energy and very curious. I meet guests at the door and love nothing more than to run and chase my best friend and fostermate, Zeus.",
    price: 3000,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661437252/jeanie-de-klerk-QfOnteIcGZU-unsplash_adobe_express_dwfxau.jpg",
    available: true,
  },
  {
    name: "Finn",
    breed: "American Bobtail",
    description:
      " My foster says I have no bad habits, am litterbox trained and that I make her laugh all day.",
    price: 80,
    img_url:
      "https://res.cloudinary.com/dkmoq49jf/image/upload/v1661437490/nihal-karkala-nynzG3yNG34-unsplash_adobe_express_zomeqg.jpg",
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
