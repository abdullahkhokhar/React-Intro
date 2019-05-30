function choice(items){
  // returns a randomly selected item from array of items
  return Math.floor(Math.random() * items.length)+1
}

function remove(items, item){
  // removes the first matching item from items, if item exists,
  // and returns it. Otherwise returns undefined.

  for(let i  = 0; i < items.length; i++){
    if(items[i] ==== item){
      // remove the item and return it
      items.splice(i, 1);
      return items[i];
    }
  }
  return undefined;
}

export {choice, remove};
