function cachingDecoratorNew (func) {
  let cache = [
  ];
  const maxCache = 5;
  const idxFlag = -1;
  
  function wrapper (...args) {
    const hash = args.join(',')
    const idx = cache.findIndex((element) => element.hash === hash);
    if(idx != idxFlag) {
      console.log(`Из кэша: ${cache[idx].value}`);
    } else {
      let result = func(...args);
      cache.push({ hash: hash, value : result});
      console.log(`Вычисляем: ${result}`);
      if(cache.length > maxCache) {
        cache.shift();
      }
    }

  }
  return wrapper;
}

