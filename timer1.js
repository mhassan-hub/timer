let arg = process.argv.slice(2);


arg.forEach(element => {
  if (element > 0 && !isNaN(element)){
    element = element * 1000;
    setTimeout(() => {
    process.stdout.write('\x07');
    }, element);
  }
});