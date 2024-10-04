# App.jsx

# Player.jsx

# 찾아보기
- 강의에서는 ul 대신 ol 사용 했던것 같은데 이유 다시보기
- 강의에서는 symbol 일치 여부 체크시 gameBoard 를 winning-combinations 랑 비교한 후,
일치하는 위치의 symbol이 O나 X 로 일치하는지 체크했던것 같은데,
내가 만든거랑 둘 중 뭐가 나을지 확인해보기
- 강의에서는 onClickBoard에서 derivePlayer 를 한번 더 호출하던데 이유 찾아보기

# 강의 원본 소스 보고 수정한 부분
## initBoard 복사 하는 부분 
- 초기 board 를 그대로 두고 symbol 이 저장 될 board 를 새로 선언해야 하는데,
이때 initBoard 의 형태를 참고만 해야했다.

```js
// 미룽
const gameBoard = [...board];

// 강의
let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
```

- 위 코드의 차이는 내가 작성한 코드는 얕은 복사, 강의 버전은 깊은 복사라는 것이다.
- initBoard 는 2차원 배열로 되어 있기 때문에 얕은 복사만 진행한 경우, 
최상위 배열은 새롭게 복사가 되지만 내부의 각 배열은 원래 initBoard의 내부 배열을 참조(같은 주소값)하기 때문에
initBoard 에 영향을 줄 수도 있다.
- 따라서, 깊은 복사르 사용해야함.
- 1차원 배열을 복사하는 경우 얕은 복사를 사용해도 됨.

## 우승 조건 확인 하는 부분
- 내가 생각한 방법은 player 가 board를 클릭해서 symbol 이 추가될 때마다
winning combinations 배열이랑 현재 gameBoard 배열을 서로 비교해서 교집합 데이터를 추출하고,
해당 데이터에 symbol 이 일치하면 game over 하는 방식이었다.
- 내가 생각한 방법을 구현하기 위해 시도한 내용 정리
1. 원래는 gameBoard 배열에 symbol 만 저장해두었는데, winning combinations 배열처럼
각각의 한 칸을 객체로 수정하여 row, column, symbol 이렇게 3가지 key-value 가 저장되도록 함
2. winning 여부 체크시에 gameBoard 배열을 1차원 배열로 풀어주고, 
winning combinations 의 내부 배열 하나(우승 조건 케이스 중 하나) 랑 비교한다.
> 배열 두개 비교하는 과정에서 작성했던 코드
```js
// 기존에 null 만 담겨있던 gameBoard(=initBoard)를 수정
const initBoard = Array.from({length: 3}, (row, rowIdx) =>
    Array.from({length: 3}, (col, colIdx) => ({
        row: rowIdx,
        column: colIdx
    }))
);

// 2차원 배열 1차원 배열로 풀어주기
let testBoard = [].concat(...gameBoard);

// 1차원 배열이랑 winning combinations 내부 배열이랑 비교하기
function symbolMatch() {
    WINNING_COMBINATIONS.forEach((item) => {
        function isEqual(obj1, obj2) {
            return JSON.stringify(obj1) === JSON.stringify(obj2);
        }

        return testBoard.filter(t => item.some(i => isEqual(t, i)));
    })
}
```
> 내가 생각한 방법의 문제점들
- gameBoard 의 내부 배열과 winning combinations 의 내부 배열, 두 객체의 형태가 서로 달라서 isEqual 이 제대로 되지 않았음
  (gameBoard 의 내부 배열 내용=객체 의 형태를 수정할까 했지만, 비교하는 과정이 더 복잡해질 것 같아 시도하지 않음)
- Array.from(), filter(), some() 을 잘 모르고 사용했음.

---
- 위 방법으로는 완성도 못했고, 더이상 다른 방법이 생각도 안나고, 
가령 완성한다 해도 좋은 코드가 아닐 것 같아서 포기하고 강의 코드를 확인했다.

> 강의 소스의 방법
- (현재 내 소스와는 상태를 다루는 위치나 방법이 아주 많이 다르다.)
- 보드를 클릭하면 gameBoard 배열에 row, col, player 정보가 들어간 객체를 저장한다.
- gameBoard 의 상태가 업데이트 되면서 이것저것 하는데,
  - gameBoard 의 배열에는 symbol 정보만 남긴다.
  - winner 를 다시 확인한다.
- 이때 gameBoard 의 index 에 winning combinations 배열의 index 를 대입해서
symbol이 notNull 이면서 3개가 모두 일치하는 경우 gameOver 를 한다.


## Player 이름 변경하는 부분
> 내가 했던 방법의 문제점
- isEditing 이란 useState 에 수정중인지 알 수 있는 true/false 값(=status)이랑 playerName을 객체로 저장하고 있었음.
- 이렇게 하게 되면, status 가 변경될 때마다 playerName의 상태도 같이 변경되게 되는데,
playerName을 변경한 후에 다시 수정하려는 시점에서 initPlayerName의 값을 가져오기 때문에
playerName이 수정 전의 원래 값으로 돌아가게 되버린다.

> 강의 소스의 방법
- 수정중 여부와 player name 을 각각 따로 상태 관리 한다.

> 알게 된 점
- 상태가 변경되는 타이밍이 맞는 애들끼리는 같이 묶어도 되지만, 아닌 경우에는 문제가 발생한다.

## Player 정보를 담고 있는 객체의 형태
```js
// 내가 했던 방식
const playerInfo = [
  {initPlayerName: 'bom', symbol: 'O'},
  {initPlayerName: 'jel', symbol: 'X'}
];

// 강의 버전
const PLAYERS = {
  X: 'player 1',
  O: 'player 2'
}
```

- 굳이 key 값을 두개로 나눠 이름과, 심볼을 각각 저장할 필요가 없었다. 