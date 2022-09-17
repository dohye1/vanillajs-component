# Vanilla Javascript로 web component 만들기

> [이 블로그](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-state-setstate-render)를 보고 따라해봤습니다.

## 정리

0. jquery를 사용했을때는 `DOM`을 직접 조작하는 방식위주였다면, `UI library`가 등장하면서 직접적으로 DOM을 다루는 행위가 감소하고, `상태(state)`를 기준으로 `DOM`을 렌더링하는 형태로 발전함. 즉, `DOM`이 변하는 경우가 `state`에 종속되어버림. 그래서 상태관리라는 개념이 등장!!

1. setState메서드에서 render메서드를 호출함 > 리액트와 동일하게 동작하도록 처리하는것같다.
   그리고 state의 업데이트는 setState로만 변경해야하기때문에 state의 변화는 렌더링를 발생시킴

2. `Component`라는 클래스를 만들어서 각 컴포넌트를 생성할때마다 상속하게 한다. 그러면 컴포넌트의 로직을 어느정도 강제할 수 있기때문에 관리할떄 용이함

3. `Element.closest`

   > 주어진 css 선택자와 일치하는 요소를 찾을때까지, 자기 자신을 포함해서 위쪽(부모방향)으로 문서 트리를 순회한다.

4. 생각보다 `dataset`을 많이 활용하넹..!
   예시

```js
target.closest("[data-seq]").dataset.seq;
...
this.$target.querySelector('[data-component="item-appender"]');
```

# store 구현해보기

- `observer pattern`을 사용해서 store를 구현해봄

> `observable`과 `observe`라는 관계
>
> - `observable`은 `observe`에서 사용된다.
> - `observable`에 변화가 생기면, `observe`에 등록된 함수가 실행된다.

- `Object.defineProperty(object, prop, descriptor)`
  > 객체에 직접 새로운 속성을 정의하거나, 이미 존재하는 속성을 수정한 후, 그 객체를 반환한다.
  - `object` : 속성을 정의할 객체
  - `prop` : 새로 정의하거나 수정하려는 속성의 이름 또는 Symbol
  - `descriptor` : 새로 정의하거나 수정하려는 속성을 기술하는 객체

```js
let a = 10;
const state = {};
Object.defineProperty(state, "a", {
  get() {
    console.log(`현재 a의 값은 ${a}입니다.`);
    return a;
  },
  set(value) {
    a = value;
    console.log(`변경된 a의 값은 ${a}입니다.`);
  },
});
```
