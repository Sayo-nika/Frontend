import API from '../utils/api';
import React, { useEffect, useState } from 'react';
import { Card } from './common';
import Avatar from '@material-ui/core/Avatar';
import propTypes from 'prop-types';

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

Review.propTypes = {
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    content: propTypes.string.isRequired,
    author_id: propTypes.string.isRequired
};

export default Review;
