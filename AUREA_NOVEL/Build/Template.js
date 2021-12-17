"use strict";
var Aurea_Novel;
(function (Aurea_Novel) {
    async function Intro() {
        console.log("intro");
        await Aurea_Novel.fS.update(Aurea_Novel.transition.clock.duration, Aurea_Novel.transition.clock.alpha, Aurea_Novel.transition.clock.edge);
        await Aurea_Novel.fS.Location.show(Aurea_Novel.location.bedroom);
        // await fS.update(1);
    }
    Aurea_Novel.Intro = Intro;
})(Aurea_Novel || (Aurea_Novel = {}));
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
            background: "./Images/Backgrounds/schlafzimmer.png"
        },
        nachttisch: {
            name: "nachttisch",
            background: "./Images/Backgrounds/nachttisch.png"
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
                angry: "./Images/Characters/itseme.png",
                happy: "./Images/Characters/itseme.png",
                upset: "./Images/Characters/itseme.png"
            }
        },
        bro: {
            name: "bro",
            origin: Aurea_Novel.fS.ORIGIN.CENTER,
            pose: {
                // Pfad als String angeben
                angry: "./Images/Characters/itseme.png",
                happy: "./Images/Characters/itseme.png",
                upset: "./Images/Characters/itseme.png"
            }
        },
        cam: {
            name: "cam",
            origin: Aurea_Novel.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/cam.png"
                // idle: "./Images/Characters/WhatsApp\ Image\ 2021-12-10 at 19.28.43.jpeg"
            }
        },
        image: {
            name: "image",
            origin: Aurea_Novel.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Characters/polaroid.png"
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
    function fromCenterToRight() {
        return {
            start: {
                translation: Aurea_Novel.fS.positions.center,
                rotation: -20, scaling: new Aurea_Novel.fS.Position(0.1, 0.1), color: Aurea_Novel.fS.Color.CSS("white", 0)
            }, end: {
                translation: Aurea_Novel.fS.positions.centerright, rotation: 10, scaling: new Aurea_Novel.fS.Position(1, 1), color: Aurea_Novel.fS.Color.CSS("white", 1)
            },
            duration: 1,
            playmode: Aurea_Novel.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Aurea_Novel.fromCenterToRight = fromCenterToRight;
    function fromDownLeftToTopRight() {
        return {
            start: {
                translation: Aurea_Novel.fS.positions.bottomleft,
                rotation: -20, scaling: new Aurea_Novel.fS.Position(0.5, 0.5), color: Aurea_Novel.fS.Color.CSS("white", 0)
            }, end: {
                translation: Aurea_Novel.fS.positions.topright, rotation: 20, scaling: new Aurea_Novel.fS.Position(0.5, 0.5), color: Aurea_Novel.fS.Color.CSS("white", 1)
            },
            duration: 1,
            playmode: Aurea_Novel.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Aurea_Novel.fromDownLeftToTopRight = fromDownLeftToTopRight;
    function fromCentertoCenter() {
        return {
            start: {
                translation: Aurea_Novel.fS.positions.center,
                rotation: -20, scaling: new Aurea_Novel.fS.Position(0.1, 0.1), color: Aurea_Novel.fS.Color.CSS("white", 0)
            }, end: {
                translation: Aurea_Novel.fS.positions.center, rotation: 1, scaling: new Aurea_Novel.fS.Position(0.5, 0.5), color: Aurea_Novel.fS.Color.CSS("white", 1)
            },
            duration: 1,
            playmode: Aurea_Novel.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Aurea_Novel.fromCentertoCenter = fromCentertoCenter;
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { id: "sevda", scene: Aurea_Novel.SevdaTest, name: "Scene" },
            { id: "das", scene: Aurea_Novel.Scene, name: "das" },
            { id: "intro", scene: Aurea_Novel.Intro, name: "Intro" }
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
        // console.log("moin");
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
        let delay = Aurea_Novel.fS.Progress.defineSignal([() => Aurea_Novel.fS.Progress.delay(2)]);
        // dataForSave.nameOfYou = await fS.Speech.getInput();
        // characters.you.name = dataForSave.nameOfYou;
        // console.log(dataForSave);
        await Aurea_Novel.fS.Location.show(Aurea_Novel.location.bedroom);
        await Aurea_Novel.fS.update(Aurea_Novel.transition.clock.duration, Aurea_Novel.transition.clock.alpha, Aurea_Novel.transition.clock.edge);
        await Aurea_Novel.fS.Character.show(Aurea_Novel.characters.you, Aurea_Novel.characters.you.pose.happy, Aurea_Novel.fS.positions.left);
        // await delay();
        await Aurea_Novel.fS.update(1);
        // await fS.Speech.tell(characters.you, "Huch eine Kamera, soll ich sie aufheben?");
        // // await fS.Speech.tell(characters.narrator, text.narrator.T0000);
        await Aurea_Novel.fS.Character.animate(Aurea_Novel.characters.cam, Aurea_Novel.characters.cam.pose.idle, Aurea_Novel.fromCentertoCenter());
        // // await fS.Character.hide(characters.you);
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, "Huch eine Kamera. Bro gehört die dir?");
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.bro, "hmpf mmpf hmpf...");
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, "Soll ich die Kamera aufnehmen?");
        let selectCameraOptions = {
            yes: "Kamera aufheben",
            no: "Kamera liegen lassen"
        };
        let camsSel = false;
        let kameraSelectOptions = await Aurea_Novel.fS.Menu.getInput(selectCameraOptions, "indioClass");
        switch (kameraSelectOptions) {
            case selectCameraOptions.yes:
                camsSel = true;
                await Aurea_Novel.fS.Character.hide(Aurea_Novel.characters.you);
                await Aurea_Novel.fS.Character.hide(Aurea_Novel.characters.cam);
                await Aurea_Novel.fS.update(1);
                await Aurea_Novel.fS.Character.show(Aurea_Novel.characters.cam, Aurea_Novel.characters.cam.pose.idle, Aurea_Novel.fS.positions.left);
                await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, "Schöne Kamera, ich mach jetzt einfach ein paar schöne Bilder damit");
                for (let i = 0; i < 5; i++) {
                    await Aurea_Novel.fS.Character.animate(Aurea_Novel.characters.image, Aurea_Novel.characters.image.pose.idle, Aurea_Novel.fromDownLeftToTopRight());
                    await delay();
                    await Aurea_Novel.fS.Character.hide(Aurea_Novel.characters.image);
                }
                // await fS.Speech.tell(characters.you, "wunderprächtig");
                // camsSel = true;
                break;
            //   case firstDialogueElementOptions.iSayOk:
            //     await fS.Character.show(characters.you, characters.you.pose.happy, fS.positionPercent(30, 100));
            //     break;
            //   case firstDialogueElementOptions.iSayYes:
            //     await  await fS.Speech.tell(characters.you, text.you.T0000);
            //     break;
            default:
                //     await fS.Speech.tell(characters.you, "anny are you okey?");
                // await fS.Character.animate(characters.clock, characters.clock.pose.idle, fromLeftToRight());
                // await fS.Character.hide(characters.clock);
                break;
        }
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.narrator, "Der nächste morgen");
        await Aurea_Novel.fS.update(Aurea_Novel.transition.clock.duration, Aurea_Novel.transition.clock.alpha, Aurea_Novel.transition.clock.edge);
        await Aurea_Novel.fS.Location.show(Aurea_Novel.location.nachttisch);
        await Aurea_Novel.fS.Character.animate(Aurea_Novel.characters.cam, Aurea_Novel.characters.cam.pose.idle, Aurea_Novel.fromCentertoCenter());
        await Aurea_Novel.fS.Character.show(Aurea_Novel.characters.you, Aurea_Novel.characters.you.pose.happy, Aurea_Novel.fS.positions.left);
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, `Mooooooooooooment wieso liegt die kamera plötzlich da, ${camsSel ? "die hab ich gestern nachm bilder machen wieder auf den Boden gelegt" : "die lag gestern noch auf dem Boden"}.`);
        await Aurea_Novel.fS.Speech.tell(Aurea_Novel.characters.you, "Was wohl alles für Bilder da drauf sind?");
        selectCameraOptions = {
            yes: "ich schau mir mal alle bilder an",
            no: "ich lass sie lieber mal liegen, total unheimlich"
        };
        let viewSel = false;
        kameraSelectOptions = await Aurea_Novel.fS.Menu.getInput(selectCameraOptions, "indioClass");
        await Aurea_Novel.fS.update(1);
        switch (kameraSelectOptions) {
            case selectCameraOptions.yes:
                viewSel = true;
                const count = camsSel ? 10 : 5;
                for (let i = 0; i < count; i++) {
                    await Aurea_Novel.fS.Character.animate(Aurea_Novel.characters.image, Aurea_Novel.characters.image.pose.idle, Aurea_Novel.fromDownLeftToTopRight());
                }
                break;
            default:
                break;
        }
        if (viewSel) {
            await Aurea_Novel.fS.Character.hide(Aurea_Novel.characters.image);
        }
        return "intro";
    }
    Aurea_Novel.SevdaTest = SevdaTest;
})(Aurea_Novel || (Aurea_Novel = {}));
//# sourceMappingURL=Template.js.map