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
    href: "/docs/primitives/alert-dialog",
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
    img: "/assets/offer-4.jpg",
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
