import data from './data.json';

export function yearToRGB(year: string) {
    switch (year) {
        case "2020":
            return "bg-[#6cb9f9]";
        case "2021":
            return "bg-[#f2a861]";
        case "2022":
            return "bg-[#61d48f]";
        case "2023":
            return "bg-[#ee81d4]";
        case "W24":
            return "bg-[#f98c6c]";
        case "2024":
            return "bg-[#FF8989]";
        case "W25":
            return "bg-[#C39CF3]";
        default:
            return "bg-gray-500";
    }
}

export function recapitalizeAndParseName(name: string){
    //avert your eyes (I'm hardcoding these because there's no way around it)
    if (name == "hufuwu") return "HuFuWu";
    if (name == "tt") return "TT";

    //remove all text inside a parentheses, thats it
    name = name.replace(/[\ ]*\([^\)]*\)[\ ]*/, " ");

    //recapitalize the name, taking care of dashes
    for (let i = 0; i < name.length; i++){
        if (i === 0 || name[i-1] === "-" || name[i-1] === " "){
            name = name.slice(0, i) + name[i].toUpperCase() + name.slice(i+1);
        }
    }

    return name;
}

export function getFamNames() {
    const fam_names = [];
    for (const fam of data) {
        fam_names.push(fam["Fam"]);
    }
    return fam_names;
}

export function assembleTree(fam_name: string) {
    let fam_obj;

    for (const fam of data) {
        if (fam["Fam"] == fam_name) {
            fam_obj = fam;
            break;
        }
    }

    if (!fam_obj) {
        throw new Error("Fam name: " + fam_name + " not recognized");
    }

    const heads = fam_obj["Heads"];

    const trees = [];
    for (const head of heads) {
        trees.push(constructTree(head, fam_obj["Members"]));
    }
    return trees;
}

//helper function
function constructTree(name: string, fam_members: any): any {
    const children = [];
    
    let member;
    for (const myMember of fam_members) {
        if (myMember["Name"] == name) {
            member = myMember;
            break;
        }
    }

    if (!member) {
        throw new Error("Name: " + name + " not recognized in fam: " + fam_members[0]["Fam"]);
    }

    for (const little of member["Little"]) {
        children.push(constructTree(little, fam_members));
    }

    if (children.length === 0) {
        return ({
            label: name,
            expanded: true,
            className: 'bg-indigo-500 text-white',
            style: { borderRadius: '12px' },
            data: {
                name: name,
                year: member["Recruitment Year"],
            }
        });
    }

    return ({
        label: name,
        expanded: true,
        className: 'bg-indigo-500 text-white',
        style: { borderRadius: '12px' },
        data: {
            name: name,
            year: member["Recruitment Year"],
        },
        children: children
    });
}