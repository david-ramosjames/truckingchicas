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
    faq: "/es/preguntas-frecuentes",
    about: "/es/sobre-nosotros",
    contact: "/es/contacto",
    caseEstimate: "/es/estimacion-de-caso",
  },
} as const;

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
