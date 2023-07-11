export const comma = (num) => {
    if (num == undefined || num === null) {
        return 0;
    }
    if (num === 0) {
        return 0;
    }
    if (num < 1000) {
        return num;
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};