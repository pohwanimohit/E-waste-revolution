function takePledge() {
    let pledges = [];
    if (document.getElementById("pledgeRecycle").checked) {
        pledges.push("Recycle e-waste responsibly");
    }
    if (document.getElementById("pledgeReduce").checked) {
        pledges.push("Reduce electronic waste");
    }
    if (document.getElementById("pledgeDispose").checked) {
        pledges.push("Properly dispose of e-waste");
    }
    if (document.getElementById("pledgeReuse").checked) {
        pledges.push("Reuse electronics whenever possible");
    }
    if (document.getElementById("pledgeAwareness").checked) {
        pledges.push("Spread awareness about e-waste management");
    }

    if (pledges.length > 0) {
        document.getElementById("pledgeMessage").innerText = 
            "Thank you for pledging: " + pledges.join(", ") + "!";
    } else {
        document.getElementById("pledgeMessage").innerText = "Please select at least one pledge!";
    }
}