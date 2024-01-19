// InputStory.jsx 파일을 loadStories() 함수 안에서 require() 함수로 임포트

import { configure } from '@storybook/react';

function loadstories() {
  require('../src/stories/InputStory');
  // 스토리 파일을 이 곳에 추가할 수 있음
}

configure(loadstories, module);
