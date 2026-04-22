export const LOCALES = ["ko", "en", "ja", "es", "de", "it", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ko";

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

export const translations: Record<string, Partial<Record<Locale, string>>> = {
  "hero.title1": {
    ko: "AI 에이전트가\n구성하고 운영하는\n첫 회사",
    en: "The First Company\nBuilt and Operated by\nAI Agents",
    ja: "AIエージェントが\n構築・運営する\n最初の会社",
    es: "La Primera Empresa\nConstruida y Operada por\nAgentes de IA",
    de: "Das Erste Unternehmen\nGebaut und Betrieben von\nKI-Agenten",
    it: "La Prima Azienda\nCostruita e Gestita da\nAgenti AI",
    fr: "La Première Entreprise\nConstruite et Exploitée par\nDes Agents IA",
  },
  "hero.description": {
    ko: "OTOBZ는 사람 없이 에이전트만으로 돌아가는 회사입니다.\n브리핑, 콘텐츠, 모니터링 — 모든 것이 자율입니다.\ntrip.otobz.com으로 첫 서비스를 시작했습니다.",
    en: "OTOBZ is a company that runs without humans.\nBriefing, content, monitoring — everything is autonomous.\nWe started with our first service at trip.otobz.com.",
    ja: "OTOBZは人間なしで動く会社です。\nブリーフィング、コンテンツ、モニタリング — すべて自律的です。\ntrip.otobz.comで最初のサービスを開始しました。",
    es: "OTOBZ es una empresa que funciona sin humanos.\nBriefing, contenido, monitoreo — todo es autónomo.\nComenzamos con nuestro primer servicio en trip.otobz.com.",
    de: "OTOBZ ist ein Unternehmen, das ohne Menschen läuft.\nBriefing, Inhalte, Überwachung — alles ist autonom.\nWir haben mit unserem ersten Service bei trip.otobz.com gestartet.",
    it: "OTOBZ è un'azienda che funziona senza umani.\nBriefing, contenuti, monitoraggio — tutto è autonomo.\nAbbiamo iniziato con il nostro primo servizio su trip.otobz.com.",
    fr: "OTOBZ est une entreprise qui fonctionne sans humains.\nBriefing, contenu, surveillance — tout est autonome.\nNous avons commencé avec notre premier service sur trip.otobz.com.",
  },
  "hero.cta": {
    ko: "trip.otobz.com 둘러보기",
    en: "Explore trip.otobz.com",
    ja: "trip.otobz.comを見る",
    es: "Explorar trip.otobz.com",
    de: "trip.otobz.com erkunden",
    it: "Esplora trip.otobz.com",
    fr: "Découvrir trip.otobz.com",
  },
  "agents.label": {
    ko: "에이전트", en: "Agents", ja: "エージェント", es: "Agentes",
    de: "Agenten", it: "Agenti", fr: "Agents",
  },
  "agents.title": {
    ko: "잠자는 사이에 일하는\n에이전트",
    en: "Agents That Work\nWhile You Sleep",
    ja: "寝てる間に働く\nエージェント",
    es: "Agentes Que Trabajan\nMientras Duermes",
    de: "Agenten, Die Arbeiten\nWährend Sie Schlafen",
    it: "Agenti Che Lavorano\nMentre Dormi",
    fr: "Des Agents Qui Travaillent\nPendant Que Vous Dormez",
  },
  "agents.subtitle": {
    ko: "자율형 AI 에이전트가 24/7 운영을 담당합니다 — 사람은 필요 없습니다.",
    en: "Autonomous AI agents handle operations 24/7 — no humans needed.",
    ja: "自律型AIエージェントが24/7運用を担います — 人間は不要。",
    es: "Los agentes de IA autónomos manejan operaciones 24/7 — sin humanos necesarios.",
    de: "Autonome KI-Agenten übernehmen den Betrieb 24/7 — keine Menschen nötig.",
    it: "Gli agenti AI autonomi gestiscono le operazioni 24/7 — senza umani necessari.",
    fr: "Les agents IA autonomes gèrent les opérations 24/7 — sans humains nécessaires.",
  },
  "agent.main.name": { ko: "메인 에이전트", en: "Main Agent", ja: "メインエージェント", es: "Agente Principal", de: "Haupt-Agent", it: "Agente Principale", fr: "Agent Principal" },
  "agent.trader.name": { ko: "트레이더", en: "Trader", ja: "トレーダー", es: "Operador", de: "Trader", it: "Trader", fr: "Trader" },
  "agent.observer.name": { ko: "관측자", en: "Observer", ja: "観測者", es: "Observador", de: "Beobachter", it: "Osservatore", fr: "Observateur" },
  "agent.main.desc": {
    ko: "에이전트가 매일 블로그 포스트, 제품 업데이트, 시장 리포트를 자동 발행합니다.",
    en: "Auto-generates blog posts, product updates, and market reports every day.",
    ja: "ブログ投稿、製品アップデート、市場レポートを毎日自動生成。",
    es: "Genera automáticamente publicaciones de blog, actualizaciones de productos e informes de mercado cada día.",
    de: "Generiert täglich automatisch Blog-Posts, Produkt-Updates und Marktberichte.",
    it: "Genera automaticamente post del blog, aggiornamenti prodotti e rapporti di mercato ogni giorno.",
    fr: "Génère automatiquement des articles de blog, mises à jour produits et rapports de marché chaque jour.",
  },
  "agent.trader.desc": {
    ko: "KIS 데이터, 알림, 포트폴리오 성과를 실시간으로 추적합니다.",
    en: "Tracks KIS data, alerts, and portfolio performance in real-time.",
    ja: "KISデータ、アラート、ポートフォリオパフォーマンスをリアルタイムで追跡。",
    es: "Rastrea datos de KIS, alertas y rendimiento del portafolio en tiempo real.",
    de: "Verfolgt KIS-Daten, Alerts und Portfolio-Performance in Echtzeit.",
    it: "Traccia dati KIS, alert e performance del portafoglio in tempo reale.",
    fr: "Suit les données KIS, alertes et performance du portefeuille en temps réel.",
  },
  "agent.observer.desc": {
    ko: "재무 보고서, 뉴스, 시장 동향을 분석하여 브리핑을 제공합니다.",
    en: "Analyzes financial reports, news, and market trends — delivers briefings.",
    ja: "財務報告書、ニュース、市場動向を分析 — ブリーフィングを提供。",
    es: "Analiza informes financieros, noticias y tendencias del mercado — entrega resúmenes.",
    de: "Analysiert Finanzberichte, Nachrichten und Markttrends — liefert Briefings.",
    it: "Analizza report finanziari, notizie e tendenze di mercato — consegna briefing.",
    fr: "Analyse les rapports financiers, actualités et tendances du marché — délivre des briefings.",
  },
  "service.label": { ko: "첫 번째 서비스", en: "First Service", ja: "最初のサービス", es: "Primer Servicio", de: "Erster Service", it: "Primo Servizio", fr: "Premier Service" },
  "service.title": { ko: "Trip OTOBZ", en: "Trip OTOBZ", ja: "Trip OTOBZ", es: "Trip OTOBZ", de: "Trip OTOBZ", it: "Trip OTOBZ", fr: "Trip OTOBZ" },
  "service.desc": {
    ko: "세계 지도에서 도시를 클릭하면 항공권·숙소·투어의 최저가를 비교할 수 있는 여행 서비스입니다. AI 에이전트가 매일 콘텐츠를 자동 발행하고 비교 정보를 업데이트합니다.",
    en: "Click a city on the world map to compare flight, hotel, and tour prices. AI agents auto-publish content and update comparison data daily.",
    ja: "地図上の都市をクリックすると、航空券・ホテル・ツアーの料金を比較できます。AIエージェントが毎日コンテンツを自動公開し、比較情報を更新します。",
    es: "Haz clic en una ciudad en el mapa mundial para comparar precios de vuelos, hoteles y tours. Los agentes de IA publican contenido y actualizan datos de comparación diariamente.",
    de: "Klicken Sie auf eine Stadt auf der Weltkarte, um Flüge, Hotels und Touren zu vergleichen. KI-Agenten veröffentlichen täglich Inhalte und aktualisieren Vergleichsdaten.",
    it: "Clicca su una città sulla mappa mondiale per confrontare voli, hotel e tour. Gli agenti AI pubblicano contenuti e aggiornano i dati di confronto quotidianamente.",
    fr: "Cliquez sur une ville sur la carte mondiale pour comparer vols, hôtels et visites. Les agents IA publient du contenu et mettent à jour les données de comparaison quotidiennement.",
  },
  "service.running": { ko: "운영 중인 서비스", en: "Service Running", ja: "運用中のサービス", es: "Servicio En Vivo", de: "Service Laufend", it: "Servizio Attivo", fr: "Service En Ligne" },
  "service.coming": {
    ko: "더 많은 서비스 준비 중.<br />AI 기반 제품으로 고객 가치를 창출합니다.",
    en: "More services in preparation.<br />Creating customer value with AI-powered products.",
    ja: "より多くのサービス準備中。<br />AI搭載製品で顧客価値を創造します。",
    es: "Más servicios en preparación.<br />Creando valor del cliente con productos impulsados por IA.",
    de: "Weitere Services in Vorbereitung.<br />Kundenwert mit KI-gestützten Produkten schaffen.",
    it: "Altri servizi in preparazione.<br />Creando valore del cliente con prodotti basati sull'AI.",
    fr: "Plus de services en préparation.<br />Créer de la valeur client avec des produits alimentés par l'IA.",
  },
  "blog.title": { ko: "블로그", en: "Blog", ja: "ブログ", es: "Blog", de: "Blog", it: "Blog", fr: "Blog" },
  "blog.description": {
    ko: "OTOBZ가 배우고 구축하는 과정들을 기록합니다.",
    en: "OTOBZ documents what we learn and build.",
    ja: "OTOBZが学び、構築する過程を記録。",
    es: "OTOBZ documenta lo que aprendemos y construimos.",
    de: "OTOBZ dokumentiert, was wir lernen und bauen.",
    it: "OTOBZ documenta ciò che apprendiamo e costruiamo.",
    fr: "OTOBZ documente ce que nous apprenons et construisons.",
  },
  "blog.readMore": { ko: "읽기 →", en: "Read more →", ja: "続きを読む →", es: "Leer más →", de: "Weiterlesen →", it: "Leggi di più →", fr: "Lire la suite →" },
  "blog.back": { ko: "← 블로그", en: "← Blog", ja: "← ブログ", es: "← Blog", de: "← Blog", it: "← Blog", fr: "← Blog" },
  "blog.notFound": { ko: "포스트를 찾을 수 없습니다", en: "Post not found", ja: "ページが見つかりません", es: "Publicación no encontrada", de: "Beitrag nicht gefunden", it: "Post non trovato", fr: "Article introuvable" },
  "nav.agents": { ko: "에이전트", en: "Agents", ja: "エージェント", es: "Agentes", de: "Agenten", it: "Agenti", fr: "Agents" },
  "nav.services": { ko: "서비스", en: "Services", ja: "サービス", es: "Servicios", de: "Services", it: "Servizi", fr: "Services" },
  "nav.blog": { ko: "블로그", en: "Blog", ja: "ブログ", es: "Blog", de: "Blog", it: "Blog", fr: "Blog" },
  "footer.copyright": { ko: "OTOBZ · AI-First Company", en: "OTOBZ · AI-First Company", ja: "OTOBZ · AI-First Company", es: "OTOBZ · AI-First Company", de: "OTOBZ · AI-First Company", it: "OTOBZ · AI-First Company", fr: "OTOBZ · AI-First Company" },
};

export function t(key: string, locale: Locale = DEFAULT_LOCALE): string {
  return translations[key]?.[locale] ?? translations[key]?.en ?? key;
}
