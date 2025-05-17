document.getElementById("startBtn").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (!("Notification" in window)) {
        alert("Your browser does not support notifications.");
        return;
    }

    Notification.requestPermission().then(function (permission) {
        if (permission !== "granted") {
            alert("Notification permission denied.");
            return;
        }

        let count = 0;
        const interval = setInterval(() => {
            if (count >= 61) {
                clearInterval(interval);
                return;
            }

            new Notification("I Love You", {
                body: `${name}, I Love You (${count + 1})`,
            });

            count++;
        }, 2000); // প্রতি ২ সেকেন্ডে একবার
    });
});