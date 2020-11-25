$(document).ready(function () {

    $("#qrMail").kendoQRCode({
        value: "emilianomayerviegas@gmail.com",
        size: 120,
        border: {
        color: "#e15613",
        background: "transparent",
        width: 5

        }
    });

    $("#qrLinkedin").kendoQRCode({
        value: "https://www.linkedin.com/in/emiliano-mayer-viegas-03a0a41b2/",
        errorCorrection: "M",
        size: 120,
        border: {
            color: "rgb(14, 0, 209)",
            width: 5
        }
    });

    $("#qrCelular").kendoQRCode({
        value: "Cel:+5493465405225",
        errorCorrection: "Q",
        size: 120,
        border: {
            color: "#67a814",
            width: 5
        }
    });

    $("#qrGithub").kendoQRCode({
        value: "https://github.com/Emimayerk",
        errorCorrection: "H",
        size: 120,
        border: {
        color: "rgb(115, 0, 165)",
        width: 5

        }


    });

    $("#qrPortfolio").kendoQRCode({
        value: "https://emimayerk.github.io/demo-web-inmo-cilsa/",
        errorCorrection: "M",
        size: 120,
        border: {
        color: "rgb(79, 211, 255)",
        width: 5

        }


    });
});