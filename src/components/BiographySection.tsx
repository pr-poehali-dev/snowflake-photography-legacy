import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BiographySection = () => {
  const timeline = [
    {
      year: "1839",
      title: "Рождение в Варшаве",
      description:
        "22 марта в Варшаве родился будущий первопроходец макрофотографии",
      color: "bg-blue-500",
    },
    {
      year: "1860",
      title: "Фотомастерская в Рыбинске",
      description:
        "Открытие собственной фотомастерской, начало пути в искусстве фотографии",
      color: "bg-emerald-500",
    },
    {
      year: "1870-е",
      title: "Революция в макрофотографии",
      description:
        "Изобретение уникального метода съемки снежинок с помощью микроскопа",
      color: "bg-amber-500",
    },
    {
      year: "1900",
      title: "Золотая медаль в Париже",
      description: "Всемирное признание на выставке в Париже — вершина карьеры",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-slate-100 text-slate-700">Биография</Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Путь пионера
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            От портретной съемки в провинциальном Рыбинске до мирового признания
            как первопроходца научной макрофотографии
          </p>
        </div>

        <div className="grid gap-8">
          {timeline.map((event, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {event.year.slice(-2)}
                  </div>
                </div>

                <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-sm">
                        {event.year}
                      </Badge>
                      <CardTitle className="text-xl font-semibold text-slate-800">
                        {event.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {index < timeline.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
