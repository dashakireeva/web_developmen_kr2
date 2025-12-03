// Функция для открытия модального окна
function openModal(imageSrc, description) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalDesc = document.getElementById('modalDesc');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalDesc.textContent = description;
    
    // Блокируем прокрутку страницы
    document.body.style.overflow = 'hidden';
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
    // Восстанавливаем прокрутку
    document.body.style.overflow = 'auto';
}

// Закрытие по клику вне окна
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}