// state 사용시 주의해야할 것들
// 1. 생성자에서 반드시 초기화 해줘야 함
// 2. state를 변경할 때는 setState()함수를 반드시 사용해야 합니다
// 3. setState() 함수는 비동기로 처리되며, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거칩니다.

import React from "react";

class StateExample extends React.Component {
    constructor(props) {
        super(props);

        // state 정의
        this.state = {
            loading : true,
            formData : 'no data',
        };

        // 이후 콜백 함수를 다룰 때 bind(this)에 대해 작성
        this.handleData = this.handleData.bind(this);

        // 4초 후에 handleData 함수 호출하기
        setTimeout(this.handleData, 4000);
    }
    handleData() {
        const data = 'new data';
        const {formData} = this.state;

        // state 변경
        this.setState({
            loading : false,
            formData : data + formData,
        });

        // this.state.loading은 현재 true입니다.
        console.log('loading 값', this.state.loading);

        // 이후 호출될 render() 함수에서의 this.state.loading은 false입니다.
    }
    render() {
        return (
            <div>
                {/* state 데이터는 this.state로 접근 가능합니다 */}
                <span>로딩중 : {String(this.state.loading)}</span>
                <span>결과 : {this.state.formData}</span>
            </div>
        );
    }
}

export default StateExample;