function inspectPassword(pass) {
    const regExp = {
        full: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
        specials: /(?=.*[!@#$%^&*])/,
        numbers: /(?=.*[0-9])/,
        lowercase: /(?=.*[a-z])/,
        uppercase: /(?=.*[A-Z])/,
        length: /[0-9a-zA-Z!@#$%^&*]{8,}/,
    }
    if (!regExp.full.test(pass)) {
        if (!regExp.specials.test(pass)) return "Добавьте спецсимволы";
        if (!regExp.numbers.test(pass)) return "Добавьте цифры";
        if (!regExp.lowercase.test(pass)) return "Добавьте латинские буквы в нижнем регистре";
        if (!regExp.uppercase.test(pass)) return "Добавьте латинские буквы в верхнем регистре";
        if (!regExp.length.test(pass)) return "Минимальная длина пароля 8 символов";
    } else return "Пароль соответствует требованиям безопасности";
}