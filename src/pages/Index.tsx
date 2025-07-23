import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Box" size={32} className="text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">3D Print Pro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Портфолио</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Заказать услугу</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Профессиональная <span className="text-blue-600">3D-печать</span> на заказ
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                От прототипов до серийного производства. Превращаем ваши идеи в реальность с помощью передовых технологий 3D-печати.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Upload" size={20} className="mr-2" />
                  Загрузить модель
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/f979ec95-dff0-4cdc-9891-258a8e1429a6.jpg" 
                alt="3D принтер в работе"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Принтер работает</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Upload Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Получите расчет стоимости
            </h2>
            <p className="text-xl text-gray-600">
              Загрузите вашу 3D-модель и получите точную стоимость печати за минуты
            </p>
          </div>
          
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Загрузить 3D-модель
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    accept=".stl,.obj,.3mf,.ply"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Icon name="Upload" size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      {selectedFile ? selectedFile.name : 'Выберите файл или перетащите сюда'}
                    </p>
                    <p className="text-sm text-gray-500">
                      Поддерживаемые форматы: STL, OBJ, 3MF, PLY
                    </p>
                  </label>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Материал
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>PLA</option>
                    <option>ABS</option>
                    <option>PETG</option>
                    <option>Nylon</option>
                    <option>Резина</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Качество печати
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Стандартное (0.2мм)</option>
                    <option>Высокое (0.1мм)</option>
                    <option>Черновое (0.3мм)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Количество копий
                  </label>
                  <Input type="number" defaultValue="1" min="1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарии
                  </label>
                  <Textarea placeholder="Опишите особые требования..." rows={3} />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг 3D-печати от прототипирования до серийного производства
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Быстрое прототипирование</h3>
              <p className="text-gray-600 mb-4">
                Создание прототипов за 24-48 часов для быстрой проверки идей и концепций
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Точность до 0.1мм</li>
                <li>• Различные материалы</li>
                <li>• Быстрая доставка</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Package" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Серийное производство</h3>
              <p className="text-gray-600 mb-4">
                Производство партий от 10 до 10000 единиц с контролем качества
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Скидки на объемы</li>
                <li>• Контроль качества</li>
                <li>• Гибкие сроки</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Wrench" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Пост-обработка</h3>
              <p className="text-gray-600 mb-4">
                Финишная обработка, покраска, сборка и упаковка готовых изделий
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Шлифовка и полировка</li>
                <li>• Покраска любых цветов</li>
                <li>• Сборка компонентов</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Портфолио работ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Примеры успешно реализованных проектов в различных отраслях
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/img/7cd4f699-db91-47ff-b0ae-1e832d23ae06.jpg" 
                alt="Портфолио 3D-печати"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Разнообразие проектов
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Cog" size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Промышленные детали</h4>
                    <p className="text-gray-600">Функциональные компоненты для машиностроения</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Gem" size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ювелирные изделия</h4>
                    <p className="text-gray-600">Эксклюзивные украшения и аксессуары</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Home" size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Архитектурные модели</h4>
                    <p className="text-gray-600">Детализированные макеты зданий и сооружений</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваш проект? Мы ответим в течение часа
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="/img/55819bb8-5caf-4ebb-a2af-0f5ba11b4702.jpg" 
                alt="Наша мастерская"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <Card className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input placeholder="example@email.com" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </Card>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <span className="text-gray-700">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="text-gray-700">info@3dprintpro.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Москва, ул. Технологическая, 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Box" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">3D Print Pro</span>
              </div>
              <p className="text-gray-400">
                Профессиональная 3D-печать с 2020 года. Более 10000 успешных проектов.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Прототипирование</li>
                <li>Серийное производство</li>
                <li>Пост-обработка</li>
                <li>Консультации</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Материалы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>PLA</li>
                <li>ABS</li>
                <li>PETG</li>
                <li>Nylon</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@3dprintpro.ru</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 3D Print Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;