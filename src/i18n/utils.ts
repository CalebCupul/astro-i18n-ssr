import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  return lang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}