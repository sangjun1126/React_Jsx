// 책에서는 App.js 파일에서 실습
// 비교분석을 위해 App.jsx 파일을 만들어 코드 비교

import React from "react";
import ChildComponent from "./03/ChildComponent";

class App extends React.Component {
    render() {
        const array = [1,2,3];
        const obj = {name : '제목', age : 30};
        const node = <h1>노드</h1>
        const func = () => {console.log('메세지')}

        return (
            <ChildComponent 
            boolValue = {true}
            numValue = {1}
            arrayValue = {array}
            objValue = {obj}
            nodeValue = {node}
            funcValue = {func}
            />
        )
    }
}

export default App;