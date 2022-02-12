///<reference path="./index.ts"/>
namespace AUREA_NOVEL {

    export async function Camp(): fS.SceneReturn {
        console.log("Start Camp Sequenz");
        if (!dataForSave.choice.selectEvil) {
            await fS.Location.show(locations.camp);

            await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
            await fS.Character.show(characters.inkubus, characters.inkubus.pose.idle, fS.positionPercent(90, 80));
            await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

            await fS.Speech.tell(characters.inkubus, "Das hier ist das Aurea Camp, hier werd ich dir gleich meine Freunde vorstellen, die uns bei unserem Unternehmen unterstützen werden.");
            await fS.Speech.tell(characters.du, "Von was für einer Unternehmung sprichst du?");
            await fS.Speech.tell(characters.du, "Ich hab keine Ahnung in was ich hier hineingeraten bin. Das alles hier wirkt so surreal.");
            await fS.Speech.tell(characters.du, "Sind deine Freunde genauso wie du? Oder sind sie wie ich?");
            await fS.Speech.tell(characters.inkubus, "Wir sehen alle auf eine gewisse Weise gleich aus, aber dann doch wieder recht unterschiedlich.");
            await fS.Speech.tell(characters.inkubus, "Du wirst gleich sehen wie die anderen aussehen.");

            await fS.Speech.tell(characters.inkubus, `Zunächst haben wir da ${characters.ent.name}.`);


            fS.Text.setClass("item-definition");
            fS.Text.addClass("aurea-information");
            fS.Text.addClass("select");
            fS.Text.print(`
                    <div class="page-wrapper">
                        <div class="image-wrapper">  
                            <img src="${items.ent_sheet.image}" />
                        </div>
                    </div>
            `);
            const pageSelect = { select: "Auswählen", deny: "Ablehnen" };
            let response: string = await fS.Menu.getInput(pageSelect, "select");
            switch (response) {
                case pageSelect.select:
                    SelectItem(items.ent_sheet);
                    await fS.Speech.tell(characters.inkubus, "Sehr gut. Dann machen wir mal weiter.");
                    break;
                default:
                    DenySelection();
                    break;
            }
            fS.Text.close();
            await fS.update(1);
            await fS.Speech.tell(characters.inkubus, `Als nächstes haben wir den ${characters.golem.name}.`);
            fS.Text.setClass("item-definition");
            fS.Text.addClass("aurea-information");
            fS.Text.addClass("select");
            fS.Text.print(`
                    <div class="page-wrapper">
                        <div class="image-wrapper">  
                            <img src="${items.golem_sheet.image}" />
                        </div>
                    </div>
            `);
            response = await fS.Menu.getInput(pageSelect, "select");
            switch (response) {
                case pageSelect.select:
                    SelectItem(items.golem_sheet);
                    await fS.Speech.tell(characters.inkubus, "Sehr gut. Das wären alle.");
                    break;
                default:
                    await fS.Speech.tell(characters.narrator, "Damit du zumindest einen Aurea im Inventar hast wird dir bei der zweiten Wahl der Charakter hinzugefügt.");
                    SelectItem(items.sebu_sheet);
                    await fS.Speech.tell(characters.inkubus, "Sehr gut. Das wären alle.");
                    break;
            }
            fS.Text.close();
            await fS.update(1);
            await fS.Speech.tell(characters.inkubus, `Unser Land wurde von der Dunkelheit verschlungen. Sie hat sich die Macht des mächtigsten Aurea ${characters.goma.name} mächtig gemacht um ihn und andere Aurea zu befehligen.`);
            await fS.Speech.tell(characters.inkubus, "Wir haben uns das Ziel gesetzt das Dunkle zu vertreiben.");
            await fS.Speech.tell(characters.inkubus, "Um dieses Ziel zu erreichen mussten wir auf dich, unseren Retter, warten und uns versammeln, damit du uns in den Kampf führen kannst.");
            await fS.Speech.tell(characters.du, "Wann soll dieser Kampf denn stattfinden?");
            await fS.Speech.tell(characters.inkubus, "Jetzt!");
            fS.Sound.fade(sound.glade, 0, 0.1, false);
            await FadeToBlack();
        } else {
            return "glade";
        }
    }
}