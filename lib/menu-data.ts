export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: "spicy" | "vegan" | "popular";
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

export interface ProteinOption {
  name: string;
  price: string;
}

export const proteinOptions: ProteinOption[] = [
  { name: "Kyckling", price: "95:-" },
  { name: "Fläskkött", price: "95:-" },
  { name: "Biff", price: "99:-" },
  { name: "Vegetarisk", price: "89:-" },
  { name: "Räkor", price: "115:-" },
  { name: "Seafood", price: "120:-" },
];

export const menuData: MenuCategory[] = [
  {
    id: "curryratter",
    name: "Curryrätter",
    emoji: "🍛",
    items: [
      {
        name: "1. Gaeng Khew Wan",
        description: "Grön curry, kokosmjölk, bambuskott, söt basilika",
        price: "fr. 89 kr",
        tag: "spicy",
      },
      {
        name: "2. Gaeng Phei",
        description: "Röd curry, kokosmjölk, bambuskott, söt basilika",
        price: "fr. 89 kr",
        tag: "spicy",
      },
      {
        name: "3. Gaeng Paneng",
        description: "Paneng curry, kokosmjölk, bambuskott, paprika",
        price: "fr. 89 kr",
      },
      {
        name: "4. Gaeng Massaman",
        description: "Massaman curry, kokosmjölk, potatis, gullök, jordnötter",
        price: "fr. 89 kr",
      },
      {
        name: "5. Gaeng Karri",
        description: "Gul curry, kokosmjölk, ananas, gullök, potatis",
        price: "fr. 89 kr",
      },
    ],
  },
  {
    id: "wokratter",
    name: "Wokrätter",
    emoji: "🥘",
    items: [
      {
        name: "6. Pad Met Mamoang",
        description: "Wokat grönsaker, chilipasta, cashewnötter",
        price: "fr. 89 kr",
      },
      {
        name: "7. Pad Krapow",
        description: "Wokat grönsaker, vitlök, stark chili, hot basilika",
        price: "fr. 89 kr",
        tag: "spicy",
      },
      {
        name: "8. Pad Kratiem Prik Tai",
        description: "Wokat grönsaker, svartpeppar, vitlök",
        price: "fr. 89 kr",
      },
      {
        name: "9. Pad Prik",
        description: "Wokat grönsaker, spansk chili — välj styrka: Lite / Medium / Mycket Starkt",
        price: "fr. 89 kr",
        tag: "spicy",
      },
      {
        name: "10. Pad Pak King",
        description: "Wokat grönsaker, ingefära",
        price: "fr. 89 kr",
      },
      {
        name: "11. Pad Pak Ruam Mit",
        description: "Wokat blandade grönsaker, ostronsås",
        price: "fr. 89 kr",
      },
      {
        name: "12. Pad Plew Wan",
        description: "Wokat grönsaker, ananas, sötsur sås",
        price: "fr. 89 kr",
      },
      {
        name: "13. Pad Ho Ra Pa",
        description: "Wokat grönsaker, söt basilika",
        price: "fr. 89 kr",
      },
      {
        name: "14. Pad Phet",
        description: "Wokat röd curry, limeblad, bambuskott, spansk chili",
        price: "fr. 89 kr",
        tag: "spicy",
      },
    ],
  },
  {
    id: "ovriga",
    name: "Övriga Rätter",
    emoji: "🍜",
    items: [
      {
        name: "15. Pad Woon Sen",
        description: "Wokat blandade grönsaker, ägg, glasnudlar",
        price: "fr. 89 kr",
      },
      {
        name: "16. Gal/Goong Chup Pang Thod",
        description: "Friterad kyckling 6st / räkor 6st med sötsur chilisås",
        price: "fr. 89 kr",
        tag: "popular",
      },
      {
        name: "17. Gal Satay (2 st)",
        description: "Friterade kycklingspett med jordnötssås",
        price: "fr. 89 kr",
        tag: "popular",
      },
      {
        name: "18. Tom Kha Gai",
        description: "Thaikycklingsoppa med kokosmjölk, limeblad, tomat, galanga",
        price: "fr. 89 kr",
      },
      {
        name: "19. Tom Yam Goong",
        description: "Räksoppa med chilipasta, galanka, citrongäs, champinjoner, tomat",
        price: "fr. 89 kr",
        tag: "spicy",
      },
      {
        name: "20. Pad Thai",
        description: "Wokat risnudlar, ägg, purjolök, vitlök, morötter",
        price: "fr. 89 kr",
        tag: "popular",
      },
      {
        name: "21. Ba Mie Pad",
        description: "Wokat äggnudlar, grönsaker, broccoli",
        price: "fr. 89 kr",
      },
      {
        name: "22. Khao Pad",
        description: "Stekt ris, ägg, grönsaker",
        price: "fr. 89 kr",
      },
      {
        name: "23. Nasi Goreng",
        description: "Stekt ris, ägg, grönsaker, curry kryddor",
        price: "fr. 89 kr",
      },
      {
        name: "24. Poh Pia",
        description:
          "Friterade vegetariska vårrullar — 12st + ris eller 15st utan ris • Som förrätt 6st (small): 40 kr",
        price: "fr. 89 kr",
        tag: "vegan",
      },
    ],
  },
  {
    id: "barnmeny",
    name: "Barnmeny",
    emoji: "⭐",
    items: [
      {
        name: "A. Kycklingspett med jordnötssås",
        description: "2 spett",
        price: "55 kr",
      },
      {
        name: "B. Stekt ris med kyckling",
        description: "Med ägg och grönsaker",
        price: "55 kr",
      },
      {
        name: "C. Friterad kyckling med sötsur chilisås",
        description: "4 st",
        price: "55 kr",
      },
      {
        name: "D. Wokad äggnudlar med kyckling",
        description: "Med grönsaker",
        price: "55 kr",
      },
    ],
  },
  {
    id: "extra",
    name: "Extra Tillbehör",
    emoji: "➕",
    items: [
      { name: "Extra ris", description: "Extra portion ris", price: "20 kr" },
      { name: "Extra cashewnötter", description: "", price: "20 kr" },
      { name: "Extra stor portion", description: "", price: "20 kr" },
      { name: "Extra jordnötssås", description: "", price: "20 kr" },
      { name: "Stekta nudlar istället för ris", description: "", price: "20 kr" },
      { name: "Sötsur chilisås", description: "", price: "5 kr" },
      { name: "Dyck 33cl", description: "Läsk", price: "15 kr" },
      { name: "Räkchips", description: "", price: "10 kr" },
      { name: "Friterade räkor 4 st", description: "", price: "45 kr" },
    ],
  },
];
