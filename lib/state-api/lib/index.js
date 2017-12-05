class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: ''
    };
  }

  mapIntoObject(array) {
    return array.reduce((accumulator, currentElement) => {
      accumulator[currentElement.id] = currentElement;
      return accumulator;
    }, {});
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  getState = () => {
    return this.data;
  }
}

export default StateApi;
