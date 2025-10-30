import { useState } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Settings } from "lucide-react";

const CookieBanner = () => {
  const { showBanner, acceptAll, rejectAll, savePreferences } = useCookieConsent();
  const { t } = useLanguage();
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  if (!showBanner) return null;

  const handleSaveSettings = () => {
    savePreferences({ necessary: true, analytics });
    setShowSettings(false);
  };

  if (showSettings) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardHeader>
            <CardTitle>
              {t("Cookie-Einstellungen", "Impostazioni dei cookie")}
            </CardTitle>
            <CardDescription>
              {t(
                "Wählen Sie, welche Cookies Sie zulassen möchten",
                "Scegli quali cookie consentire"
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3 p-4 border rounded-lg">
              <Checkbox checked disabled />
              <div className="flex-1">
                <h4 className="font-medium">
                  {t("Notwendige Cookies", "Cookie necessari")}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(
                    "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",
                    "Questi cookie sono necessari per le funzioni di base del sito web e non possono essere disattivati."
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 border rounded-lg">
              <Checkbox 
                checked={analytics} 
                onCheckedChange={(checked) => setAnalytics(checked === true)}
              />
              <div className="flex-1">
                <h4 className="font-medium">
                  {t("Analyse-Cookies", "Cookie di analisi")}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(
                    "Diese Cookies helfen uns, die Nutzung der Website zu verstehen und zu verbessern. Wir verwenden Google Analytics mit IP-Anonymisierung.",
                    "Questi cookie ci aiutano a comprendere e migliorare l'utilizzo del sito web. Utilizziamo Google Analytics con anonimizzazione IP."
                  )}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button onClick={handleSaveSettings}>
              {t("Auswahl speichern", "Salva selezione")}
            </Button>
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              {t("Zurück", "Indietro")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">
              {t("Cookie-Hinweis", "Avviso sui cookie")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(
                "Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Notwendige Cookies sind für die Funktion der Website erforderlich. Analyse-Cookies helfen uns, unsere Website zu verbessern.",
                "Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito web. I cookie necessari sono richiesti per il funzionamento del sito. I cookie di analisi ci aiutano a migliorare il nostro sito."
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <Button onClick={acceptAll} size="sm">
              {t("Alle akzeptieren", "Accetta tutto")}
            </Button>
            <Button onClick={rejectAll} variant="outline" size="sm">
              {t("Nur notwendige", "Solo necessari")}
            </Button>
            <Button 
              onClick={() => setShowSettings(true)} 
              variant="ghost" 
              size="sm"
            >
              <Settings className="w-4 h-4 mr-2" />
              {t("Einstellungen", "Impostazioni")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
