import axios from 'axios';

export interface Article {
    id: number;
    title: string;
    body: string;
}

const URL: string = "https://example.com";

export const getArticles = async () => {
    try {
        const response = await axios.get<Article[]>(URL, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw new Error();
        }
    }
};
