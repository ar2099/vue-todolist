/*
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo barrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

var app = new Vue( {
    el: '#tutto',
    data: {
        lista: [
            {
                testo: "Uscire il cane",
                stato: false
            },
            {
                testo: "prendere il caffè",
                stato: false
            },
            {
                testo: "Fumare una sigaretta",
                stato: false
            }
        ]
        

    },
    methods: {
        sbarrato: function (riga) {
            // element.done = true
            if (riga.stato == true) {
                riga.stato = false
            } else {
                riga.stato = true
            }
        },

        rimuovi: function (posizione) {
            this.lista.splice(posizione, 1);
        },

        aggiunta: function () {
            let oggetto = {
                testo: this.nuovaRiga,
                stato: false,
            }

            if (this.nuovaRiga != '') {
                this.lista.push(oggetto);

                this.nuovaRiga = ''
            }
        },

        
}})