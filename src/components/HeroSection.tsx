import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M30%2030l15-15v30l-15-15zm-15%2015h30v-30h-30v30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">
            Первый в мире фотограф снежинок
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-800 mb-6 leading-tight">
            Андрей
            <br />
            <span className="text-blue-700">Сигсон</span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Человек, который в 1870-х годах в Рыбинске совершил революцию в
            макрофотографии, опередив весь мир в искусстве запечатления красоты
            снежинок
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Card className="p-4 bg-white/80 backdrop-blur">
              <div className="text-2xl font-bold text-blue-700">1839-1907</div>
              <div className="text-sm text-slate-600">Годы жизни</div>
            </Card>
            <Card className="p-4 bg-white/80 backdrop-blur">
              <div className="text-2xl font-bold text-amber-600">1900</div>
              <div className="text-sm text-slate-600">Золото в Париже</div>
            </Card>
            <Card className="p-4 bg-white/80 backdrop-blur">
              <div className="text-2xl font-bold text-emerald-600">30+</div>
              <div className="text-sm text-slate-600">Лет исследований</div>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-amber-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <Card className="relative p-8 bg-white/90 backdrop-blur rounded-2xl shadow-2xl">
              <div className="w-full h-80 bg-gradient-to-br from-slate-200 to-blue-200 rounded-xl flex items-center justify-center text-slate-500 text-lg">
                Портрет А.А. Сигсона
                <br />
                (1839-1907)
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-slate-800">
                  Андрей Андреевич Сигсон
                </h3>
                <p className="text-slate-600">Варшава → Рыбинск</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
