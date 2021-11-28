function cachingDecoratorNew (func) {
  let cache = [
  ];
  const maxCache = 5;
  const idxFlag = -1;
  
  function wrapper (...args) {
    const hash = args.join(',')
    const idx = cache.findIndex((element) => element.hash === hash);
    if(idx != idxFlag) {
      return `Из кэша: ${cache[idx].result}`;
    } 
    let result = func(...args);
      cache.push({ hash, result});
      if(cache.length > maxCache) {
        cache.shift();
      }
      return `Вычисляем: ${result}`;
  }
  return wrapper;
}



function debounceDecoratorNew(f, ms) {
 let timeout;
 return function (...args) {
 clearTimeout(timeout);
 timeout = setTimeout(() => {
 f.apply(this, args);
 }, ms);
 };
}

