import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.ware('onUpdate not defined')
    }

    // Virtual DOM에 렌더링하는 자원 아끼기
    // 다음 받아올 data가 현재 data랑 다른 배열일 때 true로 설정
    // 변화가 필요하지 않을 때는 render 함수가 호출되지 않는다
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render PhoneInfoLIst');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            // key: 리액트에서 배열을 렌더링 할 때 꼭 필요한 값
            info => (
                <PhoneInfo 
                    key={info.id} 
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    />)
        );

        // 단순히 경고만 감출 뿐이고 성능상 key가 없는 것과 동일
        // const list = data.map(
        //     (info, index) => (<PhoneInfo key={index} info={info}/>)
        // );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
