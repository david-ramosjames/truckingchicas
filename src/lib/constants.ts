export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://truckingchicas.com";
export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "5125551234";
export const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(512) 555-1234";

// TODO: Replace with actual firm address
export const FIRM_ADDRESS = {
  street: "123 Main Street, Suite 100",
  city: "Austin",
  state: "TX",
  zip: "78701",
};

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const ROUTES = {
  en: {
    home: "/",
    truckAccident: "/truck-accident-lawyer",
    eighteenWheeler: "/18-wheeler-accident-lawyer",
    deliveryTruck: "/fedex-ups-truck-accident-lawyer",
    oilfieldTanker: "/oilfield-tanker-truck-accident-lawyer",
    dumpTruck: "/dump-truck-construction-accident-lawyer",
    boxTruck: "/box-truck-commercial-van-accident-lawyer",
    areas: "/areas-we-serve",
    houston: "/truck-accident-lawyer-houston",
    dallas: "/truck-accident-lawyer-dallas",
    austin: "/truck-accident-lawyer-austin",
    sanAntonio: "/truck-accident-lawyer-san-antonio",
    fortWorth: "/truck-accident-lawyer-fort-worth",
    elPaso: "/truck-accident-lawyer-el-paso",
    arlington: "/truck-accident-lawyer-arlington",
    corpusChristi: "/truck-accident-lawyer-corpus-christi",
    plano: "/truck-accident-lawyer-plano",
    lubbock: "/truck-accident-lawyer-lubbock",
    help: "/truck-accident-help",
    helpDoIHaveACase: "/truck-accident-help/do-i-have-a-case",
    helpCanISue: "/truck-accident-help/can-i-sue-truck-driver",
    helpRearEnded: "/truck-accident-help/rear-ended-by-18-wheeler",
    helpSueTruckingCompany: "/truck-accident-help/can-i-sue-trucking-company",
    helpPhoneUse: "/truck-accident-help/truck-driver-on-phone",
    helpFatiguedDriver: "/truck-accident-help/truck-driver-fell-asleep",
    helpCaseWorth: "/truck-accident-help/how-much-is-my-case-worth",
    helpSettlement: "/truck-accident-help/trucking-company-lawsuit-money",
    helpAverageSettlement: "/truck-accident-help/average-18-wheeler-settlement",
    helpDrunkDriver: "/truck-accident-help/drunk-truck-driver-accident",
    faq: "/faq",
    about: "/about",
    contact: "/contact",
    caseEstimate: "/case-estimate",
  },
  es: {
    home: "/es",
    truckAccident: "/es/abogado-accidentes-de-camion",
    eighteenWheeler: "/es/abogado-accidentes-18-ruedas",
    deliveryTruck: "/es/abogado-accidentes-camion-reparto",
    oilfieldTanker: "/es/abogado-accidentes-camion-cisterna",
    dumpTruck: "/es/abogado-accidentes-camion-volteo",
    boxTruck: "/es/abogado-accidentes-camion-carga",
    areas: "/es/areas-que-servimos",
    houston: "/es/abogado-accidentes-camion-houston",
    dallas: "/es/abogado-accidentes-camion-dallas",
    austin: "/es/abogado-accidentes-camion-austin",
    sanAntonio: "/es/abogado-accidentes-camion-san-antonio",
    fortWorth: "/es/abogado-accidentes-camion-fort-worth",
    elPaso: "/es/abogado-accidentes-camion-el-paso",
    arlington: "/es/abogado-accidentes-camion-arlington",
    corpusChristi: "/es/abogado-accidentes-camion-corpus-christi",
    plano: "/es/abogado-accidentes-camion-plano",
    lubbock: "/es/abogado-accidentes-camion-lubbock",
    help: "/es/ayuda-accidente-camion",
    helpDoIHaveACase: "/es/ayuda-accidente-camion/tengo-un-caso",
    helpCanISue: "/es/ayuda-accidente-camion/puedo-demandar-conductor",
    helpRearEnded: "/es/ayuda-accidente-camion/choque-trasero-18-ruedas",
    helpSueTruckingCompany: "/es/ayuda-accidente-camion/demandar-compania-camiones",
    helpPhoneUse: "/es/ayuda-accidente-camion/conductor-usando-telefono",
    helpFatiguedDriver: "/es/ayuda-accidente-camion/conductor-dormido",
    helpCaseWorth: "/es/ayuda-accidente-camion/cuanto-vale-mi-caso",
    helpSettlement: "/es/ayuda-accidente-camion/dinero-demanda-camion",
    helpAverageSettlement: "/es/ayuda-accidente-camion/acuerdo-promedio-18-ruedas",
    helpDrunkDriver: "/es/ayuda-accidente-camion/conductor-ebrio",
    faq: "/es/preguntas-frecuentes",
    about: "/es/sobre-nosotros",
    contact: "/es/contacto",
    caseEstimate: "/es/estimacion-de-caso",
  },
} as const;

export const CITY_ROUTE_KEYS = [
  "houston", "dallas", "austin", "sanAntonio", "fortWorth",
  "elPaso", "arlington", "corpusChristi", "plano", "lubbock",
] as const;

export type CityRouteKey = (typeof CITY_ROUTE_KEYS)[number];

export const CITY_NAMES: Record<CityRouteKey, string> = {
  houston: "Houston",
  dallas: "Dallas",
  austin: "Austin",
  sanAntonio: "San Antonio",
  fortWorth: "Fort Worth",
  elPaso: "El Paso",
  arlington: "Arlington",
  corpusChristi: "Corpus Christi",
  plano: "Plano",
  lubbock: "Lubbock",
};

export const TEXAS_CITIES = [
  "Houston",
  "Dallas",
  "Austin",
  "San Antonio",
  "Fort Worth",
  "El Paso",
  "Arlington",
  "Corpus Christi",
  "Plano",
  "Lubbock",
] as const;
