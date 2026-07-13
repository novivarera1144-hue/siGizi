import { useState } from 'react';
import { Scan, Activity, TrendingUp, Star, BarChart3, MessageSquare, Upload, Bot, Award, CheckCircle, Leaf, Play, Moon } from 'lucide-react';
import Auth from './Auth'; // Pastikan file Auth.tsx sudah dibuat di folder yang sama
import { router } from '@inertiajs/react';

type Page = "home" | "about" | "login" | "register" | "dashboard";

const FOOD_GALLERY = [
  { name: "Nasi Goreng Ayam", kal: "450 kkal", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80" },
  { name: "Smoothie Bowl", kal: "320 kkal", img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80" },
  { name: "Salad Sayuran", kal: "210 kkal", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80" },
  { name: "Ikan Panggang", kal: "380 kkal", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80" },
  { name: "Avocado Toast", kal: "290 kkal", img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&auto=format&fit=crop&q=80" },
  { name: "Fruit Bowl", kal: "185 kkal", img: "https://images.unsplash.com/photo-1519623286359-e9f3cbef015b?w=600&auto=format&fit=crop&q=80" },
];

const FEATURES = [
  { title: "Scan AI", desc: "Upload foto makanan, AI identifikasi dan analisis nutrisi dalam hitungan detik.", icon: <Scan size={26} className="text-[#1B7C43]" />, bg: "bg-[#EBF5EE]" },
  { title: "Health Insight", desc: "Penjelasan kualitas gizi: apakah tinggi kalori, kurang protein, atau sudah seimbang.", icon: <Activity size={26} className="text-blue-600" />, bg: "bg-blue-50" },
  { title: "Daily Tracker", desc: "Pantau total asupan nutrisi harianmu dan perkembangan pola makan dari waktu ke waktu.", icon: <TrendingUp size={26} className="text-green-600" />, bg: "bg-green-50" },
  { title: "Food Score", desc: "Nilai kesehatan makanan 1-100 berdasarkan keseimbangan nutrisi dan kandungan gizinya.", icon: <Star size={26} className="text-amber-500" />, bg: "bg-amber-50" },
  { title: "Laporan Mingguan", desc: "Grafik dan ringkasan pola konsumsi nutrisi lengkap selama satu minggu penuh.", icon: <BarChart3 size={26} className="text-purple-600" />, bg: "bg-purple-50" },
  { title: "AI Nutrition Chat", desc: "Tanya jawab nutrisi langsung dengan AI assistant yang siap membantu kapan saja.", icon: <MessageSquare size={26} className="text-orange-500" />, bg: "bg-orange-50" },
];

/* ─── MAIN COMPONENT ─── */
export default function Home() {
  const [page, setPage] = useState<Page>("home");

  // Jika user menekan tombol Login atau Register, arahkan ke Auth.tsx
  if (page === "login" || page === "register") {
    return (
      <Auth 
        initialMode={page === "login" ? "login" : "register"}
        onBackToHome={() => setPage("home")} 
        onLoginSuccess={() => router.visit('/dashboard')} 
      />
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {page === "home" ? (
        <PageHomeContent navigate={setPage} />
      ) : (
        <div className="p-10 text-center flex flex-col items-center justify-center min-h-screen bg-slate-50">
          <h1 className="text-2xl font-bold text-slate-800 uppercase">Halaman {page}</h1>
          <button onClick={() => setPage("home")} className="mt-4 px-6 py-2.5 bg-[#1B7C43] text-white rounded-xl font-bold text-sm">Kembali ke Beranda</button>
        </div>
      )}
    </div>
        
  );
}

/* ─── LANDING PAGE CONTENT COMPONENT ─── */
function PageHomeContent({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-slate-700 select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* 1. NAVBAR */}
      <nav className="w-full h-24 bg-white border-b border-slate-100 flex items-center justify-between px-8 md:px-24 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("home")}>
          <img src="https://i.postimg.cc/85zX766G/sigizi-logo.png" onError={(e)=>{e.currentTarget.src="https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=800"}} alt="siGizi" className="h-11 w-auto" />
          <span className="text-2xl font-bold tracking-tight"><span className="text-[#1B7C43]">si</span><span className="text-[#E29A13]">Gizi</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          <button onClick={() => navigate("home")} className="text-lg font-bold text-[#1B7C43] border-b-4 border-[#1B7C43] pb-1.5">Home</button>
          <button onClick={() => navigate("about")} className="text-lg font-bold text-slate-500 hover:text-[#1B7C43] transition-colors">Tentang Kami</button>
        </div>
        
        <div className="flex items-center gap-6">
          <button onClick={() => navigate("login")} className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-2xl font-bold text-base hover:bg-slate-50 transition-colors">Login</button>
          <button onClick={() => navigate("register")} className="px-6 py-3 bg-[#1B7C43] text-white rounded-2xl font-bold text-base hover:bg-[#145c32] transition-all shadow-md">Register</button>
          <button className="text-slate-400 hover:text-slate-600 transition-colors ml-2">
            <Moon size={22} />
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative w-full min-h-[680px] lg:min-h-[calc(100vh-96px)] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=1600&h=900&fit=crop&auto=format" 
            alt="Fresh Veggies Background" 
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-8 md:px-24 grid lg:grid-cols-12 gap-12 items-center py-16">
          <div className="flex flex-col gap-6 lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/25 rounded-full w-fit text-sm font-bold text-white tracking-wide shadow-md">
              <span className="text-[#E29A13]">✦</span> Didukung Teknologi AI
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.12] tracking-tight">
              Kenali Gizi<br />
              <span className="text-[#E29A13]">Makananmu</span><br />
              Dalam Detik
            </h1>
            
            <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl font-semibold">
              Foto makananmu → AI analisis kandungan nutrisi → dapatkan insight kesehatan dan rekomendasi pola makan sehatmu.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <button onClick={() => navigate("login")} className="flex items-center gap-3 px-8 py-4 bg-[#1B7C43] text-white rounded-2xl font-bold text-base hover:bg-[#145c32] transition-all shadow-xl hover:scale-[1.02]">
                <Scan size={20} /> Mulai Scan Sekarang
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl font-bold text-white text-base hover:bg-white/20 transition-all">
                <Play size={16} fill="currentColor" /> Lihat Demo
              </button>
            </div>
            
            <div className="flex gap-14 mt-4 pt-6 border-t border-white/10 w-fit">
              {[["10K+","Pengguna"], ["98%","Akurasi AI"], ["500+","Menu Dikenal"]].map(([v,l]) => (
                <div key={l}>
                  <p className="text-3xl font-black text-white">{v}</p>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-wider mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* KANAN: KARTU PREVIEW */}
          <div className="relative flex justify-center lg:justify-end lg:col-span-5">
            <div className="w-full max-w-[420px] bg-white rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden p-6 flex flex-col gap-6 border border-slate-100">
              <div className="relative h-56 rounded-3xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80" alt="Food" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <p className="font-bold text-2xl text-white">Nasi Goreng Ayam</p>
                  <p className="text-sm text-white/80 mt-1">1 porsi ≈ 250g</p>
                </div>
                <div className="absolute top-5 right-6 bg-[#1B7C43] text-white text-xs font-bold px-4 py-2 rounded-full">Skor 72</div>
              </div>
              
              <div className="grid grid-cols-4 gap-2.5">
                {[
                  { l:"Kalori", v:"450 kkal", c:"bg-orange-50 text-orange-600" },
                  { l:"Protein", v:"18g",      c:"bg-blue-50 text-blue-600" },
                  { l:"Lemak",  v:"12g",      c:"bg-yellow-50 text-yellow-600" },
                  { l:"Karbo",  v:"62g",      c:"bg-green-50 text-green-600" },
                ].map(n => (
                  <div key={n.l} className={`flex flex-col items-center py-4 px-1 rounded-2xl ${n.c} border border-current/10`}>
                    <span className="text-sm font-black leading-none">{n.v}</span>
                    <span className="text-[10px] mt-1.5 font-bold uppercase opacity-85 tracking-tight">{n.l}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3.5 bg-[#EBF5EE] rounded-2xl border border-emerald-100">
                <p className="text-sm text-[#1B7C43] font-bold">✓ Kalori sedang — cocok untuk makan siang aktif</p>
              </div>
            </div>

            <div className="absolute top-12 left-[-20px] bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-slate-100 flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
              <p className="text-sm font-black text-slate-800">450 kkal</p>
            </div>
            
            <div className="absolute -bottom-4 right-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-slate-100 flex items-center gap-2">
              <CheckCircle size={16} className="text-[#1B7C43] fill-[#1B7C43] stroke-white" />
              <p className="text-sm font-black text-slate-800">Analisis selesai</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CARA KERJA SECTION */}
      <section className="py-24 px-8 md:px-24 bg-white">
        <div className="max-w-[1300px] mx-auto text-center">
          <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Cara Kerja</span>
          <h2 className="text-4xl font-extrabold text-[#0F291B] mt-2 mb-20">Hanya 3 Langkah Mudah</h2>
          
          <div className="relative grid md:grid-cols-3 gap-16 md:gap-8">
            <div className="absolute top-14 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-200 hidden md:block z-0" />
            
            {[
              { step: 1, title: "Upload Foto", desc: "Foto makanan yang ingin kamu ketahui nutrisinya.", icon: <Upload size={26} className="text-[#1B7C43]" />, bg: "bg-[#EBF5EE]" },
              { step: 2, title: "AI Analisis", desc: "Sistem AI mengenali jenis makanan dan menghitung nutrisinya dalam detik.", icon: <Bot size={26} className="text-amber-600" />, bg: "bg-amber-50" },
              { step: 3, title: "Dapatkan Insight", desc: "Lihat kalori, nutrisi, skor kesehatan, dan rekomendasi pola makan.", icon: <Award size={26} className="text-emerald-600" />, bg: "bg-emerald-50" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center relative z-10">
                <div className="w-9 h-9 bg-[#1B7C43] text-white rounded-full text-sm font-bold flex items-center justify-center mb-6 border-4 border-white shadow-md">{item.step}</div>
                <div className={`w-20 h-20 rounded-2xl ${item.bg} flex items-center justify-center shadow-md mb-5`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[260px] font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALERI MAKANAN SECTION */}
      <section className="py-24 px-8 md:px-24 bg-white border-t border-slate-50">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Kenali ratusan jenis makanan</h2>
            <p className="text-sm text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed font-semibold">
              Dari masakan Indonesia hingga internasional, siGizi mengenali kandungan nutrisi ribuan jenis makanan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FOOD_GALLERY.map((food, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md relative group h-64">
                <div className="h-full w-full overflow-hidden">
                  <img src={food.img} alt={food.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                  <div>
                    <h3 className="font-bold text-lg tracking-wide">{food.name}</h3>
                    <p className="text-xs text-white/80 mt-1 font-semibold">{food.kal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FITUR UNGGULAN SECTION */}
      <section className="py-24 px-8 md:px-24 bg-white border-t border-slate-100">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feat, i) => (
              <div key={i} className="bg-white border-2 border-slate-100/80 rounded-3xl p-8 flex flex-col gap-5 shadow-sm hover:border-slate-300 transition-all">
                <div className={`w-12 h-12 rounded-2xl ${feat.bg} flex items-center justify-center shadow-sm`}>{feat.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{feat.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2.5 font-semibold">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONI SECTION */}
      <section className="py-24 px-8 md:px-24 bg-[#F4F7F5]">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Testimoni</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Apa kata mereka?</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { name: "Rizki Pratama", role: "Mahasiswa", text: `"siGizi bantu aku ngerti kandungan nasi kos harianku. Sekarang lebih terkontrol makannya!"`, init: "R", color: "bg-emerald-50 text-[#1B7C43]" },
              { name: "Sari Dewi", role: "Ibu rumah tangga", text: `"Fitur scan-nya sangat praktis! Tinggal foto, langsung tahu kalori and nutrisinya."`, init: "S", color: "bg-amber-50 text-[#E29A13]" },
              { name: "Budi Setiawan", role: "Pekerja kantoran", text: `"AI Assistant-nya helpful banget. Jawab pertanyaan nutrisi dengan jelas dan mudah dipahami."`, init: "B", color: "bg-blue-50 text-blue-600" }
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 flex flex-col justify-between gap-6 shadow-sm border border-slate-100">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-0.5 text-amber-400 text-sm">★★★★★</div>
                  <p className="text-sm text-slate-500 leading-relaxed font-semibold">{t.text}</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold shadow-sm`}>{t.init}</div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-bold mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="w-full relative min-h-[360px] bg-emerald-900 flex items-center justify-center text-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=1600&fit=crop&auto=format" 
            alt="Veggies CTA Background" 
            className="w-full h-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#1B7C43]/90" />
        </div>

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-4 text-white py-16">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-1 shadow-md">
            <Leaf size={22} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Mulai hidup lebih sehat hari ini</h2>
          <p className="text-base text-white/80 leading-relaxed font-semibold max-w-xl">
            Bergabung dengan ribuan pengguna yang sudah memantau gizi mereka dengan siGizi — gratis, mudah, dan akurat.
          </p>
          <button onClick={() => navigate("register")} className="mt-3 px-8 py-4 bg-[#E29A13] text-white rounded-2xl font-bold text-sm hover:bg-[#c7850f] transition-all shadow-xl hover:scale-[1.02]">
            Daftar Gratis Sekarang →
          </button>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="w-full bg-white py-10 px-8 md:px-24 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 font-bold">
        <div className="flex items-center gap-3">
          <img src="https://i.postimg.cc/85zX766G/sigizi-logo.png" onError={(e)=>{e.currentTarget.src="https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=50"}} alt="siGizi" className="h-8 w-auto" />
          <span className="font-bold text-lg text-[#1B7C43]">siGizi</span>
        </div>
        <p className="my-4 sm:my-0 text-center text-slate-400/80">© 2025 siGizi — Sistem Informasi Gizi Berbasis AI • Nutrisi Untuk Hidup Lebih Baik</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#1B7C43] transition-colors">Privasi</a>
          <a href="#" className="hover:text-[#1B7C43] transition-colors">Syarat</a>
          <a href="#" className="hover:text-[#1B7C43] transition-colors">Kontak</a>
        </div>
      </footer>

    </div>
  );
}