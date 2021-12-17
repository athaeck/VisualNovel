namespace Template {
  export async function Intro(): fS.SceneReturn {
    console.log("Intro");


    fS.Inventory.add(items.pen)
    const is: string[] = await fS.Inventory.open();
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

}

