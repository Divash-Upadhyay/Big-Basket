document.getElementById("fPayment").addEventListener("click", finalPayment);

function finalPayment() {
    var x = document.getElementById("otp").value;
    if (x.length == 6) {
        setTimeout(() =>{
            window.location = "success.html"
        },3000)
        
    } else {
        setTimeout(() => {
            alert("Invalid OTP")
        },3000)
       
    }
}