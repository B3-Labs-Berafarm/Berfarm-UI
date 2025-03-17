export const numberToFixed = (value, place = 2) => {
    return value ? parseFloat(value).toFixed(place) : "-";
}