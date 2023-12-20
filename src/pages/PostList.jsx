import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { posts } from '../slices/postThunk';

const PostList = () => {
    const { data, loading, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(posts());
    }, []);

    if (loading) { 
        return 'Loading....';
    }

    return (
        <div>
            <h1>PostList</h1>
            {data.map(post => <p key={post._id}>{post.title}</p>)}
        </div>
    );
}

export default PostList;
