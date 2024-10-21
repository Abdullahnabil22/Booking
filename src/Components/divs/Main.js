import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Main({ title, description }) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <section
        className="mainColor   py-16"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white BodyFont">
            {title}
          </h1>
          <p className="text-white text-xl sm:text-2xl md:text-3xl HeadingFont mt-2">
            {description}
          </p>
        </div>
      </section>
    </>
  );
}

export default Main;
