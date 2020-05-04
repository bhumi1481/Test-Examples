
function fib (n) {
  var s = []
  s.push(1)
  s.push(1)
  for (var i = 2; i < n; ++i) {
    s.push(s[i - 1] + s[i - 2])
  }
  console.log('Fibonacci #%d = %d', n, s[n - 1])
}


fib(6)
