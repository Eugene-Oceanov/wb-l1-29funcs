function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve({
                width: image.width,
                height: image.height,
                src: url,
            })
        }
        image.onerror = () => {
            reject(new Error('Не удалось загрузить изображение'));
        }
    })
}