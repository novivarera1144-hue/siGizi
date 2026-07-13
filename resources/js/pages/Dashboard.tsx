import React, { useState } from 'react';
import { LayoutDashboard, ScanLine, BarChart3, History, MessageSquare, User, LogOut, Search, Bell, Moon, Flame, Droplets, Zap, HeartPulse, ChevronRight } from 'lucide-react';
import { useForm } from '@inertiajs/react';

function NavItem({ icon, label, active }: any) {
    return (
        <div className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${active ? 'bg-[#1B7C43] text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
            {icon} <span className="text-sm">{label}</span>
        </div>
    );
}


export default function Dashboard({ logs = [] }: { logs?: any[] }) {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  
  // Inisialisasi useForm untuk mengirim file
  const { post, processing } = useForm({
      image: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Kita kirim pakai cara manual FormData agar lebih aman
      const formData = new FormData();
      formData.append('image', file);

      // Gunakan router dari inertia langsung jika useForm masih merah
      import('@inertiajs/react').then(({ router }) => {
          router.post('/scan', formData, {
            forceFormData: true,
            onSuccess: () => alert('Makanan berhasil dianalisis!'),
            onError: () => alert('Gagal, pastikan file gambar valid.'),
          });
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col justify-between sticky top-0 h-screen">
        <div>
          <div className="flex items-center gap-2 mb-10 text-[#1B7C43] font-bold text-xl">
             <div className="w-8 h-8 bg-[#1B7C43] rounded-lg"></div> siGizi
          </div>
          <nav className="space-y-1">
            <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
            <NavItem icon={<ScanLine size={20}/>} label="Scan Makanan" />
            <NavItem icon={<BarChart3 size={20}/>} label="Lap. Mingguan" />
            <NavItem icon={<History size={20}/>} label="Riwayat Scan" />
            <NavItem icon={<MessageSquare size={20}/>} label="AI Assistant" />
            <NavItem icon={<User size={20}/>} label="Profil" />
          </nav>
        </div>
        <button className="flex items-center gap-2 text-red-500 font-medium"><LogOut size={20}/> Keluar</button>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
             <span>siGizi</span> <span>›</span> <span className="font-bold text-slate-900">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white border rounded-lg px-3 py-1.5 flex items-center gap-2 text-sm text-slate-400"><Search size={16}/> Cari...</div>
            <Moon size={18}/> <Bell size={18}/> <div className="w-8 h-8 bg-[#1B7C43] rounded-full text-white flex items-center justify-center font-bold">B</div>
          </div>
        </header>

        <div className="flex justify-between items-end mb-6">
           <div>
             <p className="text-sm text-slate-400">DASHBOARD</p>
             <h2 className="text-2xl font-bold">Selamat pagi, Budi 👋</h2>
           </div>
           
           {/* Tombol Scan dengan input file tersembunyi */}
           <label className={`bg-[#1B7C43] text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 text-sm cursor-pointer hover:bg-emerald-700 ${processing ? 'opacity-50' : ''}`}>
              <ScanLine size={16}/> 
              <span>{processing ? 'Memproses...' : 'Scan Makanan'}</span>
              <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
           </label>
        </div>

        {/* ... sisa kode statistik dan grafik Anda tetap sama ... */}
        <div className="grid grid-cols-4 gap-4 mb-6">
           {[ {i:Flame, t:"Kalori Hari Ini", v:"1,248", trg:"2,000 kkal", c:"text-orange-500"}, {i:Droplets, t:"Protein", v:"68g", trg:"90g", c:"text-blue-500"}, {i:Zap, t:"Lemak", v:"42g", trg:"65g", c:"text-yellow-500"}, {i:HeartPulse, t:"Karbohidrat", v:"156g", trg:"250g", c:"text-emerald-500"} ].map((s, idx) => (
             <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200">
               <s.i size={20} className={`${s.c} mb-3`} />
               <p className="text-xs text-slate-500">{s.t}</p>
               <h3 className="text-xl font-bold">{s.v}</h3>
               <p className="text-[10px] text-slate-400">Target: {s.trg}</p>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold mb-4">Nutrisi Hari Ini</h3>
            {['Kalori', 'Protein', 'Lemak', 'Karbohidrat'].map((n, i) => (
               <div key={i} className="mb-3">
                  <div className="flex justify-between text-xs mb-1"><span>{n}</span><span className="font-bold">1248/2000g</span></div>
                  <div className="h-2 bg-slate-100 rounded-full"><div className="h-full bg-emerald-500 rounded-full w-[62%]"></div></div>
               </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold mb-4">Riwayat Terbaru</h3>
{logs?.map((r, i) => (
  <div key={i} className="flex justify-between items-center py-2 border-b text-xs">
    <div><p className="font-bold">{r.food_name}</p><p className="text-slate-400">{r.calories} kkal</p></div>
    <div className="bg-emerald-50 px-2 py-1 rounded font-bold text-[#1B7C43]">{r.protein}g P</div>
  </div>
))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex justify-between mb-8 text-sm font-bold">
            <h3>Kalori Minggu Ini</h3> 
            <span className="text-[#1B7C43] cursor-pointer">Lihat laporan →</span>
          </div>
          <div className="h-32 flex items-end gap-10 px-4 relative">
             {['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1 relative group" onMouseEnter={() => setHoveredDay(i)} onMouseLeave={() => setHoveredDay(null)}>
                   {hoveredDay === i && (
                     <div className="absolute -top-20 bg-white border border-slate-200 p-3 rounded-lg shadow-xl z-10 w-24 text-xs">
                        <p className="font-bold">{d}</p>
                        <p className="text-[#1B7C43]">kalori : 1960</p>
                        <p className="text-slate-400">target : 2000</p>
                     </div>
                   )}
                   <div className={`w-full flex gap-1 h-24 items-end p-1 rounded-t ${hoveredDay === i ? 'bg-slate-200' : ''}`}>
                      <div className="w-1/2 h-[60%] bg-[#1B7C43]"></div>
                      <div className="w-1/2 h-[40%] bg-slate-100"></div>
                   </div>
                   <span className="text-xs text-slate-500">{d}</span>
                </div>
             ))}
          </div>
        </div>
      </main>
    </div>
  );
}