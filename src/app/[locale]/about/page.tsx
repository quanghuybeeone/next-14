import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("welcome")}</p>
    </div>
  );
}
