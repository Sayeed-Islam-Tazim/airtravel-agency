export const navItems: {
  id: string;
  title: string;
  href?: string;
  img?: string;
  children?: {
    id: string;
    title: string;
    href: string;
    description?: string;
  }[];
}[] = [
  {
    id: "1",
    title: "Home",
    href: "/",
    children: [],
  },
  {
    id: "2",
    title: "Shop",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
  {
    id: "3",
    title: "Product",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
  {
    id: "4",
    title: "Pages",
    img: "/assets/offers/offer-4.jpg",
    children: [
      {
        id: "401",
        title: "Visa Application",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
      {
        id: "402",
        title: "Visa Guide",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "403",
        title: "Transit Visa",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
    ],
  },
  {
    id: "5",
    title: "Blog",
    children: [
      {
        id: "501",
        title: "About",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
      {
        id: "502",
        title: "Skytrip",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "503",
        title: "Stellar Card",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "504",
        title: "ST-Ads",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
      {
        id: "505",
        title: "Saudi Tourism",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "506",
        title: "Why us?",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "507",
        title: "Travel Guide",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
      {
        id: "508",
        title: "News",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "509",
        title: "FAQs & Support",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "510",
        title: "Business Class",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
    ],
  },
  {
    id: "6",
    title: "Buy Now",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
];

export const pollDestinations: {
  id: string;
  title: string;
  vote?: number;
}[] = [
  {
    id: "1",
    title: "Sajek",
    vote: 43.7,
  },
  {
    id: "2",
    title: "St. Martin",
    vote: 32.6,
  },
  {
    id: "3",
    title: "Bandarban",
    vote: 13.7,
  },
  {
    id: "4",
    title: "Tanguar Haor",
    vote: 6.8,
  },
  {
    id: "5",
    title: "Rangamati",
    vote: 2.1,
  },
  {
    id: "6",
    title: "Other",
    vote: 1.1,
  },
];

export const serviceItems: {
  id: string;
  title: string;
  desc: string;
  img: string;
}[] = [
  {
    id: "1",
    title: "Group Tour",
    desc: "Traveling is rarely fun when we are traveling alone. Travel with your friends. Or join up with new people at our regular events. No matter which you chose let us guide you through",
    img: "/assets/offers/offer-1.jpg",
  },
  {
    id: "2",
    title: "Package Tour",
    desc: "When you are traveling with your partner or family. Whether it’s your honeymoon or a family trip. Chose from our non-guided tour packages at the best price. Ranging from luxury to economic.",
    img: "/assets/offers/offer-2.jpg",
  },
  {
    id: "3",
    title: "Custom Tour",
    desc: "Can’t find the right package that fits your travel group? Packages do not offer the places where you want to visit? Just give us a call and we will design a custom package specifically curtailed to your wish.",
    img: "/assets/offers/offer-3.jpg",
  },
  {
    id: "4",
    title: "Ticketing Service",
    desc: "What do you want to travel on? By air, sea, or road. Just let us know where you want to go and when you want to travel. We will book all tickets for you at the best price available on that day.",
    img: "/assets/offers/offer-4.jpg",
  },
  {
    id: "5",
    title: "Hotel/Resort Booking",
    desc: "You have already decided where you want to travel. But not sure where you are going to stay? Just contact us for a free consultancy on where you should stay. And we will book your hotel according to your taste.",
    img: "/assets/offers/offer-5.jpg",
  },
  {
    id: "6",
    title: "Medical Tour",
    desc: "You need to travel for treatment to India? Not sure where to start? We are providing A-Z consultancy for your treatment to India. From visa processing, doctors appointment, flight booking, house renting etc. Everything that needs doing for your seamless treatment.",
    img: "/assets/offers/offer-1.jpg",
  },
];

export const popularDestinations: {
  id: string;
  title: string;
  video: string;
  gif: string;
}[] = [
  {
    id: "1",
    title: "Tanguar Haor",
    video:
      "https://www.youtube.com/embed/watch?v=LQ3677p5NWg&list=RDLQ3677p5NWg&start_radio=1",

    gif: "/assets/gifs/beach-house.gif",
  },
  {
    id: "2",
    title: "Rangamati",
    video:
      "https://www.youtube.com/embed/watch?v=LQ3677p5NWg&list=RDLQ3677p5NWg&start_radio=1",
    gif: "/assets/gifs/cool-dance.gif",
  },
  {
    id: "3",
    title: "Kuala Lampur",
    video:
      "https://www.youtube.com/embed/watch?v=LQ3677p5NWg&list=RDLQ3677p5NWg&start_radio=1",
    gif: "/assets/gifs/dancing.gif",
  },
  {
    id: "4",
    title: "Austria",
    video:
      "https://www.youtube.com/embed/watch?v=LQ3677p5NWg&list=RDLQ3677p5NWg&start_radio=1",
    gif: "/assets/gifs/funny.gif",
  },
  {
    id: "5",
    title: "Meghalaya",
    video:
      "https://www.youtube.com/embed/watch?v=LQ3677p5NWg&list=RDLQ3677p5NWg&start_radio=1",
    gif: "/assets/gifs/walking.gif",
  },
  {
    id: "6",
    title: "Ladakh",
    video:
      "https://www.youtube.com/embed/watch?v=LQ3677p5NWg&list=RDLQ3677p5NWg&start_radio=1",
    gif: "/assets/gifs/duck-walking.gif",
  },
];

export const tourPackages: {
  id: string;
  name: string;
  duration: string;
  img: string;
  place: string;
  costingPerHead: string;
  costingCouple?: string;
}[] = [
  {
    id: "1",
    name: "Tanguar Haor - Premium House Boat Tour",
    duration: "2N/1D",
    img: "/assets/popular-dest/tanguar-haor.jpeg",
    place: "Sunamganj, Sylhet",
    costingPerHead: "5k",
  },
  {
    id: "2",
    name: "Rangamati - Short Tour",
    duration: "3N/2D",
    img: "/assets/popular-dest/rangamati.jpg",
    place: "Rangamati",
    costingPerHead: "3k",
    costingCouple: "7k",
  },
  {
    id: "3",
    name: "Kuala Lampur - Malaysia (Land Package)",
    duration: "6N/5D",
    img: "/assets/popular-dest/malaysia.jpg",
    place: "Malaysia",
    costingPerHead: "14k",
    costingCouple: "30k",
  },
  {
    id: "4",
    name: "Austria - Standard Tour",
    duration: "6N/5D",
    img: "/assets/popular-dest/austria.jpg",
    place: "Austria",
    costingPerHead: "20k",
    costingCouple: "45k",
  },
  {
    id: "5",
    name: "Meghalaya - Premium Package",
    duration: "4N/3D",
    img: "/assets/popular-dest/meghalaya.jpg",
    place: "Meghalaya, India",
    costingPerHead: "12k",
  },
  {
    id: "6",
    name: "Ladakh - Standard Tour",
    duration: "5N/4D",
    img: "/assets/popular-dest/ladakh.jpg",
    place: "Ladakh, India",
    costingPerHead: "20k",
    costingCouple: "42k",
  },
];
