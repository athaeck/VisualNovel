"use strict";
var Aurea_Novel;
(function (Aurea_Novel) {
    Aurea_Novel.f = FudgeCore;
    Aurea_Novel.fS = FudgeStory;
    console.log("AUREA_NOVEL starting");
    Aurea_Novel.transition = {
        clock: {
            duration: 1,
            alpha: "./Images/Transitions/puzzle.png",
            edge: 1
        }
    };
    Aurea_Novel.sound = {
        // Music
        backgroundTheme: "",
        // Sound
        click: ""
    };
    Aurea_Novel.location = {
        bedroom: {
            name: "bedroom",
            background: "./Images/Backgrounds/Bedroom_Night.png"
        }
    };
    Aurea_Novel.characters = {
        narrator: {
            name: "narrator"
        },
        you: {
            name: "you",
            origin: Aurea_Novel.fS.ORIGIN.CENTER,
            pose: {
                // Pfad als String angeben
                angry: "./Images/Backgrounds/Bedroom_Night.png",
                happy: "./Images/Backgrounds/Bedroom_Night.png",
                upset: "./Images/Backgrounds/Bedroom_Night.png"
            }
        },
        clock: {
            name: "clock",
            origin: Aurea_Novel.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/800px_COLOURBOX4793106.jpg"
                // idle: "./Images/Characters/WhatsApp\ Image\ 2021-12-10 at 19.28.43.jpeg"
            }
        }
    };
    Aurea_Novel.dataForSave = {
        nameOfYou: ""
    };
    function fromLeftToRight() {
        return {
            start: {
                translation: Aurea_Novel.fS.positions.bottomleft,
                rotation: -20, scaling: new Aurea_Novel.fS.Position(0.5, 1.5), color: Aurea_Novel.fS.Color.CSS("white", 0)
            }, end: {
                translation: Aurea_Novel.fS.positions.topright, rotation: 20, scaling: new Aurea_Novel.fS.Position(1.5, 0.5), color: Aurea_Novel.fS.Color.CSS("red", 1)
            },
            duration: 1,
            playmode: Aurea_Novel.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Aurea_Novel.fromLeftToRight = fromLeftToRight;
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Aurea_Novel.SevdaTest, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Aurea_Novel.dataForSave = Aurea_Novel.fS.Progress.setData(Aurea_Novel.dataForSave, uiElement);
        // start the sequence
        Aurea_Novel.fS.Progress.go(scenes);
    }
})(Aurea_Novel || (Aurea_Novel = {}));
var Aurea_Novel;
(function (Aurea_Novel) {
    async function Scene() {
        console.log("moin");
        let text = {
            narrator: {
                T0000: "moin",
                T0001: "1"
            },
            you: {
                T0000: "Hi",
                T0001: "2"
            }
        };
        await Aurea_Novel.fS.Location.show(Aurea_Novel.location.bedroom);
        await Aurea_Novel.fS.update(Aurea_Novel.transition.clock.duration, Aurea_Novel.transition.clock.alpha, Aurea_Novel.transition.clock.edge);
        await Aurea_Novel.fS.Character.show(Aurea_Novel.characters.you, Aurea_Novel.characters.you.pose.happy, Aurea_Novel.fS.positionPercent(30, 100));
        await Aurea_Novel.fS.update(1);
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, text.you.T0000);
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.narrator, text.narrator.T0000);
        await Aurea_Novel.fS.Character.hide(Aurea_Novel.characters.you);
        let firstDialogueElementOptions = {
            iSayOk: "Okey",
            iChoose: "Goose",
            iSayYes: "not",
            iSayNo: "yes"
        };
        let firstDialogueElement = await Aurea_Novel.fS.Menu.getInput(firstDialogueElementOptions, "indioClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iChoose:
                await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, text.you.T0000);
                break;
            case firstDialogueElementOptions.iSayOk:
                await Aurea_Novel.fS.Character.show(Aurea_Novel.characters.you, Aurea_Novel.characters.you.pose.happy, Aurea_Novel.fS.positionPercent(30, 100));
                break;
            case firstDialogueElementOptions.iSayYes:
                await await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, text.you.T0000);
                break;
            default:
                await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, "anny are you okey?");
                break;
        }
        // await fS.update(1);
    }
    Aurea_Novel.Scene = Scene;
})(Aurea_Novel || (Aurea_Novel = {}));
var Aurea_Novel;
(function (Aurea_Novel) {
    async function SevdaTest() {
        console.log("moin");
        // let text = {
        //   narrator: {
        //     T0000: "moin",
        //     T0001: "1"
        //   },
        //   you: {
        //     T0000: "Hi",
        //     T0001: "2"
        //   }
        // };
        let delay = Aurea_Novel.fS.Progress.defineSignal([() => Aurea_Novel.fS.Progress.delay(1)]);
        Aurea_Novel.dataForSave.nameOfYou = await Aurea_Novel.fS.Speech.getInput();
        Aurea_Novel.characters.you.name = Aurea_Novel.dataForSave.nameOfYou;
        console.log(Aurea_Novel.dataForSave);
        await Aurea_Novel.fS.Location.show(Aurea_Novel.location.bedroom);
        await Aurea_Novel.fS.update(Aurea_Novel.transition.clock.duration, Aurea_Novel.transition.clock.alpha, Aurea_Novel.transition.clock.edge);
        await Aurea_Novel.fS.Character.show(Aurea_Novel.characters.clock, Aurea_Novel.characters.clock.pose.idle, Aurea_Novel.fS.positions.center);
        await delay();
        await Aurea_Novel.fS.update(1);
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, "Huch eine Kamera, soll ich sie aufheben?");
        // await fS.Speech.tell(characters.narrator, text.narrator.T0000);
        // await fS.Character.animate(characters.you, characters.you.pose.angry, fromLeftToRight());
        // await fS.Character.hide(characters.you);
        let selectCameraOptions = {
            yes: "Kamera aufheben",
            no: "Kamera liegen lassen"
        };
        let camsSel = false;
        let kameraSelectOptions = await Aurea_Novel.fS.Menu.getInput(selectCameraOptions, "indioClass");
        switch (kameraSelectOptions) {
            case selectCameraOptions.yes:
                await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, "wunderprächtig");
                camsSel = true;
                break;
            //   case firstDialogueElementOptions.iSayOk:
            //     await fS.Character.show(characters.you, characters.you.pose.happy, fS.positionPercent(30, 100));
            //     break;
            //   case firstDialogueElementOptions.iSayYes:
            //     await  await fS.Speech.tell(characters.you, text.you.T0000);
            //     break;
            default:
                //     await fS.Speech.tell(characters.you, "anny are you okey?");
                await Aurea_Novel.fS.Character.animate(Aurea_Novel.characters.clock, Aurea_Novel.characters.clock.pose.idle, Aurea_Novel.fromLeftToRight());
                await Aurea_Novel.fS.Character.hide(Aurea_Novel.characters.clock);
                break;
        }
        // await fS.update(1);
    }
    Aurea_Novel.SevdaTest = SevdaTest;
})(Aurea_Novel || (Aurea_Novel = {}));
//# sourceMappingURL=Template.js.map