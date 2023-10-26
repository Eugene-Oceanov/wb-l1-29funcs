// создаем класс конструктуор узла
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function jsonToLinkedList(jsonStr) {
    // преобразовываем json в объект
    const obj = JSON.parse(jsonStr);
    // создаем переменные головы списка и текущего узла
    let head = null;
    let current = null;
    // перебираем полученный из json объект
    for (const key in obj) {
        // на основе каждого элемента создаем узел
        const newNode = new ListNode(obj[key]);
        // проверяем пустой ли список, если да, то создаем head, если нет, то продолжаем список
        if (!head) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = newNode;
        }
    }
    return head;
}
