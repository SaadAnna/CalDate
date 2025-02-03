function calculateDays() {
    const date1 = new Date(document.getElementById("date1").value);
    const date2 = new Date(document.getElementById("date2").value);
    const InvaliDate = document.getElementById("Invalid_result");
    const ErroData = document.getElementById("Error_result");

    if (isNaN(date1) || isNaN(date2)) {
        InvaliDate.style.display = "flex";
        return;
    }

    if (date2 < date1) { // If the appointment date is earlier than today
        ErroData.style.display = "flex";
        return;
    }

    const differenceInMillis = date2 - date1;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.round(differenceInMillis / millisecondsPerDay);

    document.getElementById("result").innerText = `Days Until Appointment: ${differenceInDays}`;
    document.getElementById("result").style.color = "white";
    document.getElementById("result").style.width = "fit-content";
    document.getElementById("result").style.padding = "12px";
    document.getElementById("result").style.fontSize = "17px";
    document.getElementById("result").style.backgroundColor = "green";
    document.getElementById("result").style.margin = "auto";
    document.getElementById("result").style.fontFamily = "Poppins, serif";
    document.getElementById("result").style.marginTop = "40px";
}