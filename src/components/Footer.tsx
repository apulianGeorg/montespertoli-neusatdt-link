import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Freunde von Montespertoli e.V.
          </p>
          <Link
            to="/impressum"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("Impressum & Datenschutz", "Note legali & Privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
