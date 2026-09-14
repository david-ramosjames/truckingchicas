/**
 * Central image URL registry.
 * Swap the host here and every reference across the site updates.
 *
 * Versioned URLs pin approved uploads. For versionless assets, enable
 * "Invalidate" when replacing an image in Cloudinary so the CDN purges.
 */

export const IMAGES = {
  logo: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/silver_truck_transparent_l8zkwe.png",
  hero: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1789417249/exec-064841f3-8f52-4812-afac-dcf4e2844950_k8pfxi.png",
  heroMobile: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1789417185/exec-4c7c5f88-d1e6-4973-a788-7a4c88a3daa8_snt1bq.png",
  chooseUs: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/choose-us_1_zwtxej.png",
  texasHighwaySign: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/texas-highway-sign_z7kmer.jpg",

  team: {
    nohemiBespametnow: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1789417185/exec-49c5fb7e-3719-4bcf-8a68-bbc594d7d218_agzrs5.png",
    lauraRamosJames: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/Laura-Ramos-James-2026-1095_mssgv0.jpg",
    lylianaZamora: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/lyliana-zamora_y4zdud.webp",
  },

  cities: {
    arlington: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/arlington_jdazkv.jpg",
    austin: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/austin_pymxue.jpg",
    corpusChristi: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/corpus-christi_qhzuzc.jpg",
    dallas: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/dallas_ueebwn.jpg",
    elPaso: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/el-paso_swedwo.jpg",
    fortWorth: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/fort-worth_ipsywt.jpg",
    houston: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/houston_rnyf0l.jpg",
    lubbock: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/lubbock_ufu4ar.jpg",
    plano: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/plano_v7kplw.jpg",
    sanAntonio: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/san-antonio_yeufvi.jpg",
  },

  maps: {
    arlington: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/arlington-map_1_v0ibnq.png",
    austin: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/austin-map_1_c02rzx.png",
    corpusChristi: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/corpus-christi-map_1_ru5ijy.png",
    dallas: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/dallas-map_1_bo1xvr.png",
    elPaso: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/el-paso-map_1_kivsko.png",
    fortWorth: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/fort-worth-map_1_mqtg3h.png",
    houston: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/houston-map_1_bmk4uq.png",
    lubbock: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/lubbock-map_1_huzudh.png",
    plano: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/plano-map_1_ez5nwh.png",
    sanAntonio: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/san-antonio-map_1_w9c5hb.png",
  },

  badges: {
    top10Trucking: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/top-10-trucking-badge_gdpwlb.png",
    academyTruckAttorneys: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/academy-of-truck-accident-attorneys_gidmcf.svg",
    nationalTop100: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/NTL-Top-100-Brass-Badge_rig3ly.png",
    multiMillionDollar: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/multi-million-dollar-badge_nqzxn5.png",
  },

  trucks: {
    allTrucks: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1784925097/all-trucks_qlj1ay.png",
    eighteenWheeler: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1784924952/18-wheelers_i44iga.png",
    boxTruck: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1784925070/box-truck_zjbbmr.png",
    dumpTruck: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1784925041/dump-truck_nrmaz7.png",
    fedex: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1784924994/fedex_tiezt9.png",
    oilTanker: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/v1784925020/oil-tanker_iuhjae.png",
  },
} as const;
