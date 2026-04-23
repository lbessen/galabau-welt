/// <reference types="@workadventure/iframe-api-typings" />

WA.onInit().then(() => {

    WA.room.area.onEnter("pflanze_zone").subscribe(() => {
        WA.ui.actionBar.addButton({
            id: "pflanze-button",
            label: "Interagieren",
            callback: () => {
                WA.ui.openPopup(
                    "pflanzePopup",
                    "Hier wächst eine schöne Pflanze 🌿",
                    [{ label: "OK", callback: (popup) => popup.close() }]
                );
            }
        });
    });

    WA.room.area.onLeave("pflanze_zone").subscribe(() => {
        WA.ui.actionBar.removeButton("pflanze-button");
    });

}).catch(e => console.error(e));

export {};