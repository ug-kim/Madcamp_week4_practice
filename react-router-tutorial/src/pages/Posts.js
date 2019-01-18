import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';
// 페이지를 불러오는 방식이 통일되어야 제대로 작동하므로 pages에서 불러오도록 설정

const Posts = ({match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>  {/* match.url, url은 현재의 라우트 경로를 알려준다 */}
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>  {/* to='/posts/1으로 설정해도 되긴 하지만, 이게  나중에 현재의 라우트 경로가 바뀌게 되면 자동으로 바뀐다 */}
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>  {/* 포스트의 id가 주어지지 않았을 때 의미, inline rendering */}
            <Route path={`${match.url}/:id`} component={Post}/>  {/* 현재 라우트의 주소에 :id가 붙었을 시에 Post 컴포넌트 보여주도록 설정 */}
        </div>
    );
};

// location.pathname: 현재 브라우저 상의 위치, 어떤 라우트에서 렌더링하던 동일
// match는 Route와 직접적으로 관계된 값만 보여준다
// Posts를 보여주는 라우트에선 :id 값을 설정하지 않았으니 path와 url이 둘 다 /posts이다
// Post를 보여주는 라우트에서는 path의 경우엔 라우트에서 설정한 path 값이 그대로 나타난다. url의 경우엔 :id 부분에 값이 들어간 상태로 나타난다
// match.path : /posts/:id, match.url : /posts/1

export default Posts;
