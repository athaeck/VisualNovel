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
            Die Visual Novel wurde mit FudgeStory erstellt.<br/>
            <b>Hintergründe</b><br/>
            <i>Schwarzer Screen:</i> https://www.bravo.de/assets/field/image/blacklivesmatter_darum_posten_alle_stars_ein_schwarzes_foto.jpg<br/>
            <i>Blau - weißer Screen:</i> Hintergrund der Indi Night SoSe 21<br/>
            <i>2.5D Hintergründe:</i> Selber erstellt<br/>
            <i>3D Blender Hintergünder:</i> wurden im Rahmen des Projektstudiums von Aurea angefertigt<br/>
            <b>Transitions</b><br/>
            <i>Alle: </i>stammen aus dem FreeTransitions Ordner, der bereits dem Projekt zum Start vorlag<br/>
            <b>Chracktere</b><br/>
            <i>Spieler Charackter:</i> https://www.vecteezy.com/vector-art/2382548-isometric-charcter-concept weiblich | männlich <br/>
            <i>Goma:</i> https://free3d.com/3d-model/blue-dragon-low-polygon-art-vr-ar-low-poly-3d-model-6604.html erstellt von SHULDYAKOV<br/>
            <i>Aurea:</i> wurden im Rahmen des Projektstudiums von Aurea angefertigt<br/>
            <b>Sounds</b><br/>
            <i>Sound Ordner:</i> alle Sounds stammen aus meiner Envato Elements Lizenz und wurden mit dem Projekt VN lizensiert<br/>
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