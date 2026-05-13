/**
 * Central image URL registry.
 * Swap the host here and every reference across the site updates.
 */

export const IMAGES = {
  logo: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778700887/trucking_chicas_logo_transparent_e5htxy.png",

  cities: {
    arlington: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701076/arlington_jdazkv.jpg",
    austin: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701077/austin_pymxue.jpg",
    corpusChristi: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701077/corpus-christi_qhzuzc.jpg",
    dallas: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701078/dallas_ueebwn.jpg",
    elPaso: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701078/el-paso_swedwo.jpg",
    fortWorth: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701074/fort-worth_ipsywt.jpg",
    houston: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701073/houston_rnyf0l.jpg",
    lubbock: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701074/lubbock_ufu4ar.jpg",
    plano: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701075/plano_v7kplw.jpg",
    sanAntonio: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701075/san-antonio_yeufvi.jpg",
  },

  badges: {
    top10Trucking: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701764/top-10-trucking-badge_gdpwlb.png",
    academyTruckAttorneys: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701763/academy-of-truck-accident-attorneys_gidmcf.svg",
    nationalTop100: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701763/NTL-Top-100-Brass-Badge_rig3ly.png",
  },

  trucks: {
    allTrucks: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701839/all-trucks_qlj1ay.webp",
    eighteenWheeler: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701842/18-wheelers_i44iga.jpg",
    boxTruck: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701840/box-truck_zjbbmr.webp",
    dumpTruck: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701843/dump-truck_nrmaz7.webp",
    fedex: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701840/fedex_tiezt9.webp",
    oilTanker: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1778701841/oil-tanker_iuhjae.jpg",
  },
} as const;
