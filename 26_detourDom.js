function detourDOM(element) {
    for (let i = 0; i < element.children.length; i++) {
        let child = element.children[i];
        console.log(child);
        traverseDOM(child);
    }
}