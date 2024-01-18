// forceUpdate() 함수로 state를 관리하는 방법입니다
// 리액트 성능에 제약이 있으므로 
// 매번 새롭게 화면을 출력해야 하는 경우가 아니라면
// 가급적 사용하지 않는게 좋습니다.

import React from "react";

class ForceUpdateExample extends React.Component {
    constructor(props) {
        super(props);
        // state를 정의하기
        this.loading = true;
        this.formData = 'no data';

        // 이후 콜백 함수를 다룰 경우 bind를 선언하는 부분에 대해 다룹니다.
        this.handleData = this.handleData.bind(this);

        // 4초 후에 handleData를 호출합니다
        setTimeout(this.handleData, 4000);
    }
    
    handleData() {
        const data = 'new data';

        // state 변경하기
        this.loading = false;
        this.formData = data + this.formData;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <span>로딩 중입니다 : {String(this.loading)}</span>
                <span>결과 : {this.formData}</span>
            </div>
        );
    }
}

export default ForceUpdateExample;