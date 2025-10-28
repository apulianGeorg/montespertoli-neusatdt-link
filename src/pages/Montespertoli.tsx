import Header from "@/components/Header";
import { MapPin, Users, Wine, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Montespertoli = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {t("🇮🇹 Montespertoli – Das Tor zum Chianti", "🇮🇹 Montespertoli – La Porta del Chianti")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Im Herzen der Toskana",
                "Nel cuore della Toscana"
              )}
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Lage und Überblick */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Lage und Überblick", "Posizione e Panoramica")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Montespertoli liegt im Herzen der Toskana, nur etwa 25 Kilometer südwestlich von Florenz. Die Stadt zählt rund 13.000 Einwohnerinnen und Einwohner und ist bekannt für ihre hügelige Landschaft, malerischen Weinberge und die herzliche Gastfreundschaft ihrer Menschen.",
                    "Montespertoli si trova nel cuore della Toscana, a soli 25 chilometri a sud-ovest di Firenze. La città conta circa 13.000 abitanti ed è nota per il suo paesaggio collinare, i pittoreschi vigneti e la calorosa ospitalità della sua gente."
                  )}
                </p>
              </div>
            </section>

            {/* Geschichte und Tradition */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Geschichte und Tradition", "Storia e Tradizione")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Die Geschichte Montespertolis reicht bis in die Etruskerzeit zurück. Im Mittelalter war die Stadt ein wichtiger Handelsort zwischen Florenz, Siena und Volterra. Noch heute prägen historische Kirchen, alte Gutshöfe (Fattorien) und Weingüter das Stadtbild. Besonders stolz ist Montespertoli auf seine Tradition des Weinbaus – hier schlägt das Herz des berühmten Chianti-Weingebiets.",
                    "La storia di Montespertoli risale all'epoca etrusca. Nel Medioevo la città era un importante centro commerciale tra Firenze, Siena e Volterra. Ancora oggi chiese storiche, antiche fattorie e cantine caratterizzano il paesaggio urbano. Montespertoli è particolarmente orgogliosa della sua tradizione vinicola – qui batte il cuore della famosa regione vinicola del Chianti."
                  )}
                </p>
              </div>
            </section>

            {/* Wirtschaft und Leben */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Wirtschaft und Leben", "Economia e Vita")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Der Wein bestimmt das Leben vieler Einwohnerinnen und Einwohner: Zahlreiche Familienbetriebe und Weinkellereien produzieren hochwertige Chianti DOCG-Weine, die weit über die Region hinaus bekannt sind. Neben dem Weinbau spielt auch der Olivenanbau eine große Rolle, ebenso wie der ländliche Tourismus (Agriturismo), der Besucher aus aller Welt anzieht.",
                    "Il vino determina la vita di molti abitanti: numerose aziende familiari e cantine producono vini Chianti DOCG di alta qualità, conosciuti ben oltre la regione. Oltre alla viticoltura, anche la coltivazione dell'olivo gioca un ruolo importante, così come il turismo rurale (agriturismo), che attrae visitatori da tutto il mondo."
                  )}
                </p>
              </div>
            </section>

            {/* Kultur und Veranstaltungen */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Kultur und Veranstaltungen", "Cultura ed Eventi")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Montespertoli ist eine Stadt voller Kultur, Musik und Lebensfreude. Jedes Jahr im Frühsommer findet die \"Mostra del Chianti\", eine große Weinmesse mit Festumzügen, Verkostungen und Konzerten statt. Auch kleinere Dorffeste, Kunstausstellungen und klassische Konzerte machen die Stadt das ganze Jahr über lebendig.",
                    "Montespertoli è una città piena di cultura, musica e gioia di vivere. Ogni anno in tarda primavera si svolge la \"Mostra del Chianti\", una grande fiera del vino con cortei storici, degustazioni e concerti. Anche feste paesane più piccole, mostre d'arte e concerti di musica classica rendono la città vivace tutto l'anno."
                  )}
                </p>
              </div>
            </section>

            {/* Landschaft und Freizeit */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Landschaft und Freizeit", "Paesaggio e Tempo Libero")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Die Umgebung von Montespertoli ist typisch toskanisch: sanfte Hügel, Zypressenalleen, Weinreben und Olivenhaine soweit das Auge reicht. Sie laden zu Wanderungen, Radtouren und kulinarischen Entdeckungen ein. Von hier aus erreicht man leicht die Kunststädte Florenz, Siena und San Gimignano – ideale Ausflugsziele für Kulturliebhaber.",
                    "I dintorni di Montespertoli sono tipicamente toscani: dolci colline, viali di cipressi, vigneti e uliveti a perdita d'occhio. Invitano a passeggiate, gite in bicicletta e scoperte culinarie. Da qui si raggiungono facilmente le città d'arte di Firenze, Siena e San Gimignano – mete ideali per gli amanti della cultura."
                  )}
                </p>
              </div>
            </section>

            {/* Mensch und Gemeinschaft */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Mensch und Gemeinschaft", "Persone e Comunità")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Die Menschen in Montespertoli sind offen, herzlich und stolz auf ihre Heimat. Gastfreundschaft, gutes Essen und gemeinsames Feiern gehören zur Lebensart. Die Städtepartnerschaften pflegt Montespertoli mit Leidenschaft – als Zeichen von Freundschaft, europäischer Verbundenheit und kulturellem Austausch.",
                    "Le persone a Montespertoli sono aperte, cordiali e orgogliose della loro terra. L'ospitalità, il buon cibo e le feste in comune fanno parte dello stile di vita. Montespertoli coltiva i gemellaggi con passione – come segno di amicizia, legame europeo e scambio culturale."
                  )}
                </p>
              </div>
            </section>

            {/* Daten & Fakten */}
            <section className="bg-gradient-to-br from-primary/5 via-transparent to-italian-red/5 p-8 rounded-lg border border-border/50">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {t("Daten & Fakten", "Dati e Fatti")}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("📍 Region", "📍 Regione")}</p>
                  <p className="text-muted-foreground">{t("Toskana, Provinz Florenz", "Toscana, Provincia di Firenze")}</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("👥 Einwohner", "👥 Abitanti")}</p>
                  <p className="text-muted-foreground">{t("ca. 13.000", "ca. 13.000")}</p>
                </div>
                <div className="text-center">
                  <Wine className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("🍷 Bekannt für", "🍷 Famosa per")}</p>
                  <p className="text-muted-foreground">{t("Chianti-Wein, Olivenöl, toskanische Lebensart", "Vino Chianti, olio d'oliva, stile di vita toscano")}</p>
                </div>
                <div className="text-center md:col-span-2 lg:col-span-1">
                  <div className="h-8 w-8 text-primary mx-auto mb-2 flex items-center justify-center text-2xl">🏰</div>
                  <p className="font-semibold text-lg">{t("Ersterwähnung", "Prima Menzione")}</p>
                  <p className="text-muted-foreground">{t("im Mittelalter (um das 11. Jh.)", "nel Medioevo (intorno all'XI secolo)")}</p>
                </div>
                <div className="text-center md:col-span-2">
                  <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("🚗 Erreichbarkeit", "🚗 Accessibilità")}</p>
                  <p className="text-muted-foreground">{t("ca. 25 km bis Florenz, gut angebunden an regionale Straßen", "ca. 25 km da Firenze, ben collegata alle strade regionali")}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Montespertoli;