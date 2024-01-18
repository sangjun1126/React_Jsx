// 숫자를 정가하는 카운터 프로그램 만들기
// getDerivedStateFromProps() 함수의 동작 원리도 알아보는 컴포넌트를 생성합니다

import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // count 초기 값을 프로퍼티에서 전달된 값으로 설정합니다.
            count : props.count,
        };
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount() {
        this.setState(({count}) => ({
            count : count + 1
        }));
    }

    render() {
      return (
        <div>
          현재 카운트 : {this.state.count}
          <button onClick={this.increaseCount}>카운트 증가</button>
        </div>
      )
    }
}

export default Counter;