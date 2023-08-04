export function comma(num) {
    if (num === undefined || num === null) return 0;
    if (typeof num === 'number' && isNaN(num)) return 0;
    if (typeof num === 'string') num = parseInt(num);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

console.log(comma(10000));

export function url_id(URL, id) {
    if (!!id) {
        return URL.replace(':id', id.toString());
    }
}
