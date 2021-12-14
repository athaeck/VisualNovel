namespace Aurea_Novel {
  export async function SevdaTest(): fS.SceneReturn {
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
    let delay: fS.Signal = fS.Progress.defineSignal([() => fS.Progress.delay(2)]);

    // dataForSave.nameOfYou = await fS.Speech.getInput();
    // characters.you.name = dataForSave.nameOfYou;
    // console.log(dataForSave);

    await fS.Location.show(location.bedroom);
    await fS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await fS.Character.show(characters.you, characters.you.pose.happy, fS.positions.left);
    // await delay();
    await fS.update(1);
    // await fS.Speech.tell(characters.you, "Huch eine Kamera, soll ich sie aufheben?");
    // // await fS.Speech.tell(characters.narrator, text.narrator.T0000);
    await fS.Character.animate(characters.cam, characters.cam.pose.idle, fromCentertoCenter());
    // // await fS.Character.hide(characters.you);
    await fS.Speech.tell(characters.you, "Huch eine Kamera. Bro gehört die dir?");
    await fS.Speech.tell(characters.bro, "hmpf mmpf hmpf..."); 
    await fS.Speech.tell(characters.you, "Soll ich die Kamera aufnehmen?");

    let selectCameraOptions = {
      yes: "Kamera aufheben",
      no: "Kamera liegen lassen"
    };

    let camsSel: boolean = false;
      
    let kameraSelectOptions = await fS.Menu.getInput(selectCameraOptions, "indioClass");

    switch (kameraSelectOptions) {
      case selectCameraOptions.yes:
        camsSel = true;
        await fS.Character.hide(characters.you);
        await fS.Character.hide(characters.cam);
        await fS.update(1);
        await fS.Character.show(characters.cam, characters.cam.pose.idle, fS.positions.left);
        await fS.Speech.tell(characters.you, "Schöne Kamera, ich mach jetzt einfach ein paar schöne Bilder damit");
        for (let i = 0; i < 5; i++) {
          await fS.Character.animate(characters.image, characters.image.pose.idle, fromDownLeftToTopRight());
          await delay();
          await fS.Character.hide(characters.image);
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
    await fS.Speech.tell(characters.narrator, "Der nächste morgen");
    await fS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await fS.Location.show(location.nachttisch);
    await fS.Character.animate(characters.cam, characters.cam.pose.idle, fromCentertoCenter());
    await fS.Character.show(characters.you, characters.you.pose.happy, fS.positions.left);
    await fS.Speech.tell(characters.you, `Mooooooooooooment wieso liegt die kamera plötzlich da, ${camsSel ? "die hab ich gestern nachm bilder machen wieder auf den Boden gelegt" : "die lag gestern noch auf dem Boden"}.`);
    await fS.Speech.tell(characters.you, "Was wohl alles für Bilder da drauf sind?");
    selectCameraOptions = {
      yes: "ich schau mir mal alle bilder an",
      no: "ich lass sie lieber mal liegen, total unheimlich"
    };
    let viewSel: boolean = false;
    kameraSelectOptions = await fS.Menu.getInput(selectCameraOptions, "indioClass");
    await fS.update(1);
    switch (kameraSelectOptions) {
      case selectCameraOptions.yes:
        viewSel = true;
        const count = camsSel ? 10 : 5;
        for (let i = 0; i < count; i++){
           await fS.Character.animate(characters.image, characters.image.pose.idle, fromDownLeftToTopRight());
        }
        break;
      default:
        break;
    }
    if (viewSel) { await fS.Character.hide(characters.image); }
  }
}