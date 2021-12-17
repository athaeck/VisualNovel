"use strict";
var Template;
(function (Template) {
    async function Intro() {
        console.log("Intro");
        Template.fS.Inventory.add(Template.items.pen);
        const is = await Template.fS.Inventory.open();
        console.log(is);
        // let text = {
        //   narrator: {
        //     T0000: "",
        //     T0001: ""
        //   },
        //   aisaka: {
        //     T0000: "Hi",
        //     T0001: ""
        //   },
        //   kohana: {
        //     T0000: "Test"
        //   }
        // };
        // await fS.Location.show(locations.bedroom);
        // await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        // await fS.Character.show(characters.aisaka, characters.aisaka.pose.happy, fS.positionPercent(30, 100));
        // await fS.update(1);
        // await fS.Speech.tell(characters.aisaka, text.aisaka.T0000);
        // await fS.Speech.tell(characters.aisaka, "Hi2.");
        // await fS.Character.hide(characters.aisaka);
        // let firstDialogueElementOptions = {
        //   iSayOk: "Okay.",
        //   iSayYes: "Ja.",
        //   iSayNo: "Nein."
        // };
        // let firstDialogueElement = await fS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        // switch (firstDialogueElement) {
        //   case firstDialogueElementOptions.iSayOk:
        //     await fS.Speech.tell(characters.aisaka, "Hi2.");
        //     break;
        //   case firstDialogueElementOptions.iSayYes:
        //     await fS.Character.show(characters.kohana, characters.kohana.pose.angry, fS.positions.center);
        //     break;
        //   case firstDialogueElementOptions.iSayNo:
        //     await fS.Speech.tell(characters.kohana, text.kohana.T0000);
        //     break;
        // }
        // await fS.Speech.tell(characters.aisaka, text.aisaka.T0000);
    }
    Template.Intro = Intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.items = {
        pen: {
            name: "das",
            description: "ist",
            image: "das"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    //   console.log("Tutorial_WS21 starting");
    //   // define transitions
    //   export let transitions = {
    //     clock: {
    //       duration: 1,
    //       alpha: "",
    //       edge: 1
    //     }
    //   };
    //   export let sound = {
    //     // music
    //     backgroundTheme: "",
    //     // sound
    //     click: ""
    //   };
    //   export let locations = {
    //     bedroom: {
    //       name: "Bedroom",
    //       background: "./Images/Backgrounds/Bedroom.png"
    //     }
    //   };
    // // Stilfrage - Eigenen Styleguide für FS veröffentlichen? 
    //   export let characters = {
    //     narrator: {
    //       name: ""
    //     },
    //     aisaka: {
    //       name: "Aisaka",
    //       origin: fS.ORIGIN.BOTTOMCENTER,
    //       pose: {
    //         angry: "./Images/Characters/aisaka_angry.png",
    //         happy: "./Images/Characters/aisaka_happy.png",
    //         upset: "./Images/Characters/aisaka_upset.png"
    //       }
    //     },
    //     kohana: {
    //       name: "Kohana",
    //       origin: fS.ORIGIN.BOTTOMCENTER,
    //       pose: {
    //         angry: "./Images/Characters/kohana_angry.png",
    //         happy: "./Images/Characters/kohana_happy.png",
    //         upset: "./Images/Characters/kohana_upset.png"
    //       }
    //     }
    //   };
    Template.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        Template.gameMenu = Template.fS.Menu.create(Template.inGameMenu, Template.buttonFunctions, "game-menu");
        let scenes = [
            { scene: Template.Intro, name: "Intro" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.fS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.menuState = true;
    Template.inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        open: "Open"
    };
    async function buttonFunctions(option) {
        console.log(option);
        switch (option) {
            case Template.inGameMenu.save:
                await Template.fS.Progress.save();
                break;
            case Template.inGameMenu.close:
                Template.gameMenu.close();
                Template.menuState = false;
                break;
            case Template.inGameMenu.load:
                await Template.fS.Progress.load();
                break;
            default:
                Template.gameMenu.open();
                Template.menuState = true;
                break;
        }
    }
    Template.buttonFunctions = buttonFunctions;
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(event) {
        switch (event.code) {
            case Template.f.KEYBOARD_CODE.F8:
                buttonFunctions("Save");
                console.log("saved successfull");
                break;
            case Template.f.KEYBOARD_CODE.F9:
                buttonFunctions("Load");
                console.log("load successfull");
                break;
            case Template.f.KEYBOARD_CODE.M:
                if (Template.menuState) {
                    console.log("close");
                    buttonFunctions("Close");
                }
                else {
                    console.log("open");
                    buttonFunctions("Open");
                }
                break;
        }
    }
    Template.handleKeyPress = handleKeyPress;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map