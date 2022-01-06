import { useState } from "react";
import Header from "./header";
import Contents from "./contents";
import styles from "./Style.module.css";

function App() {
  const [list, setList] = useState([]);
  return (
    <div>
      <Header text="My Project List" />
      <div className={styles.flex_box}>
        <Contents
          className={styles.item}
          project_img="img/todolist.png"
          project_title="To do List"
          project_intro="로컬 스토리지를 이용해 to do list를 작성하고 수정 및 삭제를 구현했다."
          project_url="https://github.com/pmhxhsj/todolist"
        />
        <Contents
          className={styles.item}
          project_img="img/drawSpace.png"
          project_title="Draw Space (Space for artist)"
          project_intro="모든 작가들을 위한 커뮤니티 웹이다. 회원가입, 글쓰기 및 좋아요 등 각종 기능들을 보유하고 있다."
          project_url="https://github.com/pmhxhsj/draw-space"
        />
      </div>
    </div>
  );
}

export default App;
