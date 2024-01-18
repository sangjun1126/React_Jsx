// TodaysPlanApp 컴포넌트를 함수형 컴포넌트로 구성하기

import TodaysPlan from "./TodaysPlan";

function TodaysPlanApp(props) {
    const {onButtonClick, hasplan} = props;
    return (
        <div className="body">
            {hasplan ? <TodaysPlan /> : null}
            <button onClick={onButtonClick}>
                계획없음;
            </button>
        </div>
    )
}

export default TodaysPlanApp