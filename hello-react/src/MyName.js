import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b>
            </div>
        )
    }
}

const MyName = ({ name }) => (
    <div>
        안녕 내 이름은 {name}
    </div>
)

MyName.defaultProps = {
    name: '기본이름'
};

export default MyName;
