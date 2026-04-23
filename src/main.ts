/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import "./scripts/npc_begruesser";
import "./scripts/test";

let currentPopup: any = undefined;
let inZone = false;

WA.onInit().then(() => {

    console.log("Scripting API ready");

    // Extra API starten
    bootstrapExtra().then(() => {
        console.log("Scripting API Extra ready");
    }).catch(e => console.error(e));

    // ===== Pflanze Zone =====

    WA.room.area.onEnter("pflanze_zone").subscribe(() => {
        inZone = true;
        WA.ui.displayActionMessage({
            message: "Drücke X zum Interagieren"
        });
    });

    WA.room.area.onLeave("pflanze_zone").subscribe(() => {
        inZone = false;
        WA.ui.removeActionMessage();
    });

    WA.onKeyPress("x", () => {
        if (!inZone) return;

        currentPopup = WA.ui.openPopup(
            "pflanzePopup",
            "Hier wächst eine schöne Pflanze 🌿",
            [{
                label: "OK",
                callback: (popup) => popup.close()
            }]
        );
    });

}).catch(e => console.error(e));

export {};