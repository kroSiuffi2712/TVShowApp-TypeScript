import _ from "underscore";

export const mergeArrayObjectsById  = (arr1:any, arr2:any) => {
  return _.map(arr1, function (item) {
    return  _.extend(item, _.findWhere(arr2, { id: item.id }));
  });
};