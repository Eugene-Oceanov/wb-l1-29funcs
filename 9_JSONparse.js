// Не сумел выполнить это задание, как то очень сложно. По заданию не совсем понятно, что требуется - "переведите JSON в строку" но ведь JSON и так строка.
// Но в чате прочитал, что нужен кастомный парсер JSON. Если честно - жесть:) кучу времени потратил ничего не получилось.
// Нашел прекрасную статью: https://lihautan.com/json-parser-with-javascript/ Огромное спасибо автору, все по шагам с контекстои, но что бы понять как следует и разобрать по косточкам нужно больше времени. Покрутить весь код, пощупать. А времени нет.
// Копирую его парсер сюда - я все прочитал несколько раз, пощупал код, но все равно понял только поверхностно.
// Самое важное в этом тексте - ДАННУЮ ФУНКЦИЮ НАПИСАЛ НЕ Я!

function fakeParseJSON(str) {
    let i = 0;

    return parseValue();

    function parseObject() {
        if (str[i] === "{") {
            i++;
            skipWhitespace();

            const result = {};

            let initial = true;
            // if it is not '}',
            // we take the path of string -> whitespace -> ':' -> value -> ...
            while (str[i] !== "}") {
                if (!initial) {
                    eatComma();
                    skipWhitespace();
                }
                const key = parseString();
                skipWhitespace();
                eatColon();
                const value = parseValue();
                result[key] = value;
                initial = false;
            }
            // move to the next character of '}'
            i++;

            return result;
        }
    }

    function parseArray() {
        if (str[i] === "[") {
            i++;
            skipWhitespace();

            const result = [];
            let initial = true;
            while (str[i] !== "]") {
                if (!initial) {
                    eatComma();
                }
                const value = parseValue();
                result.push(value);
                initial = false;
            }
            // move to the next character of ']'
            i++;
            return result;
        }
    }

    function parseValue() {
        skipWhitespace();
        const value =
            parseString() ??
            parseNumber() ??
            parseObject() ??
            parseArray() ??
            parseKeyword("true", true) ??
            parseKeyword("false", false) ??
            parseKeyword("null", null);
        skipWhitespace();
        return value;
    }

    function parseKeyword(name, value) {
        if (str.slice(i, i + name.length) === name) {
            i += name.length;
            return value;
        }
    }

    function skipWhitespace() {
        while (
            str[i] === " " ||
            str[i] === "\n" ||
            str[i] === "\t" ||
            str[i] === "\r"
        ) {
            i++;
        }
    }

    function parseString() {
        if (str[i] === '"') {
            i++;
            let result = "";
            while (str[i] !== '"') {
                if (str[i] === "\\") {
                    const char = str[i + 1];
                    if (
                        char === '"' ||
                        char === "\\" ||
                        char === "/" ||
                        char === "b" ||
                        char === "f" ||
                        char === "n" ||
                        char === "r" ||
                        char === "t"
                    ) {
                        result += char;
                        i++;
                    } else if (char === "u") {
                        if (
                            isHexadecimal(str[i + 2]) &&
                            isHexadecimal(str[i + 3]) &&
                            isHexadecimal(str[i + 4]) &&
                            isHexadecimal(str[i + 5])
                        ) {
                            result += String.fromCharCode(
                                parseInt(str.slice(i + 2, i + 6), 16)
                            );
                            i += 5;
                        }
                    }
                } else {
                    result += str[i];
                }
                i++;
            }
            i++;
            return result;
        }
    }

    function isHexadecimal(char) {
        return (
            (char >= "0" && char <= "9") ||
            (char.toLowerCase() >= "a" && char.toLowerCase() <= "f")
        );
    }

    function parseNumber() {
        let start = i;
        if (str[i] === "-") {
            i++;
        }
        if (str[i] === "0") {
            i++;
        } else if (str[i] >= "1" && str[i] <= "9") {
            i++;
            while (str[i] >= "0" && str[i] <= "9") {
                i++;
            }
        }

        if (str[i] === ".") {
            i++;
            while (str[i] >= "0" && str[i] <= "9") {
                i++;
            }
        }
        if (str[i] === "e" || str[i] === "E") {
            i++;
            if (str[i] === "-" || str[i] === "+") {
                i++;
            }
            while (str[i] >= "0" && str[i] <= "9") {
                i++;
            }
        }
        if (i > start) {
            return Number(str.slice(start, i));
        }
    }

    function eatComma() {
        if (str[i] !== ",") {
            throw new Error('Expected ",".');
        }
        i++;
    }

    function eatColon() {
        if (str[i] !== ":") {
            throw new Error('Expected ":".');
        }
        i++;
    }
}