import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지 -> 우리가 지니고 있는 정보 다 잃어버리게 된다
        e.preventDefault();
        // 상태값을 onCreate를 통하여 부모에게 전달, 2번째 실행. submit 발생하면 props로 받은 함수 호출하여 App에서 파라미터로 받은 값 사용할 수 있도록 한다
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder='이름'
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name">
                </input>
                <input
                    placeholder='전화번호'
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name='phone'>
                </input>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default PhoneForm;
