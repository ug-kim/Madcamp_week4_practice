import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        foo: {
            bar: 0,
            foobar: 1
        }
    }

    // 기존의 것을 참조하여 업데이트
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    // this 없이 조회할 수 있음
    handleIncrease = () => {
        this.setState(
            (state) => ({
                number: state.number + 1 
            })
        );
    }

    //비구조화 할당
    handleIncrease = () => {
        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        );
    }

    // 마지막 결론으로 바꾼, 제일 멋있는 함수 ..?
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        const {number} = this.state;
        this.setState({
            number: number - 1
        })
    }

    // nested된 자료 바꾸기
    chagefoo = () => {
        this.setState({
            number: 0,
            foo: {
                ...this.state.foo,
                foobar: 2
            }
        })
    }

    //render 함수
    //이벤트에 전달해주는 값은 함수어야 한다
    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>   {/* onclick={this.handleIncrease()} 이렇게 하면 안된다 */}
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;
