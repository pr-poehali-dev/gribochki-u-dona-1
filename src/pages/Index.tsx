import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const products = [
    {
      id: 1,
      name: "Грузди солёные классические",
      weight: "1 литр",
      price: "1000₽",
      description: "Традиционный рецепт засолки донских груздей",
      emoji: "🍄"
    },
    {
      id: 2,
      name: "Грузди с пряностями",
      weight: "1 литр", 
      price: "1000₽",
      description: "С добавлением чеснока и ароматных специй",
      emoji: "🍄"
    },
    {
      id: 3,
      name: "Рядовка донская солёная",
      weight: "0.5 литра",
      price: "600₽",
      description: "Нежные рядовки с приятным вкусом и ароматом",
      emoji: "🌾"
    },
    {
      id: 4,
      name: "Грузди холодной засолки",
      weight: "1 литр",
      price: "1000₽",
      description: "Хрустящие грузди по бабушкиному рецепту",
      emoji: "🍄"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79996253450?text=Здравствуйте! Интересуют ваши грузди', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              🍄 Грибочки у Дона
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#products" className="hover:opacity-80 transition-opacity">Продукция</a>
              <a href="#contacts" className="hover:opacity-80 transition-opacity">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Донские грузди по традиционным рецептам
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Собираем и заготавливаем грибы с любовью. Каждая баночка — это вкус детства и домашнего уюта.
              </p>
              <Button size="lg" className="text-lg" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                Заказать грузди
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/c3f499ce-075a-4b21-9e2c-9309d664b956.jpg" 
                  alt="Грузди донские в банках"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground">Только натуральные ингредиенты и проверенные рецепты</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{product.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Icon name="Package" size={18} />
                  <span>{product.weight}</span>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button variant="outline" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                    Заказать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши грибочки</h2>
            <p className="text-xl text-muted-foreground">Смотрите, как выглядит наша продукция</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in aspect-square">
              <img 
                src="https://cdn.poehali.dev/files/4f0af787-3ad8-4afd-8c7f-6b6682663ce3.jpg"
                alt="Грузди солёные в банках"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in aspect-square" style={{ animationDelay: '100ms' }}>
              <img 
                src="https://cdn.poehali.dev/files/227899af-011a-4d70-adb9-3a3fa35d9a4b.jpg"
                alt="Грузди крупным планом"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in aspect-square" style={{ animationDelay: '200ms' }}>
              <img 
                src="https://cdn.poehali.dev/files/177e6b9e-43b1-47d1-92d8-9e25d70e44b4.jpg"
                alt="Грузди с пряностями"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in aspect-square" style={{ animationDelay: '300ms' }}>
              <img 
                src="https://cdn.poehali.dev/files/84c840d3-25bb-4066-b381-69a74162e768.jpg"
                alt="Грузди в контейнере"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы наших покупателей</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас те, кто попробовал наши грузди</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 animate-fade-in hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                  👩
                </div>
                <div>
                  <h4 className="font-bold">Елена</h4>
                  <div className="flex gap-1 text-yellow-500">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Заказывала грузди классические — просто восторг! Как у бабушки в деревне. Хрустящие, ароматные. Всей семье понравились!"
              </p>
            </Card>

            <Card className="p-6 animate-fade-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                  👨
                </div>
                <div>
                  <h4 className="font-bold">Дмитрий</h4>
                  <div className="flex gap-1 text-yellow-500">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Рядовки — это что-то! Никогда раньше не пробовал, а теперь заказываю постоянно. Очень вкусные и нежные."
              </p>
            </Card>

            <Card className="p-6 animate-fade-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                  👵
                </div>
                <div>
                  <h4 className="font-bold">Анна Петровна</h4>
                  <div className="flex gap-1 text-yellow-500">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Грузди с пряностями — моя любимая закуска! Чеснок и специи в самый раз, не пересолены. Беру уже третий раз!"
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 animate-fade-in">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (900) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Какие грузди вас интересуют?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </Card>

              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 625-34-50</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Волгоградская область</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Время работы</h3>
                    <p className="text-muted-foreground">Ежедневно с 9:00 до 18:00</p>
                  </div>
                </div>

                <div className="bg-accent/20 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💚 Принимаем заказы от 3 банок. Доставка по Волгоградской области. Возможен самовывоз.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">🍄 Грибочки у Дона — вкус домашнего уюта</p>
          <p className="text-sm opacity-80 mt-2">© 2024 Все права защищены</p>
        </div>
      </footer>

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Написать в WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;