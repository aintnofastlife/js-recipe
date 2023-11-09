const memoinput = document.getElementById("memo-input")
const button = document.getElementById("add-button")
button.onclick = function () {
  const memoValue = memoinput.value
  const memoContainer = document.getElementById("memo-container")

  memoContainer.append(memoValue)
}
