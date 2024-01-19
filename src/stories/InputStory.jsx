// 스토리를 스토리북 도구에 추가해주는 storiesOf() 함수를 import 하였음
// input 컴포넌트를 import 하였음
// 스토리북 도구에 표시할 스토리의 이름을 입력했습니다.
// 스토리북 도구에 표시할 메뉴 이름을 입력했습니다.

import React from "react";
import {storiesOf} from '@storybook/react';
import Input from "../03/input";

storiesOf('Input', module)
.add('기본 설정', () => <Input name='name' />)
.add('label 예제', () => <Input name ='name' label='이름' />);