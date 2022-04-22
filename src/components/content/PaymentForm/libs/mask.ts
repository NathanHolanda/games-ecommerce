function maskInput(type: string, value: string) {
  switch (type) {
    case "cardSecurityCode": {
      const cleanedValue = value.split("")
        .filter(item => item.match(/\d/))
      if (cleanedValue.length > 3) {
        cleanedValue.shift()
        const maskedValue = cleanedValue.join("")

        return maskedValue
      }
      return cleanedValue.join("")
    } case "cardDueDate": {
      let countSlashes = 0

      const cleanedValue = value.split("")
        .filter((item, i, arr) => {
          if (item.match(/\d/))
            return item
          if (item.match(/\//)) {
            countSlashes++

            if (countSlashes === 1) {
              let patternBefore = true

              if (
                !arr[i - 2] ||
                !arr.slice(i - 2, i).join("").match(/\d{2}/)
              )
                patternBefore = false

              if (patternBefore) return item
            }
          }
        })

      if (cleanedValue.length >= 3) {
        if (cleanedValue[2].match(/\d/)) {
          const number = cleanedValue.slice(2)
          cleanedValue.splice(2, 1, "/")
          cleanedValue.push(...number)
        }
      }

      if (cleanedValue.length > 7) {
        cleanedValue.shift()
        if (cleanedValue.at(1) === "/") {
          const slash = cleanedValue.at(1)
          const number = cleanedValue.at(2)
          cleanedValue.splice(1, 1, number || "")
          cleanedValue.splice(2, 1, slash || "")
        }

        const maskedValue = cleanedValue.join("")

        return maskedValue
      }

      return cleanedValue.join("")
    } case "cardCpf": case "cpf": {
      let countDots = 0
      let countHyphens = 0

      const cleanedValue = value.split("")
        .filter((item, i, arr) => {
          if (item.match(/\d/))
            return item
          if (item.match(/\./)) {
            countDots++

            if (countDots <= 2) {
              let patternBefore = true

              if (
                !arr[i - 3] ||
                !arr.slice(i - 3, i).join("").match(/\d{3}/)
              )
                patternBefore = false

              if (patternBefore) return item
            }
          }
          if (item.match(/-/)) {
            countHyphens++

            if (countHyphens === 1) {
              let patternBefore = true

              if (
                !arr[i - 4] ||
                !arr.slice(i - 4, i).join("").match(/\.\d{3}/)
              )
                patternBefore = false

              if (patternBefore) return item
            }
          }
        })

      if (cleanedValue.length >= 4) {
        if (cleanedValue[3].match(/\d/)) {
          const number = cleanedValue.slice(3)
          cleanedValue.splice(3, 1, ".")
          cleanedValue.push(...number)
        }
      }

      if (cleanedValue.length >= 8) {
        if (cleanedValue[7].match(/\d/)) {
          const number = cleanedValue.slice(7)
          cleanedValue.splice(7, 1, ".")
          cleanedValue.push(...number)
        }
      }

      if (cleanedValue.length >= 12) {
        if (cleanedValue[11].match(/\d/)) {
          const number = cleanedValue.slice(11)
          cleanedValue.splice(11, 1, "-")
          cleanedValue.push(...number)
        }
      }

      if (cleanedValue.length > 14) {
        cleanedValue.shift()

        if (cleanedValue.at(-4) === "-") {
          const hyphen = cleanedValue.at(-4)
          const number = cleanedValue.at(-3)
          cleanedValue.splice(-4, 1, number || "")
          cleanedValue.splice(-3, 1, hyphen || "")
        }

        if (cleanedValue.at(6) === ".") {
          const dot = cleanedValue.at(6)
          const number = cleanedValue.at(7)
          cleanedValue.splice(6, 1, number || "")
          cleanedValue.splice(7, 1, dot || "")
        }

        if (cleanedValue.at(2) === ".") {
          const dot = cleanedValue.at(2)
          const number = cleanedValue.at(3)
          cleanedValue.splice(2, 1, number || "")
          cleanedValue.splice(3, 1, dot || "")
        }

        const maskedValue = cleanedValue.join("")

        return maskedValue
      }

      return cleanedValue.join("")
    } case "cardNumber": {
      let countSpaces = 0

      const cleanedValue = value.split("")
        .filter((item, i, arr) => {
          if (item.match(/\d/))
            return item
          if (item.match(/ /)) {
            countSpaces++

            if (countSpaces <= 3) {
              let patternBefore = true

              if (
                !arr[i - 4] ||
                !arr.slice(i - 4, i).join("").match(/\d{4}/)
              )
                patternBefore = false

              if (patternBefore) return item
            }
          }
        })

      if (cleanedValue.length >= 5) {
        if (cleanedValue[4].match(/\d/)) {
          const number = cleanedValue.slice(4)
          cleanedValue.splice(4, 1, " ")
          cleanedValue.push(...number)
        }
      }

      if (cleanedValue.length >= 10) {
        if (cleanedValue[9].match(/\d/)) {
          const number = cleanedValue.slice(9)
          cleanedValue.splice(9, 1, " ")
          cleanedValue.push(...number)
        }
      }

      if (cleanedValue.length >= 15) {
        if (cleanedValue[14].match(/\d/)) {
          const number = cleanedValue.slice(14)
          cleanedValue.splice(14, 1, " ")
          cleanedValue.push(...number)
        }
      }

      if (cleanedValue.length > 19) {
        cleanedValue.shift()

        if (cleanedValue.at(3) === " ") {
          const space = cleanedValue.at(3)
          const number = cleanedValue.at(4)
          cleanedValue.splice(3, 1, number || "")
          cleanedValue.splice(4, 1, space || "")
        }

        if (cleanedValue.at(8) === " ") {
          const space = cleanedValue.at(8)
          const number = cleanedValue.at(9)
          cleanedValue.splice(8, 1, number || "")
          cleanedValue.splice(9, 1, space || "")
        }

        if (cleanedValue.at(13) === " ") {
          const space = cleanedValue.at(13)
          const number = cleanedValue.at(14)
          cleanedValue.splice(13, 1, number || "")
          cleanedValue.splice(14, 1, space || "")
        }

        const maskedValue = cleanedValue.join("")

        return maskedValue
      }

      return cleanedValue.join("")
    }
    default: return value
  }
}

export { maskInput }