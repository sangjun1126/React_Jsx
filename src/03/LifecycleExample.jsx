import React from "react";

class LifecycleExample extends React.Component {
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps 호출!');
        return {};
    }

    constructor(props) {
        super(props);

        // getDerivedStateFromProps() 함수를 사용하므로
        // 경고 메세지를 건너 뛰기 위해 state 초깃값을 설정합니다.
        
        this.state = {};
        console.log('constructor 호출!')
    }

    componentDidMount() {
        console.log('componentDidMount 호출')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate 호출')
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount 호출')
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate 호출')
    }

    // shouldComponentUpdate의 return 값을 false로 변경할 경우
    // 리액트 엔진은 데이터 비교 후 변경사항이 없다라고 판단합니다.
    // 따라서 false일 경우 변경 과정의 생명주기 함수가 실행되지 않아요.
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate 호출')
        return true;
    }
    render() {
        console.log('render 호출')
        return null;
    }
}

export default LifecycleExample;