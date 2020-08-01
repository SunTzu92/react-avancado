type ValueProps = string | number

const mask = (value: ValueProps, pattern: string) => {
  let index = 0
  const string = value.toString()
  return pattern.replace(/#/g, () => string[index++] || '')
}

export default mask
