namespace AUREA_NOVEL {
    export let menuState: boolean = true;
    export const inGameMenu = {
        save: "Speichern",
        load: "Laden",
        close: "Menü schließen",
        open: "Menü öffnen",
        credits: "Credits",
        volumeup: "+",
        volumedown: "-"
    };
    export let gameMenu: fS.Menu;

    let volume: number = 5.0;

    export function incrementSound(): void {
        if (volume >= 10) return;
        volume += 0.5;
        fS.Sound.setMasterVolume(volume);
    }

    export function decrementSound(): void {
        if (volume <= 0) return;
        volume -= 0.5;
        fS.Sound.setMasterVolume(volume);
    }
    export function showCredits(): void {
        fS.Text.addClass("credits");
        fS.Text.print(`
            Die Visual Novel wurde mit FudgeStory erstellt.
            Characktere: <a target="_blank" href="https://www.vecteezy.com/vector-art/2382548-isometric-charcter-concept">https://www.vecteezy.com/vector-art/2382548-isometric-charcter-concept</a> <br/>
            Blackscreen Location: <a target="_blank" href="https://www.bravo.de/assets/field/image/blacklivesmatter_darum_posten_alle_stars_ein_schwarzes_foto.jpg">https://www.bravo.de/assets/field/image/blacklivesmatter_darum_posten_alle_stars_ein_schwarzes_foto.jpg</a> <br/>
            Der blaue Übergang wurde im Rahmen der Indi-Night SoSe 2021 erstellt <br/>
            Die Sounds kommen alle aus der Envato-Elements Lib. Alle Stücke sind über das Projekt VN über meinen Account lizenziert<br/>
            Low Poly Objekte, darunter zählen Aurea Characktere, Umgebungen und Sheets wurden im Projektstudium von meiner Projektgruppe erstellt <br/>
            2.5 D Objekte wurden selber mit Adobe Illustrator erstellt <br/>
            von <b>Nick Häcker</b>
            `
        );
    }

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
            case inGameMenu.volumeup:
                incrementSound();
                break;
            case inGameMenu.volumedown:
                decrementSound();
                break;
            case inGameMenu.credits:
                showCredits();
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
                buttonFunctions("Speichern");
                console.log("saved successfull");
                break;
            case f.KEYBOARD_CODE.F9:
                buttonFunctions("Laden");
                console.log("load successfull");
                break;
            case f.KEYBOARD_CODE.M:
                if (menuState) {
                    console.log("close");
                    buttonFunctions("Menü schließen");
                } else {
                    console.log("open");
                    buttonFunctions("Menü öffnen");
                }
                break;
        }
    }
}