function Pulso() {

    const pulso = document.getElementById("animacao1");

    pulso.addEventListener("click", () => {
        pulso.classList.add("pulsar");  

        pulso.addEventListener("animationend", () => {
            pulso.classList.remove("pulsar");
        });
    });
}
Pulso();