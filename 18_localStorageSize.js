// ????
function getLocalStorageSize() {
    try {
      if ('localStorage' in window && window['localStorage'] !== null) {
        var data = '';
  
        // Создаем строку данных размером около 1 МБ
        for (var i = 0; i < 1024 * 1024; i++) {
          data += 'a';
        }
  
        // Пытаемся записать данные в Local Storage до тех пор, пока не выбросится исключение
        var totalData = '';
        var count = 0;
  
        while (true) {
          try {
            count++;
            localStorage.setItem('data' + count, data);
            totalData += data;
          } catch (e) {
            break;
          }
        }
  
        // Удаляем записанные данные
        for (var i = 0; i < count; i++) {
          localStorage.removeItem('data' + (i + 1));
        }
        return totalData.length;
      } else {
        return 'Local Storage не поддерживается';
      }
    } catch (e) {
      return 'Произошла ошибка при подсчете размера Local Storage: ' + e;
    }
  }