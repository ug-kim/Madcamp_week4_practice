import React from 'react';

// Post라는 페이지 컴포넌트, params.id를 받아와서 렌더링해준다

const Post = ({match}) => {
    return (
        <div>
            {match.params.id}
        </div>
    );
};

export default Post;
