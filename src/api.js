//https://api.mocki.io/v1/0a9cd191
import _ from "lodash";

export function getAPI() {
  return fetch("https://api.mocki.io/v1/0a9cd191")
    .then((response) => response.json())
    .then((fetchedData) => {
      const filteredData = fetchedData.data.reduce((accumulation, current) => {
        if (current.type === "bakery") return accumulation;
        return !accumulation.find(
          (item) => _.isEqual(item, current) || item.title === current.title
        )
          ? accumulation.concat(current)
          : accumulation;
      }, []);
      return filteredData;
    });
}
