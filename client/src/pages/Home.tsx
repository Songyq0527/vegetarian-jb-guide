import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CarFront,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Facebook,
  HeartPulse,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  Navigation,
  Phone,
  Search,
  Sprout,
  Star,
  Utensils,
  WalletCards,
  X,
} from "lucide-react";
import {
  areas,
  benefits,
  editorialNote,
  getArea,
  getOverallRating,
  getSocialIconLabel,
  projectMeta,
  ratingLabels,
  type AreaId,
  type RatingKey,
  type Venue,
  venues,
} from "@/data/venues";

const ratingIcons: Record<RatingKey, typeof Navigation> = {
  transport: Navigation,
  parking: CarFront,
  service: HeartPulse,
  value: WalletCards,
  speed: Clock3,
  taste: Utensils,
};

const ratingKeys = Object.keys(ratingLabels) as RatingKey[];

function StarRating({ value, compact = false }: { value: number; compact?: boolean }) {
  return (
    <span className={`star-rating ${compact ? "star-rating--compact" : ""}`} aria-label={`${value} 分，滿分 5 分`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={compact ? 13 : 15} fill={index < Math.round(value) ? "currentColor" : "none"} strokeWidth={1.8} />
      ))}
      <b>{value.toFixed(1)}</b>
    </span>
  );
}

function SocialIcon({ label }: { label: "Facebook" | "Instagram" }) {
  return label === "Instagram" ? <Instagram size={15} /> : <Facebook size={15} />;
}

function AreaPill({ areaId, onClick }: { areaId: AreaId; onClick: (areaId: AreaId) => void }) {
  const area = getArea(areaId);
  if (!area) return null;
  return (
    <button className="area-pill" onClick={() => onClick(areaId)} type="button">
      <MapPin size={13} /> {area.name}
    </button>
  );
}

function VenueCard({ venue, onSelectArea }: { venue: Venue; onSelectArea: (areaId: AreaId) => void }) {
  const [open, setOpen] = useState(false);
  const overall = getOverallRating(venue);

  return (
    <article className={`venue-card ${open ? "venue-card--open" : ""}`}>
      <div className="venue-card__topline">
        <span className="venue-card__index">0{venues.indexOf(venue) + 1}</span>
        <span className="venue-card__category">{venue.category}</span>
      </div>
      <div className="venue-card__heading">
        <div>
          <h3>{venue.name}</h3>
          <AreaPill areaId={venue.areaId} onClick={onSelectArea} />
        </div>
        <div className="venue-card__score">
          <StarRating value={overall} compact />
          <span>Google 總評</span>
        </div>
      </div>
      <p className="venue-card__description">{venue.shortDescription}</p>
      <div className="tag-row">
        {venue.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <div className="venue-card__quick-info">
        <span><WalletCards size={15} /> {venue.price}</span>
        <span><Clock3 size={15} /> {venue.hours}</span>
      </div>
      <div className="venue-card__actions">
        <a href={venue.mapUrl} target="_blank" rel="noreferrer" className="button button--dark button--small">
          <MapPin size={15} /> {venue.mapUrl.includes("google.com/maps") ? "Google Maps" : "查看位置"} <ArrowUpRight size={14} />
        </a>
        <button className="button button--text button--small" onClick={() => setOpen(!open)} type="button" aria-expanded={open}>
          {open ? "收起詳情" : "查看評分"} <ChevronDown size={15} className={open ? "rotate-180" : ""} />
        </button>
      </div>
      {open && (
        <div className="venue-card__details">
          <div className="details-contact">
            <div><MapPin size={15} /><span>{venue.address}</span></div>
            <div><Phone size={15} /><span>{venue.phone}</span></div>
            <div><Clock3 size={15} /><span>{venue.hours}</span></div>
          </div>
          <div className="google-rating-summary">
            <div>
              <span className="google-rating-summary__label"><Star size={14} fill="currentColor" /> Google Maps 客觀總評</span>
              <strong>{venue.googleRating.toFixed(1)} <small>/ 5</small></strong>
            </div>
            <span className="google-rating-summary__reviews">{venue.googleReviewCount} 則評論</span>
          </div>
          <p className="editor-note"><CircleHelp size={14} /> {venue.googleRatingNote}</p>
          <div className="rating-list">
            {ratingKeys.map((key) => {
              const Icon = ratingIcons[key];
              return (
                <div className="rating-row" key={key}>
                  <div className="rating-row__label"><Icon size={15} /><span>{ratingLabels[key]}</span></div>
                  <StarRating value={venue.ratings[key]} compact />
                </div>
              );
            })}
          </div>
          <div className="verdict-box">
            <span className="verdict-box__label"><Check size={14} /> 編輯總評</span>
            <p>{venue.verdict}</p>
          </div>
          <p className="editor-note"><CircleHelp size={14} /> {venue.editorNote}</p>
          {venue.socialLinks.length > 0 && (
            <div className="social-row">
              {venue.socialLinks.map((social) => (
                <a href={social.url} target="_blank" rel="noreferrer" key={social.label} className="social-link">
                  <SocialIcon label={social.label} /> {getSocialIconLabel(social.label)}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function AreaCard({ area, count, onClick }: { area: (typeof areas)[number]; count: number; onClick: () => void }) {
  return (
    <button className={`area-card area-card--${area.accent}`} onClick={onClick} type="button">
      <span className="area-card__number">0{areas.indexOf(area) + 1}</span>
      <span className="area-card__pin"><MapPin size={17} /></span>
      <span className="area-card__name">{area.name}</span>
      <span className="area-card__description">{area.description}</span>
      <span className="area-card__footer"><b>{count} 間推薦</b><ArrowUpRight size={17} /></span>
    </button>
  );
}

export default function Home() {
  const [activeArea, setActiveArea] = useState<AreaId | "all">("all");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"recommended" | "rating" | "price">("recommended");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filteredVenues = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = venues.filter((venue) => {
      const matchesArea = activeArea === "all" || venue.areaId === activeArea;
      const searchable = [venue.name, venue.category, venue.shortDescription, ...venue.tags].join(" ").toLowerCase();
      return matchesArea && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
    if (sortBy === "rating") return [...result].sort((a, b) => getOverallRating(b) - getOverallRating(a));
    if (sortBy === "price") return [...result].sort((a, b) => a.price.localeCompare(b.price, "zh-Hant"));
    return result;
  }, [activeArea, query, sortBy]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNavOpen(false);
  };

  const showArea = (areaId: AreaId) => {
    setActiveArea(areaId);
    scrollTo("recommendations");
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={() => scrollTo("top")}>
          <span className="brand__mark"><Leaf size={18} fill="currentColor" /></span>
          <span><strong>吃一口，剛剛好</strong><small>Johor Bahru Vegetarian Guide</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="開啟選單" type="button">
          {mobileNavOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`site-nav ${mobileNavOpen ? "site-nav--open" : ""}`}>
          <a href="#areas" onClick={() => scrollTo("areas")}>四區導覽</a>
          <a href="#benefits" onClick={() => scrollTo("benefits")}>吃素的好處</a>
          <a href="#recommendations" onClick={() => scrollTo("recommendations")}>推薦清單</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-overlay" />
          <div className="hero-content container">
            <div className="hero-copy">
              <p className="eyebrow eyebrow--light"><span /> JOHOR BAHRU · VEGETARIAN GUIDE</p>
              <h1>在新山，<br /><em>吃一口綠意。</em></h1>
              <p className="hero-description">把柔軟、香氣與一點綠意，收進新山的每一餐。從 Mount Austin 到 Taman Daya，為你整理值得收藏的蔬食去處。</p>
              <div className="hero-actions">
                <button className="button button--cream" onClick={() => scrollTo("recommendations")} type="button">開始探索 <ArrowDown size={17} /></button>
                <button className="button button--ghost" onClick={() => scrollTo("benefits")} type="button">為什麼吃素？</button>
              </div>
            </div>
            <div className="hero-side-note"><span>6</span><small>curated<br />places</small></div>
          </div>
          <div className="hero-caption container"><span>01 / 04</span><span>一座城市，四種蔬食心情</span></div>
        </section>

        <section className="intro-section section-pad">
          <div className="container intro-grid">
            <div className="intro-label"><span className="section-kicker">01</span><span>一點關於蔬食</span></div>
            <div className="intro-copy">
              <p className="eyebrow">A SOFTER WAY TO EAT</p>
              <h2>吃素，不只是少了什麼。<br /><em>是多了一點選擇。</em></h2>
              <p>我們相信，蔬食不是一張規定很多的清單，而是一種把新鮮、平衡和好心情放上餐桌的方式。從今天午餐開始，挑一間讓你想再回來的店。</p>
              <button className="inline-link" onClick={() => scrollTo("benefits")} type="button">了解吃素的三個好處 <ArrowUpRight size={15} /></button>
            </div>
            <div className="intro-stamp"><Sprout size={28} /><span>GOOD<br />FOR YOU<br />GOOD<br />FOR EARTH</span></div>
          </div>
        </section>

        <section className="areas-section section-pad" id="areas">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">02 / EXPLORE BY AREA</p><h2>先選一個<br /><em>今天的方向。</em></h2></div>
              <p>四個生活圈，四種覓食節奏。點一下，直接看到附近值得留意的蔬食選擇。</p>
            </div>
            <div className="areas-grid">
              {areas.map((area) => <AreaCard key={area.id} area={area} count={venues.filter((venue) => venue.areaId === area.id).length} onClick={() => showArea(area.id)} />)}
            </div>
          </div>
        </section>

        <section className="benefits-section section-pad" id="benefits">
          <div className="container benefits-grid">
            <div className="benefits-heading"><p className="eyebrow eyebrow--cream">03 / WHY VEGGIE</p><h2>一餐蔬食，<br /><em>三種溫柔。</em></h2><Leaf size={44} className="benefits-leaf" /></div>
            <div className="benefits-list">
              {benefits.map((benefit) => <div className="benefit-item" key={benefit.number}><span>{benefit.number}</span><div><h3>{benefit.title}</h3><p>{benefit.text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="recommendations-section section-pad" id="recommendations">
          <div className="container">
            <div className="section-heading section-heading--split recommendations-heading">
              <div><p className="eyebrow">04 / CURATED PLACES</p><h2>今天，<br /><em>想吃哪一間？</em></h2></div>
              <div className="recommendations-heading__note"><p>每一間都以交通、停車、服務、價錢、速度與口味六項因素整理，滿分 5 星。</p><span className="legend"><Star size={14} fill="currentColor" /> 編輯整理評分</span></div>
            </div>
            <div className="filter-bar">
              <div className="area-tabs">
                <button className={activeArea === "all" ? "active" : ""} onClick={() => setActiveArea("all")} type="button">全部 <span>{venues.length}</span></button>
                {areas.map((area) => <button className={activeArea === area.id ? "active" : ""} onClick={() => setActiveArea(area.id)} type="button" key={area.id}>{area.name} <span>{venues.filter((venue) => venue.areaId === area.id).length}</span></button>)}
              </div>
              <div className="filter-tools">
                <label className="search-field"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋店名或標籤" aria-label="搜尋店名或標籤" />{query && <button onClick={() => setQuery("")} aria-label="清除搜尋" type="button"><X size={15} /></button>}</label>
                <label className="sort-field"><span>排序</span><select value={sortBy} onChange={(event) => setSortBy(event.target.value as typeof sortBy)} aria-label="排序方式"><option value="recommended">編輯推薦</option><option value="rating">總評最高</option><option value="price">價格範圍</option></select><ChevronDown size={14} /></label>
              </div>
            </div>
            {filteredVenues.length > 0 ? <div className="venues-grid">{filteredVenues.map((venue) => <VenueCard venue={venue} key={venue.id} onSelectArea={showArea} />)}</div> : <div className="empty-state"><Search size={28} /><h3>找不到這個口味</h3><p>試試其他關鍵字，或先看看全部推薦。</p><button className="button button--dark button--small" onClick={() => { setQuery(""); setActiveArea("all"); }} type="button">重設篩選</button></div>}
            <p className="editorial-note"><CircleHelp size={15} /> {editorialNote}</p>
          </div>
        </section>

      </main>

      <footer className="site-footer"><div className="container footer-content"><div className="brand brand--footer"><span className="brand__mark"><Leaf size={18} fill="currentColor" /></span><span><strong>{projectMeta.siteName}</strong><small>{projectMeta.eyebrow}</small></span></div><p>一餐蔬食，也可以很有故事。<br />Made for slow lunches & good choices.</p><span className="footer-credit">© 2026 · Johor Bahru</span></div></footer>
    </div>
  );
}
