document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, был ли переход с главной страницы
    if (sessionStorage.getItem('pageTransition')) {
        document.body.style.opacity = '1';
        sessionStorage.removeItem('pageTransition');
    }

    let currentLang = 'ru';
    const content = {
        ru: null,
        en: null
    };

    // Загрузка контента
    const loadContent = async (lang) => {
        // Захардкоженный контент для каждого языка
        const markdownContent = {
            ru: `# Обо мне

👋 Привет! Я **Владимир Березин**, разработчик и дизайнер, увлечённый разработкой всяких ништяков: от прикольных дизайнов, до разработки полноценных решений: ботов, скриптов, сайтов, приложений и масшабных проектов. Живу в Москве.

## Мой путь

Мой путь в разработке начался с восьми лет: тогда я начал интересоваться всякими комплютерами, играми, софтом и операционными система. Параллельно с этим, увлёкся железками, а уже чуть позже программированием.

Вообще разработкой я не особо много интересовался, но в 10 лет решил освоить C++ и немного освоить C#, а уже чуть позже, я стал интересоваться Java и Python. В 12 лет, родители увидели моё рвение в этом направлении, и начали отправлять на всякие курсы: было интересно и увлекательно (но уставал, потому что катался в Москву с утра по выходным, и до позднего вечера тусовался на курсах). Уже в 14 лет я свободно писал на Python, Java и плюсах: начал разработку движка для своих внутренних проектов и прочих ништяков. Кто меня знает, тот в курсе, что я люблю писать код, и вообще, IT - это моё всё.

## Навыки

Из интересных на мой взгляд навыков можно выделить:

- 💫 **Frontend**: HTML, CSS, JavaScript, React и прочие.
- 🛠️ **Backend**: Node.js, Python, Rust, Scala, Java, C++/C#/C и прочие.
- ❤️ **Design**: Figma, Adobe XD.

## Проекты

Вот некоторые из моих проектов:

| Проект | Описание |
|--------|----------|
| [Chrome Dino](https://github.com/vberezinbadger/Chrome-Dino-Python) | Пример игры динозаврика на Python |
| [hbash](https://github.com/hentai-team/hbash) | Реализация терминала на Python |
| [mineCORE 4](https://github.com/minesys/mineCORE-4) | Реализация системы с поддержкой POSIX для мода OpenComputers |
| [hfetch](https://github.com/hentai-team/hfetch) | Утилита для показа системной информации (как neofetch) |

Проектов на самом деле много, а вот свободных строчек под это всё - нет. Но не переживайте, вы можете перейти в мой [GitHub](https://github.com/vberezinbadger) и увидеть все мои проекты сами. Там есть, на что поглазеть.

## Интересы

> В настоящее время я фокусируюсь на изучении новых технологий и создании инновационных решений.

Из интересов могу отметить:
- **Разработка на Python** - любопытный факт: я в последнее время хочу кодить на нём, и за пару месяцев прокачал скиллы настолько, что спокойно пишу по 4-5 скриптов в день;
- **Разработка на Rust** - язык, который мне очень нравится, и я хочу его освоить полностью. Сейчас как минимум, я пишу три проекта на нём;
- **Дизайн** - я люблю в свободное время поделать что-то красивое в Figma или Adobe XD, например дизайны для своих проектов. Это хороший опыт: набивает руку, успокаивает и помогает вдохновиться на что-то новое;
- **Игра в CS2** - да, игра калл полный, но бл, как же иногда кайфово заварить чаёк, и усеться играть в КС и поорать в войс, вай...;
- **Создание сайтов** - хоть это и не моя основная специализация, я всё-таки люблю иногда делать простые, но классные сайты. Как пример: вы сейчас на нём находитесь и видите прогресс работы, верно? Верно.`,

            en: `# About Me

👋 Hi! I'm **Vladimir Berezin**, a developer and designer passionate about creating various cool stuff: from interesting designs to full-fledged solutions like bots, scripts, websites, applications, and large-scale projects. I live in Moscow.

## My Journey

My journey in development began at eight years old: that's when I started getting interested in computers, games, software, and operating systems. Along with that, I got into hardware, and a bit later, programming.

I wasn't particularly interested in development at first, but at 10 years old, I decided to learn C++ and a bit of C#, and later on, I became interested in Java and Python. At 12, my parents saw my enthusiasm in this direction and started sending me to various courses: it was interesting and exciting (though tiring, because I had to travel to Moscow early on weekends and stay at courses until late evening). By 14, I was freely coding in Python, Java, and C++: I started developing an engine for my internal projects and other cool stuff. Those who know me are aware that I love writing code, and IT is my everything.

## Skills

Some of my notable skills include:

- 💫 **Frontend**: HTML, CSS, JavaScript, React, and more.
- 🛠️ **Backend**: Node.js, Python, Rust, Scala, Java, C++/C#/C, and more.
- ❤️ **Design**: Figma, Adobe XD.

## Projects

Here are some of my projects:

| Project | Description |
|---------|-------------|
| [Chrome Dino](https://github.com/vberezinbadger/Chrome-Dino-Python) | Python implementation of the Chrome dinosaur game |
| [hbash](https://github.com/hentai-team/hbash) | Terminal implementation in Python |
| [mineCORE 4](https://github.com/minesys/mineCORE-4) | POSIX-compatible system implementation for OpenComputers mod |
| [hfetch](https://github.com/hentai-team/hfetch) | System information display utility (like neofetch) |

There are actually many projects, but not enough space to list them all. Don't worry though, you can visit my [GitHub](https://github.com/vberezinbadger) to see all my projects yourself. There's plenty to check out.

## Interests

> Currently, I'm focusing on learning new technologies and creating innovative solutions.

Among my interests, I can highlight:
- **Python Development** - interesting fact: lately I've been wanting to code in it, and in a couple of months I've improved my skills so much that I easily write 4-5 scripts a day;
- **Rust Development** - a language that I really like and want to master completely. Right now, I'm working on at least three projects with it;
- **Design** - I love spending my free time creating beautiful things in Figma or Adobe XD, like designs for my projects. It's a good experience: helps build skill, calms me down, and inspires me to create something new;
- **Playing CS2** - yes, the game might be problematic, but man, sometimes it's just so nice to make some tea and sit down to play CS and chat in voice, you know...;
- **Website Creation** - although it's not my main specialization, I still love making simple but cool websites occasionally. For example: you're on one right now and can see the work in progress, right? Right.`
        };

        try {
            // Настройка marked
            marked.setOptions({
                gfm: true,
                breaks: true,
                headerIds: true,
                mangle: false,
                tables: true,
                smartLists: true
            });

            // Парсинг Markdown в HTML
            const html = marked.parse(markdownContent[lang]);
            return { text: html };
        } catch (error) {
            console.error(`Error parsing markdown for ${lang}:`, error);
            return {
                text: `<p>Error parsing content for ${lang}</p>`
            };
        }
    };

    // Переключение языка с улучшенной обработкой контента
    const switchLanguage = (lang) => {
        if (!content[lang]) return;
        
        const title = document.getElementById('about-title');
        const text = document.getElementById('about-text');
        
        // Анимация исчезновения
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            text.innerHTML = content[lang].text;
            
            // Находим и перемещаем первый h1 в заголовок
            const firstH1 = text.querySelector('h1');
            if (firstH1) {
                title.textContent = firstH1.textContent;
                firstH1.remove();
            }

            // Обработка изображений с правильными путями
            text.querySelectorAll('img').forEach(img => {
                img.loading = 'lazy';
                img.classList.add('markdown-image');
                if (!img.src.startsWith('http')) {
                    const imgPath = img.getAttribute('src');
                    img.src = `content/${imgPath}`;
                }
            });

            // Обработка кода
            text.querySelectorAll('pre code').forEach(block => {
                block.classList.add('code-block');
            });

            // Обработка таблиц
            text.querySelectorAll('table').forEach(table => {
                table.classList.add('markdown-table');
                const wrapper = document.createElement('div');
                wrapper.className = 'table-wrapper';
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            });

            // Анимация появления
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300);

        // Обновление кнопок
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        currentLang = lang;
    };

    // Обработчики событий
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                switchLanguage(lang);
            }
        });
    });

    // Обновляем инициализацию
    const init = async () => {
        try {
            // Загружаем контент напрямую
            content.ru = await loadContent('ru');
            content.en = await loadContent('en');
            switchLanguage(currentLang);
        } catch (error) {
            console.error('Initialization error:', error);
        }
    };

    init();

    // Обработка переходов по ссылкам
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.classList.contains('internal-link')) {
            e.preventDefault();
            const href = link.href;
            
            const container = document.querySelector('.content-container');
            container.style.transition = 'all 0.3s ease-out';
            container.style.opacity = '0';
            container.style.transform = 'scale(0.95)';
        
        // Анимация затухания фона
        document.body.style.transition = 'opacity 0.3s ease-out';
        document.body.style.opacity = '0';
        
            setTimeout(() => {
                sessionStorage.setItem('pageTransition', 'true');
                window.location.href = href;
            }, 300);
        }
    });
});
