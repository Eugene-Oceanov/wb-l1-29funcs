function countDocumentWriteCalls() {
    let count = 0;
    function recursiveWrite() {
        document.write('Hello, world!');
        count++;
        recursiveWrite();
    }
    recursiveWrite();
}