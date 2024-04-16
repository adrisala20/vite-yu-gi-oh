import {reactive} from 'vue';
export const store = reactive({
    apiUrl:'https://db.ygoprodeck.com/api/v7/',
    endPoints:{
       cards:'cardinfo.php',
       archetype:'archetype.php'
    },
    option:{
        params:{        //è una chiave, è un oggetto di configurazione
            num:20,
            offset:0,
        }
    },
    cards:[],
    archetypeList:[],
    archetypeFilter:'',
    error:{
        message:null
    },
    loading:false,   
})