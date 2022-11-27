# visitor_react

Реализовать базовый компонент React с поддержкой посетителей. Реализовать стандартные посетители для добавления обработчиков событий.

const tpl = <my-component accept={[
  on('click', cb1),
  once('submit', cb2)
]} />


Реализовать стандартные посетитель для компонента React, который интегрирует IntersectionObserver.

const tpl = <my-component accept={[
  inView({
    delay: 1_000,
    entered: onEntered,
    leaved: onLeaved
  })
]} />

