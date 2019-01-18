import React, { Component } from 'react';

class Counter_2 extends Component {
    state = {
        number: 0
    }

    // 생성자
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // 컴포넌트 화면에 나가기 직전 호출, 신경X
    componentWillMount() {
        console.log('constructor');
    }

    // 컴포넌트가 화면에 나타나게 됐을 때 호출, axios등을 통해 ajax 요청
    componentDidMount() {
        console.log('componentDidMount');
    }

    //컴포넌트 최적화, return false이면 update 안함, 불필요한 경우 방지
    shouldComponentUpdate(nextProps, nextState) {
        // return false 하면 업데이트를 안함
        // return this.props.checked !== nextProps.checked
        console.log('sholdComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    // shouldComponentUpdate에서 true를 반환했을 때만 호출, deprecate
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    // render() 호출하고 난 다음 발생, this.props와 this.state 바뀌어있음, prevProps와 prevState 조회가능
    componentDidUpdate(prevProps, prevSttate) {
        console.log('componentDidUpdate')
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1
        });
    }

    // 자식 컴포넌트에서 발생한 에러 잡기
    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    // render에서 에러 발생하면 리액트 앱 크래쉬
    render() {
        console.log('render');
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter_2;
