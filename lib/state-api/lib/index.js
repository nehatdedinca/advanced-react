class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(array) {
    return array.reduce((accumulator, currentElement) => {
      accumulator[currentElement.id] = currentElement;
      return accumulator;
    }, {});
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
