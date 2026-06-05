// 1. Словарь переводов
const translations = {
    ru: {
        page_title: "CRMP-сайт5 | Лучшие проекты CRMP",
        subtitle: "Твой путеводитель по миру Criminal Russia Multiplayer",
        tab_new: "Новые",
        tab_top3: "Топ-3 лучших",
        tab_catalog: "Все игры",
        heading_new: "🔥 Новые проекты",
        heading_top3: "🏆 Топ-3 лучших CRMP проектов",
        heading_catalog: "🎮 Каталог игр",
        card_grand_new: "Современная Россия, новые автомобили и уникальные системы.",
        card_black_new: "Глобальное обновление карты и добавление новых бизнесов.",
        card_matreshka_new: "Перезапуск проекта с улучшенной графикой и новым транспортом.",
        badge_new: "Новинка",
        badge_update: "Обновление",
        th_rank: "Место",
        th_name: "Название игры",
        th_online: "Онлайн",
        th_rating: "Рейтинг",
        card_black_cat: "Самый популярный мобильный CRMP проект с огромным открытым миром.",
        card_matreshka_cat: "Классика жанра с отличной оптимизацией и дружным комьюнити.",
        card_grand_cat: "Динамичный геймплей, кланы и масштабные ивенты.",
        card_madout: "Мультиплеерный экшен с открытым миром, гонками и свободой действий.",
        card_russia_rp: "Атмосферный проект с упором на реалистичный отыгрыш ролей.",
        footer: "© 2026 CRMP-сайт5. Все права защищены. Не является официальным сайтом разработчиков игр."
    },
    en: {
        page_title: "CRMP-site5 | Best CRMP Projects",
        subtitle: "Your guide to the world of Criminal Russia Multiplayer",
        tab_new: "New",
        tab_top3: "Top 3 Best",
        tab_catalog: "All Games",
        heading_new: "🔥 New Projects",
        heading_top3: "🏆 Top 3 Best CRMP Projects",
        heading_catalog: "🎮 Game Catalog",
        card_grand_new: "Modern Russia, new cars and unique systems.",
        card_black_new: "Global map update and addition of new businesses.",
        card_matreshka_new: "Project reboot with improved graphics and new transport.",
        badge_new: "New",
        badge_update: "Update",
        th_rank: "Rank",
        th_name: "Game Name",
        th_online: "Online",
        th_rating: "Rating",
        card_black_cat: "The most popular mobile CRMP project with a huge open world.",
        card_matreshka_cat: "A genre classic with excellent optimization and a friendly community.",
        card_grand_cat: "Dynamic gameplay, clans and large-scale events.",
        card_madout: "Multiplayer action with an open world, racing and freedom of action.",
        card_russia_rp: "Atmospheric project with a focus on realistic roleplay.",
        footer: "© 2026 CRMP-site5. All rights reserved. Not an official game developers website."
    }
};

// 2. Функция смены языка
function changeLanguage(lang) {
    // Меняем язык в теге <html>
    document.documentElement.lang = lang;
    
    // Находим все элементы с атрибутом data-i18n и меняем их текст
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Если это title, меняем document.title, иначе textContent
            if (key === 'page_title') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Сохраняем выбор пользователя в браузере
    localStorage.setItem('preferredLanguage', lang);
    
    // Обновляем значение в селекте (на случай, если функция вызвана не из него)
    document.getElementById('language-selector').value = lang;
}

// 3. При загрузке страницы проверяем сохраненный язык или ставим русский по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ru';
    changeLanguage(savedLang);
});

// 4. Логика переключения вкладок (из предыдущей версии)
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }

    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}