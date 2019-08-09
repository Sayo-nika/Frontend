import API from '../utils/api';
import React, { useEffect, useState } from 'react';
import { Card } from './common';
import Avatar from '@material-ui/core/Avatar';

const Review = ({ id, title, rating, content, author_id }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            let data = await API.getUser({}, author_id);

            this.setState({ data });
        };

        getData();
    }, []);

    return (
        <Card>
            <div>
                <Avatar component={<img src={data.avatar} />} />
                <div>
                    <div>{data.username}</div>
                    <div>{rating}</div>
                </div>
            </div>
            <div>{content}</div>
            <div>
                <button>thumbsup</button>
                <button>thumbsdown</button>
            </div>
        </Card>
    );
};

export default Review;
