document.addEventListener('DOMContentLoaded', () => {
    // Проверка перехода
    if (sessionStorage.getItem('pageTransition')) {
        document.body.style.opacity = '1';
        sessionStorage.removeItem('pageTransition');
    }

    let currentLang = 'ru';

    // Структура новостей
    const news = {
        ru: [
            {
                id: 3,
                author: {
                    username: 'vberezinbadger',
                    name: 'Vladimir Berezin',
                    avatar: 'https://avatars.githubusercontent.com/u/72685561?v=4'
                },
                date: '2025-04-07',
                content: `# Переход на [vberezin.megasiski.ru](https://vberezin.megasiski.ru) 🎉

Сайт переехал на новый домен! Теперь он доступен по адресу [vberezin.megasiski.ru](https://vberezin.megasiski.ru). Это не значит, что сайт не работает по старому адресу (GitHub Pages), он всё ещё продолжает работать.

## Что нового?

Из нового хочу отметить:
- Теперь сайт располагается на [vberezin.megasiski.ru](https://vberezin.megasiski.ru)

## Комментарий
Вообще, у ребят это целый бесплатный хостинг для статических сайтов. Так что, если вы хотите разместиться у них, этот хостинг для вас. Там же, вы сможете поддержать ребят, они этого заслужили: [открыть сайт хостинга megasiski](megasiski.ru).
Вообще мне понравился домен, и хотелось разместиться на нём по приколу, а повезло и то, что это хостинг для всякого рода статики и мемных сайтиков.`
            },
            {
                id: 2,
                author: {
                    username: 'vberezinbadger',
                    name: 'Vladimir Berezin',
                    avatar: 'https://avatars.githubusercontent.com/u/72685561?v=4'
                },
                date: '2025-03-08',
                content: `# Первое обновление сайта! 🎉

Первое СЕРЬЁЗНОЕ обновление это калла! Почему калл? ДА ПОТОМУ ЧТО! Кодовая база оставляет желать лучшего!

## Что нового?

Из нового хочу отметить:
- Раздел "Проекты" убран, вместо него "Новости" (основаны на движке от страницы "Обо мне")
> А зачем вам эти проекты, когда есть [GitHub](https://github.com/vberezinbadger) и раздел "Обо мне"? Там есть проекты.
- Немного улучшен интерфейс сайта
- Добавлены темы для главной сайта (светлая и тёмная)
- Немного улучшил оптимизацию сайта (ну, хоть что-то)
- Прочие мелкие изменения

## Просто так

Честно, я не хотел делать сайт. Просто заметил, что у некоторых "яжпрограммистов" есть какие-то сайты, интерактивные портфолио и визитки. Чем я хуже? Ну за исключением того, что я не "яжпрограммист", ничем. Просто сайт реализован на скорую руку лучше (в виду опыта). До конца не хотел его делать. Но теперь он есть и будет обновляться.`
            },
            {
                id: 1,
                author: {
                    username: 'vberezinbadger',
                    name: 'Vladimir Berezin',
                    avatar: 'https://avatars.githubusercontent.com/u/72685561?v=4'
                },
                date: '2025-03-07',
                content: `# Запуск нового сайта! 🚀

Рад представить вам свой персональный сайтик. Он показывает то, что я вообще такое. А ещё пару моих работ в IT отрасли (разработка). А это новости. Технически, написана она 7 марта. Но новостной блок сделал только 8 марта (кстати, девочки, с праздником.) Так вот. А какой список изменений? Это ниже.

## Список изменений
- Сам сайт (само его создание уже большое изменение)
- Интеграция фона на основе GLSL (это не гифки или прочее, это прям фон, рендерящийся в реальном времени)
- Секции: "Обо мне", "GitHub", "Проекты", "Контакты"
- Обо мне: своя история, навыки, интересы, свой движок для этой странички
- Контакты: все актуальные контакты и способы связи со мной (номера телефона там нет и не будет, мне звонки в три часа ночи не нужны)
- Подвёз оптимизацию сайтика

> Следите за обновлениями! Обновлений сайта будет много!

## Планы на сайт

Планируется следующее:
- Улучшение оптимизации и кода сайта
- Развёртывание на домене и нормальном хосте
- Добавление новых фич и ништяков
- Разработка движка сайта (имеется в виду, нормальной CMS, а не то, что сейчас)
- И многое другое!

## Итог

Сайт работает. Можете заходить на него, тыкать на всё, брать идеи с него, брать исходники сайта в качестве основы. Только перед тем, как брать сурсы сайта, почистите их от моего имени, контактов и прочего. Я не хочу, чтобы был Вова номер два. Всем хорошего дня!`
            }
        ],
        en: [
            {
                id: 3,
                author: {
                    username: 'vberezinbadger',
                    name: 'Vladimir Berezin',
                    avatar: 'https://avatars.githubusercontent.com/u/72685561?v=4'
                },
                date: '2025-04-07',
                content: `# Moving to [vberezin.megasiski.ru](https://vberezin.megasiski.ru) 🎉

The website has moved to a new domain! It's now available at [vberezin.megasiski.ru](https://vberezin.megasiski.ru). This doesn't mean the site doesn't work at the old address (GitHub Pages), it still continues to work.

## What's New?

Among the new things I want to highlight:
- The site is now hosted at [vberezin.megasiski.ru](https://vberezin.megasiski.ru)

## Comment
Actually, these guys have a whole free hosting service for static websites. So if you want to host with them, this hosting is for you. There, you can also support the guys, they deserve it: [open megasiski hosting site](megasiski.ru).
I really liked the domain and wanted to host there for fun, and it was lucky that it's a hosting service for all kinds of static and meme websites.`
            },
            {
                id: 2,
                author: {
                    username: 'vberezinbadger',
                    name: 'Vladimir Berezin',
                    avatar: 'https://avatars.githubusercontent.com/u/72685561?v=4'
                },
                date: '2025-03-08',
                content: `# First Website Update! 🎉

The first SERIOUS update is crap! Why crap? BECAUSE! The codebase leaves much to be desired!

## What's New?

Among the new things I want to highlight:
- The "Projects" section has been removed, replaced with "News" (based on the "About Me" page engine)
> Why do you need these projects when there's [GitHub](https://github.com/vberezinbadger) and the "About Me" section? Projects are there.
- Slightly improved website interface
- Added themes for the main site (light and dark)
- Slightly improved website optimization (well, at least something)
- Other minor changes

## Just Because

Honestly, I didn't want to make a website. I just noticed that some "I'm-a-programmer" types have some websites, interactive portfolios, and business cards. How am I worse? Well, except that I'm not an "I'm-a-programmer" type, I'm not worse at all. The site is just better implemented quickly (due to experience). I didn't want to finish it completely. But now it exists and will be updated.`
            },
            {
                id: 1,
                author: {
                    username: 'vberezinbadger',
                    name: 'Vladimir Berezin',
                    avatar: 'https://avatars.githubusercontent.com/u/72685561?v=4'
                },
                date: '2025-03-07',
                content: `# New Website Launch! 🚀

I'm happy to present my personal website. It shows what I'm all about. Plus some of my work in the IT industry (development). And these are the news. Technically, it was written on March 7th. But I made the news block only on March 8th (by the way, ladies, happy Women's Day.) So. What's the changelog? It's below.

## Changelog
- The website itself (its creation alone is a big change)
- GLSL-based background integration (these aren't GIFs or anything else, this is a real-time rendering background)
- Sections: "About Me", "GitHub", "Projects", "Contacts"
- About Me: my story, skills, interests, custom engine for this page
- Contacts: all current contacts and ways to reach me (no phone number there and won't be, I don't need calls at 3 AM)
- Brought some website optimization

> Stay tuned for updates! There will be many website updates!

## Website Plans

The following is planned:
- Improving website optimization and code
- Deployment on a domain and proper hosting
- Adding new features and goodies
- Developing a website engine (meaning a proper CMS, not what's there now)
- And much more!

## Conclusion

The website is working. You can visit it, click on everything, take ideas from it, use the website source code as a foundation. Just before taking the source code, clean it of my name, contacts, and other personal info. I don't want there to be a Vova number two. Have a great day everyone!`
            }
        ]
    };

    // Форматирование даты
    const formatDate = (dateStr, lang) => {
        const date = new Date(dateStr);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', options);
    };

    // Создание карточки новости
    const createNewsCard = (post, lang) => {
        const card = document.createElement('article');
        card.className = 'news-card';
        
        const header = `
            <div class="news-header">
                <img src="${post.author.avatar}" alt="${post.author.name}" class="author-avatar">
                <div class="news-meta">
                    <a href="https://github.com/${post.author.username}" class="author-name" target="_blank">
                        ${post.author.name}
                    </a>
                    <div class="post-date">${formatDate(post.date, lang)}</div>
                </div>
            </div>
        `;

        const content = marked.parse(post.content);
        card.innerHTML = header + `<div class="news-content">${content}</div>`;
        return card;
    };

    // Отображение новостей
    const displayNews = (lang) => {
        const newsFeed = document.getElementById('news-feed');
        newsFeed.innerHTML = '';
        
        const sortedNews = [...news[lang]].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );
        
        sortedNews.forEach(post => {
            const card = createNewsCard(post, lang);
            newsFeed.appendChild(card);
        });
    };

    // Переключение языка
    const switchLanguage = (lang) => {
        currentLang = lang;
        displayNews(lang);
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    // Обработчики языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                switchLanguage(lang);
            }
        });
    });

    // Инициализация
    marked.setOptions({
        gfm: true,
        breaks: true,
        headerIds: true,
        mangle: false
    });

    // Запуск
    displayNews(currentLang);
});
