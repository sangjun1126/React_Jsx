// 함수형 컴포넌트의 구조를 알아보는 컴포넌트 입니다
// 함수혀 컴포넌트는 state의 생명주기 함수를 사용할 수 없습니다.

import React from "react";
import PropTypes from 'prop-types';

function SFC(props, context) {
    // 클래스형 컴포넌트의 this.prop 값과 동일하게 실행합니다.
    const {somePropValue} = props;

    // 클래스형 컴포넌트의 this.context와 동일합니다.
    // context는 6장에서 자세히 다룹니다.
    const {someContextValue} = context;
    return <h1>Hello, {somePropValue}</h1>
}

SFC.propTypes = {somePropValue : PropTypes.any};
SFC.defaultProps = {somePropValue : 'default value'};

export default SFC;