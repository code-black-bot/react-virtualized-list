import Mock from 'mockjs';

const getMockList = async function<Object>(): Promise<Object> {
    let result = Mock.mock({
        "array|10": [
            {
                "num|+1": 100,
                img: '',
                text: '测试内容',
                title: '测试标题'
            }
        ]
    });
    console.log(result)
    return result;
};

export default getMockList;