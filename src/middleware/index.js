import { determineDomainFromUrl, redirectToNotFoundPage, determineLanguageFromUrl } from "../utils/utils";


export function onRequest({ locals, request }, next) {
  const url = new URL(request.url);
  const isRequestFromNotFoundPage = url.pathname.endsWith("/404");

  locals.language = determineLanguageFromUrl(url);
  locals.domain = determineDomainFromUrl(url);
  console.log("domain: ", locals.domain)

  // Check specifically for null to determine if the language was invalid.
  if ((!locals.domain || !locals.language) && !isRequestFromNotFoundPage) {
    console.log("Redirecting to not found page")
    // Handle custom redirect
    // return redirectToNotFoundPage(locals.language);
  }

  return next();
}

