import React, {useEffect, useState} from 'react';
import Card from './Card';
import getMockList from '../api/mock';

interface item {
    title: string,
    text: string,
    num: number,
    img: string
}

function Home() {
    const [list, setList] = useState<item[]>([]);
    useEffect(() => {
        getMockList().then((res:any) => {
            let arr : item[] = res.array;
            setList(arr);
        })
    }, []);
    return (
        <div className="home">
            {list.map((item) => {
                return(
                    <Card
                        title={item.title}
                        text={item.text}
                        num={item.num}
                        img={item.img}
                    ></Card>
                )
            })}
        </div>
    );
};

export default Home;