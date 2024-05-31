const images = ['https://laplaya-rus.ru/wp-content/uploads/7/f/2/7f216396c40d553bbea21636580e4107.jpeg',
 'https://vse-znay.ru/wp-content/uploads/2018/12/samaja-malenkaja-obezjana-na-planete-3-1024x768.jpg',]; 
let currentImgIndex = 0; // индекс текущего изображения

const imageElement = document.getElementById('galleryImage'); // получаем элемент изображения

function nextImage() {
    currentImgIndex = (currentImgIndex + 1) % images.length; // увеличиваем индекс на 1 и берем остаток от деления на длину массива
    imageElement.src = images[currentImgIndex]; // устанавливаем новое изображение
}

function prevImage() {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length; // уменьшаем индекс на 1, добавляем длину массива для обработки отрицательных значений и берем остаток
    imageElement.src = images[currentImgIndex]; // устанавливаем новое изображение
}
