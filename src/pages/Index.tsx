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
      price: "500₽",
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
    </div>
  );
};

export default Index;