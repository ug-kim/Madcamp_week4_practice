import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  // id : 컴포넌트의 일반 클래스 내부 변수
  // 렌더링 되는것과 상관이 없는 것들은 굳이 state에 넣을 필요 없다
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ],
    keyword: ''
  }

  // 검색
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  // 등록
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data})
    })
  }

  // 삭제
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  // 수정
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data}  // 새 객체를 만들어서 기존의 값과 전달받은 data를 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }
  render() {
    const { information, keyword } = this.state;
    // keyword 값에 따라 information 배열 필터링
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <PhoneForm
          // 1번 실행 : handleCreate 
          onCreate={this.handleCreate} />
          <p>
            <input
              placeholder="검색할 이름 입력"
              onChange={this.handleChange}
              value={keyword}>
            </input>
          </p>
          <hr />
          {/* 문자열로 반환하여 보여줌 */}
          <PhoneInfoList
            // 필터링 결과를 PhoneInfoList에 전달
            data={filteredList}
            onRemove={this.handleRemove}
            onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default App;
