// 버튼이 클릭될 경우 카운트를 증가하는 함수를 호출합니다
// 마우스가 버튼 밖으로 이동하면 카운트를 초기화하는 함수를 호출합니다.

import React from "react";

class Counter3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        };

        this.increaseCount = this.increaseCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    increaseCount() {
        this.setState(({count}) => ({count : count + 1}));
    }

    resetCount() {
        this.setState({count : 0});
    }

    render() {
        return (
            <div>
                현재 카운트 : {this.state.count}
                <button onClick={this.increaseCount}
                onMouseOut = {this.resetCount}>카운트 증가</button>
                버튼 밖에서 커서가 움직이면 0으로 초기화 됨
            </div>
        )
    }
}

export default Counter3;