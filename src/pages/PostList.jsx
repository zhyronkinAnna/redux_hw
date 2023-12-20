import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { posts } from '../slices/postThunk';
import { getToken } from '../utils/helperFunctions';
import PostAdd from './PostAdd';

const PostList = () => {
    const { token } = useSelector(state => state.auth)
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

            {token && <PostAdd />}

            {data.map(post => <p key={post._id}>{post.title}</p>)}
        </div>
    );
}

export default PostList;
