const getDate = (date) => {
  const day = date.split('T')[0] //T padrao do Regex
  const time = date.split('T')[1].split('.')[0]
  return `${day} ${time}`
}

export {
  getDate
}