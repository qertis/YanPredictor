# YanPredictor
> Yandex Predictor Simple Node API

## Шаг 1: Сгенерировать ключ
[Документация API](https://tech.yandex.ru/predictor/)

## Шаг 2: Установить npm пакет
```bash
npm install yan-predictor --save
```

## Шаг 3: Использовать
```javascript
const YanPredictor = require('yan-predictor').default;
(async function () {
  const yanPredictor = new YanPredictor('pdct.1.1.XXX.YYY.ZZZ');
  const result = await yanPredictor.predict({
    query: 'Аппетитная поп',
    lang: 'ru',
  });
  console.log(result) // => { endOfWord: false, pos: -3, text: [ 'попалась' ] }
})();
```
