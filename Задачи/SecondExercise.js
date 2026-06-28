const urlsDomain = {
"Магазин доменов" : "/domain/shop/",
"Премиум домены" : "/domain/premium/",
"Освобождающиеся" : "/domain/new/rereg",
};

for(let keys in urlsDomain) {
    const lowerCaseKeys = keys.toLowerCase();
    const valueKey = urlsDomain[keys]
console.log("ссылка на " + lowerCaseKeys + " - " + valueKey);
}