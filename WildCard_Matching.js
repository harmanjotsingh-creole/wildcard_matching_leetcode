var isMatch = function (s, p) {

  let v = -1
  let y = -1
  let j = 0
  for (let i = 0; i < s.length; i) {
      if (s[i] == p[j]) {
          i++;
          j++;
      }
      else if (p[j] == "?") {
          i++;
          j++;
      }
      else if (p[j] == "*" && p[j + 1] == null) {
          i++;
          j++;
          return true
      }
      else if (p[j] == "*") {
          v = i
          y = j
          j++;

      }
      else if (y != -1) {
          i = v + 1
          j = y + 1
          v++
      }
      else {
          return false
      }
  }
  for (let x = j; x < p.length; x++) {
      if (p[x] != "*") {
          return false
      }
  } return true
}