import React, { useState } from 'react';
import { Moon } from 'lucide-react';
import { useForm } from '@inertiajs/react';

interface AuthProps {
  initialMode: 'login' | 'register';
  onBackToHome: () => void;
  onLoginSuccess: () => void;
}

export default function Auth({ initialMode, onBackToHome, onLoginSuccess }: AuthProps) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');

  // Menggunakan useForm dari Inertia agar terkoneksi dengan backend Laravel
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // Mengirim data ke route login Laravel
      post(route('login'), {
        onSuccess: () => onLoginSuccess(),
      });
    } else {
      // Mengirim data ke route register Laravel
      post(route('register'), {
        onSuccess: () => onLoginSuccess(),
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAF7] text-slate-700 flex flex-col items-center select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* NAVBAR */}
      <nav className="w-full h-24 bg-white border-b border-slate-100 flex items-center justify-between px-8 md:px-24 sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onBackToHome}>
          <img src="https://i.postimg.cc/85zX766G/sigizi-logo.png" alt="siGizi" className="h-11 w-auto" />
          <span className="text-2xl font-bold tracking-tight"><span className="text-[#1B7C43]">si</span><span className="text-[#E29A13]">Gizi</span></span>
        </div>
        
        <div className="flex items-center gap-6">
          <button onClick={() => setIsLogin(true)} className={`px-6 py-3 border-2 rounded-2xl font-bold ${isLogin ? 'border-[#1B7C43] text-[#1B7C43]' : 'border-slate-300'}`}>Login</button>
          <button onClick={() => setIsLogin(false)} className={`px-6 py-3 rounded-2xl font-bold ${!isLogin ? 'bg-[#1B7C43] text-white' : 'bg-slate-100'}`}>Register</button>
        </div>
      </nav>

      {/* FORM CONTAINER */}
      <div className="w-full max-w-[560px] mx-auto px-6 py-12">
        <div className="w-full bg-white rounded-[32px] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-10 flex flex-col gap-6">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* NAMA (Register) */}
            {!isLogin && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-slate-400 uppercase">Nama Lengkap</label>
                <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full px-5 py-4 bg-[#EBF0EB]/40 rounded-2xl" required />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>
            )}

            {/* EMAIL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black text-slate-400 uppercase">Email</label>
              <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full px-5 py-4 bg-[#EBF0EB]/40 rounded-2xl" required />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black text-slate-400 uppercase">Password</label>
              <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} className="w-full px-5 py-4 bg-[#EBF0EB]/40 rounded-2xl" required />
            </div>

            {/* KONFIRMASI PASSWORD */}
            {!isLogin && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-slate-400 uppercase">Konfirmasi Password</label>
                <input type="password" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} className="w-full px-5 py-4 bg-[#EBF0EB]/40 rounded-2xl" required />
              </div>
            )}

            <button type="submit" disabled={processing} className="w-full py-4 bg-[#1B7C43] text-white font-bold rounded-2xl active:scale-[0.99]">
              {processing ? 'Memproses...' : (isLogin ? "Masuk" : "Daftar Sekarang")}
            </button>
          </form>

          <div className="text-center text-sm font-semibold text-slate-400">
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-[#1B7C43] font-bold">
              {isLogin ? "Daftar sekarang" : "Masuk"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}