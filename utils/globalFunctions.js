export const getURL = (num) => {
    return location.href.split('/').at(-num);
}