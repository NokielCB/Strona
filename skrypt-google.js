function wyszukaj() {
    s = document.getElementById('s');
    document.getElementById('odpowiedz2').innerHTML = "";
    if (s.value == "") {

    } else if (s.value == "Vape" || s.value == "vape") {
        window.open("sklep.html", "_self").focus();
    } else if (s.value == "Rolnik" || s.value == "rolnik") {
        document.getElementById('odpowiedz').innerHTML = "Rolnik to dziwne stworzenie gra tylko w lige";
    } else if (s.value == "Zielone" || s.value == "zielone") {
        document.getElementById('odpowiedz').innerHTML = "Zielone są zielone";
        window.open("https://www.youtube.com/watch?v=w4MBjfLqqMw").focus();
    } else if (s.value == "Rolex" || s.value == "rolex") {
        document.getElementById('odpowiedz').innerHTML = "";
        document.getElementById('odpowiedz2').innerHTML = "Co to za nuta nie znam?";
    } else if (s.value == "Paulina" || s.value == "paulina") {
        document.getElementById('odpowiedz').innerHTML = "Paulina to najlepszy Plan A";
    } else if (s.value == "Karolina" || s.value == "karolina") {
        document.getElementById('odpowiedz').innerHTML = "Karolina bije cugla, jednak przerzuciła się na Antka";
    } else if (s.value == "Ania" || s.value == "ania") {
        document.getElementById('odpowiedz').innerHTML = "Ania to za wysoka liga";
    } else if (s.value == "Cugiel" || s.value == "cugiel") {
        document.getElementById('odpowiedz').innerHTML = "Cugiel simpuje do Karoliny jednak nie możemy zapomnieć że lizał się z leną";
    } else if (s.value == "Antek" || s.value == "antek") {
        document.getElementById('odpowiedz').innerHTML = "Antek jak tam cygareta? i jak tam Karolina?";
    } else if (s.value == "Lena" || s.value == "lena") {
        document.getElementById('odpowiedz').innerHTML = "Lena ma małego siusiaka";
    } else if (s.value == "Gry" || s.value == "gry") {
        window.open("gry-google.html", "_self").focus();
    } else {
        document.getElementById('odpowiedz').innerHTML = "Interesujące pytanie jednak nie znam na to opowiedzi";
    }
}

function losowe() {
    x = Math.floor(Math.random() * 10) + 1;
    switch (x) {
        case 1:
            document.getElementById('odpowiedz').innerHTML = "Ta szczęśliwy śmieszne";
            break;
        case 2:
            document.getElementById('odpowiedz').innerHTML = "Nie wiem po co w to klikasz";
            break;
        case 3:
            document.getElementById('odpowiedz').innerHTML = "To jest 3 z 10 możliwych opcji";
            break;
        case 4:
            document.getElementById('odpowiedz').innerHTML = "Minecraft >>>>>>> Fortnite";
            break;
        case 5:
            document.getElementById('odpowiedz').innerHTML = "Kiedy przybierasz na wadze lub tracisz na wadze, twoje komórki tłuszczowe nie znikają – po prostu zmieniają swój rozmiar.";
            break;
        case 6:
            document.getElementById('odpowiedz').innerHTML = "1 piwo to nie piwo a 2 piwo to nie wiem co bo wolę pepsi";
            break;
        case 7:
            document.getElementById('odpowiedz').innerHTML = "2+2=5";
            break;
        case 8:
            document.getElementById('odpowiedz').innerHTML = "1 wzór skróconego mnożenia to (a+b)^2=a^2+2ab+b^2";
            break;
        case 9:
            document.getElementById('odpowiedz').innerHTML = "Korea Północna i Kuba to jedyne miejsca, w których nie można kupić Coca-Coli.";
            break;
        case 10:
            document.getElementById('odpowiedz').innerHTML = "Arabia Saudyjska i Malta są jedyny krajami na świecie, w którym nie ma stałych rzek.";
            break;

    }
}

function rolex() {
    window.open("https://www.youtube.com/watch?v=3QLSOiDBi2w").focus();
    document.getElementById('odpowiedz2').innerHTML = "";
}
