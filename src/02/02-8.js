// 현재는 해당 폴더가 존재하지 않으나 모듈을 불러오는 형식은 다음과 같아요.
import MyModule from '/MyModule.js';
import { ModuleName } from './MyModule.js';
import { ModuleName as RenamedModuleName } from './MyModule.js';

function Func() {
  MyModule();
}

export const CONST_VALUE = 0;
export class myClass {}
export default new Func();
