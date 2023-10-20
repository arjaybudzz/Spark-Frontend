import axios, { AxiosResponse } from 'axios'

export const getTopics = async (): Promise<Topic[]> => {
    let topic: Topic[] = [];
    const url = 'http://127.0.0.1:3001/api/v1/topics';
    await axios.get(url)
    .then((response: AxiosResponse<any, any>) => {
        console.log(response);
        const result = response.data.data;
        result.map((element: {[key: string] :any}) => {
            topic.push(element.attributes);
        })
    })
    .catch((errors) => console.log(errors));

    return topic;
}
