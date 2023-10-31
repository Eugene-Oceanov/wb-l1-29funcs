function getCallstackSize() {
    let callstackSize = 0;
    function fillCallstack() {
        callstackSize++;
        fillCallstack();
    }
    try { fillCallstack() }
    catch { return callstackSize; }
}