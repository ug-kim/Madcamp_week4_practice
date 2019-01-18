import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu'

class App extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <Route exact path='/' component={Home} />  {/* exact는 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트 보여준다 */}
                <Switch>
                {/* Switch는 매칭되는 첫 번째 라우트만 보여주고 나머지는 보여주지 않는다, 먼저 비교 할 라우트를 위에 작성해야 함 */}
                    <Route path='/about/:name' component={About} />  {/* params는 사용하기 전 꼭 라우트에서 지정 */}
                    <Route path='/about' component={About} />
                </Switch>
                <Route path='/posts' component={Posts} />
            </div>
        );
    }
}

export default App;
