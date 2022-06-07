![Логотип Toxin](./src/components/logo/images/logo-toxin.svg)
# Toxin

Cайт отеля с бронированием номеров
___
Cсылка на проект: https://aysur12.github.io/webpack2021/

[Исходные макеты с сайта Figma](https://www.figma.com/file/xorjGw6bbI9mK7fZAMebJu/FSD-frontend-education-program.-The-2nd-task-Copy)
___

## Описание проекта

В дополнение к проекту создан Ui-kit, который состоит из 4 отдельных страниц:
  + Colors & Types
  + Headers & Footers
  + Form & Elements
  + Cards

Макет сайта состоит из 5 страниц:
  + Landing
  + Sign in page
  + Registration page
  + Search room
  + Room details
___
В работе использовались: 
  + компонентная архитектура;
  + методология [БЭМ](https://ru.bem.info/methodology/quick-start/);

Для соблюдения компонентного подхода применялись следующие инструменты разработки:
  + [Webpack 5](https://webpack.js.org/);
  + шаблонизатор [Pug (Jade)](https://pugjs.org/api/getting-started.html);
  + препроцессор SASS ([SCSS](https://sass-scss.ru/));
  + [Babel](https://babeljs.io/) - для использования последних стандартов JS и совместимости в браузерах

- Остальной стек:
  + [JQuery](https://github.com/jquery/jquery) (3.6.0)
  + [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput) (1.4.1)
  + [air-datepicker](https://air-datepicker.com/ru) (3.1.1)
  + [chart.js](https://github.com/chartjs/Chart.js) (3.7.1)
  + [item-quantity-dropdown jQuery plugin](https://github.com/reservamos/item-quantity-dropdown) (2.1.0)
  + [material-icons](https://developers.google.com/fonts/docs/material_icons) (1.10.6)
  + [noUiSlider](https://refreshless.com/nouislider/) (15.5.1)
  + [wnumb](https://refreshless.com/wnumb/) (1.2.0)

___
Для чистоты кода использовался [ESlint](https://eslint.org/)(7.32.0) и стайлгайд от [AirBnB](https://github.com/leonidlebedev/javascript-airbnb)

Для упорядочивания стилей в файлах `.scss` применялся линтер [Stylelint](https://stylelint.io/) со следующим конфигом [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order)
___

Для соответствия макетов сайта и дизайна использовалось расширение [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru)
___
__Версия Node.js__ - 13.14.0
__Версия npm__ - 16.14.4
___
## Развертывание
##### Клонирование репозитория
```
git clone https://github.com/aysur12/webpack2021.git
cd webpack2021
```
##### Устновка зависимостей
```
npm i
```
##### Запуск производственной сборки проекта
```
npm run build
```
##### Запуск в режиме dev-server
```
npm start
```
##### Запуск ESlint
```
npm run eslint
```
##### Запуск Stylelint
```
npm run style
```
##### Публикация на GitHub Pages
```
npm run deploy
```
