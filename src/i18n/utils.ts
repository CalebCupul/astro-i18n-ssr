import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  return lang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang, domain: string) {
    const pathSegments = path.split('/').filter(Boolean);
    const translatedSegments = pathSegments.map(segment => routes[l][segment] || segment);
    const translatedPath = translatedSegments.join('/');
    return `/${l}/${domain}/${translatedPath}`;
  }
}
