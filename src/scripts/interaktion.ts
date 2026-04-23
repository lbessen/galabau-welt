import { bootstrapExtra } from "@workadventure/scripting-api-extra";

bootstrapExtra().then(() => {

  let inZone = false;

  WA.room.area.onEnter("pflanze_zone", () => {
    inZone = true;
    WA.ui.displayActionMessage({
      message: "Drücke E um zu interagieren"
    });
  });

  WA.room.area.onLeave("pflanze_zone", () => {
    inZone = false;
    WA.ui.removeActionMessage();
  });

  WA.onKeyPress("e", () => {
    if (!inZone) return;

    WA.ui.openPopup(
      "pflanzePopup",
      "Hier wächst eine schöne Pflanze 🌿",
      [{
        label: "OK",
        callback: (popup) => popup.close()
      }]
    );
  });

});