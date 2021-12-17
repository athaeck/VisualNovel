namespace Template {
      export let menuState: boolean = true;
      export const inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        open: "Open"
    };
      export let gameMenu: fS.Menu;

      export async function buttonFunctions(option: string): Promise<void> {
        console.log(option);
        switch (option) {
            case inGameMenu.save:
                await fS.Progress.save();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menuState = false;
                break;
            case inGameMenu.load:
                await fS.Progress.load();
                break;
            default:
                gameMenu.open();
                menuState = true;
                break;
        }
    }


      document.addEventListener("keydown", handleKeyPress);

      export async function handleKeyPress(event: KeyboardEvent): Promise<void> {
        switch (event.code) {
            case f.KEYBOARD_CODE.F8:
                buttonFunctions("Save");
                console.log("saved successfull");
                break;
            case f.KEYBOARD_CODE.F9:
                buttonFunctions("Load");
                console.log("load successfull");
                break;
            case f.KEYBOARD_CODE.M:
                if (menuState) {
                    console.log("close");
                    buttonFunctions("Close");
                } else {
                    console.log("open");
                    buttonFunctions("Open");
                }
                break;
        }
    }
}