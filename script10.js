// Функции (2)

let complexFunction = function (arg1,arg2) {
  return arg1+arg2; //just for example (any logic can be here)
}

let arrCache = [];

function cache(fn, arg1, arg2) {
  let startTimeCache = new Date();
  let str = String(arg1) + '_' + String(arg2);
  if (arrCache[str] && startTimeCache - arrCache[str].expiredDate < 1000*60*60) {
    console.log('вернулся кеш');
    return arrCache[str].value;
  } else {
    console.log('complexFunction выполняется');
    arrCache[str] = {
      value: fn(arg1, arg2),
      expiredDate: startTimeCache,
    }
    return arrCache[str].value;
  }
}

function cachedFunc(arg1, arg2) {
  cache(complexFunction, arg1, arg2);
}

cachedFunc('foo', 'bar') // complexFunction должна выполнится
cachedFunc('foo', 'bar') // complexFunction не должна выполняться // снова,должен вернуться кеш
cachedFunc('foo', 'baz') // complexFunction должна выполнится
//потому что метод не вызывался раньше с этими аргументами


