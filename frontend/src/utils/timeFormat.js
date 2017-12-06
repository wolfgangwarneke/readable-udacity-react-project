const timeFormat = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleDateString() + " " + date.toLocaleTimeString()
}

export default timeFormat
