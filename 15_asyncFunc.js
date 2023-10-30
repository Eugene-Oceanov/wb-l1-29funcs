async function getData(link) {
    let json = await fetch(link);
    let data = await json.json();
    return data;
}