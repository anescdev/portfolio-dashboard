export function dateFormat(date: Date) {
    if (!(date instanceof Date)) throw new Error("date must to be of type Date");
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
}