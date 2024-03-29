## JSX + ES6 문법 살펴보기

### Template String (템플릿 문자열)

* 템플릿 문자열은 문자열 안에 변수와 연산식을 혼합하여 사용합니다

#### 02-2.js 안의 세부 내용

* 병합 연산자를 사용해 문자열과 문자열을 연결하고 있습니다.
* 문자열과 변수를 연결할 경우에도 병합 연산자를 사용합니다
* 줄바꿈을 할 경우에는 이스케이프 시퀀스(\n)을 문자열에 포함시킵니다
* 연산 결과를 괄호로 묶어 연산 구문을 먼저 실행하기도 합니다

#### 템플릿 문자열

* 병합 연산자를 사용하니 코드가 복잡해 보입니다. ES6 문법은 해당 내용을 개선하기 위해 **템플릿 문자열**을 도입했습니다
* 작은 따옴표 대신 백틱으로 문자열을 표현하는 것이 템플릿 문자열입니다.

#### 02-2.js 안의 세부 내용

* 템플릿 문자열에 $ 기호를 사용하여 변수를 포함하였습니다
* 템플릿 문자열은 enter 키를 눌러 줄을 바꾸는 것도 허용합니다
* 이스케이프 시퀀스를 사용하지 않아도 됩니다
* $ 기호를 이용해여 연산을 포함시킬 수도 있습니다


### Spread Operator (전개 연산자)

* ES6의 전개 연산자는 독특하면서도 매우 유용한 문법입니다.
* 전개연산자는 나열형 자료를 추출하거나 연결할 경우 사용합니다
* 객체, 변수명 앞에 ... 마침표 3개를 입력하면 됩니다
* 다만 배열 객체 함수 인자 표현식 안에서만 사용해야 합니다.

#### 02-3.js 안의 세부 내용

* 배열의 각 요소를 추출하여 새로운 배열을 만들었습니다
* concat 함수로 두 배열을 합쳤습니다.
* index로 배열 요소를 추출했습니다
* || 연산자와 조합하면 추출할 배열 요소가 없을 경우 기본 값을 지정할 수 있습니다.
* 특수 변수를 사용해 함수 내 인자 항목들을 배열로 변환하였습니다
* index 범위에 해당하는 배열 요소를 추출합니다

#### 전개 연산자는 객체에서도 사용가능합니다. 


### 클래스

* 기존 자바스크립트 문법은 클래스 표현식이 없어서 prototype으로 클래스를 표현했습니다.
* ES6에서는 클래스를 정의하여 사용할 수 있습니다.
* 자바스크립트에서 기존 클래스 표현방법은 함수를 생성자(constructor) 형태로 선언한 다음 상속이 필요한 변수나 함수를 prototype 객체에 할당하는 방법을 사용했습니다.
* prototype 객체는 new 연산자로 생성되는 객체 안에서 this 연산자의 함수 및 변수 선언 위치를 참조할 수 있는 요소인데, 이 특성을 이용한 것입니다

#### 02-6.js 안의 세부 내용

* new Shape(0,0)와 같이 함수를 호출하면 this 객체에 변수 및 함수가 prototype 객체에 선언된 변수와 함수를 함께 참조합니다.
* 예를들어 Shape() 생성자 함수에는 this.move에 함수를 정의하지 않았지만 prototype 객체에 move() 함수가 정의 되어있으므로 prototype 선언 이후 new 연산자로 Shape() 함수를 호출한 뒤 객체 s를 만듭니다.
* 그 만든 s 객체는 move 함수를 참조가능하게 됩니다

#### ES6 클래스 문법을 사용해보면?

* class 키워드로 클래스를 정의하므로 코드가 훨씬 간결해집니다.
* 해당 Class 함수 코드는 ES7에 포함된 클래스 확장 표현으로 constructor 함수 안에 this.name = "Shape"로 클래스 변수를 선언하는 것과 동일한 작업을 수행합니다.


### 디바운스와 스로틀

* 디바운스(debounce)는 어떤 내용을 입력하다가 특정 시간 동안 대기하고 있으면 마지막에 입력된 내용을 바탕으로 서버 요청을 하는 방법입니다.
* 연관 검색어 창을 떠올리면 이해하기가 쉽습니다.
* 네이버나 구글의 검색창에 내용을 입력할 경우 검색창 하단에 아무 내용도 나오지 않다가 입력을 멈추면 검색창 하단에 연관 검색어 목록이 나타납니다. 이것이 디바운스로 구현한 성능인 것이죠


### 가변 변수와 불변 변수

* 기존 자바스크립트 문법은 변수 선언에 var 키워드를 사용했지만 ES6에서는 값을 수정할 수 있는 가변 변수를 위한 let 키워드와, 값이 수정 불가능한 불변 변수인 const 키워드를 사용합니다
* 가변 변수는 먼저 let 키워드로 선언합니다. let으로 선언한 변수는 읽거나 수정할 수 있습니다.
* let 키워드를 사용하면 이 변수를 수정 가능한지 코드만 읽어도 바로 알 수 있어 유용합니다.
* 불변 변수는 const 키워드를 사용합니다. const로 선언한 변수는 읽기만 가능합니다.
* 그런데 **불변 변수는 값을 다시 할당할 수 없는 것이지 값을 변경 가능합니다.**

#### 02-4.js 안의 세부 내용

* 배열이나 객체를 불변 변수로 선언하고 자바스크립트 내장 함수로 값을 변경한 것입니다.
* arr2나 obj2는 분명 const로 선언된 불변 변수입니다. 하지만 자바스크립트 내장 함수를 사용하니 값을 변경할 수 있습니다.
* 앞에서 불변 변수는 값을 수정할 수 없다고 했는데, 이런 상황들을 **무결성 제약 조건에 위배 되었다**라고 합니다.
* 이정도 까지 온다면 개발자 스스로 불변 변수를 어떻게 관리할지 정해야합니다.
* 불변 변수로 정의된 배열이나 객체를 내장 함수로 수정하는 것을 암묵적으로 금지하여 무결성을 유지하는 조건이 있으면
* (제 생각입니다) 원본 데이터를 보존시키고 샘플 데이터를 let으로 만들어두고 변경 용이하게 유지보수하는 방법이 좋다고 봅니다.


### 객체 확장 표현식

* 이전 자바스크립트 문법에서 객체를 선언할 경우 불편했던 점을 많이 개선한 점이 ES6문법의 한 가지 특징이라 말할 수 있습니다.
* 또한 객체나 배열의 특정값을 손쉽게 추출 가능한 표현식도 추가했습니다.

#### 02-7.js 안의 세부 내용
* obj에 대입한 객체를 보면 키 이름이 키 값과 동일합니다.
* 연산 결과로 키값을 대입할 경우 키 값을 지정할 코드를 추가로 작성해야합니다.
* 객체에 함수를 추가할 경우 변수에 함수를 할당해야합니다.

#### 비교 분석 코드
* 객체의 변수를 선언한 경우 키 값을 생략하면 자동으로 키의 이름으로 키 값을 지정합니다.
* 객체 생성 블록 안에 대괄호를 사용하여 표현식을 작성하면 추가하여 계산된 키 값을 생성 가능합니다.
* function 키워드를 생략하여 함수를 선언할 수 있습니다.


### 구조 분해 할당을 02-7.js 코드를 이용하여 개념 살펴보기

* 배열의 인덱스를 사용하여 변수에 할당합니다.
* || 연산자를 사용하여 배열의 해당 index에 값이 없을 경우 기본 값으로 할당합니다.
* 배열의 두 값을 치환했습니다.
* 객체의 키 값을 변수에 할당한 모습입니다.
* || 연산자를 사용하여 객체에 해당 키 값이 없다면 기본값으로 할당합니다.
* 객체의 키 값을 다른 변수에 할당합니다.

#### ES6의 구조 분해 할당 차이점!

* 대괄호 블록 사이에 추출하고자 하는 값의 index 위치에 변수를 배치하였습니다.
* 인덱스 위치에 각각 변경할 변수를 교차 배치하여 배열의 두 값을 치환했습니다.
* 객체의 키 값을 변수에 할당했습니다.
* 콜론 부호와 함께 새 변수명을 선언하여 추출된 키 값을 다른 변수명으로 할당합니다.

#### 구조 할당 마무리

* 구조 할당은 전개 연산자를 함께 사용합니다.
* ES6의 구조 분해와 구조 할당은 함수 인자값을 다루거나 JSON 데이터를 변환할 경우 유용하게 사용하므로 꼭 기억하는 것이 좋아요.


### 라이브러리 의존성 관리

* 먼저 어떤 파일이나 코드가 다른 파일이나 코드를 필요로 하는 것을 의존성이라고 합니다.
* 기존 자바스크립트는 라이브러리나 모듈을 관리하는 방법이 매우 불변했습니다.
* ES6에서는 이런 문제를 깔끔하게 해결했습니다.
* 기존 자바스크립트에서는 script 엘리먼트를 이용하여 관리했습니다.
* 리액트를 사용할 경우 import 구문을 사용하게 되는데 이는 script 엘리먼트 없이 연결된 파일 및 의존 파일을 먼저 모두 내려 받고 코드를 구동하도록 변경한 것입니다.


### 배열 함수

* ES6에서는 자주 사용하는 배열 함수인 forEach(), map(), reduce() 함수에 대해 알아야합니다.
