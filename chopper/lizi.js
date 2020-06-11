let duration = 50;

function paintDoraemon(preCode, code, fn) {
  let n = 0;
  let codeDom = document.querySelector("#code");
  let styleDom = document.querySelector("#styleTag");

  setTimeout(function writeCode() {
    n += 1;
    codeDom.innerHTML = Prism.highlight(
      preCode + code.substring(0, n),
      Prism.languages.css,
      "css"
    );
    styleDom.innerHTML = preCode + code.substring(0, n);
    codeDom.scrollTop = codeDom.scrollHeight;
    if (n < code.length && n) {
      setTimeout(writeCode, duration);
    } else {
      fn && fn();
    }
  }, duration);

  function stop() {
    n = -1;
  }
  return stop;
}
function replay() {
  duration = 50;
  setTimeout(() => {
    $(".action > button:nth-child(2)")
      .addClass("active")
      .siblings(".active")
      .removeClass("active");
  }, 100);

  document.querySelector("#code").innerHTML = "";
  document.querySelector("#styleTag").innerHTML = "";
  stop = paintDoraemon("", code, () => {});
}

let stop = paintDoraemon("", code, () => {});

$(".action").on("click", "button", (e) => {
  let $button = $(e.currentTarget);
  let speed = $button.attr("data-speed");
  $button.addClass("active").siblings(".active").removeClass("active");
  switch (speed) {
    case "slow":
      duration = 100;
      break;
    case "normal":
      duration = 50;
      break;
    case "fast":
      duration = 5;
      break;
    case "replay":
      stop();
      replay();
      break;
  }
});
