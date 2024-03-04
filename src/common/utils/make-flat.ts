const makeFlatItems = (allItems: any) => {
  const items: any = [];
  (function iterableItems(allNewItems) {
    allNewItems.forEach((item: any) => {
      if ('children' in item && item.children.length > 0) {
        const { children } = item;
        items.push(item);
        iterableItems(children);
      } else {
        items.push(item);
      }
    });
  })(allItems);
  return items;
};

export default makeFlatItems;
