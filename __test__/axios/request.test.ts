import axios from "axios";
import { Article, getArticles } from "../../src/axios/request";

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('GET request', () => {
    it('status 200', async () => {
        const articles: Article[] = [
            {
                id: 1,
                title: 'title1',
                body: 'text1'
            },
            {
                id: 2,
                title: 'title2',
                body: 'text2'
            }
       ];
        const mockRes = { data: articles };
        axiosMock.get.mockResolvedValue(mockRes);
        await expect(getArticles()).resolves.toEqual(articles);
    });
});