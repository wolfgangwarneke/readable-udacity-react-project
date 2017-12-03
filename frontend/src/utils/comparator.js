function objPropComparatorFactory(prop, asc=true) {
  return function objComparator(first, other) {
    if (first[prop] < other[prop])
      return asc ? -1 : 1;
    if (first[prop] > other[prop])
      return asc ? 1 : -1;
    return 0;
  }
}

export const sortByNewest = objPropComparatorFactory("timestamp", false)
export const sortByOldest = objPropComparatorFactory("timestamp")

export default objPropComparatorFactory
