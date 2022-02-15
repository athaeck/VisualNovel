"use strict";
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    AUREA_NOVEL.f = FudgeCore;
    AUREA_NOVEL.fS = FudgeStory;
    AUREA_NOVEL.delay_5sec = AUREA_NOVEL.fS.Progress.defineSignal([() => AUREA_NOVEL.fS.Progress.delay(5)]);
    AUREA_NOVEL.delay_2sec = AUREA_NOVEL.fS.Progress.defineSignal([() => AUREA_NOVEL.fS.Progress.delay(2)]);
    function OpenMeter() {
        if (AUREA_NOVEL.pulsMeter != null && AUREA_NOVEL.puls != null) {
            AUREA_NOVEL.pulsMeter.hidden = false;
            AUREA_NOVEL.puls.hidden = false;
        }
    }
    AUREA_NOVEL.OpenMeter = OpenMeter;
    function CloseMeter() {
        if (AUREA_NOVEL.pulsMeter != null && AUREA_NOVEL.puls != null) {
            AUREA_NOVEL.pulsMeter.hidden = true;
            AUREA_NOVEL.puls.hidden = true;
        }
    }
    AUREA_NOVEL.CloseMeter = CloseMeter;
    async function FadeToBlack() {
        await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.blackscreen);
        AUREA_NOVEL.fS.Character.hideAll();
        AUREA_NOVEL.fS.Speech.hide();
    }
    AUREA_NOVEL.FadeToBlack = FadeToBlack;
    function fromCenterToMidLeft() {
        return {
            start: {
                translation: AUREA_NOVEL.fS.positions.center,
                rotation: -1, scaling: new AUREA_NOVEL.fS.Position(0.1, 0.1), color: AUREA_NOVEL.fS.Color.CSS("white", 0)
            }, end: {
                translation: AUREA_NOVEL.fS.positionPercent(20, 70), rotation: 1, scaling: new AUREA_NOVEL.fS.Position(0.1, 0.1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
            },
            duration: 2,
            playmode: AUREA_NOVEL.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AUREA_NOVEL.fromCenterToMidLeft = fromCenterToMidLeft;
    function fromDownLeftToTopRight() {
        return {
            start: {
                translation: AUREA_NOVEL.fS.positions.bottomleft,
                rotation: -1, scaling: new AUREA_NOVEL.fS.Position(0.1, 0.1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
            }, end: {
                translation: AUREA_NOVEL.fS.positions.topright, rotation: 1, scaling: new AUREA_NOVEL.fS.Position(0.1, 0.1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
            },
            duration: 5,
            playmode: AUREA_NOVEL.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AUREA_NOVEL.fromDownLeftToTopRight = fromDownLeftToTopRight;
    function fromLeftToRight() {
        return {
            start: {
                translation: AUREA_NOVEL.fS.positionPercent(10, 80),
                rotation: -1, scaling: new AUREA_NOVEL.fS.Position(1, 1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
            }, end: {
                translation: AUREA_NOVEL.fS.positionPercent(90, 80), rotation: 1, scaling: new AUREA_NOVEL.fS.Position(1, 1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
            },
            duration: 5,
            playmode: AUREA_NOVEL.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    AUREA_NOVEL.fromLeftToRight = fromLeftToRight;
    AUREA_NOVEL.dataForSave = {
        player: {
            name: ""
        },
        choice: {
            selectHandy: false,
            selectEvil: false
        },
        puls: 60,
        yourPuls: "60"
    };
    window.addEventListener("load", start);
    async function start(_event) {
        try {
            AUREA_NOVEL.pulsMeter = document.getElementById("puls");
            AUREA_NOVEL.puls = document.getElementById("yourPuls");
            CloseMeter();
            AUREA_NOVEL.gameMenu = AUREA_NOVEL.fS.Menu.create(AUREA_NOVEL.inGameMenu, AUREA_NOVEL.buttonFunctions, "game-menu");
            AUREA_NOVEL.buttonFunctions("Menü schließen");
            let scenes = [
                { id: "intro", scene: AUREA_NOVEL.Intro, name: "Introduction" },
                { id: "glade", scene: AUREA_NOVEL.Glade, name: "Glade" },
                { id: "camp", scene: AUREA_NOVEL.Camp, name: "Camp", next: "fight" },
                { id: "vault", scene: AUREA_NOVEL.Vault, name: "Vault", next: "fight" },
                { id: "fight", scene: AUREA_NOVEL.Fight, name: "Fight" },
                { id: "end", scene: AUREA_NOVEL.End, name: "Ende" }
            ];
            let uiElement = document.querySelector("[type=interface]");
            AUREA_NOVEL.dataForSave = AUREA_NOVEL.fS.Progress.setData(AUREA_NOVEL.dataForSave, uiElement);
            await AUREA_NOVEL.ValidateGender();
            await AUREA_NOVEL.fS.Progress.go(scenes);
        }
        catch (e) {
            console.log(e);
        }
    }
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    async function Camp() {
        console.log("Start Camp Sequenz");
        if (!AUREA_NOVEL.dataForSave.choice.selectEvil) {
            await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.camp);
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.inkubus, AUREA_NOVEL.characters.inkubus.pose.idle, AUREA_NOVEL.fS.positionPercent(90, 80));
            await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.clock.duration, AUREA_NOVEL.transitions.clock.alpha, AUREA_NOVEL.transitions.clock.edge);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Das hier ist das Aurea Camp, hier werd ich dir gleich meine Freunde vorstellen, die uns bei unserem Unternehmen unterstützen werden.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Von was für einer Unternehmung sprichst du?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Ich hab keine Ahnung in was ich hier hineingeraten bin. Das alles hier wirkt so surreal.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Sind deine Freunde genauso wie du? Oder sind sie wie ich?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Wir sehen alle auf eine gewisse Weise gleich aus, aber dann doch wieder recht unterschiedlich.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Du wirst gleich sehen wie die anderen aussehen.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, `Zunächst haben wir da ${AUREA_NOVEL.characters.ent.name}.`);
            AUREA_NOVEL.fS.Text.setClass("item-definition");
            AUREA_NOVEL.fS.Text.addClass("aurea-information");
            AUREA_NOVEL.fS.Text.addClass("select");
            AUREA_NOVEL.fS.Text.print(`
                    <div class="page-wrapper">
                        <div class="image-wrapper">  
                            <img src="${AUREA_NOVEL.items.ent_sheet.image}" />
                        </div>
                    </div>
            `);
            const pageSelect = { select: "Auswählen", deny: "Ablehnen" };
            let response = await AUREA_NOVEL.fS.Menu.getInput(pageSelect, "select");
            switch (response) {
                case pageSelect.select:
                    AUREA_NOVEL.SelectItem(AUREA_NOVEL.items.ent_sheet);
                    await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Sehr gut. Dann machen wir mal weiter.");
                    break;
                default:
                    AUREA_NOVEL.DenySelection();
                    break;
            }
            AUREA_NOVEL.fS.Text.close();
            await AUREA_NOVEL.fS.update(1);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, `Als nächstes haben wir den ${AUREA_NOVEL.characters.golem.name}.`);
            AUREA_NOVEL.fS.Text.setClass("item-definition");
            AUREA_NOVEL.fS.Text.addClass("aurea-information");
            AUREA_NOVEL.fS.Text.addClass("select");
            AUREA_NOVEL.fS.Text.print(`
                    <div class="page-wrapper">
                        <div class="image-wrapper">  
                            <img src="${AUREA_NOVEL.items.golem_sheet.image}" />
                        </div>
                    </div>
            `);
            response = await AUREA_NOVEL.fS.Menu.getInput(pageSelect, "select");
            switch (response) {
                case pageSelect.select:
                    AUREA_NOVEL.SelectItem(AUREA_NOVEL.items.golem_sheet);
                    await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Sehr gut. Das wären alle.");
                    break;
                default:
                    await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Damit du zumindest einen Aurea im Inventar hast wird dir bei der zweiten Wahl der Charakter hinzugefügt.");
                    AUREA_NOVEL.SelectItem(AUREA_NOVEL.items.sebu_sheet);
                    await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Sehr gut. Das wären alle.");
                    break;
            }
            AUREA_NOVEL.fS.Text.close();
            await AUREA_NOVEL.fS.update(1);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, `Unser Land wurde von der Dunkelheit verschlungen. Sie hat sich die Macht des mächtigsten Aurea ${AUREA_NOVEL.characters.goma.name} mächtig gemacht um ihn und andere Aurea zu befehligen.`);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Wir haben uns das Ziel gesetzt das Dunkle zu vertreiben.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Um dieses Ziel zu erreichen mussten wir auf dich, unseren Retter, warten und uns versammeln, damit du uns in den Kampf führen kannst.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Wann soll dieser Kampf denn stattfinden?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Jetzt!");
            AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.glade, 0, 0.1, false);
            await AUREA_NOVEL.FadeToBlack();
        }
        else {
            return "glade";
        }
    }
    AUREA_NOVEL.Camp = Camp;
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    const malePath = "./Images/Characters/player.png";
    const femalePath = "./Images/Characters/player_female.png";
    AUREA_NOVEL.characters = {
        narrator: {
            name: "Erzähler",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {}
        },
        du: {
            name: AUREA_NOVEL.dataForSave.player.name,
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: ""
            }
        },
        handy: {
            name: "Handy",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Items/Handy.png"
            }
        },
        instaPost: {
            name: "Post",
            origin: AUREA_NOVEL.fS.ORIGIN.BOTTOMLEFT,
            pose: {
                idle: ""
            }
        },
        crystal: {
            name: "Crystal",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/Crystal.png"
            }
        },
        ent: {
            name: "Ent",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/Ent.png"
            }
        },
        goma: {
            name: "Goma",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/Goma.png"
            }
        },
        illusion: {
            name: "Illusion",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/Illusion.png"
            }
        },
        inkubus: {
            name: "Inkubus",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/Inkubus.png"
            }
        },
        golem: {
            name: "Steingolem",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/Iron_Golem.png"
            }
        },
        sebu: {
            name: "Sebu",
            origin: AUREA_NOVEL.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/Sebu.png"
            }
        }
    };
    async function ValidateGender() {
        AUREA_NOVEL.characters.du.name = await AUREA_NOVEL.dataForSave.player.name;
        if (AUREA_NOVEL.characters.du.name.length > 0) {
            const response = await fetch(`https://api.genderize.io?name=${AUREA_NOVEL.characters.du.name}`);
            const body = await response.json();
            if (response.status === 200) {
                AUREA_NOVEL.characters.du.pose.idle = await eval(`${body.gender}Path`);
            }
            else {
                AUREA_NOVEL.characters.du.pose.idle = malePath;
            }
        }
        else {
            AUREA_NOVEL.characters.du.pose.idle = malePath;
        }
    }
    AUREA_NOVEL.ValidateGender = ValidateGender;
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    async function PlayGoodEnd() {
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.hospital_background, 0.2, true);
        await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.hospital_room);
        await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.long.duration, AUREA_NOVEL.transitions.long.alpha, AUREA_NOVEL.transitions.long.edge);
        await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Was ein Traum, zumindest denke ich dass es ein Traum war. Ich bin so voller Medikamenten, dass ich gar nicht unterschieden kann, ob das gerade wirklich stattgefunden hat oder nicht.");
        AUREA_NOVEL.fS.Text.setClass("end-screen");
        AUREA_NOVEL.fS.Text.addClass("alive");
        AUREA_NOVEL.fS.Text.print("Du hast das Koma überlebt.");
    }
    async function PlayBadEnding() {
        AUREA_NOVEL.fS.Text.setClass("end-screen");
        AUREA_NOVEL.fS.Text.addClass("dead");
        AUREA_NOVEL.fS.Text.print("Du bist leider in deinem Komaschlaf verstorben.");
    }
    async function ValidateEnding(data) {
        if (data._isGoodEnding) {
            await PlayGoodEnd();
        }
        else {
            await PlayBadEnding();
        }
    }
    AUREA_NOVEL.ValidateEnding = ValidateEnding;
    async function End() {
        console.log("Start End Sequenz");
        const endDefinition = {
            _isGoodEnding: false
        };
        if (AUREA_NOVEL.dataForSave.puls <= 160 && AUREA_NOVEL.dataForSave.puls >= 30) {
            endDefinition._isGoodEnding = true;
        }
        await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.hospital_room);
        await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.long.duration, AUREA_NOVEL.transitions.long.alpha, AUREA_NOVEL.transitions.long.edge);
        await ValidateEnding(endDefinition);
    }
    AUREA_NOVEL.End = End;
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    let temp_items = [];
    async function HandleInventoryInput() {
        const items = await AUREA_NOVEL.fS.Inventory.open();
        if (items && items.length > 0) {
            temp_items = items;
        }
        else {
            await HandleInventoryInput();
        }
    }
    function DidIWin() {
        return temp_items.length === 2;
    }
    async function Fight() {
        console.log("Start Fight Sequenz");
        await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.fight);
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.battle_ambient, 0.5, true);
        await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.clock.duration, AUREA_NOVEL.transitions.clock.alpha, AUREA_NOVEL.transitions.clock.edge);
        if (AUREA_NOVEL.dataForSave.choice.selectEvil) {
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.illusion, AUREA_NOVEL.characters.illusion.pose.idle, AUREA_NOVEL.fS.positionPercent(30, 80));
            await AUREA_NOVEL.fS.update(1);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Da wären wir nun also.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Schau mal da drüben sind die Abtrünnigen.");
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.inkubus, AUREA_NOVEL.characters.inkubus.pose.idle, AUREA_NOVEL.fS.positionPercent(80, 80));
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.ent, AUREA_NOVEL.characters.ent.pose.idle, AUREA_NOVEL.fS.positionPercent(90, 80));
            await AUREA_NOVEL.fS.update(1);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, `Oh neeeeein! Sie haben ${AUREA_NOVEL.characters.du.name} auf ihre Seite ziehen können.`);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Wir müssen sie dennoch versuchen zu schlagen! Und das Land zu retten!");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Sieh einer an, sie meinen immernoch, dass sie die Erlöser sind.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, `Los ${AUREA_NOVEL.characters.du.name}, zeig ihnen, was wir von ihnen halten!`);
            await HandleInventoryInput();
            const items = temp_items;
            items.forEach(async (i) => {
                Object.keys(AUREA_NOVEL.characters).forEach(async (y) => {
                    const yObj = AUREA_NOVEL.characters[`${y}`];
                    if (yObj.name === i) {
                        await AUREA_NOVEL.fS.Character.animate(yObj, yObj.pose.idle, AUREA_NOVEL.fromLeftToRight());
                        await AUREA_NOVEL.fS.update(1);
                    }
                });
            });
            AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.fight, 0.5, false);
            await AUREA_NOVEL.delay_5sec();
            await AUREA_NOVEL.fS.update(1);
            const win = DidIWin();
            AUREA_NOVEL.fS.Text.setClass("fight-information");
            AUREA_NOVEL.fS.Text.addClass(`${win ? "victory" : "lose"}`);
            AUREA_NOVEL.fS.Text.print(`${win ? "Du hast gewonnen" : "Du hast verloren"}`);
            AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.fight, 0, 0.1, false);
            if (win) {
                items.forEach(async (i) => {
                    Object.keys(AUREA_NOVEL.characters).forEach(async (y) => {
                        const yObj = AUREA_NOVEL.characters[`${y}`];
                        if (yObj.name === i) {
                            await AUREA_NOVEL.fS.Character.hide(yObj);
                            await AUREA_NOVEL.fS.update(1);
                        }
                    });
                });
                await AUREA_NOVEL.delay_2sec();
                await AUREA_NOVEL.fS.Character.hide(AUREA_NOVEL.characters.inkubus);
                await AUREA_NOVEL.fS.Character.hide(AUREA_NOVEL.characters.ent);
                await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.goma, AUREA_NOVEL.characters.goma.pose.idle, AUREA_NOVEL.fS.positionPercent(90, 80));
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Das hast du sehr gut gemacht, wir sind stolz auf dich!");
                AUREA_NOVEL.OpenMeter();
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.goma, "Allerdings können wir jetzt nichts mehr mit dir anfangen. Wir müssen dich leider töten");
                AUREA_NOVEL.dataForSave.puls = 0;
                AUREA_NOVEL.dataForSave.yourPuls = "Du wurdest gerade umgebracht";
            }
            else {
                items.forEach(async (i) => {
                    Object.keys(AUREA_NOVEL.characters).forEach(async (y) => {
                        const yObj = AUREA_NOVEL.characters[`${y}`];
                        if (yObj.name === i) {
                            await AUREA_NOVEL.fS.Character.hide(yObj);
                            await AUREA_NOVEL.fS.update(1);
                        }
                    });
                });
                await AUREA_NOVEL.delay_2sec();
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Wir habens geschafft!");
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Wir lassen dich am Leben und befreien dich von deiner Gefangenhschaft.");
                await AUREA_NOVEL.fS.Character.hide(AUREA_NOVEL.characters.illusion);
                await AUREA_NOVEL.fS.update(1);
            }
        }
        else {
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.inkubus, AUREA_NOVEL.characters.inkubus.pose.idle, AUREA_NOVEL.fS.positionPercent(30, 80));
            await AUREA_NOVEL.fS.update(1);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Da wären wir nun also.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Schau mal da drüben. Da sind Illusion, der Diener Gomas und Goma. Sie sehen bereit für diesen Kampf aus.");
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.illusion, AUREA_NOVEL.characters.illusion.pose.idle, AUREA_NOVEL.fS.positionPercent(80, 80));
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.goma, AUREA_NOVEL.characters.goma.pose.idle, AUREA_NOVEL.fS.positionPercent(90, 80));
            await AUREA_NOVEL.fS.update(1);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Das ist also dieser Schwächling der uns hier herausfordert.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.goma, "Das wollen wir jetzt aber sehen was da passiert.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Bist du bereit?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "So bereit wie man nur sein kann. ");
            await HandleInventoryInput();
            const items = temp_items;
            items.forEach(async (i) => {
                Object.keys(AUREA_NOVEL.characters).forEach(async (y) => {
                    const yObj = AUREA_NOVEL.characters[`${y}`];
                    if (yObj.name === i) {
                        await AUREA_NOVEL.fS.Character.animate(yObj, yObj.pose.idle, AUREA_NOVEL.fromLeftToRight());
                        await AUREA_NOVEL.fS.update(1);
                    }
                });
            });
            AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.fight, 0.5, false);
            await AUREA_NOVEL.delay_5sec();
            await AUREA_NOVEL.fS.update(1);
            const win = DidIWin();
            AUREA_NOVEL.fS.Text.setClass("fight-information");
            AUREA_NOVEL.fS.Text.addClass(`${win ? "victory" : "lose"}`);
            AUREA_NOVEL.fS.Text.print(`${win ? "Du hast gewonnen" : "Du hast verloren"}`);
            AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.fight, 0, 0.1, false);
            if (win) {
                items.forEach(async (i) => {
                    Object.keys(AUREA_NOVEL.characters).forEach(async (y) => {
                        const yObj = AUREA_NOVEL.characters[`${y}`];
                        if (yObj.name === i) {
                            await AUREA_NOVEL.fS.Character.hide(yObj);
                            await AUREA_NOVEL.fS.update(1);
                        }
                    });
                });
                await AUREA_NOVEL.delay_2sec();
                await AUREA_NOVEL.fS.Character.hide(AUREA_NOVEL.characters.illusion);
                await AUREA_NOVEL.fS.Character.hide(AUREA_NOVEL.characters.goma);
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, `Das hast du sehr gut gemacht ${AUREA_NOVEL.characters.du.name}.`);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Du hast uns und unseren Freunden geholfen. Wir sind dir alles erdenkliche schuldig.");
            }
            else {
                items.forEach(async (i) => {
                    Object.keys(AUREA_NOVEL.characters).forEach(async (y) => {
                        const yObj = AUREA_NOVEL.characters[`${y}`];
                        if (yObj.name === i) {
                            await AUREA_NOVEL.fS.Character.hide(yObj);
                            await AUREA_NOVEL.fS.update(1);
                        }
                    });
                });
                await AUREA_NOVEL.delay_2sec();
                await AUREA_NOVEL.fS.Character.hide(AUREA_NOVEL.characters.inkubus);
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.goma, "HAHAHAHAHAHA hast du wirklich gedacht du kannst uns besiegen?");
                AUREA_NOVEL.OpenMeter();
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.goma, "Dafür wirst du jetzt bezahlen!");
                AUREA_NOVEL.dataForSave.puls = 0;
                AUREA_NOVEL.dataForSave.yourPuls = "Du wurdest gerade umgebracht";
            }
        }
        AUREA_NOVEL.CloseMeter();
        await AUREA_NOVEL.FadeToBlack();
        AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.battle_ambient, 0, 0.1, false);
        await AUREA_NOVEL.delay_2sec();
    }
    AUREA_NOVEL.Fight = Fight;
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    async function Glade() {
        console.log("Start Glade Sequenz");
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.glade, 0.5, true);
        await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.landscape);
        await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
        await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.clock.duration, AUREA_NOVEL.transitions.clock.alpha, AUREA_NOVEL.transitions.clock.edge);
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Wo bin ich? Wie bin ich hier her gekommen? Wie komme ich zurück?");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Gerade war ich doch noch in meinem Zimmer?!? Wo ist das Portal hin??? HIIIIILFEEEEEEEEE!!!!!");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Ich muss mir dringend was überlegen.");
        let items = [];
        if (AUREA_NOVEL.dataForSave.choice.selectHandy) {
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Hab ich mein Handy dabei? Ich muss schnell mal schauen.");
            items = await AUREA_NOVEL.fS.Inventory.open();
        }
        AUREA_NOVEL.OpenMeter();
        await AUREA_NOVEL.fS.update(1);
        if (items && items.length > 0 && items.includes("Handy")) {
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Ja perfekt hab ich.");
            AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.tochscreen, 0.5, false);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Mist.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Kein Empfang. Das war meine letze Rettung, verdammt! HIIIIILFEEEEEEE!!!!?!");
            AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.tochscreen, 0, 0.1, false);
        }
        else {
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Verdammt, was mach ich jetzt??!?");
        }
        AUREA_NOVEL.dataForSave.puls += 10;
        AUREA_NOVEL.dataForSave.yourPuls = "Dein Puls hat sich durch deine Aufregung um 10 erhöht!";
        await AUREA_NOVEL.fS.update(1);
        let panic = {
            umherrennen: "Umherrennen",
            beruhigen: "Versuchen zu beruhigen"
        };
        let panic_choice = await AUREA_NOVEL.fS.Menu.getInput(panic, "boredom-killer");
        function lefttoright() {
            return {
                start: {
                    translation: AUREA_NOVEL.fS.positions.left,
                    rotation: -1, scaling: new AUREA_NOVEL.fS.Position(1, 1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
                }, end: {
                    translation: AUREA_NOVEL.fS.positions.right, rotation: 1, scaling: new AUREA_NOVEL.fS.Position(1, 1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
                },
                duration: 1,
                playmode: AUREA_NOVEL.fS.ANIMATION_PLAYMODE.PLAYONCE
            };
        }
        function righttoleft() {
            return {
                start: {
                    translation: AUREA_NOVEL.fS.positions.right,
                    rotation: -1, scaling: new AUREA_NOVEL.fS.Position(1, 1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
                }, end: {
                    translation: AUREA_NOVEL.fS.positions.left, rotation: 1, scaling: new AUREA_NOVEL.fS.Position(1, 1), color: AUREA_NOVEL.fS.Color.CSS("white", 1)
                },
                duration: 1,
                playmode: AUREA_NOVEL.fS.ANIMATION_PLAYMODE.PLAYONCE
            };
        }
        switch (panic_choice) {
            case panic.umherrennen:
                AUREA_NOVEL.dataForSave.choice.selectEvil = true;
                AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.laufen_gras, 0.5, 0.1, false);
                await AUREA_NOVEL.fS.Character.animate(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, lefttoright());
                await AUREA_NOVEL.delay_2sec();
                AUREA_NOVEL.dataForSave.puls += 30;
                AUREA_NOVEL.dataForSave.yourPuls = "Dein Puls hat sich durch deine Aufregung um 30 erhöht!";
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.fS.Character.animate(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, righttoleft());
                await AUREA_NOVEL.delay_2sec();
                AUREA_NOVEL.CloseMeter();
                await AUREA_NOVEL.fS.update(1);
                AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.laufen_gras, 0, 0.1, false);
                AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.stolpern, 0.5, false);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "AAAAAAAAAh");
                await AUREA_NOVEL.FadeToBlack();
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.delay_2sec();
                return "vault";
            default:
                AUREA_NOVEL.dataForSave.choice.selectEvil = false;
                AUREA_NOVEL.dataForSave.puls -= 10;
                AUREA_NOVEL.dataForSave.yourPuls = "Dein Puls hat sich um 10 Punkte gesenkt, da du dich beruhigt hast.";
                await AUREA_NOVEL.fS.update(1);
                AUREA_NOVEL.CloseMeter();
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.FadeToBlack();
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.delay_2sec();
                await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.landscape);
                await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
                await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.inkubus, AUREA_NOVEL.characters.inkubus.pose.idle, AUREA_NOVEL.fS.positionPercent(90, 80));
                await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.clock.duration, AUREA_NOVEL.transitions.clock.alpha, AUREA_NOVEL.transitions.clock.edge);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, `Hallo ${AUREA_NOVEL.characters.du.name}.`);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Wer bist du? Wo kommst du denn jetzt her? Ich hab dich gar nicht kommen sehen");
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, `Mein Name lautet ${AUREA_NOVEL.characters.inkubus.name} und ich bin hier um dich zu suchen und zu empfangen.`);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.inkubus, "Komm mit ich dich den anderen Vorstellen.");
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Okey? Ich hab ja keine andere Wahl. Ich würde soweiso hier feststecken, ich komme mit.");
                await AUREA_NOVEL.FadeToBlack();
                await AUREA_NOVEL.fS.update(1);
                await AUREA_NOVEL.delay_2sec();
                return "camp";
        }
    }
    AUREA_NOVEL.Glade = Glade;
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    async function Intro() {
        console.log("Start with hospital room scene");
        async function ViewInsta() {
            for (let i = 0; i < 10; i++) {
                AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.tochscreen, 1);
                const postPath = `./Images/Items/insta_0${i}.jpg`;
                AUREA_NOVEL.characters.instaPost.pose.idle = postPath;
                await AUREA_NOVEL.fS.Character.animate(AUREA_NOVEL.characters.instaPost, AUREA_NOVEL.characters.instaPost.pose.idle, AUREA_NOVEL.fromDownLeftToTopRight());
                await AUREA_NOVEL.fS.Character.hide(AUREA_NOVEL.characters.instaPost);
            }
            await AUREA_NOVEL.fS.update(1);
        }
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.hospital_background, 0.2, true);
        await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.hospital_room);
        await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.clock.duration, AUREA_NOVEL.transitions.clock.alpha, AUREA_NOVEL.transitions.clock.edge);
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Es war einmal ein sehr einsamer und düsterer Tag.");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Unser Hauptakteur der Geschichte liegt hier in diesem Zimmer.");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Sagen wie er heißt kann ich leider nicht, da bräuchte ich deine Hilfe. Wie würdest du ihn gerne nennen wollen? ");
        AUREA_NOVEL.dataForSave.player.name = await AUREA_NOVEL.fS.Speech.getInput();
        await AUREA_NOVEL.fS.update(1);
        await AUREA_NOVEL.ValidateGender();
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, `Damit wäre meine Pflicht der Einleitung getan. ${AUREA_NOVEL.characters.du.name} wird nun also übernehmen. Viel Vergnügen!`);
        await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
        await AUREA_NOVEL.fS.update(1);
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Wieder so ein Tag, der seinem vorangegangenem Tag gleicht. Wieder kein Entertainment heute.");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Der Tag ist nun schon fast vorbei und ich bin immernoch hier ans Bett gefangen.");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Hoffentlich hört das bald auf.");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Ich kann mir die Zeit vielleicht mit meinem Handy vertreiben. Oder ich versuch ein bisschen zu schlafen, es ist jedenfalls schon echt dunkel draußen.");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Ich werde immer mal wieder einspringen um dir als Spieler ein paar Dinge zu erklären oder fehlende Informationen zu ergänzen.");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Zum Beispiel erhälst du gleich dein Handy als Gegenstand um mit ihm zu interagieren.");
        let boredom_killer = {
            liegen_bleiben: "Liegen bleiben",
            handy_rausholen: "Handy rausholen"
        };
        let boredom_killer_element = await AUREA_NOVEL.fS.Menu.getInput(boredom_killer, "boredom-killer");
        switch (boredom_killer_element) {
            case boredom_killer.liegen_bleiben:
                AUREA_NOVEL.dataForSave.choice.selectHandy = false;
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Dann versuch ich doch nochmal zu schlafen.");
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Ich kann hier aber auch wirklich gar nichts anderes machen. Ich werde morgen mal versuchen mir meine Zeit anders zu vertreiben und was zu suchen.");
                break;
            default:
                AUREA_NOVEL.dataForSave.choice.selectHandy = true;
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Zunächst erhälst du einen Überblick über den erhaltenen Gegenstand. Dieser wird sobald du die Information geschlossen hast in dein Inventar für spätere Aktionen abgelegt.");
                await AUREA_NOVEL.fS.Character.animate(AUREA_NOVEL.characters.handy, AUREA_NOVEL.characters.handy.pose.idle, AUREA_NOVEL.fromCenterToMidLeft());
                AUREA_NOVEL.fS.Text.setClass("item-definition");
                AUREA_NOVEL.fS.Text.addClass("handy-information");
                AUREA_NOVEL.fS.Text.print(`<div>  
                          <div class="flex-wrapper">
                            <div class="content-part">
                              <h1>${AUREA_NOVEL.items.handy.name}</h1>
                               <span>${AUREA_NOVEL.items.handy.description}</span>
                            </div>
                            <div class="image-part">
                               <div class="item-image-wrapper">
                                  <img class="item-image" src="${AUREA_NOVEL.items.handy.image}" />
                                </div>
                            </div>
                          </div>
                      </div>`);
                await AUREA_NOVEL.fS.Character.hide(AUREA_NOVEL.characters.handy);
                await AUREA_NOVEL.fS.update(1);
                AUREA_NOVEL.fS.Inventory.add(AUREA_NOVEL.items.handy);
                AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.receive_item, 0.5, false);
                AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.handy_notification, 1, false);
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Oh wie wenn man vom Teufel spricht, meldet sich das Handy. Mal sehen was Instagram so her gibt.");
                await ViewInsta();
                await AUREA_NOVEL.delay_5sec();
                await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Mheee. LAAAAAANGWEILIG. Mir ist langweilig. Dann versuch ich doch nochmal einen Moment zu schlafen.");
                break;
        }
        await AUREA_NOVEL.FadeToBlack();
        AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.hospital_background, 0, 1, true);
        await AUREA_NOVEL.fS.update(1);
        await AUREA_NOVEL.delay_5sec();
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.hospital_background, 0.2, true);
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.door_knocking, 0.5, false);
        await AUREA_NOVEL.delay_2sec();
        await AUREA_NOVEL.fS.update(1);
        await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.hospital_room);
        await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
        await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.long.duration, AUREA_NOVEL.transitions.long.alpha, AUREA_NOVEL.transitions.long.edge);
        AUREA_NOVEL.fS.Speech.show();
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Ja?");
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.door_knocking, 0.5, false);
        await AUREA_NOVEL.delay_2sec();
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Jahaa?");
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.door_knocking, 0.5, false);
        await AUREA_NOVEL.delay_2sec();
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Herein!");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Wieso kommt er nicht herein?");
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Hmhh. Er hat aufgehört, dann geh ich wohl mal nachsehen.");
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.footsteps_socks, 0.5, false);
        await AUREA_NOVEL.fS.Character.animate(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fromLeftToRight());
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "AAAAAAAAh was zum?");
        AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.footsteps_socks, 0, 0.2);
        await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.portal);
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.portal_sound, 0.5, false);
        AUREA_NOVEL.fS.Character.hideAll();
        AUREA_NOVEL.fS.Speech.hide();
        AUREA_NOVEL.fS.Sound.fade(AUREA_NOVEL.sound.hospital_background, 0, 1, true);
        await AUREA_NOVEL.fS.update(1);
        await AUREA_NOVEL.delay_2sec();
    }
    AUREA_NOVEL.Intro = Intro;
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    AUREA_NOVEL.items = {
        handy: {
            name: "Handy",
            description: "Das ist mein Handy. Vielleicht kann ich mir damit die Zeit vertreiben.",
            image: "./Images/Items/Handy.png"
        },
        crystal_sheet: {
            name: "Crystal",
            description: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Crystal.",
            image: "./Images/Items/Crystal_Charaktersheet.jpg"
        },
        ent_sheet: {
            name: "Ent",
            description: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Ent.",
            image: "./Images/Items/Ent_Charaktersheet.jpg"
        },
        goma_sheet: {
            name: "Goma",
            descpription: "Das sind die Charakter Eigenschaften und Fähigkieten des mächtigen Gomas",
            image: "./Images/Items/Goma_Charactersheet.jpg"
        },
        illusion_sheet: {
            name: "Illusion",
            description: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Illusion.",
            image: "./Images/Items/Ilusian_Charaktersheet.jpg"
        },
        inkubus_sheet: {
            name: "Inkubus",
            description: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Inkubus.",
            image: "./Images/Items/Inkubus_Charaktersheet.jpg"
        },
        sebu_sheet: {
            name: "Sebu",
            description: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Sebu.",
            image: "./Images/Items/Sebu_Charaktersheet.jpg"
        },
        golem_sheet: {
            name: "Steingolem",
            description: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Steingolem.",
            image: "./Images/Items/Steingolem_Charaktersheet.jpg"
        }
    };
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    AUREA_NOVEL.locations = {
        hospital_room: {
            name: "Krankenhauszimmer",
            background: "./Images/Backgrounds/Krankenhauszimmer_1.png"
        },
        blackscreen: {
            name: "Blackscreen",
            background: "./Images/Backgrounds/blackscreen.jpg"
        },
        portal: {
            name: "Portal",
            background: "./Images/Backgrounds/portal.jpg"
        },
        landscape: {
            name: "Glade",
            background: "./Images/Backgrounds/landscape.jpg"
        },
        fight: {
            name: "Kampf",
            background: "./Images/Backgrounds/Fight.jpg"
        },
        vault: {
            name: "Verließ",
            background: "./Images/Backgrounds/Verlies.jpg"
        },
        camp: {
            name: "Camp",
            background: "./Images/Backgrounds/camp.jpg"
        }
    };
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    AUREA_NOVEL.menuState = true;
    AUREA_NOVEL.inGameMenu = {
        save: "Speichern",
        load: "Laden",
        close: "Menü schließen",
        open: "Menü öffnen",
        credits: "Credits",
        volumeup: "+",
        volumedown: "-"
    };
    let volume = 5.0;
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        AUREA_NOVEL.fS.Sound.setMasterVolume(volume);
    }
    AUREA_NOVEL.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        AUREA_NOVEL.fS.Sound.setMasterVolume(volume);
    }
    AUREA_NOVEL.decrementSound = decrementSound;
    function showCredits() {
        AUREA_NOVEL.fS.Text.addClass("credits");
        AUREA_NOVEL.fS.Text.print(`
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
            <b>Insta Posts</b><br/>
            <i>insta_00.jpg: </i>von twinelogos, abgerufen: 07.02.2022<br/>
            <i>insta_01.jpg: </i>von IMAX, abgerufen: 07.02.2022<br/>
            <i>insta_02.jpg: </i>von transfermarkt_official, abgerufen: 07.02.2022<br/>
            <i>insta_03.jpg: </i>von thegoodquote.co, abgerufen: 07.02.2022<br/>
            <i>insta_04.jpg: </i>von ilive, abgerufen: 07.02.2022<br/>
            <i>insta_05.jpg: </i>von salomonfreeski, abgerufen: 07.02.2022<br/>
            <i>insta_07.jpg: </i>von salomonfreeski, abgerufen: 07.02.2022<br/>
            <i>insta_08.jpg: </i>von salomonfreeski, abgerufen: 07.02.2022<br/>
            <i>insta_09.jpg: </i>von natgeowild, abgerufen: 07.02.2022<br/>
            <b>Sounds</b><br/>
            <i>Sound Ordner:</i> alle Sounds stammen aus meiner Envato Elements Lizenz und wurden mit dem Projekt VN lizensiert<br/>
            `);
    }
    AUREA_NOVEL.showCredits = showCredits;
    async function buttonFunctions(option) {
        console.log(option);
        switch (option) {
            case AUREA_NOVEL.inGameMenu.save:
                await AUREA_NOVEL.fS.Progress.save();
                break;
            case AUREA_NOVEL.inGameMenu.close:
                AUREA_NOVEL.gameMenu.close();
                AUREA_NOVEL.menuState = false;
                break;
            case AUREA_NOVEL.inGameMenu.load:
                await AUREA_NOVEL.fS.Progress.load();
                break;
            case AUREA_NOVEL.inGameMenu.volumeup:
                incrementSound();
                break;
            case AUREA_NOVEL.inGameMenu.volumedown:
                decrementSound();
                break;
            case AUREA_NOVEL.inGameMenu.credits:
                showCredits();
                break;
            default:
                AUREA_NOVEL.gameMenu.open();
                AUREA_NOVEL.menuState = true;
                break;
        }
    }
    AUREA_NOVEL.buttonFunctions = buttonFunctions;
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(event) {
        switch (event.code) {
            case AUREA_NOVEL.f.KEYBOARD_CODE.F8:
                buttonFunctions("Speichern");
                console.log("saved successfull");
                break;
            case AUREA_NOVEL.f.KEYBOARD_CODE.F9:
                buttonFunctions("Laden");
                console.log("load successfull");
                break;
            case AUREA_NOVEL.f.KEYBOARD_CODE.M:
                if (AUREA_NOVEL.menuState) {
                    console.log("close");
                    buttonFunctions("Menü schließen");
                }
                else {
                    console.log("open");
                    buttonFunctions("Menü öffnen");
                }
                break;
        }
    }
    AUREA_NOVEL.handleKeyPress = handleKeyPress;
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    AUREA_NOVEL.sound = {
        hospital_background: "./Audio/Hospital_Room_Ambience.wav",
        glade: "./Audio/Light_Wind Loop.wav",
        battle_ambient: "./Audio/battle_ambient.wav",
        fight: "./Audio/fight.wav",
        tochscreen: "./Audio/tochscreen.wav",
        handy_notification: "./Audio/Notification_02.wav",
        footsteps_socks: "./Audio/Footsteps_Socks _90_fpm.wav",
        door_knocking: "./Audio/Triple_Knock_on_Wooden_Door_v2.wav",
        portal_sound: "./Audio/mystic_portal.wav",
        stolpern: "./Audio/stolpern.wav",
        laufen_gras: "./Audio/laufen_gras.wav",
        receive_item: "./Audio/receive_item.wav",
        deny_item: "./Audio/deny_inventar.wav"
    };
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    AUREA_NOVEL.transitions = {
        clock: {
            duration: 1,
            alpha: "./FreeTransitions/Others/020.jpg",
            edge: 1
        },
        long: {
            duration: 5,
            alpha: "./FreeTransitions/Others/039.jpg",
            edge: 1
        }
    };
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
var AUREA_NOVEL;
(function (AUREA_NOVEL) {
    async function SelectItem(item) {
        AUREA_NOVEL.fS.Inventory.add(item);
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.receive_item, 0.5, false);
    }
    AUREA_NOVEL.SelectItem = SelectItem;
    async function DenySelection() {
        await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Für den weiteren Verlauf der Geschichte ist es sinnvoll das Angebot anzunehmen!");
        AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.deny_item, 0.5, false);
    }
    AUREA_NOVEL.DenySelection = DenySelection;
    async function Vault() {
        console.log("Start Vault Sequenz");
        if (AUREA_NOVEL.dataForSave.choice.selectEvil) {
            AUREA_NOVEL.fS.Sound.play(AUREA_NOVEL.sound.glade, 0.2, true);
            await AUREA_NOVEL.fS.Location.show(AUREA_NOVEL.locations.vault);
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.du, AUREA_NOVEL.characters.du.pose.idle, AUREA_NOVEL.fS.positionPercent(10, 80));
            await AUREA_NOVEL.fS.Character.show(AUREA_NOVEL.characters.illusion, AUREA_NOVEL.characters.illusion.pose.idle, AUREA_NOVEL.fS.positionPercent(70, 80));
            await AUREA_NOVEL.fS.update(AUREA_NOVEL.transitions.clock.duration, AUREA_NOVEL.transitions.clock.alpha, AUREA_NOVEL.transitions.clock.edge);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Was? Wo? Wie? Wo bin ich jetzt schon wieder?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, `Hallo ${AUREA_NOVEL.characters.du.name} ich heiße ${AUREA_NOVEL.characters.illusion.name} und bin der ehrwürdige Diener ${AUREA_NOVEL.characters.goma.name}s und bin gekommen um dir deine Bestimmung zu offenbaren.`);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Was?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Ich verstehe nicht.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Wieso ich?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, `Alles zu seiner Zeit ${AUREA_NOVEL.characters.du.name}`);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Wir haben dich auf der Lichtung ohnmächtig auf dem Boden liegend gefunden und hierher gebracht.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Du scheinst wohl irgendwo dagegegen gelaufen zu sein und dadurch ohnmächtig geworden.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Bevor du erfährst was du machen musst, teile ich dir mit auf wessen Hilfe du zählen kannst.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, `Zunächst haben wir da ${AUREA_NOVEL.characters.crystal.name}.`);
            AUREA_NOVEL.fS.Text.setClass("item-definition");
            AUREA_NOVEL.fS.Text.addClass("aurea-information");
            AUREA_NOVEL.fS.Text.addClass("select");
            AUREA_NOVEL.fS.Text.print(`
                    <div class="page-wrapper">
                        <div class="image-wrapper">  
                            <img src="${AUREA_NOVEL.items.crystal_sheet.image}" />
                        </div>
                    </div>
            `);
            const pageSelect = { select: "Auswählen", deny: "Ablehnen" };
            let response = await AUREA_NOVEL.fS.Menu.getInput(pageSelect, "select");
            switch (response) {
                case pageSelect.select:
                    SelectItem(AUREA_NOVEL.items.crystal_sheet);
                    await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Sehr gut. Dann machen wir mal weiter.");
                    break;
                default:
                    DenySelection();
                    break;
            }
            AUREA_NOVEL.fS.Text.close();
            await AUREA_NOVEL.fS.update(1);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, `Als nächstes haben wir den Drachen ${AUREA_NOVEL.characters.sebu.name}.`);
            AUREA_NOVEL.fS.Text.setClass("item-definition");
            AUREA_NOVEL.fS.Text.addClass("aurea-information");
            AUREA_NOVEL.fS.Text.addClass("select");
            AUREA_NOVEL.fS.Text.print(`
                    <div class="page-wrapper">
                        <div class="image-wrapper">  
                            <img src="${AUREA_NOVEL.items.sebu_sheet.image}" />
                        </div>
                    </div>
            `);
            response = await AUREA_NOVEL.fS.Menu.getInput(pageSelect, "select");
            switch (response) {
                case pageSelect.select:
                    SelectItem(AUREA_NOVEL.items.sebu_sheet);
                    await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Sehr gut. Das wären alle.");
                    break;
                default:
                    await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.narrator, "Damit du zumindest einen Aurea im Inventar hast wird dir bei der zweiten Wahl der Character hinzugefügt.");
                    SelectItem(AUREA_NOVEL.items.sebu_sheet);
                    await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Sehr gut. Das wären alle.");
                    break;
            }
            AUREA_NOVEL.fS.Text.close();
            await AUREA_NOVEL.fS.update(1);
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "In unserem Land der Aurea haben abtrünnige beschlossen, die Macht des Landes zu stürzen.");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Deine Aufgabe wird dabei sein, dass du uns und Goma helfen musst. Bist du dabei?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Okey?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Wieso wurde ich dann gefangen genommen?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.du, "Ich werde mein bestes geben! Wann und wo findet der Kampf statt?");
            await AUREA_NOVEL.fS.Speech.tell(AUREA_NOVEL.characters.illusion, "Genau jetzt.");
            AUREA_NOVEL.fS.Character.hideAll();
            AUREA_NOVEL.fS.Speech.hide();
        }
        else {
            return "glade";
        }
    }
    AUREA_NOVEL.Vault = Vault;
})(AUREA_NOVEL || (AUREA_NOVEL = {}));
//# sourceMappingURL=AUREA_NOVEL.js.map