int1 = 3141592653589793238462643383279502884197169399375105820974944592
int2 = 2718281828459045235360287471352662497757247093699959574966967627

def multiply_by_carrying(int1, int2)
  total = 0
  chars = int2.to_s.chars
  chars.each_with_index do |digit, idx|
    product = digit.to_i * int1 * (10 ** (chars.length - idx - 1))
    total += product
  end
  total
end

def multiply_karatsuba(int1, int2)
  digits1 = int1.to_s.chars.map(&:to_i)
  digits2 = int2.to_s.chars.map(&:to_i)

  a = digits1.slice(0, digits1.length / 2)
  b = digits1.slice(digits1.length / 2, digits1.length)
  c = digits2.slice(0, digits2.length / 2)
  d = digits2.slice(digits2.length / 2, digits2.length)

  print(a)
  print(b)
  print(c)
  print(d)
end

# result = multiply_by_carrying(int1, int2)

multiply_karatsuba(12345678,34567890)