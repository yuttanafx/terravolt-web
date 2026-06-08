import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#090d16] text-white min-h-screen font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ccff00]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation Bar */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-5 max-w-7xl mx-auto border-b border-white/5 backdrop-blur-md bg-[#090d16]/50 sticky top-0">
        <div className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-[#ccff00] bg-clip-text text-transparent">
          TERRAVOLT
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-[#ccff00] transition">ฟีเจอร์</a>
          <a href="#ecosystem" className="hover:text-[#ccff00] transition">ระบบนิเวศ</a>
          <a href="#about" className="hover:text-[#ccff00] transition">เกี่ยวกับเรา</a>
        </div>
        <button className="bg-[#ccff00] text-black text-xs md:text-sm px-5 py-2.5 rounded-full font-bold hover:bg-[#b5e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition duration-300">
          ดาวน์โหลดแอป
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 text-center md:text-left md:flex items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs text-slate-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
            <span>Ecosystem สำหรับช่างเทคนิคยุคใหม่</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            The Premium <br />
            <span className="bg-gradient-to-r from-[#ccff00] to-emerald-400 bg-clip-text text-transparent">
              Technician App
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl font-light leading-relaxed">
            ยกระดับมาตรฐานการบริหารจัดการงานช่างระดับพรีเมียม ขับเคลื่อนด้วยระบบอัจฉริยะ 
            มอบประสบการณ์การบริการที่แม่นยำ ปลอดภัย และทรงประสิทธิภาพสูงสุด
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start pt-4">
            <a href="#download" className="bg-white text-black px-8 py-3.5 rounded-xl font-bold text-center hover:bg-slate-200 transition duration-300 shadow-lg">
              เข้าร่วมเป็นช่างพรีเมียม
            </a>
            <a href="#features" className="border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-3.5 rounded-xl font-bold text-center hover:bg-white/10 transition duration-300">
              เรียนรู้เพิ่มเติม
            </a>
          </div>
        </div>
        
        {/* App Mockup Component */}
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00]/10 to-transparent rounded-full blur-3xl w-72 h-72 mx-auto my-auto"></div>
          <div className="relative w-64 h-[520px] bg-[#0d1527] border-4 border-slate-800 rounded-[2.5rem] shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
            <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-4"></div>
            {/* Mock App UI */}
            <div className="flex-1 space-y-4 text-left">
              <div className="bg-[#ccff00]/10 border border-[#ccff00]/20 rounded-xl p-3">
                <p className="text-[10px] text-[#ccff00] font-bold uppercase">สถานะระบบ</p>
                <p className="text-sm font-bold">พร้อมปฏิบัติงาน</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 space-y-2">
                <p className="text-[10px] text-slate-400">งานพรีเมียมที่ได้รับมอบหมาย</p>
                <div className="h-2 bg-white/10 rounded w-3/4"></div>
                <div className="h-2 bg-white/10 rounded w-1/2"></div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-slate-400">ประสิทธิภาพ</p>
                  <p className="text-xs font-bold text-emerald-400">98.5% เต็มประสิทธิภาพ</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">✓</div>
              </div>
            </div>
            <div className="h-1 w-24 bg-white/20 rounded-full mx-auto mt-2"></div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            ขับเคลื่อนการทำงานด้วยฟีเจอร์อัจฉริยะ
          </h2>
          <p className="text-slate-400 font-light">
            สถาปัตยกรรมและเครื่องมือที่ออกแบบมาเฉพาะเพื่อยกระดับความเร็ว ความแม่นยำ และความน่าเชื่อถือ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-[#ccff00]/30 transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 flex items-center justify-center text-[#ccff00] font-bold text-xl mb-6 group-hover:scale-110 transition duration-300">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-3">Real-time Dispatching</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              ระบบจับคู่และกระจายงานช่างเทคนิคอัจฉริยะ ทำงานทันทีเมื่อมีการแจ้งเตือนด้วยความหน่วงต่ำที่สุด
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-[#ccff00]/30 transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl mb-6 group-hover:scale-110 transition duration-300">
              📊
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Analytics</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              วิเคราะห์ประสิทธิภาพและประมวลผลข้อมูลทางเทคนิคได้อย่างแม่นยำ เพื่อการบำรุงรักษาเชิงป้องกัน
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-[#ccff00]/30 transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl mb-6 group-hover:scale-110 transition duration-300">
              🛡️
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Security</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              ระบบรักษาความปลอดภัยของข้อมูลขั้นสูง ปลอดภัยในทุกธุรกรรมและการจัดเก็บประวัติการทำงาน
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#05080f] py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Terravolteco Co., Ltd. All rights reserved.</p>
      </footer>

    </div>
  );
}
