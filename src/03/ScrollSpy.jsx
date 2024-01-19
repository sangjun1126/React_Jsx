// ref 프로퍼티에서 반환된 객체를 컴포넌트 변수에 할당하는 과정
// 현재 DOM 객체의 위치가 스크롤 화면 안팎까지 측정하고 있음
// 윈도우의 스크롤 이동 이벤트를 감지하여 checkPosition() 함수가 실행
// 컴포넌트가 소멸할 경우 화면 스크롤 감수 함수를 메모리에서 제거

import React from "react";

export default class ScrollSpy extends React.Component {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
    }
    setRef(ref) {
        this.ref = ref;
    }

    checkPosition() {
        if (this.ref.getBoundingClientRect().top < window.innerHeight) {
            console.log('enter');
        } else {
            console.log('exit');
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkPosition);
        this.checkPosition();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.checkPosition);
    }

    render() {
        return <div ref={this.setRef}/>
    }
}