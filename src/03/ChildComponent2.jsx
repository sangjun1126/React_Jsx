// 필수 프로퍼티 사용하기

import React from "react";
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
    render() {
        const {
            objValue,
            requiredStringValue,
        } = this.props;

        return (
            <div>
                <div>객체 값 : {String(Object.entries(objValue))}</div>
                <div>필수 값 : {requiredStringValue}</div>
            </div>
        );
    }
}

ChildComponent2.propTypes = {
    // 객체 프로퍼티
    objValue: PropTypes.shape({
        name: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
        }),
    }),

    // 필수 프로퍼티
    requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
