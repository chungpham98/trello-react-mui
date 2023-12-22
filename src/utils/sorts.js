// Sort Columns/Cards
// export const mapOrder = (originalArray, orderArray, key) => {
//   if (!originalArray || !orderArray || !key) return []

//   const clonedArray = [...originalArray]
//   const orderedArray = clonedArray.sort((a, b) => {
//     return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
//   })

//   return orderedArray
// }

export const mapOrder = (originalArray, orderArray, key) =>
  originalArray
    ?.slice()
    .sort((a, b) => orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])) ||
  []
