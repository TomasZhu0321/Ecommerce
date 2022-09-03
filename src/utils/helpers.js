export const formatPrice = (number) => {
    const NewNumber = Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'CAD',
    }).format(number/100)
    return NewNumber
}

export const getUniqueValues = () => {}
