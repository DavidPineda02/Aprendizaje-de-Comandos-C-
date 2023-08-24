import readLineSync from 'readline-sync';

const comands_part_one = {
    1: "dotnet new sln",
    2: "dotnet new classlib -o Dominio",
    3: "dotnet new classlib -o Persistencia",
    4: "dotnet new classlib -o Aplicacion",
    5: "dotnet new webapi -o ApiIncidencias",
    6: "dir"
}

const commands_part_two = {
    1: "dotnet sln add Dominio",
    2: "dotnet sln add Persistencia",
    3: "dotnet sln add Aplicacion",
    4: "dotnet sln add ApiIncidencias",
    5: "dir"
}



const commands_part_three = {
    1: "cd Aplicacion",
    2: "dotnet add reference ../Dominio/",
    3: "dotnet add reference ../Persistencia/",
    4: "cd ..",
    5: "cd ApiIncidencias",
    6: "dotnet add reference ../Aplicacion/",
    7: "cd ..",
    8: "cd Persistencia",
    9: "dotnet add reference ../Dominio/",
    10: "cd ..",
}

//? VALIDACONES PARTE 1

function validation_p1_c1() {
    const p1: string = readLineSync.question('Ingresa el Primer comando de la parte 1: ')
    if (p1 === comands_part_one[1]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p1_c2() {
    const p1: string = readLineSync.question('Ingresa el Segundo comando de la parte 1: ')
    if (p1 === comands_part_one[2]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p1_c3() {
    const p1: string = readLineSync.question('Ingresa el Tercer comando de la parte 1: ')
    if (p1 === comands_part_one[3]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p1_c4() {
    const p1: string = readLineSync.question('Ingresa el Cuarto comando de la parte 1: ')
    if (p1 === comands_part_one[4]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p1_c5() {
    const p1: string = readLineSync.question('Ingresa el Quinto comando de la parte 1: ')
    if (p1 === comands_part_one[5]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p1_c6() {
    const p1: string = readLineSync.question('Ingresa el Sexto comando de la parte 1: ')
    if (p1 === comands_part_one[6]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
        console.log("");

    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

//? VALIDACONES PARTE 2

function validation_p2_c1() {
    const p2: string = readLineSync.question('Ingresa el Primer comando de la parte 2: ')
    if (p2 === commands_part_two[1]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p2_c2() {
    const p2: string = readLineSync.question('Ingresa el Segundo comando de la parte 2: ')
    if (p2 === commands_part_two[2]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p2_c3() {
    const p2: string = readLineSync.question('Ingresa el Tercer comando de la parte 2: ')
    if (p2 === commands_part_two[3]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p2_c4() {
    const p2: string = readLineSync.question('Ingresa el Cuarto comando de la parte 2: ')
    if (p2 === commands_part_two[4]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p2_c5() {
    const p2: string = readLineSync.question('Ingresa el Quinto comando de la parte 2: ')
    if (p2 === commands_part_two[5]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}


//? VALIDACONES PARTE 3
function validation_p3_c1() {
    const p3: string = readLineSync.question('Ingresa el Primer comando de la parte 3: ')
    if (p3 === commands_part_three[1]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c2() {
    const p3: string = readLineSync.question('Ingresa el Segundo comando la parte 3: ')
    if (p3 === commands_part_three[2]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c3() {
    const p3: string = readLineSync.question('Ingresa el Tercer comando la parte 3: ')
    if (p3 === commands_part_three[3]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c4() {
    const p3: string = readLineSync.question('Ingresa el Cuarto comando la parte 3: ')
    if (p3 === commands_part_three[4]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c5() {
    const p3: string = readLineSync.question('Ingresa el Quinto comando la parte 3: ')
    if (p3 === commands_part_three[5]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c6() {
    const p3: string = readLineSync.question('Ingresa el Sexto comando la parte 3: ')
    if (p3 === commands_part_three[6]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c7() {
    const p3: string = readLineSync.question('Ingresa el Septimo comando la parte 3: ')
    if (p3 === commands_part_three[7]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c8() {
    const p3: string = readLineSync.question('Ingresa el Octavo comando la parte 3: ')
    if (p3 === commands_part_three[8]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c9() {
    const p3: string = readLineSync.question('Ingresa el Noveno comando la parte 3: ')
    if (p3 === commands_part_three[9]) {
        console.clear();
        console.log("");
        console.log("███╗  ██╗██╗██████╗██████╗");
        console.log("████╗ ██║██║██╔═══║██╔═══╝");
        console.log("██╔██╗██║██║██║   ║█████╗ ");
        console.log("██║╚████║██║██║   ║██╔══╝ ");
        console.log("██║ ╚███║██║██████║██████╗");
        console.log("╚═╝  ╚══╝╚═╝╚═════╝╚═════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

function validation_p3_c10() {
    const p3: string = readLineSync.question('Ingresa el Decimo comando la parte 3: ')
    if (p3 === commands_part_three[10]) {
        console.clear();
        console.log("");
        console.log("██████╗ ██████╗██████╗█████╗       ██╗██████╗█████╗");
        console.log("██╔═══╝ ██╔═██║██╔═██║██╔═██╗      ██║██╔═██║██╔═██");
        console.log("██║ ███║██║ ██║██║ ██║██║ ██║      ██║██║ ██║█████╗ ");
        console.log("██╚═╝██║██║ ██║██║ ██║██║ ██╝   ██ ██║██║ ██║██╔═██ ");
        console.log("███████║██████║██████║█████╝    █████║██████║█████╗");
        console.log("╚══════╝╚═════╝╚═════╝╚═══╝     ╚════╝╚═════╝╚════╝");
        console.log("");
    } else {
        console.clear();
        console.log("");
        console.log("█████╗ ╔█████╗  █████╗ ");
        console.log("██╔═██ ██╔══██╗ ██╔═██╗");
        console.log("█████╗ ███████║ ██║ ██║");
        console.log("██╔═██ ██╔══██║ ██║ ██╝");
        console.log("█████╗ ██║  ██║ █████╝ ");
        console.log("╚════╝ ╚═╝  ╚═╝ ╚═══╝  ");
        console.log("");
    } return
}

const option: number = -1;

do {
    console.log('');
    console.log('Sigue los pasos correspondientes.');
    console.log('');
    console.log('- Digite 1 para entrar al menu de la Parte 1. \n- Digite 2 para entrar al menu de la Parte 2 \n- Digite 3 para entrar al menu de la Parte 3.');
    console.log('');
    const parte: number = readLineSync.questionInt('Digite el numero correspondiente: ')

    if (parte === 1) {
        console.log('');
        console.log('---------- PARTE 1 ----------');
        console.log('1. Ingresar el comando 1 de la parte 1.');
        console.log('2. Ingresar el comando 2 de la parte 1.');
        console.log('3. Ingresar el comando 3 de la parte 1.');
        console.log('4. Ingresar el comando 4 de la parte 1.');
        console.log('5. Ingresar el comando 5 de la parte 1.');
        console.log('6. Ingresar el comando 6 de la parte 1.');
        console.log('----------------------------\n');

        const opcion = readLineSync.questionInt('Ingresa la opcion que deseas: ');

        console.log('');

        switch (opcion) {
            case (1): validation_p1_c1();
                break
            case (2): validation_p1_c2();
                break
            case (3): validation_p1_c3();
                break
            case (4): validation_p1_c4();
                break
            case (5): validation_p1_c5();
                break
            case (6): validation_p1_c6();
                break
        }
    }

    if (parte === 2) {
        console.log('');
        console.log('---------- PARTE 2 ----------');
        console.log('1. Ingresar el comando 1 de la parte 2.');
        console.log('2. Ingresar el comando 2 de la parte 2.');
        console.log('3. Ingresar el comando 3 de la parte 2.');
        console.log('4. Ingresar el comando 4 de la parte 2.');
        console.log('5. Ingresar el comando 5 de la parte 2.');
        console.log('----------------------------\n');

        const opcion = readLineSync.questionInt('Ingresa la opcion que deseas: ');
        console.log('');

        switch (opcion) {
            case (1): validation_p2_c1();
                break
            case (2): validation_p2_c2();
                break
            case (3): validation_p2_c3();
                break
            case (4): validation_p2_c4();
                break
            case (5): validation_p2_c5();
                break
        }
    }

    if (parte === 3) {
        console.log('');
        console.log('---------- PARTE 3 ----------');
        console.log('1. Ingresar el comando 1 de la parte 3.');
        console.log('2. Ingresar el comando 2 de la parte 3.');
        console.log('3. Ingresar el comando 3 de la parte 3.');
        console.log('4. Ingresar el comando 4 de la parte 3.');
        console.log('5. Ingresar el comando 5 de la parte 3.');
        console.log('6. Ingresar el comando 6 de la parte 3.');
        console.log('7. Ingresar el comando 7 de la parte 3.');
        console.log('8. Ingresar el comando 8 de la parte 3.');
        console.log('9. Ingresar el comando 9 de la parte 3.');
        console.log('10. Ingresar el comando 10 de la parte 3.');
        console.log('----------------------------\n');

        const opcion = readLineSync.questionInt('Ingresa la opcion que deseas: ');
        console.log('');

        switch (opcion) {
            case (1): validation_p3_c1();
                break
            case (2): validation_p3_c2();
                break
            case (3): validation_p3_c3();
                break
            case (4): validation_p3_c4();
                break
            case (5): validation_p3_c5();
                break
            case (6): validation_p3_c6();
                break
            case (7): validation_p3_c7();
                break
            case (8): validation_p3_c8();
                break
            case (9): validation_p3_c9();
                break
            case (10): validation_p3_c10();
                break
        }
        break
    }
} while (option != 0);