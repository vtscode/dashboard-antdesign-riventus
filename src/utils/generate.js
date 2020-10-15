const randomString = (length=32, chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result; 
}

const shorterString = strings => {
  if(strings){
    let newStr = strings.length > 15 ? strings.substring(0,5)+ '...' + strings.substring(strings.length-9,strings.length) : strings;
    return newStr;
  }
}

export { shorterString,randomString };