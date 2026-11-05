import * as rootParams from "next/root-params";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async () => {
  const paramValue = await rootParams.locale();

  if (!hasLocale(routing.locales, paramValue)) {
    notFound(); // /abc → 404
  }
  const locale = paramValue;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
