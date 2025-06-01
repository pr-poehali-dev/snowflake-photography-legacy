import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ComparisonSection = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-700">
            Историческое сравнение
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Сигсон vs Бентли
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Сравнение двух пионеров макрофотографии снежинок: русского
            первопроходца и американского популяризатора
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-200 bg-blue-50/50">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🇷🇺</span>
              </div>
              <CardTitle className="text-2xl text-blue-800">
                Андрей Сигсон
              </CardTitle>
              <Badge className="bg-green-100 text-green-800 mx-auto">
                Первый в мире
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-800">Страна:</strong>
                  <div>Россия</div>
                </div>
                <div>
                  <strong className="text-blue-800">Годы работы:</strong>
                  <div>1870-1900</div>
                </div>
                <div>
                  <strong className="text-blue-800">Место:</strong>
                  <div>Рыбинск</div>
                </div>
                <div>
                  <strong className="text-blue-800">Признание:</strong>
                  <div>Золото в Париже</div>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Достижения:
                </h4>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>• Первые в мире фото снежинок</li>
                  <li>• Изобрел революционную технику</li>
                  <li>• Опередил Бентли на 28 лет</li>
                  <li>• Высочайшее качество снимков</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 bg-orange-50/50">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🇺🇸</span>
              </div>
              <CardTitle className="text-2xl text-orange-800">
                Уилсон Бентли
              </CardTitle>
              <Badge className="bg-yellow-100 text-yellow-800 mx-auto">
                Популяризатор
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-orange-800">Страна:</strong>
                  <div>США</div>
                </div>
                <div>
                  <strong className="text-orange-800">Годы работы:</strong>
                  <div>1898-1931</div>
                </div>
                <div>
                  <strong className="text-orange-800">Место:</strong>
                  <div>Вермонт</div>
                </div>
                <div>
                  <strong className="text-orange-800">Известность:</strong>
                  <div>Мировая слава</div>
                </div>
              </div>

              <div className="pt-4 border-t border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Особенности:
                </h4>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>• Начал работу через 28 лет после Сигсона</li>
                  <li>• Более простая техника съемки</li>
                  <li>• Активная самореклама</li>
                  <li>• Качество фото ниже</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-slate-50 border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Историческая справедливость
            </h3>
            <p className="text-slate-600 max-w-2xl">
              Андрей Сигсон опередил знаменитого американца Уилсона Бентли почти
              на 30 лет, но остался незаслуженно забытым в мировой истории
              фотографии
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
