export function buildParams(data) {
  var urlencoded = new URLSearchParams()
  Object.keys(data).map((key) => {
    {
      if (Array.isArray(data[key])) {
        data[key].forEach((value) => {
          return urlencoded.append(key, value)
        })
      } else {
        return urlencoded.append(key, data[key])
      }
    }
  })
  return urlencoded
}
