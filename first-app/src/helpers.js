function choice(items){
  // returns a randomly selected item from array of items
  let idx = Math.floor(Math.random() * items.length)
  return items[idx];
}

function remove(items, item){
  // removes the first matching item from items, if item exists,
  // and returns it. Otherwise returns undefined.

  for(let i  = 0; i < items.length; i++){
    if(items[i] === item){
      // remove the item and return it
      return [ ...items.slice(0,i), ...items.slice(i+1) ];
    }
  }
  return undefined;
}

export {choice, remove};
