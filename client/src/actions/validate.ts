export const validIsEmpty = (s: string) => {
    return s.length ? '' : 'This field in required'
}

export const validIsName = (s: string) => {
    const reg = /[A-Za-z]/g
    return reg.test(s) ? '' : 'Only letters allowed'
}

export const validIsNumber = (s: string) => {
    const reg = /^380\d{9}/g
    return reg.test(s) ? '' : 'Should contain 12 characters'
}
