function ClickedButton() {
  function handleClick() {
    alert("You saved this pin already!");
  }
  return (
    <button id="clickedButton" onClick={handleClick}>
      Saved
    </button>
  );
}


export default ClickedButton;
