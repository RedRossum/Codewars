function explode(s) {
  return Array.from(s).reduce((acc, item) => acc + item.repeat(+item),'');
}
