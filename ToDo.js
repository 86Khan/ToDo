function inc (Some) {
}
<button on:click={inc}>
	Clicked {line-through}
</button>



input[class=inputcheck] {
    display: none;
  }
  
  input[id=cb]:checked~p.strikethrough {
    text-decoration: line-through;
    color: red;
  }