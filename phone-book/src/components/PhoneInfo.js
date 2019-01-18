import React, { Component } from 'react';

class PhoneInfo extends Component {
    // info 값 전달 안 되었을 시 대비, info의 기본값
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
        // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여주게 됩니다.
        editing: false,
        // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
        // 설정합니다
        name: '',
        phone: ''
    }

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    //editing 값 반전 t->f, f->t
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing});
    }

    // input에서 onChange 이벤트 발생될 때 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // editing 값이 바뀔 때 처리할 로직
        // 수정을 눌렀을 땐 기존의 값이 input에 나타나고
        // 수정을 적용하면 input 의 값들을 부모한테 전달해준다

        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing의 값이 false -> true
            // info의 값을 state에 넣어준다
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing) {
            // editing의 값이 true -> false
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 수정상태가 아니고, info 값이 같다면 리렌더링 안함
        if (!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info) {
            return false;
        }
        // 나머지 경우엔 리렌더링 함
        return true;
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        // 수정모드
        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="number"
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }
        
        // info 객체를 props로 받아와 렌더링, 일반모드
        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>Modify</button>
                <button onClick={this.handleRemove}>Delete</button>
            </div>
        )
    }
}

export default PhoneInfo;
