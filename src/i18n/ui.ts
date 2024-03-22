export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";
export const showDefaultLang = true;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.deals": "Deals",
    "nav.categories": "Categories",
    "nav.twitter": "Twitter",
    "home.title": "Home",
    "home.subtitle": "Home page for: ",
    "deals.home.title": "Deals",
    "deals.home.subtitle": "Find the best deals for your next vacation",
    "categories.home.title": "Categories",
    "categories.home.subtitle": "Find the best deals for your next vacation by category",
  },
  es: {
    "nav.home": "Inicio",
    "nav.deals": "Ofertas",
    "nav.categories": "Categorias",
    "nav.twitter": "Twitter",
    "home.title": "Inicio",
    "home.subtitle": "Pagina de inicio para: ",
    "deals.home.title": "Ofertas",
    "deals.home.subtitle":"Encuentra las mejores ofertas para tus próximas vacaciones",
    "categories.home.title": "Categorías",
    "categories.home.subtitle": "Encuentra las mejores ofertas para tus próximas vacaciones por categoría",

  },
} as const;

export const routes = {
  en: {
    'deals': 'deals',
    'categories': 'categories',
  },
  es: {
    'deals': 'ofertas',
    'categories': 'categorias',
  },
}
