console.log("begruesser.js wird ausgeführt!");

// Warte bis WA bereit ist
var waitForWA = setInterval(function() {
    if (typeof WA !== 'undefined' && WA.onInit) {
        clearInterval(waitForWA);
        WA.onInit().then(function() {
            console.log("WA.onInit fertig!");
            WA.onInit().then(function() {
    console.log("WA.onInit fertig!");
    
    // Teste ob die Zone existiert
    console.log("Versuche Zone zu abonnieren...");
    
    WA.room.area.onEnter("begruesser").subscribe(function() {
        console.log("Zone betreten!");
        WA.ui.actionBar.addButton({

            WA.room.area.onEnter("begruesser").subscribe(function() {
                WA.ui.actionBar.addButton({
                    id: "begruesser-button",
                    label: "Ansprechen",
                    callback: function() {
                        WA.chat.sendChatMessage(
                            "Willkommen in der GaLaBau Welt. Hier lernst du alles über den Ausbildungsberuf des Landschaftsgärtners. Schau dich gern um!",
                            "Begrüßer"
                        );
                    }
                });
            });

            WA.room.area.onLeave("begruesser").subscribe(function() {
                WA.ui.actionBar.removeButton("begruesser-button");
            });

        }).catch(function(e) { console.error(e); });
    }
}, 100);