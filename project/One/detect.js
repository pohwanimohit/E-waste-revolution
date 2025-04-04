function detectWaste() {
    let fileInput = document.getElementById("wasteImage");
    let formData = new FormData();
    formData.append("wasteImage", fileInput.files[0]);

    fetch('/waste/ai-detect', { method: "POST", body: formData })
        .then(res => res.text())
        .then(data => alert(data))
        .catch(err => console.error("Error:", err));
}
