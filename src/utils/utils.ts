import { DOMAINS } from "../consts";
import { defaultLang, languages } from "../i18n/ui";
import type { Domain } from "../types/global";

export function determineDomainFromUrl(url: URL): Domain | false {
  const domainFromUrl = getDomainFromUrl(url);
  const domainFound = DOMAINS.find((domain) => domain.url === domainFromUrl);
  return domainFound || false;
}

const getDomainFromUrl = (url: URL): string =>
  url.pathname.split("/").filter(Boolean)[1];

export function redirectToNotFoundPage(language: string | null): Response {
  const lang = language === null ? defaultLang : language;
  return new Response(null, {
    status: 302,
    headers: {
      Location: `/${lang}/404`,
    },
  });
}

export function determineLanguageFromUrl(url: URL): string | null {
  const lang = getLangFromUrl(url)
  return Object.keys(languages).includes(lang) ? lang : null;
}
function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  return lang;
}
