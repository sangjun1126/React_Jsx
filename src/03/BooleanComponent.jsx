import React from "react";

class BooleanComponent extends React.Component {
    render() {
        // 불리언 타입을 조건문에 적용했어요
        const message = this.props.bored ? '놀러가기' : '하던 일 열심히 마무리하기';
        return (
            <div className="message-container">
                {message}
            </div>
        )
    }
}

export default BooleanComponent;