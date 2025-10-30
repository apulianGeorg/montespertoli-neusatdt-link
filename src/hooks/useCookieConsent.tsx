import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: CookieConsent) => void;
  openSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent");
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent);
      setConsent(parsed);
      if (parsed.analytics) {
        loadGoogleAnalytics();
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (typeof window !== "undefined" && !(window as any).gtag) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX', {
          'anonymize_ip': true
        });
      `;
      document.head.appendChild(script2);
    }
  };

  const savePreferences = (preferences: CookieConsent) => {
    setConsent(preferences);
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowBanner(false);
    
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true });
  };

  const rejectAll = () => {
    savePreferences({ necessary: true, analytics: false });
  };

  const openSettings = () => {
    setShowBanner(true);
  };

  return (
    <CookieConsentContext.Provider
      value={{ consent, showBanner, acceptAll, rejectAll, savePreferences, openSettings }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
};
