import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function Destination({ text, isActive }) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <button
        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors text-sm ${
          isActive
            ? "bg-blue-100 text-blue-500 border border-blue-500"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <span className="text-sm ">{text}</span>
      </button>
    </>
  );
}

export default Destination;
