import { startGame } from "./startGame.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameSection = document.querySelector('.game-section__container');

    gameSection.innerHTML = '';
    title.textContent = 'Difficulty';
    title.classList.add('game-menu__title');
    document.querySelector('.confetti').innerHTML = '';

    const createDifficultButton = (difficult) => {
        const button = document.createElement('button');

        button.classList.add('game-menu__difficult-btn');
        button.textContent = `${difficult} cards`;

        button.addEventListener('click', () => startGame(difficult));

        return button;
    };

    gameSection.append(
        title,
        createDifficultButton(10),
        createDifficultButton(12),
        createDifficultButton(14),
        createDifficultButton(16),
    );
};

// Функція для виграшу
export const onWin = () => {
    const confettiContainer = document.querySelector('.confetti');
    
    // Очищаємо контейнер перед запуском нової анімації
    confettiContainer.innerHTML = ''; 
    
    // Викликаємо анімацію конфеті
    confettiContainer.classList.add('confetti-animation'); 

    // Створюємо елемент тексту для виграшу
    const winMessage = document.createElement('h2');
    winMessage.textContent = 'Congratulations! You won!';
    winMessage.classList.add('win-message');

    // Додаємо текст через 1 секунду після початку анімації конфеті
    setTimeout(() => {
        confettiContainer.appendChild(winMessage);
    }, 1000); // Час затримки для тексту (після початку конфеті)
};

export const createGameCard = (defaultIcon, flippedCardIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('i');
    const flippedCardI = document.createElement('i');

    notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
    flippedCardI.classList.add('fa', `fa-${flippedCardIcon}`);

    card.append(flippedCardI, notFlippedCardI);

    return card;
};