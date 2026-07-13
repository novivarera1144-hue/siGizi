import React from "react";
import {
  Zap,
  Scan,
  Play,
  Upload,
  Bot,
  Award,
  Flame,
  CheckCircle,
  Activity,
  TrendingUp,
  Star,
  BarChart2,
  Leaf,
} from "lucide-react";

// MOCK DATA FOODS AGAR TIDAK EROR MISSING IMPORT
const FOODS = [
  { name: "Nasi Goreng Ayam", kal: 450, score: 75, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60" },
  { name: "Gado-Gado", kal: 318, score: 88, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60" },
  { name: "Sate Ayam", kal: 350, score: 70, img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop&q=60" }
];

export default function PageHome({
    navigate,
}: {
    navigate: (page: string) => void;
}) {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden md:min-h-[85vh] md:flex md:items-center w-full"> 
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=1600&h=900&fit=crop&auto=format"
            alt="Colorful fresh ingredients"
            className="w-full h-full object-cover"
          />
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-black/75 md:hidden" />
          {/* Desktop Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 hidden md:block dark:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a0e]/92 via-[#0d1a0e]/60 to-[#0d1a0e]/20 hidden dark:md:block" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-20 w-full flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Text + CTA column */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full w-fit text-xs font-semibold text-white">
              <Zap size={12} className="text-yellow-400" />
              Didukung Teknologi AI
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Kenali Gizi<br />
              <span className="text-emerald-400">Makananmu</span><br />
              Dalam Detik
            </h1>
            <p className="text-white/80 leading-relaxed max-w-md text-sm md:text-base">
              Foto makananmu → AI analisis kandungan nutrisi → dapatkan insight kesehatan dan rekomendasi pola makan sehatmu.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => navigate("scan")} className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-900/30 hover:scale-105 text-sm">
                <Scan size={16} />Mulai Scan Sekarang
              </button>
              <button onClick={() => navigate("about")} className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl font-semibold text-white hover:bg-white/25 transition-colors text-sm">
                <Play size={13} />Lihat Demo
              </button>
            </div>
            {/* Stats */}
            <div className="flex gap-6 mt-2">
              {[["10K+","Pengguna"], ["98%","Akurasi AI"], ["500+","Menu Dikenal"]].map(([v,l]) => (
                <div key={l}>
                  <p className="text-xl md:text-2xl font-extrabold text-white">{v}</p>
                  <p className="text-white/60 text-[10px] md:text-xs">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nasi Goreng preview card */}
          <div className="flex justify-center relative md:mt-0">
            <div className="w-full max-w-[300px] md:w-72 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="relative h-36 md:h-44 overflow-hidden">
                <img src={FOODS[0].img} alt={FOODS[0].name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-bold text-sm text-white">{FOODS[0].name}</p>
                  <p className="text-xs text-white/80">1 porsi ≈ 250g</p>
                </div>
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                  Skor {FOODS[0].score}
                </div>
              </div>
              <div className="p-3 md:p-4 flex flex-col gap-2.5 md:gap-3">
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { l:"Kalori", v:"450 kkal", c:"bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
                    { l:"Protein", v:"18g",     c:"bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
                    { l:"Lemak",  v:"12g",      c:"bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300" },
                    { l:"Karbo",  v:"62g",      c:"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300" },
                  ].map(n => (
                    <div key={n.l} className={`flex flex-col items-center p-1.5 md:p-2 rounded-xl ${n.c}`}>
                      <span className="text-[10px] md:text-xs font-extrabold leading-none">{n.v}</span>
                      <span className="text-[8px] md:text-[9px] mt-0.5 opacity-75">{n.l}</span>
                    </div>
                  ))}
                </div>
                <div className="px-2.5 py-1.5 md:px-3 md:py-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                  <p className="text-[10px] md:text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">✓ Kalori sedang — cocok untuk makan siang aktif</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="hidden md:block absolute -top-4 -left-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-3 py-2.5 shadow-xl">
              <p className="text-xs font-bold text-orange-500 flex items-center gap-1.5"><Flame size={12} />450 kkal</p>
            </div>
            <div className="hidden md:block absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-3 py-2.5 shadow-xl">
              <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5"><CheckCircle size={12} />Analisis selesai</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Cara Kerja</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Hanya 3 Langkah Mudah</h2>
          </div>
          <div className="relative grid sm:grid-cols-3 gap-8">
            <div className="hidden sm:block absolute top-[15px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] border-t-2 border-dashed border-slate-200 dark:border-slate-800" />
            {[
              { step:"1", icon:<Upload size={24}/>, title:"Upload Foto", desc:"Foto makanan yang ingin kamu ketahui nutrisinya.", color:"bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30" },
              { step:"2", icon:<Bot size={24}/>, title:"AI Analisis", desc:"Sistem AI mengenali jenis makanan dan menghitung nutrisinya dalam detik.", color:"bg-amber-50 text-amber-600 dark:bg-amber-950/30" },
              { step:"3", icon:<Award size={24}/>, title:"Dapatkan Insight", desc:"Lihat kalori, nutrisi, skor kesehatan, dan rekomendasi pola makan.", color:"bg-blue-50 text-blue-600 dark:bg-blue-950/30" },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-3">
                <div className="w-[28px] h-[28px] rounded-full bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center shadow-md z-10 shrink-0">
                  {s.step}
                </div>
                <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center shadow-sm`}>{s.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food gallery */}
      <section className="py-16 px-4 sm:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Makanan Terdukung</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Kenali ratusan jenis makanan</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {FOODS.map(f => (
              <div key={f.name} onClick={() => navigate("scan")} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all bg-white dark:bg-slate-900">
                <div className="aspect-[4/3]">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-bold text-sm leading-tight">{f.name}</p>
                  <p className="text-white/70 text-xs">{f.kal} kkal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}