import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const ClassDetail = () => {
    const { classId } = useParams();

    useEffect(() => {
        const url = `https://nur-alom.github.io/jsonapi/mydata.json/${classId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1 style={{ margin: "120px" }}>Hello From Class Detail {classId}</h1>
        </div>
    );
};

export default ClassDetail;