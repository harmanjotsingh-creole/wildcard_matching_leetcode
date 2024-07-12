//Using else if ------

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



// using Switch case -----

var isMatch = function (s, p) {
    let v = -1;
    let y = -1;
    let j = 0;

    for (let i = 0; i < s.length; ) {
        switch (p[j]) {
            case s[i]:
                i++;
                j++;
                break;
            case "?":
                i++;
                j++;
                break;
            case "*":
                if (p[j + 1] == null) {
                    return true;
                } else {
                    v = i;
                    y = j;
                    j++;
                }
                break;
            default:
                if (y != -1) {
                    i = v + 1;
                    j = y + 1;
                    v++;
                } else {
                    return false;
                }
                break;
        }
    }
}