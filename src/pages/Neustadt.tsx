import Header from "@/components/Header";
import { MapPin, Users, Castle, Train } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Neustadt = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {t("Neustadt an der Aisch – Herz Mittelfrankens", "Neustadt an der Aisch – Cuore della Franconia Centrale")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Eine Stadt, die Geschichte und Moderne verbindet",
                "Una città che unisce storia e modernità"
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
                    "Neustadt an der Aisch liegt im Herzen Mittelfrankens, zwischen Nürnberg und Würzburg, eingebettet in die sanften Hügel der Aischgründer Landschaft. Mit rund 13.000 Einwohnerinnen und Einwohnern verbindet die Stadt charmant historisches Flair mit modernem Leben.",
                    "Neustadt an der Aisch si trova nel cuore della Franconia centrale, tra Norimberga e Würzburg, immersa nelle dolci colline del paesaggio di Aischgrund. Con circa 13.000 abitanti, la città combina con fascino il flair storico con la vita moderna."
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
                    "Erstmals urkundlich erwähnt im Jahr 741, blickt Neustadt auf eine lange und bewegte Geschichte zurück. Besonders die gut erhaltene Altstadt mit ihren mittelalterlichen Mauern, Türmen und Fachwerkhäusern zeugt von dieser reichen Vergangenheit. Heute wird Geschichte lebendig gehalten – etwa beim Altstadtfest, dem Aischgründer Karpfenfest oder den historischen Märkten.",
                    "Menzionata per la prima volta in un documento nel 741, Neustadt vanta una storia lunga e movimentata. Particolarmente il centro storico ben conservato con le sue mura medievali, torri e case a graticcio testimonia questo ricco passato. Oggi la storia viene mantenuta viva – ad esempio durante la festa del centro storico, la festa della carpa di Aischgrund o i mercati storici."
                  )}
                </p>
              </div>
            </section>

            {/* Wirtschaft und Bildung */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Wirtschaft und Bildung", "Economia e Istruzione")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Neustadt ist das wirtschaftliche Zentrum des Landkreises Neustadt a.d. Aisch-Bad Windsheim. Neben einer starken mittelständischen Wirtschaft finden sich hier moderne Handwerksbetriebe, innovative Unternehmen und ein breit gefächertes Bildungsangebot – von Grundschulen bis zur Fachakademie.",
                    "Neustadt è il centro economico del distretto di Neustadt a.d. Aisch-Bad Windsheim. Oltre a una forte economia di medie dimensioni, qui si trovano moderne imprese artigianali, aziende innovative e un'ampia offerta educativa – dalle scuole elementari all'accademia specializzata."
                  )}
                </p>
              </div>
            </section>

            {/* Kultur und Freizeit */}
            <section className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-primary rounded"></span>
                {t("Kultur und Freizeit", "Cultura e Tempo Libero")}
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    "Das kulturelle Leben in Neustadt ist vielfältig: Das Kulturforum im Alten Schloss, das Museen im Alten Bauhof, sowie zahlreiche Vereine und Musikgruppen prägen das Stadtleben.",
                    "La vita culturale a Neustadt è variegata: il forum culturale nel Castello Vecchio, i musei nel Vecchio Cantiere, così come numerose associazioni e gruppi musicali caratterizzano la vita cittadina."
                  )}
                </p>
                <p>
                  {t(
                    "Die Umgebung lädt zu Wanderungen, Radtouren und Ausflügen in die fränkische Natur ein – besonders in die idyllischen Aischgründe oder zu den Weinbergen des nahen Steigerwalds.",
                    "I dintorni invitano a passeggiate, gite in bicicletta ed escursioni nella natura francone – specialmente nelle idilliache Aischgründe o ai vigneti vicini dello Steigerwald."
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
                    "Neustadt ist bekannt für seine Gastfreundschaft, Bürgernähe und aktives Vereinsleben. Städtepartnerschaften werden hier mit Herz gepflegt – als Brücken der Freundschaft, des kulturellen Austauschs und der gemeinsamen Zukunft.",
                    "Neustadt è nota per la sua ospitalità, vicinanza ai cittadini e vita associativa attiva. I gemellaggi sono coltivati qui con il cuore – come ponti di amicizia, scambio culturale e futuro comune."
                  )}
                </p>
              </div>
            </section>

            {/* Daten & Fakten */}
            <section className="bg-gradient-to-br from-primary/5 via-transparent to-german-gold/5 p-8 rounded-lg border border-border/50">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {t("Daten & Fakten", "Dati e Fatti")}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("📍 Region", "📍 Regione")}</p>
                  <p className="text-muted-foreground">{t("Mittelfranken, Bayern", "Franconia Centrale, Baviera")}</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("👥 Einwohner", "👥 Abitanti")}</p>
                  <p className="text-muted-foreground">{t("ca. 13.000", "ca. 13.000")}</p>
                </div>
                <div className="text-center">
                  <Castle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("🏰 Ersterwähnung", "🏰 Prima Menzione")}</p>
                  <p className="text-muted-foreground">{t("741 n. Chr.", "741 d.C.")}</p>
                </div>
                <div className="text-center md:col-span-2 lg:col-span-1">
                  <div className="h-8 w-8 text-primary mx-auto mb-2 flex items-center justify-center text-2xl">🌳</div>
                  <p className="font-semibold text-lg">{t("Partnerregionen", "Regioni Partner")}</p>
                  <p className="text-muted-foreground">{t("vielfältige europäische Partnerschaften", "diverse partnership europee")}</p>
                </div>
                <div className="text-center md:col-span-2 lg:col-span-2">
                  <Train className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-lg">{t("🚆 Erreichbarkeit", "🚆 Accessibilità")}</p>
                  <p className="text-muted-foreground">{t("Direkte Bahnverbindungen nach Nürnberg und Würzburg", "Collegamenti ferroviari diretti per Norimberga e Würzburg")}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Neustadt;