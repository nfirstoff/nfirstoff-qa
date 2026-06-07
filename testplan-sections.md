# Тест-план: Сайт-портфолио Mykola Firstov

## Общая информация

| Параметр | Значение |
|----------|----------|
| Проект | Сайт-портфолио Manual QA Engineer |
| Технологии | React 19 + Vite + Tailwind CSS 4 + Framer Motion |
| Браузеры | Chrome, Firefox, Safari, Edge (2 последние версии) |
| Устройства | Desktop (1920+), Tablet (768-1024), Mobile (320-480) |
| Тип тестирования | Функциональное, UI/UX, Кросс-браузерное, Адаптивность, Доступность |

---

## 1. Навигация (Navbar)

**Файл:** `src/components/layout/Navbar.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 1.1 | Логотип "MF." отображается слева | Текст "MF." с синим акцентом |
| 1.2 | Все ссылки присутствуют: Home, About, Services, Portfolio, Skills, Bug Reports, QA Thinking, Coverage, Contact | 9 пунктов меню |
| 1.3 | При скролле вниз > 40px — навбар получает белый фон, тень, border-bottom | Прозрачный → белый с blur-md |
| 1.4 | Начальное состояние (top of page) — фон прозрачный, текст белый | nav bg-transparent, ссылки text-gray-300 |
| 1.5 | Клик по ссылке — плавный скролл к секции (#hero, #about, ...) | `scrollIntoView({ behavior: "smooth" })` |
| 1.6 | Активная ссылка подсвечивается | Только hover-эффект, без active state |
| 1.7 | **Mobile:** ширина < 1024px — гамбургер-меню | Иконка Menu/X |
| 1.8 | **Mobile:** открытие/закрытие меню | Анимация height: 0 → auto |
| 1.9 | **Mobile:** клик по ссылке закрывает меню | setOpen(false) |
| 1.10 | **Mobile:** все ссылки доступны и кликабельны | 9 ссылок в выпадающем списке |
| 1.11 | Hover на ссылки — смена цвета | Серый → синий (text-brand-600) |
| 1.12 | Navbar не перекрывает контент (z-index: 50) | Контент начинается под navbar |

---

## 2. Hero Section

**Файл:** `src/components/sections/Hero.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 2.1 | Занимает полную высоту экрана | `min-h-screen` |
| 2.2 | Бейдж "Available for opportunities" с зеленой точкой | Анимированный fadeIn |
| 2.3 | Имя "Mykola Firstov" — крупный заголовок | Firstov выделен синим (text-brand-600) |
| 2.4 | Подзаголовок: "Manual QA Engineer specializing in Fintech & Payment Systems" | Текст отображается |
| 2.5 | Кнопка "View My Portfolio" — primary (синяя) | href="#portfolio" |
| 2.6 | Кнопка "Contact Me" — secondary (серая) | href="#contact" |
| 2.7 | Кнопка "LinkedIn" — ghost | Открывается в новой вкладке |
| 2.8 | Блок снизу: статус Available, локация, email | Иконка + текст |
| 2.9 | Стрелка вниз — клик скроллит к #about | Плавный скролл |
| 2.10 | Фоновые эффекты: gradient, blur-3xl | Присутствуют, не перекрывают контент |
| 2.11 | **Mobile:** адаптивные размеры текста | sm:text-5xl, md:text-6xl, lg:text-7xl |
| 2.12 | **Mobile:** кнопки переносятся на новую строку | flex-wrap |
| 2.13 | **Mobile:** email скрыт | `hidden sm:inline` |

---

## 3. About Section

**Файл:** `src/components/sections/About.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 3.1 | Заголовок "About Me" с подзаголовком | Анимация появления |
| 3.2 | Фото-плейсхолдер с инициалами "MF" | border, gradient background |
| 3.3 | Цитата в блоке с левой border | border-brand-500 |
| 3.4 | Полный текст bio | profile.summary |
| 3.5 | "Key Strengths" — 6 бейджей | High Ownership, API & DB Validation и т.д. |
| 3.6 | 4 блока со статистикой: 4.5+, 4, 20+, 10+ | Числа синим цветом |
| 3.7 | **Tablet:** 2 колонки (grid-cols-2) для статистики | sm:grid-cols-4 |
| 3.8 | Анимация появления при скролле | opacity + translateX |
| 3.9 | Бейджи имеют hover-эффект | нет (статичные) |

---

## 4. Services Section

**Файл:** `src/components/sections/Services.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 4.1 | Заголовок + подзаголовок | SectionTitle |
| 4.2 | 4 сервис-карты в сетке 2×2 | Desktop: sm:grid-cols-2 |
| 4.3 | Иконка сервиса (TestTube, Code2, Database, FileText) | В синем круге |
| 4.4 | Название сервиса | text-gray-900 |
| 4.5 | Описание сервиса | text-gray-500 |
| 4.6 | Hover — карта поднимается на -4px + тень | whileHover={{ y: -4 }} |
| 4.7 | Hover — иконка меняет фон | bg-brand-50 → bg-brand-100 |
| 4.8 | **Mobile:** карты в 1 колонку | grid-cols-1 |

---

## 5. Expertise Section

**Файл:** `src/components/sections/Expertise.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 5.1 | 3 блока: Testing Types, Processes, Documentation | Вертикальный стек |
| 5.2 | Каждый блок содержит 4+ элемента | grid sm:grid-cols-2 |
| 5.3 | Hover на элемент — подсветка синим | hover:border-brand-100 |
| 5.4 | Иконки с цветовыми акцентами (emerald, brand, amber) | Разные цвета |
| 5.5 | Анимация при скролле | fadeIn + translateY |

---

## 6. Portfolio Section

**Файл:** `src/components/sections/Portfolio.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 6.1 | 4 карточки проектов | 2×2 сетка |
| 6.2 | Иконка проекта (TrendingUp, Building2, CreditCard, Bitcoin) | Разные для каждого |
| 6.3 | Название + описание проекта | Из profile.projects |
| 6.4 | Теги проекта | Badge компоненты |
| 6.5 | Блок "Impact:" с синим фоном | bg-brand-50 border-brand-100 |
| 6.6 | Иконка стрелки при hover | ArrowUpRight появляется |
| 6.7 | **Mobile:** 1 колонка | grid-cols-1 |

---

## 7. Metrics Section

**Файл:** `src/components/features/Metrics.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 7.1 | Заголовок "QA at a Glance" | SectionTitle |
| 7.2 | 6 метрик-карт | 6 колонок на desktop |
| 7.3 | Значение метрики синим цветом | text-brand-600 |
| 7.4 | Анимация появления последовательно | delay: index * 0.08 |
| 7.5 | **Mobile:** 2 колонки | grid-cols-2 |
| 7.6 | **Tablet:** 3 колонки | sm:grid-cols-3 |

---

## 8. Skills Section

**Файл:** `src/components/sections/Skills.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 8.1 | Заголовок "Skills & Technologies" | SectionTitle |
| 8.2 | 4 категории навыков (Testing, Databases, APIs, Platforms) | 2×2 сетка |
| 8.3 | Skill bar: название + процент | Анимация заполнения |
| 8.4 | Анимация бара — ширина от 0 до level% | whileInView: width |
| 8.5 | Hover — название подсвечивается синим | group-hover:text-brand-600 |

---

## 9. Bug Report Gallery (Feature 1)

**Файл:** `src/components/features/BugReportGallery.jsx`

### Search / Filter

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 9.1 | Поле поиска с иконкой | SearchBar |
| 9.2 | Поиск по title, summary, category | Фильтрация в реальном времени |
| 9.3 | Поиск регистронезависимый | toLowerCase() |
| 9.4 | 7 фильтр-чипов: High Severity, Payments, CRM, API, UI, State Issues, Database | FilterChips |
| 9.5 | Клик по чипу — активация/деактивация | active === filter → bg-brand-600 |
| 9.6 | Комбинация поиска + фильтра | AND логика |
| 9.7 | Пустое состояние: "No bug reports match your search" | Иконка + текст при filtered.length === 0 |

### Карточки багов

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 9.8 | 6 карточек багов в сетке | md:grid-cols-2 lg:grid-cols-3 |
| 9.9 | Заголовок + иконка Bug | h3 + синяя иконка |
| 9.10 | Severity badge (Critical/High/Medium) | Цветной Badge |
| 9.11 | Категория бага | Badge с разделением по "/" |
| 9.12 | Краткое описание | text-xs text-gray-500 |
| 9.13 | Hover — тень увеличивается | hover:shadow-md |

### Аккордеоны в карточке

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 9.14 | "Reproduction Steps" — нумерованный список | ol > li |
| 9.15 | "Investigation Process" — таймлайн с точками | Vertical timeline |
| 9.16 | "Root Cause" — желтый блок | border-amber-200 bg-amber-50 |
| 9.17 | "Business Impact" — красный блок с иконкой AlertTriangle | border-red-200 bg-red-50 |
| 9.18 | "Technical Details" — code snippet + API пример | pre с подсветкой |
| 9.19 | Клик по заголовку — открытие/закрытие | Анимация height |
| 9.20 | Иконка Chevron вращается при открытии | rotate-180 |
| 9.21 | Несколько аккордеонов могут быть открыты одновременно | Независимое состояние |

---

## 10. QA Thinking Simulator (Feature 2)

**Файл:** `src/components/features/QASimulator.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 10.1 | Заголовок "How I Think as a QA Engineer" | SectionTitle |
| 10.2 | 6 кнопок-переключателей фич: Payment Form, Subscription System, Chargeback Flow, Wallet Transfer, User Registration, KYC Verification | Pill-style кнопки |
| 10.3 | Активная фича — синий фон | bg-brand-600 text-white |
| 10.4 | Переключение — анимированная смена контента | AnimatePresence, opacity/y transition |
| 10.5 | Header карточки: название + счетчик сценариев | gradient background |
| 10.6 | 7 категорий: Positive, Negative, Edge Cases, Security, API, Database, Cross-browser | CollapsibleCategory |
| 10.7 | Дефолтное состояние — первая категория открыта | index === 0 → defaultOpen |
| 10.8 | Клик по категории — открытие/закрытие | Анимация height |
| 10.9 | Каждый пункт — цветная точка + текст | Анимация появления списка |
| 10.10 | Footer: Frontend → API → Database flow | color dots + arrows |
| 10.11 | **Mobile:** все кнопки-фитчи переносятся | flex-wrap |

---

## 11. Testing Coverage Map (Feature 3)

**Файл:** `src/components/features/TestingCoverage.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 11.1 | Заголовок "Fintech Testing Coverage" | SectionTitle |
| 11.2 | **Desktop:** левая панель (2/5) + правая деталь (3/5) | lg:grid-cols-5 |
| 11.3 | 9 пунктов в левой навигации | coverageAreas |
| 11.4 | Активный пункт — синий фон + точка | bg-brand-50, h-2 w-2 dot |
| 11.5 | Клик — смена контента в правой панели | AnimatePresence |
| 11.6 | Правая панель: header с иконкой, названием, описанием | gradient background |
| 11.7 | 4 секции: What I Validated, Risks I Checked, Common Defects, Testing Strategy | Разные цвета (emerald, amber, red, brand) |
| 11.8 | "System Connections" — цепочка с иконками | flex-wrap с ChevronRight |
| 11.9 | **Mobile:** навигация + детали в одной колонке | Стек, без grid |
| 11.10 | **Mobile:** нет разделения на панели | Просто карточка |

---

## 12. Bug Game (Feature 4)

**Файл:** `src/components/features/BugGame.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 12.1 | Заголовок "Can You Spot the Bug?" | SectionTitle |
| 12.2 | Прогресс-бар: "Case X of 4" + индикаторы | 4 полоски, заполняются |
| 12.3 | Screen симуляции: поля с highlight | Text + подсветка проблемных полей |
| 12.4 | 4 варианта ответа (a, b, c, d) | button group |
| 12.5 | Клик по ответу — подсветка выбранного | border-brand-400 |
| 12.6 | Если ответ верный — зеленая подсветка | border-emerald-400 bg-emerald-50 |
| 12.7 | Если ответ неверный — красная подсветка выбранного + зеленая правильного | border-red-400 + border-emerald-400 |
| 12.8 | После ответа — анимация раскрытия объяснения | height: 0 → auto |
| 12.9 | Блок "Bug Found" — зеленый | CheckCircle2 + explanation |
| 12.10 | Блок "Why It Matters" — желтый | AlertTriangle + whyItMatters |
| 12.11 | Кнопка "Next Case" / "See Results" | Переход к следующему кейсу |
| 12.12 | После 4 кейсов — экран результатов | Score X/4 |
| 12.13 | Кнопка "Try Again" — сброс игры | handleRetry |
| 12.14 | **Desktop:** 4 варианта в колонку | space-y-2 |
| 12.15 | **Mobile:** адаптивные отступы | px-4 |

---

## 13. QA Toolbox (Feature 5)

**Файл:** `src/components/features/QAToolbox.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 13.1 | Заголовок "My QA Toolbox" | SectionTitle |
| 13.2 | 7 инструментов-карт | Сетка 3×3 |
| 13.3 | Иконка инструмента с цветом | inline style с tool.color |
| 13.4 | Название + "Click to expand" | tool.name + подпись |
| 13.5 | Клик — раскрытие карточки | Accordion |
| 13.6 | 4 секции: Real Usage, Example Investigation, Typical Tasks, Why It Matters | Каждая с иконкой |
| 13.7 | "Why It Matters" — синий блок | bg-brand-50 border-brand-100 |
| 13.8 | Только один инструмент открыт | Аккордеон с single expand |
| 13.9 | **Mobile:** 1 колонка | sm:grid-cols-2 lg:grid-cols-3 |

---

## 14. Investigation Flow (Feature 8)

**Файл:** `src/components/features/InvestigationFlow.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 14.1 | Заголовок "How I Investigate Issues" | SectionTitle |
| 14.2 | **Desktop:** 8 шагов в timeline (зигзаг) | left/right чередование |
| 14.3 | Центральная линия + круги с номерами | Линия bg-gray-200, круги с border |
| 14.4 | Клик по шагу — детали раскрываются | AnimatePresence |
| 14.5 | Активный шаг — синий круг + синяя карточка | bg-brand-500 text-white |
| 14.6 | **Mobile:** вертикальный список с аккордеоном | lg:hidden |
| 14.7 | **Mobile:** номер шага + иконка + заголовок | ChevronDown для раскрытия |
| 14.8 | **Mobile:** детали с левой border | border-l-2 border-brand-200 |

---

## 15. QA Docs (Feature 7)

**Файл:** `src/components/features/QADocs.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 15.1 | Заголовок "QA Documentation Samples" | SectionTitle |
| 15.2 | 4 карточки-превью | Сетка 4×1 |
| 15.3 | Иконка типа документа | Bug, FileCheck, FileText |
| 15.4 | Клик по карточке — открытие модального окна | modalDoc state |
| 15.5 | Модалка: overlay + центрированный контент | backdrop-blur-sm |
| 15.6 | Модалка: header с названием + кнопка закрытия | X icon |
| 15.7 | **Bug Report:** severity, priority, steps, expected vs actual, logs | Полная структура |
| 15.8 | **Checklist:** area + checks с чекбоксами | Пустые квадраты |
| 15.9 | **Test Case:** preconditions + step/expected | 2 колонки |
| 15.10 | **API Checklist:** endpoints с method/checks + validation rules | POST/GET цвета |
| 15.11 | Кнопка "Download" | variant="secondary" |
| 15.12 | Клик вне модалки — закрытие | onClick на overlay |
| 15.13 | Scroll внутри модалки | overflow-y-auto |
| 15.14 | **Mobile:** модалка на всю ширину | max-w-2xl → full |

---

## 16. Availability Section (Feature 9)

**Файл:** `src/components/features/Availability.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 16.1 | Заголовок "Open to Opportunities" | SectionTitle |
| 16.2 | Header карточки: имя + статус "Available" | Зеленая точка |
| 16.3 | Блок Location с иконкой | Wrocław, Poland |
| 16.4 | Блок Languages: Ukrainian (Native), Russian (Native), English (B2) | Список |
| 16.5 | Блок "Open to": 5 бейджей | Remote, Hybrid, Fintech, SaaS, Payment Systems |
| 16.6 | 3 CTA кнопки: Contact Me, LinkedIn, Download CV | primary, secondary, ghost |
| 16.7 | Footer: "Ready for full-time, contract, or freelance..." | CheckCircle + текст |
| 16.8 | **Mobile:** 3 колонки стакаются | grid → stack |

---

## 17. Contact Section

**Файл:** `src/components/sections/Contact.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 17.1 | Заголовок "Get in Touch" | SectionTitle |
| 17.2 | **Desktop:** info панель (2/5) + форма (3/5) | lg:grid-cols-5 |
| 17.3 | Info: Email, Phone, Location — иконки + данные | 3 блока |
| 17.4 | Заметка внизу info панели | profile.contactNote |
| 17.5 | Поле Name — required | type="text" |
| 17.6 | Поле Email — required, type="email" | Валидация email |
| 17.7 | Textarea Message — required, 5 rows | resize-none |
| 17.8 | Submit — открывает mailto | window.open с subject/body |
| 17.9 | После submit — "Message Sent!" на 4 сек | setTimeout |
| 17.10 | **Mobile:** 1 колонка | grid-cols-1 |
| 17.11 | **Mobile:** поля формы в 1 колонку | sm:grid-cols-2 → 1 |

---

## 18. Footer

**Файл:** `src/components/layout/Footer.jsx`

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 18.1 | Логотип "MF." + подпись | Компактный блок |
| 18.2 | Иконка Email — mailto link | profile.email |
| 18.3 | Иконка LinkedIn — внешняя ссылка | target="_blank" |
| 18.4 | Кнопка Scroll to Top | window.scrollTo({ top: 0 }) |
| 18.5 | Копирайт + текущий год | new Date().getFullYear() |
| 18.6 | Локация с иконкой MapPin | profile.location |
| 18.7 | **Mobile:** вертикальный стек | md:flex-row → flex-col |

---

## 19. Кросс-браузерное тестирование

| # | Проверка | Браузеры |
|---|----------|----------|
| 19.1 | Рендеринг всех секций | Chrome, Firefox, Safari, Edge |
| 19.2 | Анимации Framer Motion | Все браузеры |
| 19.3 | Inter шрифт загружается | Google Fonts |
| 19.4 | CSS Grid layout | Все браузеры |
| 19.5 | Flexbox поведение | Все браузеры |
| 19.6 | Scroll behavior smooth | Все браузеры |
| 19.7 | mailto ссылка | Все браузеры |

---

## 20. Адаптивность (Responsive)

| # | Проверка | Breakpoint |
|---|----------|------------|
| 20.1 | Desktop: 1920×1080 | Все секции корректны |
| 20.2 | Desktop: 1440×900 | Все секции корректны |
| 20.3 | Tablet: 1024×768 | Navbar links, grid переходы |
| 20.4 | Tablet: 768×1024 | Гамбургер-меню |
| 20.5 | Mobile: 480×800 | 1 колонка, вертикальный стек |
| 20.6 | Mobile: 375×667 | iPhone SE — без переполнения |
| 20.7 | Mobile: 414×896 | iPhone 11 — без переполнения |
| 20.8 | Landscape mobile | Корректное отображение |

---

## 21. Доступность (Accessibility)

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 21.1 | aria-label на иконках | Navbar menu, Email, LinkedIn |
| 21.2 | label для input полей | Name, Email, Message |
| 21.3 | alt text для изображений | При наличии img |
| 21.4 | Tab navigation | Все интерактивные элементы |
| 21.5 | Focus visible на кнопках | outline-none + ring |
| 21.6 | Semantic HTML | section, nav, main, footer |

---

## 22. Производительность

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 22.1 | Размер JS бандла | < 500 KB (438 KB) |
| 22.2 | Размер CSS | < 50 KB (41 KB) |
| 22.3 | Framer Motion не блокирует рендер | Анимации после загрузки |
| 22.4 | Изображения оптимизированы | Нет тяжелых изображений |
| 22.5 | Intersection Observer (viewport: once) | Только один раз |
| 22.6 | Консоль без ошибок | 0 ошибок |

---

## 23. Состояния загрузки / ошибок

| # | Проверка | Ожидаемый результат |
|---|----------|---------------------|
| 23.1 | Google Fonts не загрузились | system-ui fallback |
| 23.2 | JavaScript отключен | Базовая структура (Framer Motion не работает) |
| 23.3 | Медленное соединение | Контент отображается, анимации отложены |
| 23.4 | Пустой поиск в Bug Gallery | Все 6 карточек отображаются |
| 23.5 | Ничего не найдено в Bug Gallery | Empty state сообщение |

---

## 24. Данные (Data layer)

| # | Проверка | Файл |
|---|----------|------|
| 24.1 | Все 6 баг-репортов загружаются | `data/bugReports.js` |
| 24.2 | Все 6 feature simulator данных | `data/qaSimulator.js` |
| 24.3 | Все 9 coverage areas | `data/testingCoverage.js` |
| 24.4 | Все 4 bug game кейса | `data/bugGames.js` |
| 24.5 | Все 7 QA tools | `data/qaTools.js` |
| 24.6 | Все 8 investigation steps | `data/investigationFlow.js` |
| 24.7 | Данные профиля (profile.js) | Все поля корректны |

---

## Приоритеты тестирования

- **P0 (критические):** 2.1-2.8, 9.1-9.6, 10.2-10.5, 12.2-12.12, 17.5-17.8, 20.1
- **P1 (высокие):** 1.1-1.10, 3.1-3.6, 4.1-4.6, 9.8-9.21, 11.2-11.7, 13.2-13.7, 14.2-14.7
- **P2 (средние):** 5.1-5.5, 7.1-7.6, 8.1-8.5, 15.2-15.12, 18.1-18.7
- **P3 (низкие):** 19.1-19.7, 21.1-21.6, 22.1-22.6, 23.1-23.5
