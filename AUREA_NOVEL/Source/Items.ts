namespace AUREA_NOVEL {
    export type Items = {
        [key: string]: fS.ItemDefinition
    };
    export let items = {
        // pen: {
        //     name : "das",
        //     description : "ist",
        //     image : "das"
        // }
        handy: {
            name: "Handy",
            description: "Das ist mein Handy. Vielleicht kann ich mir damit die Zeit vertreiben.",
            image: "./Images/Items/Handy.png"
        },
        crystal_sheet: {
            name: "Crystals Charakter-Informationen",
            description: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Crystal.",
            image: "./Images/Items/Crystal_Charaktersheet.png"
        },
        ent_sheet: {
            name: "Ents Charakter-Informationen",
            description: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Ent.",
            image: "./Images/Items/Ent_Charaktersheet.png"
        },
        goma_sheet: {
            name: "Gomas Charakter-Informationen",
            descpription: "Das sind die Charakter Eigenschaften und Fähigkieten des mächtigen Gomas",
            image: "./Images/Items/Goma_Charactersheet.png"
        },
        illusion_sheet: {
            name: "Illusions Charakter-Informationen",
            descpription: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Illusion.",
            image: "./Images/Items/Ilusian_Charaktersheet.png"
        },
        inkubus_sheet: {
            name: "Inkubus Charakter-Informationen",
            descpription: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Inkubus.",
            image: "./Images/Items/Inkubus_Charaktersheet.png"
        },
        sebu_sheet: {
            name: "Sebus Charakter-Informationen",
            descpription: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Sebu.",
            image: "./Images/Items/Sebu_Charaktersheet.png"
        },
        golem_sheet: {
            name: "Steingolem Charakter-Informationen",
            descpription: "Das sind die Charakter Eigenschaften und Fähigkieten des Aurea Steingolem.",
            image: "./Images/Items/Steingolem_Charaktersheet.png"
        }
    };
    // export function AddItem(item: fS.ItemDefinition): void {
    //     items[item.name] = item;
    // }
    // export async function GetInventory(): Promise<string[]> {
    //     return await fS.Inventory.open();
    // }
    // export function AddItemToInventory(item: string): boolean {
    //     const i: fS.ItemDefinition = items[item];
    //     if (i) {
    //         fS.Inventory.add(i);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}