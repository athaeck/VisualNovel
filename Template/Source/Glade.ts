namespace Template {

    export async function Glade(): fS.SceneReturn {
        console.log("Start Glade Sequenz");

        fS.Sound.play(sound.glade, 0.2, true);
        await fS.Location.show(locations.landscape);

        await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
        await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        await fS.Speech.tell(characters.du, "Wo bin ich? Wie bin ich hier her gekommen? Wie komme ich zurück?");

    }
}