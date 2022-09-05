export const formatPrice = (number) => {
    const NewNumber = Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'CAD',
    }).format(number/100)
    return NewNumber
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}