// 클래스 형 컴포넌트로 만드기

import React from "react";
import TodaysPlan from "./TodaysPlan";

class TodaysPlanApp extends React.Component {
    render() {
        const {onButtonClick, hasplan} = this.props;
        return (
            <div className="body">
                {hasplan ? <TodaysPlan /> : null}
                <button onClick={onButtonClick}>
                    계획 없음
                </button>
            </div>
        )
    }
}

export default TodaysPlanApp;