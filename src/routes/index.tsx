import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Headphones,
  Package,
  Lock,
  Star,
  Users,
  Footprints,
  Watch,
  Glasses,
  Wallet,
  Shirt,
  Backpack,
  FlaskConical,
} from "lucide-react";

// import logoAsset from "@/assets/arctic-logo.jpg.asset.json";
// import heroAsset from "@/assets/arctic-cover.jpg.asset.json";
// import hoodieGreenAsset from "@/assets/product-hoodie-green.jpg.asset.json";
// import hoodieMaroonAsset from "@/assets/product-hoodie-maroon.jpg.asset.json";
// import watchesAsset from "@/assets/product-watches.jpg.asset.json";
// import pantsAsset from "@/assets/product-pants.jpg.asset.json";
// import jordanAsset from "@/assets/product-jordan.jpg.asset.json";
// import pumaAsset from "@/assets/product-puma.jpg.asset.json";
// import perfume from "@/assets/perfume.jpg";

// const logo = logoAsset.url;
// const hero = heroAsset.url;
// const collage1 = hoodieGreenAsset.url;
// const collage2 = hoodieMaroonAsset.url;
// const sneaker = jordanAsset.url;
// const watchImg = watchesAsset.url;
// const pants = pantsAsset.url;
// const puma = pumaAsset.url;

// import logo from "@/assets/Arctic_Logo.jpg";
// import hero from "@/assets/Arctic_Cover.jpg";

// import collage1 from "@/assets/hoodie1.jpg";
// import collage2 from "@/assets/hoodie2.jpg";

// import sneaker from "@/assets/nike1.jpeg"; 
// import watchImg from "@/assets/watches.jpg";
// import pants from "@/assets/pants.jpg";
// import puma from "@/assets/glasses.jpg";

// import perfume from "@/assets/wallets.jpg";

// import NikeLogo from "@/assets/Nike.jpg";
// import AdidasLogo from "@/assets/Adidas - Logo.jpg";
// import IkeaLogo from "@/assets/ikea.jpg";
// import HMLogo from "@/assets/h&m.jpg";  // FIXED: Removed extra text
// import CharlesKeithLogo from "@/assets/Cahrles&keith.jpg";
// import SephoraLogo from "@/assets/Sephora Wishlist.jpg";
// import SheinLogo from "@/assets/shein.jpg";
// import ShopeeLogo from "@/assets/Shopee.jpg";
// import LazadaLogo from "@/assets/Lazada.jpg";
// import GuardianLogo from "@/assets/guardian.png";
// import UniqloLogo from "@/assets/UNIQLO logo.jpg";
// import WatsonsLogo from "@/assets/watsons.jpg";
// import ZaloraLogo from "@/assets/Zalora.jpg";






import logo from "@/assets/Arctic_Logo.jpg";
import hero from "@/assets/Arctic_Cover.jpg";

import collage1 from "@/assets/hoodie1.jpg";
import collage2 from "@/assets/hoodie2.jpg";

import sneaker from "@/assets/nike1.jpeg"; 
import watchImg from "@/assets/watches.jpg";
import pants from "@/assets/pants.jpg";
import puma from "@/assets/glasses.jpg";

import perfume from "@/assets/wallets.jpg";

// Category specific images
import shoesImg from "@/assets/shoes.jpg";
import capImg from "@/assets/cap.jpg";
import tshirtImg from "@/assets/teeshirt.jpg";
import shirtImg from "@/assets/shirt1.jpg";
import shirt2Img from "@/assets/shirt2.jpg";
import bagsImg from "@/assets/bags.jpg";
import perfumeImg from "@/assets/sauvage_dior.jpg";
import hoodieImg from "@/assets/hoodie.jpg";

// Brand Logos
import NikeLogo from "@/assets/Nike.jpg";
import AdidasLogo from "@/assets/Adidas - Logo.jpg";
import PumaLogo from "@/assets/puma.jpg";
import UnderArmourLogo from "@/assets/underarmour.jpg";
import IkeaLogo from "@/assets/ikea.jpg";
import HMLogo from "@/assets/h&m.jpg";
import CharlesKeithLogo from "@/assets/Cahrles&keith.jpg";
import SephoraLogo from "@/assets/Sephora Wishlist.jpg";
import SheinLogo from "@/assets/shein.jpg";
import ShopeeLogo from "@/assets/Shopee.jpg";
import LazadaLogo from "@/assets/Lazada.jpg";
import GuardianLogo from "@/assets/guardian.png";
import UniqloLogo from "@/assets/UNIQLO logo.jpg";
import WatsonsLogo from "@/assets/watsons.jpg";
import ZaloraLogo from "@/assets/Zalora.jpg";
import FossilLogo from "@/assets/fossil.jpg";
import CasioLogo from "@/assets/casio.jpg";
import SeikoLogo from "@/assets/seiko.jpg";




// const brands = [
//   NikeLogo,
//   AdidasLogo,
//   IkeaLogo,
//   HMLogo,
//   CharlesKeithLogo,
//   SephoraLogo,
//   SheinLogo,
//   ShopeeLogo,
//   LazadaLogo,
//   GuardianLogo,
//   UniqloLogo,
//   WatsonsLogo,
//   ZaloraLogo,
// ];



const brands = [
  NikeLogo,
  AdidasLogo,
  PumaLogo,
  UnderArmourLogo,
  IkeaLogo,
  HMLogo,
  CharlesKeithLogo,
  SephoraLogo,
  SheinLogo,
  ShopeeLogo,
  LazadaLogo,
  GuardianLogo,
  UniqloLogo,
  WatsonsLogo,
  ZaloraLogo,
  FossilLogo,
  CasioLogo,
  SeikoLogo,
];




export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arctic Daze — Premium Men's Fashion Imported from Malaysia" },
      { name: "description", content: "Shop premium men's fashion, footwear, watches, wallets and grooming from trusted Malaysian brands. Order easily via Facebook or WhatsApp with Arctic Daze." },
      { property: "og:title", content: "Arctic Daze — Premium Men's Fashion Imported from Malaysia" },
      { property: "og:description", content: "Shop premium men's fashion, footwear, watches, wallets and grooming from trusted Malaysian brands. Order easily via Facebook or WhatsApp with Arctic Daze." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Brands", href: "#brands" },
  { label: "How To Order", href: "#how" },
  { label: "Malaysia Stores", href: "#stores" },
  { label: "Contact", href: "#contact" },
];

const FB_PAGE = "https://www.facebook.com/arcticdaze11";
const FB_GROUP = "https://www.facebook.com/share/g/1Fuxt4XBmG/";
const WHATSAPP = "https://wa.me/8801930647457";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Landing() {
  return (
    <div id="home" className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Collections />
      <WhyUs />
      <HowToOrder />
      <Stores />
      <Brands />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Arctic Daze"
            className="size-11 md:size-12 rounded-full object-cover ring-1 ring-black/10"
          />
          <span
            className={`hidden sm:inline text-lg tracking-tight transition-colors ${scrolled || open ? "text-foreground" : "text-white"
              }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Arctic Daze<span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[13px] font-medium tracking-wide transition-colors ${scrolled ? "text-foreground/80 hover:text-accent" : "text-white/85 hover:text-white"
                }`}
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={FB_PAGE}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-primary !py-3 !px-5 !text-[11px]"
          >
            Order Now <ArrowRight className="size-3.5" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex items-center justify-center size-11 rounded-full border ${scrolled || open ? "border-border text-foreground" : "border-white/40 text-white"
              }`}
          >
            <motion.span
              key={open ? "x" : "m"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden overflow-hidden bg-background border-t border-border"
      >
        <div className="container-luxe py-6 flex flex-col gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium border-b border-border/60"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {n.label}
            </a>
          ))}
          <a href={FB_PAGE} target="_blank" rel="noreferrer" className="btn-primary mt-4">
            Order Now <ArrowRight className="size-4" />
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={hero}
          alt="Premium men's fashion editorial"
          className="w-full h-[115%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#133336]/70 via-[#010001]/55 to-[#010001]/80" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 container-luxe pt-40 pb-24 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="eyebrow text-white/80"
          >
            Est. Arctic Daze — Malaysia to Bangladesh
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-normal"
          >
            Premium Men's<br />
            <span className="italic font-light">Fashion</span> From Malaysia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-white/75 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Shoes, sneakers, watches, wallets, hoodies, shirts, perfumes and everyday
            essentials — carefully sourced from trusted Malaysian brands and delivered
            through Arctic Daze.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#stores" className="btn-primary bg-white !text-[#133336] hover:!bg-white/90">
              Browse Malaysian Stores <ArrowRight className="size-4" />
            </a>
            <a href={FB_PAGE} target="_blank" rel="noreferrer" className="btn-outline">
              Order on Facebook <Facebook className="size-4" />
            </a>
          </motion.div>
        </div>

        {/* Floating collage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden xl:grid absolute right-12 top-1/2 -translate-y-1/2 grid-cols-2 gap-4 w-[380px]"
        >
          {[collage1, sneaker, watchImg, pants, puma, perfume].map((src, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.15, duration: 0.8 }}
              className={`overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl ${i % 2 === 0 ? "translate-y-4" : "-translate-y-4"
                }`}
            >
              <motion.img
                src={src}
                alt=""
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                className="w-full h-52 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-[10px] tracking-[0.3em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}

/* ---------------- MARQUEE (brands) ---------------- */
const BRANDS = [
  "Nike", "Adidas", "Puma", "Jordan", "New Balance", "ASICS", "Converse", "Vans",
  "H&M", "UNIQLO", "Zara", "Levi's", "Tommy Hilfiger", "Calvin Klein", "Fossil", "Casio", "Seiko", "Ray-Ban", "Oakley",
];

function Marquee() {
  return (
    <section id="brands" className="border-y border-border bg-surface py-10 overflow-hidden">
      <div className="marquee flex gap-16 whitespace-nowrap will-change-transform">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-display italic text-foreground/70 shrink-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {b}
            <span className="mx-8 text-accent/40">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="container-luxe grid lg:grid-cols-12 gap-14 items-center">
        <motion.div {...fadeUp} className="lg:col-span-5">
          <div className="relative">
            <img
             src={collage2} alt="Editorial fashion" className="rounded-2xl w-full h-[540px] object-cover shadow-[var(--shadow-lift)]" />
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-background border border-border rounded-2xl p-6 shadow-[var(--shadow-soft)] w-56">
              <p className="eyebrow">Since 2024</p>
              <p className="mt-3 text-3xl font-display" style={{ fontFamily: "var(--font-display)" }}>Curated with intent</p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="lg:col-span-7 lg:pl-8">
          <p className="eyebrow">About Arctic Daze</p>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            A quiet obsession with <em className="italic font-light">well-made</em> menswear.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/70 max-w-xl">
            Arctic Daze is a premium men's fashion sourcing service dedicated to bringing
            authentic Malaysian fashion to customers. From sneakers and watches to apparel
            and grooming products, we help customers shop from trusted Malaysian brands
            through a simple and reliable ordering process.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-8 max-w-md">
            <Stat n="500+" label="Repeat Customers" />
            <Stat n="12+" label="Categories" />
            <Stat n="100%" label="Authentic" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-display text-deep" style={{ fontFamily: "var(--font-display)" }}>{n}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/50" style={{ fontFamily: "var(--font-ui)" }}>{label}</div>
    </div>
  );
}

/* ---------------- COLLECTIONS ---------------- */
// const CATEGORIES = [
//   { icon: Footprints, name: "Sneakers", tag: "Everyday icons" },
//   { icon: Footprints, name: "Shoes", tag: "Refined footwear" },
//   { icon: Watch, name: "Watches", tag: "Timeless pieces" },
//   { icon: Glasses, name: "Sunglasses", tag: "Sculpted shades" },
//   { icon: Wallet, name: "Wallets", tag: "Leather craft" },
//   { icon: Shirt, name: "T-Shirts", tag: "Cotton essentials" },
//   { icon: Shirt, name: "Shirts", tag: "Tailored fits" },
//   { icon: Shirt, name: "Hoodies", tag: "Elevated comfort" },
//   { icon: Shirt, name: "Pants", tag: "Modern cuts" },
//   { icon: Shirt, name: "Caps", tag: "Finishing touch" },
//   { icon: Backpack, name: "Bags", tag: "Carry with intent" },
//   { icon: FlaskConical, name: "Perfumes", tag: "Signature scent" },
// ];


const CATEGORIES = [
  { 
    icon: Footprints, 
    name: "Sneakers", 
    tag: "Everyday icons",
    image: sneaker, // Using existing sneaker import (nike1.jpeg)
    bgColor: "from-blue-900/40 to-purple-900/40"
  },
  { 
    icon: Footprints, 
    name: "Shoes", 
    tag: "Refined footwear",
    image: shoesImg, // Using shoes.jpg
    bgColor: "from-indigo-900/40 to-slate-900/40"
  },
  { 
    icon: Watch, 
    name: "Watches", 
    tag: "Timeless pieces",
    image: watchImg, // Using existing watchImg import (watches.jpg)
    bgColor: "from-amber-900/40 to-gray-900/40"
  },
  { 
    icon: Glasses, 
    name: "Sunglasses", 
    tag: "Sculpted shades",
    image: puma, // Using existing puma import (glasses.jpg)
    bgColor: "from-sky-900/40 to-gray-900/40"
  },
  { 
    icon: Wallet, 
    name: "Wallets", 
    tag: "Leather craft",
    image: perfume, // Using existing perfume import (wallets.jpg)
    bgColor: "from-amber-800/40 to-stone-900/40"
  },
  { 
    icon: Shirt, 
    name: "T-Shirts", 
    tag: "Cotton essentials",
    image: tshirtImg, // Using teeshirt.jpg
    bgColor: "from-emerald-900/40 to-teal-900/40"
  },
  { 
    icon: Shirt, 
    name: "Shirts", 
    tag: "Tailored fits",
    image: shirtImg, // Using shirt1.jpg
    bgColor: "from-blue-800/40 to-gray-900/40"
  },
  { 
    icon: Shirt, 
    name: "Hoodies", 
    tag: "Elevated comfort",
    image: hoodieImg, // Using hoodie.jpg
    bgColor: "from-rose-900/40 to-stone-900/40"
  },
  { 
    icon: Shirt, 
    name: "Pants", 
    tag: "Modern cuts",
    image: pants, // Using existing pants import (pants.jpg)
    bgColor: "from-gray-800/40 to-black/40"
  },
  { 
    icon: Shirt, 
    name: "Caps", 
    tag: "Finishing touch",
    image: capImg, // Using cap.jpg
    bgColor: "from-indigo-800/40 to-gray-900/40"
  },
  { 
    icon: Backpack, 
    name: "Bags", 
    tag: "Carry with intent",
    image: bagsImg, // Using bags.jpg
    bgColor: "from-amber-900/40 to-stone-900/40"
  },
  { 
    icon: FlaskConical, 
    name: "Perfumes", 
    tag: "Signature scent",
    image: perfumeImg, // Using perfume.jpg
    bgColor: "from-pink-900/40 to-purple-900/40"
  },
];



// function Collections() {
//   return (
//     <section id="collections" className="py-28 md:py-40 bg-surface">
//       <div className="container-luxe">
//         <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
//           <div>
//             <motion.p {...fadeUp} className="eyebrow">Featured Collections</motion.p>
//             <motion.h2 {...fadeUp} className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.05]">
//               Every piece, <em className="italic font-light">considered.</em>
//             </motion.h2>
//           </div>
//           <motion.a {...fadeUp} href="#stores" className="text-sm tracking-wide inline-flex items-center gap-2 text-accent hover:text-accent-hover" style={{ fontFamily: "var(--font-ui)" }}>
//             Explore all stores <ArrowRight className="size-4" />
//           </motion.a>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {CATEGORIES.map((c, i) => (
//             <motion.a
//               key={c.name}
//               href="#stores"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
//               whileHover={{ y: -8 }}
//               className="group relative bg-background border border-border rounded-2xl p-6 md:p-8 aspect-[3/4] flex flex-col justify-between overflow-hidden transition-shadow hover:shadow-[var(--shadow-lift)]"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="relative">
//                 <c.icon strokeWidth={1.2} className="size-8 text-deep" />
//               </div>
//               <div className="relative">
//                 <p className="text-xs tracking-[0.2em] uppercase text-foreground/45" style={{ fontFamily: "var(--font-ui)" }}>
//                   0{Math.min(i + 1, 12)} — Category
//                 </p>
//                 <h3 className="mt-2 text-2xl md:text-[1.7rem] leading-tight">{c.name}</h3>
//                 <p className="mt-1 text-sm text-foreground/60">{c.tag}</p>
//                 <div className="mt-4 flex items-center gap-1 text-accent text-xs tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
//                   BROWSE <ArrowUpRight className="size-3.5" />
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




/* ---------------- WHY US ---------------- */
const WHY = [
  { icon: ShieldCheck, title: "Authentic Malaysian Products", body: "Every item sourced directly from verified Malaysian retailers." },
  { icon: Users, title: "Trusted Personal Shopper", body: "A dedicated hand on every order, start to finish." },
  { icon: Sparkles, title: "Premium Men's Fashion", body: "Editorial-grade selection across footwear, apparel and accessories." },
  { icon: Headphones, title: "Fast Customer Support", body: "Reach us on Facebook or WhatsApp — replies within hours." },
  { icon: Lock, title: "Secure Ordering", body: "Simple confirmation, transparent quotes, safe payment." },
  { icon: Star, title: "Carefully Selected Brands", body: "Only the labels that meet our quality bar make the shelf." },
  { icon: Facebook, title: "Easy Facebook Ordering", body: "Send a product link — we handle the rest." },
  { icon: Truck, title: "Affordable Import Service", body: "Fair, honest pricing on international sourcing." },
];


function WhyUs() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-luxe">
        <div className="max-w-2xl mb-16">
          <motion.p {...fadeUp} className="eyebrow">Why Choose Us</motion.p>
          <motion.h2 {...fadeUp} className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Sourcing you can <em className="italic font-light">trust.</em>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="bg-background p-8 md:p-10 flex flex-col gap-5 hover:bg-surface transition-colors duration-500"
            >
              <w.icon strokeWidth={1.2} className="size-7 text-accent" />
              <h3 className="text-xl leading-snug">{w.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Collections() {
  return (
    <section id="collections" className="py-28 md:py-40 bg-surface">
      <div className="container-luxe">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <motion.p {...fadeUp} className="eyebrow">Featured Collections</motion.p>
            <motion.h2 {...fadeUp} className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.05]">
              Every piece, <em className="italic font-light">considered.</em>
            </motion.h2>
          </div>
          <motion.a {...fadeUp} href="#stores" className="text-sm tracking-wide inline-flex items-center gap-2 text-accent hover:text-accent-hover" style={{ fontFamily: "var(--font-ui)" }}>
            Explore all stores <ArrowRight className="size-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((c, i) => (
            <motion.a
              key={c.name}
              href="#stores"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative bg-background border border-border rounded-2xl p-6 md:p-8 aspect-[3/4] flex flex-col justify-between overflow-hidden transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              {/* Background Image with very light blur */}
              <div className="absolute inset-0">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
                {/* Very light blur - just enough to soften */}
                <div className={`absolute inset-0 bg-gradient-to-br ${c.bgColor} backdrop-blur-[2px]`} />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <c.icon strokeWidth={1.2} className="size-8 text-white/90" />
                </div>
                
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70" style={{ fontFamily: "var(--font-ui)" }}>
                    0{String(i + 1).padStart(2, '0')} — Category
                  </p>
                  <h3 className="mt-2 text-2xl md:text-[1.7rem] leading-tight text-white font-medium">{c.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{c.tag}</p>
                  <div className="mt-4 flex items-center gap-1 text-white/90 text-xs tracking-widest transition-all duration-500">
                    BROWSE <ArrowUpRight className="size-3.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}




/* ---------------- HOW TO ORDER ---------------- */
const STEPS = [
  { n: "01", title: "Browse", body: "Explore products from your favorite Malaysian websites." },
  { n: "02", title: "Copy Link", body: "Grab the product link from the store's website." },
  { n: "03", title: "Send To Us", body: "Share the link via Facebook Messenger or WhatsApp." },
  { n: "04", title: "Quotation", body: "We reply with a transparent, all-in quote." },
  { n: "05", title: "Confirm", body: "Approve the order and complete secure payment." },
  { n: "06", title: "Delivered", body: "We import, track and hand-deliver your order." },
];

function HowToOrder() {
  return (
    <section id="how" className="py-28 md:py-40 bg-deep text-deep-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="container-luxe relative">
        <div className="max-w-2xl mb-20">
          <motion.p {...fadeUp} className="eyebrow !text-white/60">The Process</motion.p>
          <motion.h2 {...fadeUp} className="mt-4 text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
            How to <em className="italic font-light">order</em> with Arctic Daze.
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-white/15" />
          <div className="space-y-14 md:space-y-24">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`pl-14 md:pl-0 ${i % 2 ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right"} [direction:ltr]`}>
                  <p className="text-6xl md:text-8xl font-display text-white/15" style={{ fontFamily: "var(--font-display)" }}>{s.n}</p>
                  <h3 className="mt-2 text-3xl md:text-4xl text-white">{s.title}</h3>
                  <p className="mt-3 text-white/60 max-w-md md:ml-auto md:mr-0" style={{ marginLeft: i % 2 ? 0 : "auto" }}>{s.body}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-3 rounded-full bg-accent ring-4 ring-deep" />
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORES ---------------- */
// const STORE_GROUPS: { title: string; items: { name: string; url: string; desc: string }[] }[] = [
//   {
//     title: "Fashion",
//     items: [
//       { name: "SHEIN Malaysia", url: "https://my.shein.com", desc: "Everyday fashion at accessible prices." },
//       { name: "Zalora Malaysia", url: "https://www.zalora.com.my", desc: "Southeast Asia's leading fashion destination." },
//       { name: "H&M Malaysia", url: "https://www2.hm.com/en_my", desc: "Contemporary essentials and seasonal drops." },
//       { name: "UNIQLO Malaysia", url: "https://www.uniqlo.com/my", desc: "Japanese made LifeWear basics." },
//     ],
//   },
//   {
//     title: "Sports",
//     items: [
//       { name: "Adidas Malaysia", url: "https://www.adidas.com.my", desc: "Iconic sneakers and performance apparel." },
//       { name: "Nike Malaysia", url: "https://www.nike.com/my", desc: "Legendary silhouettes and running gear." },
//       { name: "Puma Malaysia", url: "https://my.puma.com", desc: "Sport-lifestyle footwear and apparel." },
//       { name: "Under Armour Malaysia", url: "https://www.underarmour.com.my", desc: "Engineered performance essentials." },
//     ],
//   },
//   {
//     title: "Marketplaces",
//     items: [
//       { name: "Shopee Malaysia", url: "https://shopee.com.my", desc: "One of Malaysia's largest marketplaces." },
//       { name: "Lazada Malaysia", url: "https://www.lazada.com.my", desc: "Trusted marketplace with countless brands." },
//     ],
//   },
//   {
//     title: "Accessories",
//     items: [
//       { name: "Fossil Malaysia", url: "https://www.fossil.com/en-my", desc: "Watches, leather goods and accessories." },
//       { name: "Casio Malaysia", url: "https://casio.com/my", desc: "Iconic timepieces including G-Shock." },
//       { name: "Seiko Malaysia", url: "https://www.seikoboutique.com.my", desc: "Precision Japanese watchmaking." },
//       { name: "Charles & Keith Malaysia", url: "https://www.charleskeith.com/my", desc: "Modern accessories and small leather goods." },
//     ],
//   },
//   {
//     title: "Grooming & Perfumes",
//     items: [
//       { name: "Sephora Malaysia", url: "https://www.sephora.my", desc: "Premium fragrances and grooming." },
//       { name: "IKEA", url: "https://www.ikea.com/my/en/", desc: "Modern furniture, home décor and smart living solutions." },
//       { name: "Guardian Malaysia", url: "https://www.guardian.com.my", desc: "Everyday personal care and grooming." },
//       { name: "Watsons Malaysia", url: "https://www.watsons.com.my", desc: "Trusted health, beauty and grooming." },
//     ],
//   },
// ];



const STORE_GROUPS: { 
  title: string; 
  items: { 
    name: string; 
    url: string; 
    desc: string; 
    logo: string;
  }[] 
}[] = [
  {
    title: "Fashion",
    items: [
      { 
        name: "SHEIN Malaysia", 
        url: "https://my.shein.com", 
        desc: "Everyday fashion at accessible prices.",
        logo: SheinLogo 
      },
      { 
        name: "Zalora Malaysia", 
        url: "https://www.zalora.com.my", 
        desc: "Southeast Asia's leading fashion destination.",
        logo: ZaloraLogo 
      },
      { 
        name: "H&M Malaysia", 
        url: "https://www2.hm.com/en_my", 
        desc: "Contemporary essentials and seasonal drops.",
        logo: HMLogo 
      },
      { 
        name: "UNIQLO Malaysia", 
        url: "https://www.uniqlo.com/my", 
        desc: "Japanese made LifeWear basics.",
        logo: UniqloLogo 
      },
    ],
  },
  {
    title: "Sports",
    items: [
      { 
        name: "Adidas Malaysia", 
        url: "https://www.adidas.com.my", 
        desc: "Iconic sneakers and performance apparel.",
        logo: AdidasLogo 
      },
      { 
        name: "Nike Malaysia", 
        url: "https://www.nike.com/my", 
        desc: "Legendary silhouettes and running gear.",
        logo: NikeLogo 
      },
      { 
        name: "Puma Malaysia", 
        url: "https://my.puma.com", 
        desc: "Sport-lifestyle footwear and apparel.",
        logo: PumaLogo 
      },
      { 
        name: "Under Armour Malaysia", 
        url: "https://www.underarmour.com.my", 
        desc: "Engineered performance essentials.",
        logo: UnderArmourLogo 
      },
    ],
  },
  {
    title: "Marketplaces",
    items: [
      { 
        name: "Shopee Malaysia", 
        url: "https://shopee.com.my", 
        desc: "One of Malaysia's largest marketplaces.",
        logo: ShopeeLogo 
      },
      { 
        name: "Lazada Malaysia", 
        url: "https://www.lazada.com.my", 
        desc: "Trusted marketplace with countless brands.",
        logo: LazadaLogo 
      },
    ],
  },
  {
    title: "Accessories",
    items: [
      { 
        name: "Fossil Malaysia", 
        url: "https://www.fossil.com/en-my", 
        desc: "Watches, leather goods and accessories.",
        logo: FossilLogo 
      },
      { 
        name: "Casio Malaysia", 
        url: "https://casio.com/my", 
        desc: "Iconic timepieces including G-Shock.",
        logo: CasioLogo 
      },
      { 
        name: "Seiko Malaysia", 
        url: "https://www.seikoboutique.com.my", 
        desc: "Precision Japanese watchmaking.",
        logo: SeikoLogo 
      },
      { 
        name: "Charles & Keith Malaysia", 
        url: "https://www.charleskeith.com/my", 
        desc: "Modern accessories and small leather goods.",
        logo: CharlesKeithLogo 
      },
    ],
  },
  {
    title: "Grooming & Perfumes",
    items: [
      { 
        name: "Sephora Malaysia", 
        url: "https://www.sephora.my", 
        desc: "Premium fragrances and grooming.",
        logo: SephoraLogo 
      },
      { 
        name: "IKEA", 
        url: "https://www.ikea.com/my/en/", 
        desc: "Modern furniture, home décor and smart living solutions.",
        logo: IkeaLogo 
      },
      { 
        name: "Guardian Malaysia", 
        url: "https://www.guardian.com.my", 
        desc: "Everyday personal care and grooming.",
        logo: GuardianLogo 
      },
      { 
        name: "Watsons Malaysia", 
        url: "https://www.watsons.com.my", 
        desc: "Trusted health, beauty and grooming.",
        logo: WatsonsLogo 
      },
    ],
  },
];




// function Stores() {
//   return (
//     <section id="stores" className="py-28 md:py-40">
//       <div className="container-luxe">
//         <div className="max-w-2xl mb-16">
//           <motion.p {...fadeUp} className="eyebrow">Malaysian Shopping Websites</motion.p>
//           <motion.h2 {...fadeUp} className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
//             Browse the stores. <em className="italic font-light">We import.</em>
//           </motion.h2>
//           <motion.p {...fadeUp} className="mt-6 text-foreground/60 leading-relaxed max-w-lg">
//             Explore our curated list of trusted Malaysian retailers, copy the product link,
//             and send it our way to place your order.
//           </motion.p>
//         </div>

//         <div className="space-y-20">
//           {STORE_GROUPS.map((g) => (
//             <div key={g.title}>
//               <motion.div {...fadeUp} className="flex items-baseline gap-6 mb-8">
//                 <h3 className="text-2xl md:text-3xl font-display" style={{ fontFamily: "var(--font-display)" }}>{g.title}</h3>
//                 <div className="flex-1 h-px bg-border" />
//                 <span className="text-xs tracking-[0.2em] uppercase text-foreground/40">{g.items.length} stores</span>
//               </motion.div>

//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//                 {g.items.map((s, i) => (
//                   <motion.a
//                     key={s.name}
//                     href={s.url}
//                     target="_blank"
//                     rel="noreferrer noopener"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
//                     whileHover={{ y: -6 }}
//                     className="group bg-surface border border-border rounded-2xl p-7 flex flex-col gap-6 min-h-[220px] transition-colors hover:bg-background hover:shadow-[var(--shadow-lift)]"
//                   >

//                     <div className="flex items-start justify-between">
//                       <div className="size-12 rounded-full bg-background border border-border flex items-center justify-center">
//                         <Package strokeWidth={1.2} className="size-5 text-deep" />
//                       </div>
//                       <ArrowUpRight strokeWidth={1.4} className="size-5 text-foreground/40 group-hover:text-accent group-hover:rotate-45 transition-all duration-500" />
//                     </div>


//                     <div className="mt-auto">
//                       <p className="text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>{s.name}</p>
//                       <p className="mt-2 text-sm text-foreground/55 line-clamp-2">{s.desc}</p>
//                       <p className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase text-accent" style={{ fontFamily: "var(--font-ui)" }}>
//                         Visit Website <ArrowRight className="size-3" />
//                       </p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





function Stores() {
  return (
    <section id="stores" className="py-28 md:py-40">
      <div className="container-luxe">
        <div className="max-w-2xl mb-16">
          <motion.p {...fadeUp} className="eyebrow">Malaysian Shopping Websites</motion.p>
          <motion.h2 {...fadeUp} className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Browse the stores. <em className="italic font-light">We import.</em>
          </motion.h2>
          <motion.p {...fadeUp} className="mt-6 text-foreground/60 leading-relaxed max-w-lg">
            Explore our curated list of trusted Malaysian retailers, copy the product link,
            and send it our way to place your order.
          </motion.p>
        </div>

        <div className="space-y-20">
          {STORE_GROUPS.map((g) => (
            <div key={g.title}>
              <motion.div {...fadeUp} className="flex items-baseline gap-6 mb-8">
                <h3 className="text-2xl md:text-3xl font-display" style={{ fontFamily: "var(--font-display)" }}>{g.title}</h3>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs tracking-[0.2em] uppercase text-foreground/40">{g.items.length} stores</span>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {g.items.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                    whileHover={{ y: -6 }}
                    className="group bg-surface border border-border rounded-2xl p-7 flex flex-col gap-6 min-h-[220px] transition-colors hover:bg-background hover:shadow-[var(--shadow-lift)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="size-14 rounded-xl bg-background border border-border flex items-center justify-center overflow-hidden p-2">
                        <img 
                          src={s.logo} 
                          alt={s.name} 
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <ArrowUpRight strokeWidth={1.4} className="size-5 text-foreground/40 group-hover:text-accent group-hover:rotate-45 transition-all duration-500" />
                    </div>
                    <div className="mt-auto">
                      <p className="text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>{s.name}</p>
                      <p className="mt-2 text-sm text-foreground/55 line-clamp-2">{s.desc}</p>
                      <p className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase text-accent" style={{ fontFamily: "var(--font-ui)" }}>
                        Visit Website <ArrowRight className="size-3" />
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






/* ---------------- BRANDS (already in marquee) — a curated grid strip */
// function Brands() {
//   return (
//     <section className="py-16 border-t border-border">
//       <div className="container-luxe text-center">
//         <motion.p {...fadeUp} className="eyebrow">Featured Brands</motion.p>
//         <motion.h3 {...fadeUp} className="mt-4 text-2xl md:text-3xl text-foreground/70 max-w-2xl mx-auto">
//           A selection of the labels we source, chosen for craft, provenance and quiet confidence.
//         </motion.h3>
//       </div>
//     </section>
//   );
// }

function Brands() {
  return (
    <section
      id="brands"
      className="py-24 bg-background border-t border-border"
    >
      <div className="container-luxe">
        <motion.p {...fadeUp} className="eyebrow text-center">
          Trusted Brands
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="mt-4 text-center text-4xl md:text-5xl"
        >
          Brands We Source From
        </motion.h2>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-surface rounded-2xl border border-border p-8 flex items-center justify-center"
            >
              <img
                src={brand}
                alt="Brand Logo"
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ---------------- COMMUNITY ---------------- */
function Community() {
  return (
    <section className="py-28 md:py-40 bg-surface">
      <div className="container-luxe">
        <div className="rounded-3xl bg-deep text-deep-foreground overflow-hidden relative">
          <img
            src={collage2}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#133336] via-[#133336]/85 to-transparent" />
          <div className="relative p-10 md:p-20 max-w-2xl">
            <Facebook strokeWidth={1.2} className="size-12 text-white/80" />
            <p className="mt-6 eyebrow !text-white/60">Community</p>
            <h2 className="mt-4 text-4xl md:text-6xl text-white leading-[1.05]">
              Join our <em className="italic font-light">community.</em>
            </h2>
            <p className="mt-6 text-white/70 max-w-md">
              Follow along for drops, restocks, and members-only finds sourced weekly from Malaysia.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={FB_PAGE} target="_blank" rel="noreferrer" className="btn-primary bg-white !text-[#133336] hover:!bg-white/90">
                Visit Facebook Page <Facebook className="size-4" />
              </a>
              <a href={FB_GROUP} target="_blank" rel="noreferrer" className="btn-outline">
                Join Facebook Group <Users className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-luxe grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <motion.p {...fadeUp} className="eyebrow">Contact</motion.p>
          <motion.h2 {...fadeUp} className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Let's find your <em className="italic font-light">next piece.</em>
          </motion.h2>
          <motion.p {...fadeUp} className="mt-6 text-foreground/60 leading-relaxed max-w-md">
            Send us a product link via Facebook Messenger or WhatsApp and we'll take it from there.
          </motion.p>

          <motion.a
            {...fadeUp}
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10 !bg-[#25D366] hover:!bg-[#1eb955]"
          >
            <MessageCircle className="size-4" /> Message on WhatsApp
          </motion.a>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <ContactCard label="Owner" value="Mahim Chowdhury Katha" />
          <ContactCard label="CEO" value="Akibul Hasan Arman" />
          <ContactCard label="Email" value="thearcticdaze@gmail.com" href="mailto:thearcticdaze@gmail.com" icon={<Mail className="size-4" />} />
          <ContactCard label="Phone" value="01930647457" href="tel:+8801930647457" icon={<Phone className="size-4" />} />
          <ContactCard label="Facebook Page" value="@arcticdaze11" href={FB_PAGE} external icon={<Facebook className="size-4" />} />
          <ContactCard label="Facebook Group" value="Join the group" href={FB_GROUP} external icon={<Users className="size-4" />} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label, value, href, external, icon,
}: {
  label: string; value: string; href?: string; external?: boolean; icon?: React.ReactNode;
}) {
  const Wrap: any = href ? "a" : "div";
  const props = href ? { href, ...(external ? { target: "_blank", rel: "noreferrer noopener" } : {}) } : {};
  return (
    <motion.div {...fadeUp}>
      <Wrap
        {...props}
        className="group block bg-surface border border-border rounded-2xl p-6 md:p-8 h-full transition-all hover:bg-background hover:shadow-[var(--shadow-lift)] hover:-translate-y-1"
      >
        <div className="flex items-start justify-between">
          <p className="eyebrow">{label}</p>
          {icon}
        </div>
        <p className="mt-4 text-xl md:text-2xl leading-tight" style={{ fontFamily: "var(--font-display)" }}>{value}</p>
        {href && (
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase text-accent">
            {external ? "Open" : "Contact"} <ArrowUpRight className="size-3" />
          </p>
        )}
      </Wrap>
    </motion.div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-deep text-deep-foreground pt-20 pb-10">
      <div className="container-luxe">
        <div className="grid md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              {/* < src={\Arctic_Logo.jpg} alt="Arctic Daze" className="size-12 rounded-full object-cover" /> */}

              <img
                src={logo}
                alt="Arctic Daze"
                className="size-12 rounded-full object-cover"
              />
              <span className="text-xl tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
                Arctic Daze<span className="text-accent">.</span>
              </span>
            </div>
            <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
              Premium men's fashion imported from Malaysia. Sourced with intent, delivered with care.
            </p>
            <div className="mt-8 flex gap-3">
              <a href={FB_PAGE} target="_blank" rel="noreferrer" aria-label="Facebook" className="size-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep transition">
                <Facebook className="size-4" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="size-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep transition">
                <MessageCircle className="size-4" />
              </a>
              <a href="mailto:thearcticdaze@gmail.com" aria-label="Email" className="size-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep transition">
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow !text-white/50">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/70 hover:text-white transition text-sm">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow !text-white/50">Get in touch</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><a className="hover:text-white" href="mailto:thearcticdaze@gmail.com">thearcticdaze@gmail.com</a></li>
              <li><a className="hover:text-white" href="tel:+8801930647457">01930647457</a></li>
              <li><a className="hover:text-white" target="_blank" rel="noreferrer" href={FB_GROUP}>Facebook Community Group</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50 tracking-wide">
          <p>© 2026 Arctic Daze. Premium Men's Fashion Imported From Malaysia.</p>
          <p>Crafted with quiet obsession.</p>
        </div>
      </div>
    </footer>
  );
}
