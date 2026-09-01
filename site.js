// Bloggists static site — mobile nav + Fiverr two-step contact flow.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-mobile");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("contact-form");
  if (!form) return;

  var FIVERR_URL =
    "https://www.fiverr.com/bloggists/set-up-an-organic-traffic-foundation-for-your-blog";
  var step2 = document.getElementById("step-two");
  var draftBox = document.getElementById("draft-text");
  var errorEl = document.getElementById("form-error");
  var copyBtn = document.getElementById("copy-btn");
  var fiverrBtn = document.getElementById("fiverr-btn");
  var editBtn = document.getElementById("edit-btn");

  function value(name) {
    var el = form.elements[name];
    return el ? String(el.value || "").trim() : "";
  }

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.classList.remove("hidden");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorEl.classList.add("hidden");

    var name = value("name");
    var email = value("email");
    var website = value("website");
    var platform = value("platform");
    var service = value("service");
    var message = value("message");

    if (!name) return showError("Name is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError("Enter a valid email.");
    if (message.length < 10) return showError("Tell us a little more about what's going on.");

    var lines = ["Name: " + name, "Email: " + email];
    if (website) lines.push("Site: " + website);
    if (platform) lines.push("Platform: " + platform);
    if (service) lines.push("Service interest: " + service);
    lines.push("", message);

    draftBox.value = lines.join("\n");
    form.classList.add("hidden");
    step2.classList.remove("hidden");
    copyBtn.textContent = "1. Copy message";
    copyBtn.classList.remove("btn-outline");
    fiverrBtn.classList.add("btn-outline");
    step2.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  copyBtn.addEventListener("click", function () {
    function done() {
      copyBtn.textContent = "Copied \u2713";
      copyBtn.classList.add("btn-outline");
      fiverrBtn.classList.remove("btn-outline");
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(draftBox.value).then(done, fallback);
    } else {
      fallback();
    }
    function fallback() {
      draftBox.removeAttribute("readonly");
      draftBox.select();
      try {
        document.execCommand("copy");
      } catch (e) {}
      draftBox.setAttribute("readonly", "readonly");
      done();
    }
  });

  fiverrBtn.setAttribute("href", FIVERR_URL);

  editBtn.addEventListener("click", function () {
    step2.classList.add("hidden");
    form.classList.remove("hidden");
  });
})();
