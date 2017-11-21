import StateApi from 'state-api';
import { data } from '../testData';

const store = new StateApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    // Arrange
    const articles = store.getState().articles;
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;
    // Assert & Act
    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    // Arrange
    const authors = store.getState().authors;
    const authorId = data.authors[0].id;
    const authorFistName = data.authors[0].firstName;
    // Assert & Act
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFistName);
  });
});
