import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //button（完了）タグ生成

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  completeButton.addEventListener("click", () => {
    //親要素を取得
    const completeTarget = completeButton.parentNode;
    //取得した要素を一旦削除
    deleteFromIncompleteList(completeButton.parentNode);
    //取得した要素のボタンを変更
    completeTarget.removeChild(completeButton);
    completeTarget.removeChild(deleteButton);
    completeTarget.appendChild(backButton);
    //完了のリストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
