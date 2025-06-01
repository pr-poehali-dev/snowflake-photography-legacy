import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SnowflakeGallery = () => {
  const snowflakes = [
    {
      id: 1,
      title: "Звездчатая снежинка",
      year: "1875",
      description:
        "Первая успешная макрофотография снежинки, сделанная Сигсоном",
    },
    {
      id: 2,
      title: "Дендритный кристалл",
      year: "1878",
      description:
        "Сложная древовидная структура, запечатленная в мельчайших деталях",
    },
    {
      id: 3,
      title: "Шестиугольная призма",
      year: "1882",
      description:
        "Идеальная геометрия природы в объективе пионера макрофотографии",
    },
    {
      id: 4,
      title: "Игольчатый кристалл",
      year: "1885",
      description:
        "Тончайшие ледяные иголки, видимые благодаря революционной технике",
    },
    {
      id: 5,
      title: "Розеточная снежинка",
      year: "1890",
      description:
        "Сложная многослойная структура, демонстрирующая мастерство фотографа",
    },
    {
      id: 6,
      title: "Столбчатый кристалл",
      year: "1895",
      description:
        "Одна из последних работ Сигсона, показывающая совершенство техники",
    },
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-blue-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700">
            Галерея работ
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Шедевры макрофотографии
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Уникальная коллекция снежинок, запечатленных революционным методом
            Сигсона с использованием микроскопа и специального охлаждения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snowflakes.map((snowflake) => (
            <Card
              key={snowflake.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center text-slate-500 text-sm rounded-t-lg">
                    <div className="text-center">
                      <div className="text-6xl mb-2">❄️</div>
                      <div>Фото снежинки</div>
                      <div className="text-xs">{snowflake.year}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/80 text-slate-700 backdrop-blur">
                      {snowflake.year}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {snowflake.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {snowflake.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-amber-50 border-amber-200">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h3 className="text-lg font-semibold text-amber-800">
                  Революционная техника
                </h3>
                <p className="text-amber-700 text-sm">
                  Охлаждение рук в снегу + микроскоп + дыхание через трубку
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SnowflakeGallery;
