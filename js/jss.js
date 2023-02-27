let länder=[
    { country: "Afghanistan", capital: "Kabul" },
    { country: "Albanien", capital: "Tirana" },
    { country: "Algerien", capital: "Algier" },
    { country: "Andorra", capital: "Andorra-la-Vella" },
    { country: "Angola", capital: "Luanda" },
    { country: "AntiguaUndBarbuda", capital: " St. John's" },
    { country: "Argentinien", capital: "Buenos Aires" },
    { country: "Armenien", capital: "Eriwan" },
    { country: "Aserbaidschan", capital: "Baku" },
    { country: "Australien", capital: "Canberra" },
    { country: "Österreich", capital: "Wien" },
    { country: "Bahrain", capital: "Manama" },
    { country: "Bangladesch", capital: "Dhaka" },
    { country: "Barbados", capital: "Bridgetown" },
    { country: "Weißrussland", capital: "Minsk" },
    { country: "Belgien", capital: "Brüssel" },
    { country: "Belize", capital: "Belmopan" },
    {
        country: "Benin",
        capital: "Porto-Novo_(offiziell)_Cotonou_(Verwaltung)",
    },
    { country: "Bhutan", capital: "Thimphu" },
    {
        country: "Bolivien",
        capital: " La Paz (administrativ), Sucre (judikativ)",
    },
    { country: "BosnienHerzegowina", capital: "Sarajevo" },
    { country: "Botsuana", capital: "Gaborone" },
    { country: "Brasilien", capital: "Brasília" },
    { country: "Brunei", capital: "Bandar Seri Begawan" },
    { country: "Bulgarien", capital: "Sofia" },
    { country: "BurkinaFaso", capital: "Ouagadougou" },
    { country: "Burundi", capital: "Bujumbura" },
    { country: "Kambodscha", capital: "Phnom Penh" },
    { country: "Kamerun", capital: "Yaoundé" },
    { country: "Kanada", capital: "Ottawa" },
    { country: "KapVerde", capital: "Praia" },
    { country: "ZentralAfrikanischeRepublik", capital: "Bangui" },
    { country: "Tschad", capital: "N_Djamena" },
    { country: "Chile", capital: "Santiago" },
    {
        country: "China",
        capital: "Peking (bezeichnet als Beijing in Mandarin)",
    },
    { country: "Kolumbien", capital: "Bogotá" },
    { country: "Komoren", capital: "Moroni" },
    { country: "Kongo", capital: "Brazzaville" },
    { country: "CostaRica", capital: "San José" },
    { country: "Kroatien", capital: "Zagreb" },
    { country: "Kuba", capital: "Havanna" },
    { country: "Zypern", capital: "Nikosia" },
    { country: "TschechischeRepublik", capital: "Prag" },
    { country: "Dänemark", capital: "Kopenhagen" },
    { country: "Dschibuti", capital: "Dschibuti Stadt" },
    { country: "Dominica", capital: "Roseau" },
    { country: "DominikanischeRepublik", capital: "Santo Domingo" },
    { country: "Ecuador", capital: "Quito" },
    { country: "Ägypten", capital: "Kairo" },
    { country: "ElSalvador", capital: "San Salvador" },
    { country: "Äquatorialguinea", capital: "Malabo" },
    { country: "Eritrea", capital: "Asmara" },
    { country: "Estland", capital: "Tallinn" },
    { country: "Äthiopien", capital: "Addis Abeba" },
    { country: "Fidschi", capital: "Suva" },
    { country: "Finnland", capital: "Helsinki" },
    { country: "Frankreich", capital: "Paris" },
    { country: "Gabun", capital: "Libreville" },
    { country: "Gambia", capital: "Banjul" },
    { country: "Georgien", capital: "Tiflis" },
    { country: "Deutschland", capital: "Berlin" },
    { country: "Ghana", capital: " Accra" },
    { country: "Griechenland", capital: "Athen" },
    { country: "Grenada", capital: 'St. George"s' },
    { country: "Guatemala", capital: "Guatemala Stadt" },
    { country: "Guinea", capital: "Conakry" },
    { country: "GuineaBissau", capital: "Bissau" },
    { country: "Guyana", capital: "Georgetown" },
    { country: "Haiti", capital: "Port-au-Prince" },
    { country: "Honduras", capital: "Tegucigalpa" },
    { country: "Hongkong", capital: "Hongkong" },
    { country: "Ungarn", capital: "Budapest" },
    { country: "Island", capital: "Reykjavik" },
    { country: "Indien", capital: "Neu-Delhi" },
    { country: "Indonesien", capital: "Jakarta" },
    { country: "Iran", capital: "Teheran" },
    { country: "Irak", capital: "Bagdad" },
    { country: "Irland", capital: "Dublin" },
    { country: "Israel", capital: "Jerusalem" },
    { country: "Italien", capital: " Rom" },
    { country: "Elfenbeinküste", capital: "Yamoussoukro" },
    { country: "Jamaika", capital: "Kingston" },
    { country: "Japan", capital: "Tokio" },
    { country: "Jordanien", capital: "Amman" },
    { country: "Kasachstan", capital: "Nur Sultan" },
    { country: "Kenia", capital: "Nairobi" },
    { country: "Kiribati", capital: "Tarawa" },
    { country: "Nordkorea", capital: "Pjöngjang" },
    { country: "Südkorea", capital: "Seoul" },
    { country: "Kosovo", capital: "Pristina" },
    { country: "Kuwait", capital: "Kuwait-Stadt" },
    { country: "Kirgisistan", capital: "Biskek" },
    { country: "Laos", capital: "Vientiane" },
    { country: "Lettland", capital: "Riga" },
    { country: "Libanon", capital: "Beirut" },
    { country: "Lesotho", capital: "Maseru" },
    { country: "Liberia", capital: "Monrovia" },
    { country: "Libyen", capital: "Tripolis" },
    { country: "Liechtenstein", capital: "Vaduz" },
    { country: "Litauen", capital: "Vilnius" },
    { country: "Luxemburg", capital: "Luxemburg" },
    { country: "Macau", capital: "Macau" },
    { country: "Mazedonien", capital: "Skopje" },
    { country: "Madagaskar", capital: "Antananarivo" },
    { country: "Malawi", capital: "Lilongwe" },
    { country: "Malaysia", capital: "Kuala Lumpur" },
    { country: "Malediven", capital: "Malé" },
    { country: "Mali", capital: "Bamako" },
    { country: "Malta", capital: "Valletta" },
    { country: "Marshallinseln", capital: "Majuro" },
    { country: "Mauretanien", capital: "Nouakchott" },
    { country: "Mauritius", capital: "Port Louis" },
    { country: "Mexiko", capital: "Mexiko-Stadt" },
    { country: "Mikronesien", capital: "Palikir" },
    { country: "Moldawien", capital: "Chisinau" },
    { country: "Monaco", capital: "Monaco" },
    { country: "Mongolei", capital: "Ulaanbaatar" },
    { country: "Montenegro", capital: "Podgorica" },
    { country: "Marokko", capital: "Rabat" },
    { country: "Mosambik", capital: "Maputo" },
    { country: "Myanmar", capital: "Naypyidaw" },
    { country: "Namibia", capital: "Windhoek" },
    { country: "Nauru", capital: "Yaren" },
    { country: "Nepal", capital: "Kathmandu" },
    { country: "Niederlande", capital: "Amsterdam" },
    { country: "Neuseeland", capital: "Wellington" },
   { country: "Nicaragua", capital: "Managua" },
    { country: "Niger", capital: "Niamey" },
    { country: "Nigeria", capital: "Abuja" },
    { country: "Norwegen", capital: "Oslo" },
    { country: "Oman", capital: "Maskat" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Palau", capital: "Melekeok" },
    { country: "Panama", capital: "Panama Stadt" },
    { country: "Papua_Neuguinea", capital: "Port Moresby" },
    { country: "Paraguay", capital: "Asunción" },
    { country: "Peru", capital: " Lima" },
    { country: "Philippinen", capital: "Manila" },
    { country: "Polen", capital: "Warschau" },
    { country: "Portugal", capital: "Lissabon" },
    { country: "Katar", capital: "Doha" },
    { country: "Rumänien", capital: "Bukarest" },
    { country: "Russland", capital: "Moskau" },
    { country: "Ruanda", capital: "Kigali" },
    { country: "Saint_Kitts_Nevis", capital: "Basseterre" },
    { country: "Saint_Lucia", capital: "Castries" },
    { country: "Saint_Vincent_die_Grenadinen", capital: "Kingstown" },
    { country: "Samoa", capital: "Apia" },
    { country: "San_Marino", capital: "San Marino" },
    { country: "Sao_Tome_Principe", capital: "Sao Tome" },
    { country: "Saudi_Arabien", capital: "Riad" },
    { country: "Senegal", capital: "Dakar" },
    { country: "Serbien", capital: "Belgrad" },
    { country: "Seychellen", capital: "Victoria" },
    { country: "Sierra_Leone", capital: "Freetown" },
    { country: "Singapur", capital: "Singapur" },
    { country: "Slowakei", capital: "Bratislava" },
    { country: "Slovenien", capital: "Ljubljana" },
    { country: "Salomonen", capital: "Honiara" },
    { country: "Somalia", capital: "Mogadischu" },
    {
        country: "Südafrika",
        capital:
            "Pretoria (administrative Hauptstadt), Kapstadt (le…Hauptstadt), Bloemfontein (judikative Hauptstadt)",
    },
    { country: "Südsudan", capital: "Juba" },
    { country: "Spanien", capital: "Madrid" },
    {
        country: "Sri_Lanka",
        capital:
            "Sri Jayawardenepura Kotte (administrative Hauptstadt), Colombo (kommerzielle Hauptstadt)",
    },
    { country: "Sudan", capital: "Khartum" },
    { country: "Surinam", capital: "Paramaribo" },
    { country: "Swasiland", capital: "Mbabane" },
    { country: "Schweden", capital: "Stockholm" },
    { country: "Schweiz", capital: "Bern" },
    { country: "Syrien", capital: "Damaskus" },
    { country: "Taiwan", capital: "Taipeh" },
    { country: "Tadschikistan", capital: "Duschanbe" },
    { country: "Tansania", capital: "Dodoma" },
    { country: "Thailand", capital: "Bangkok" },
    { country: "Osttimor", capital: " Dili" },
    { country: "Togo", capital: "Lomé" },
    { country: "Tonga", capital: "Nuku,alofa" },
    { country: "Trinidad_Tobago", capital: "Port of Spain" },
    { country: "Tunesien", capital: "Tunis" },
    { country: "Türkei", capital: "Ankara" },
    { country: "Turkmenistan", capital: "Ashgabat" },
    { country: "Tuvalu", capital: "Funafuti" },
    { country: "Uganda", capital: "Kampala" },
    { country: "Vereinigte_Arabische_Emirate", capital: "Abu Dhabi" },
    { country: "Großbritannien", capital: "London" },
    { country: "USA", capital: " Washington, D.C." },
    { country: "Uruguay", capital: "Montevideo" },
    { country: "Usbekistan", capital: "Taschkent" },
    { country: "Vanuatu", capital: " Port Vila" },
    { country: "Vatikanstadt", capital: "Vatikanstadt" },
    { country: "Venezuela", capital: "Caracas" },
    { country: "Vietnam", capital: "Hanoi" },
    { country: "Jemen", capital: "Sanaa" },
    { country: "Zambia", capital: "Lusaka" },
    { country: "Simbabwe", capital: "Harare" },
];
function toArry(string1, key, letter) {
    let gefundeneElement = [];

    if (typeof string1 === "string") {
        let array = string1.split("\n");
        gefundeneElement = array.filter((element) =>
            element.toLowerCase().startsWith(letter.toLowerCase())
        );
    }
    if (typeof string1 === "object") {
        for (let i = 0; i < string1.length; i++) {
            if (string1[i][key].startsWith(letter)) {
                gefundeneElement.push(string1[i]);
                return gefundeneElement;
            } else {
                return "Land nicht gefunden";
            }
        }
    }

    if (gefundeneElement.length === 0) {
        return "Kein passendes Element gefunden";
    }

    return gefundeneElement[
        Math.floor(Math.random() * gefundeneElement.length)
    ];
}
function findElementsStartingWith(array, letter) {
    const sort = array.filter(
        (element) => element[1] == letter);
    return sort[Math.floor(Math.random() * sort.length)];
}


// obj sort function

// ffff.sort(function (a, b) {
//     if ( a.country < b.country) {return -1}
//     if (a.country > b.country) { return 1 }
//     return 0
// })
console.log(findElementsStartingWith(ffff, "g"));

// create function to find specific country item
// const getCountry = (countryName) => {
// 	return ffff.find(m => m.country === countryName);
// };

// // create function to send a letter and get an array of objects with countries that start with that letter
// const getCountriesWithLetter = (letter) => {
// 	return ffff.filter(m => m.country[0].toLowerCase() === letter.toLowerCase());
// }

// // same function with startsWith
// const getCountriesWithLetter2 = (letter) => {
//     console.log(letter);
// 	return ffff.filter(m => m.country[0].toLowerCase().startsWith(letter.toLowerCase()));
// }

// // const letterCountries = getCountriesWithLetter();
// // console.log(letterCountries);
// // const letterCountries2 = getCountriesWithLetter2();
// // console.log(letterCountries2);



// function findElementsStartingWith(array, letter) {
//     let filteredArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0].toLowerCase() === letter.toLowerCase()) {
//             filteredArray.push(array[i]);
//         }
//     }
//     return filteredArray;
// }

// console.log(findElementsStartingWith(...ffff, "a"));


function toArry(string1, key, letter) {
    let gefundeneElement = [];

    if (typeof string1 === "string") {
        let array = string1.split("\n");
        gefundeneElement = array.filter((element) =>
            element.toLowerCase().startsWith(letter.toLowerCase())
        );
    }
    if (typeof string1 === "object") {
        for (let i = 0; i < string1.length; i++) {
            if (string1[i][key].startsWith(letter)) {
                gefundeneElement.push(string1[i]);
                return gefundeneElement;
            } else {
                return "Land nicht gefunden";
            }
        }
    }

    if (gefundeneElement.length === 0) {
        return "Kein passendes Element gefunden";
    }

    return gefundeneElement[
        Math.floor(Math.random() * gefundeneElement.length)
    ];
}




function stringToObjct(string, letter, objKey) {
    const geräteArray = string.split(/[,\n\s]+/).sort();

    const result = [];

  function iterate(index) {
    if (index === geräteArray.length) {
      return; // Rekursionsabbruch, wenn alle Elemente überprüft wurden
    }

    const gerät = geräteArray[index];

    if (gerät.toLowerCase().startsWith(letter.toLowerCase())) {
      // Wenn das Gerät mit dem Buchstaben beginnt, dann ein Objekt mit der Eigenschaft "Gerät" erstellen
      const obj = {};
      obj[objKey] = gerät;
      result.push(obj); // Das erstellte Objekt zum Ergebnis-Array hinzufügen
    }

    iterate(index + 1); // Rekursion mit dem nächsten Element im Array fortsetzen
  }

  iterate(0);

  return result[Math.floor(Math.random() * result.length)];
}




// let neuObj = stringToObjct(haussHallt, "T", "Gäret");
// let neueObjSuche=  neuObj[Math.floor(Math.random() * neuObj.length)]
// console.log(stringToObjct(mänerName, "T", "Gäret"));
// function stringToObjct(string, letter) {
//     // String in Array von Geräten umwandeln
//     const geräteArray = string.split(/[,\n\s]+/).sort();

//     // Objekte mit Eigenschaft "Gerät" erstellen
//     const objekteArray = geräteArray.map((gerät) => {
//       return { Gerät: gerät };
//     });

//     // Filtern, um nur Objekte mit passender Eigenschaft zu behalten
//     const gefundeneObjekte = objekteArray.filter((objekt) =>
//       objekt.Gerät.startsWith(letter)
//     );

//     return gefundeneObjekte;
//   }

// let suche = [];
// function stringToObjct(string , colback,letter) {
//     // String => Array nach überbrüfung
//     let zeischen = [",", "\n", " "];
//     let erschfung = [];
//     for (let i = 0; i < zeischen.length; i++) {
//         if (string.includes(zeischen[i])) {
//             erschfung = string.split(zeischen[i]).sort();
//         }
//     }
//     const objecte = [];
//     for (let i = 0; i < erschfung.length; i++) {

//         const person = {
//             Gerät: erschfung[i],
//         };
//         objecte.push( person);
//     }if (objecte.charAt(0) ===letter) {

//     }

//     return objecte;
// }

//  getRandomValueStartingWith(letter, ...objects) {
//     const results = [];

//     for (let i = 0; i < objects.length; i++) {
//       const obj = objects[i];
//       const keys = Object.keys(obj);

//       for (let j = 0; j < keys.length; j++) {
//         const key = keys[j];
//         const value = obj[key];

//         if (typeof value === "string" && value.startsWith(letter)) {
//           results.push(value);
//         }
//       }
//     }

//     if (results.length > 0) {
//       const randomIndex = Math.floor(Math.random() * results.length);
//       return results[randomIndex];
//     } else {
//       return null;
//     }
//   }

// function stringToObject(str,a) {

//     // ein func zu erkennen wo im string gesplittet wird

//     // let str1 = [];
//     //                   //X-- habe am anfang  // let str1 = str;
//     // if (str.includes(",")) {                                 //if(str1.includes(","){
//     //     str1 = str.split(",");                                //       str1=str.split(","); }
//     // }                                                        //    Out // {},[].... kommt draufann wie ich bekommen wollte
//     // if (str.includes("\n")) {                                //
//     //     str1 = str.split("\n");
//     // }
//     // if (str.includes(" ")) {
//     //     str1 = str.split(" ");
//     // }

//     let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { d: 4, e: 5, f: 6 };
//     let obj3 = { g: 7, h: 8, i: 9 };
//     let objs = [obj1, obj2, obj3];
//     for (let i = 0; i < objs.length; i++) {
//         if (Object.values(objs[i]) === a ){
//         keys = Object.keys(objs[i]);
//          values = Object.values(objs[i]);
//         }
//   for (let j = 0; j < keys.length; j++) {
//     console.log(`Schlüssel: ${keys[j]}, Wert: ${values[j]}`);
//   }
// }

//     let str1 = [];

//     for (let i = 0; i < zeischen.length; i++) {
//       if (str.includes(zeischen[i])) {
//         str1 = str.split(zeischen[i]);
//         break; // Wenn ein Trennzeichen gefunden wurde, brechen Sie die Schleife ab.
//       }
//     }
//     function switchedCopy(obj){
//         const result = {};
//         for (const [key, value] of Object.entries(obj)) {
//           result[value] = key;
//         }
//         return result;
//       }
//       console.log(switchedCopy({location: 'berlin',status: 'occupied',}));
//       //-> { berlin: 'location', occupied: 'status' }

//     str1.forEach((ele ,val)=> {
//     return ele

//     });

//     // Array zu ein obj mit schlüssel name
//     //-X- schlüssel name  -x DassHaussHallt gäret da ich ihn eigen schft giben kann wie datum reschnung garante ..... x+-X
//     //--x wert erschfen der schnel zu ändern ist

// //     //--- umwandeln

// //     //     const obj = {};
// //     //     for (let i = 0; i < str1.length; i++) {
// //     //         obj[str1[i]] = i;
// //     //     } return obj
// //     // }

// //     const obj = str1.reduce((acc, val , i) => ({
// //         ...acc,
// //         [`Grät${i + 1}`]: val
// //     }), {});
// //     return obj
// // }
// // // for (let i = 0; i < str1.length; i++) {
// // //   obj[i] = str1[i];
// // // }
// //      // Ausgabe: {"Apfel": 0, "Birne": 1, "Banane": 2}

// //     // const obj = str1.reduce((acc, val, i) => ({
// //     //   ...acc,
// //     //   [`Obst${i+1}`]: val
// //     // }), {});

// // //     const obj = {};
// // //     for (let i = 0; i < str1.length; i++) {

// // //       if (str1[i] === " ") {
// // //         obj.empt= i;
// // //       } else {
// // //           [i] = home;// Variablen für die Kategorien und verwendete Elemente

// // //         obj[i] = str1[i];
// // //       }
// // //     }
// // //     return obj;
// // // }
// // const objecte = stringToObject(haussHallt);
// // console.log(objecte);

// // // let m = {
// // //     nem: {
// // //         datum: "ffff";
// // //         garante: this.datum;
// // // }

// let obj1 = { a: "a", b: 2, c: 3 };
// let obj2 = { d: 4, e: 5, f: 6 };
// let obj3 = { g: 7, h: 8, i: "a" };
// let objs = [obj1, obj2, obj3];

// function ddd(a, arg) {
// //     let keys = {};
// //   arg.find()
// //     for (let i = 0; i < arg.length; i++) {
// //         if (Object.values(arg[i]).includes(a)) {
// //             keys = Object.values(arg[i]);

// //             for (let j = 0; j < keys.length; j++) {
// //                 console.log(` ${keys}`);
// //             }
// //         }
// //     }

//     for (arg of arg)
// }
// console.log(ddd("a", objs));
