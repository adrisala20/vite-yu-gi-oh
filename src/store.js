import {reactive} from 'vue';
export const store = reactive({
    apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    endPoints:{
       cards:'cardinfo.php',
       archetype:'archetype.php'
    },
    option:{
        params:{        //è una chiave, èun oggetto di configurazione
            num:20,
            offset:0,
            archetype:'',
        }
    },
    cards:[],
    archetypeList:[],
    error:{
        message:null
    },
    loading:false,
   
})