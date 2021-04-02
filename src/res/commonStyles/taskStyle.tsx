import {StyleSheet,} from 'react-native';
import { Dimensions } from "react-native";
let padding:number = 100;
let fontSize:number =14;
let fontSizeAuthor:number = 12;
let right:number = 3;
let screenWidth = Dimensions.get('window').width ;
if(screenWidth<376){
    padding = 50;
}
else if(screenWidth > 376 && screenWidth < 721){padding=50;fontSize=16;fontSizeAuthor= 14; right=10}

let width = (Dimensions.get('window').width - padding) ; //full width
let height = Dimensions.get('window').height; //full height

const taskStyle = StyleSheet.create({


    containerChild: {
        flex: 1,
        padding:5,
    },
    notificationAndBlockTask:{
        flex:2,
        flexDirection:'row',
       // width: width,
    },
    globalContainerTask: {
        borderWidth:1,
        padding:10,
        marginBottom:5,
        width: width,
    },

    blocksInTasks:{
        flexDirection:'row',
        borderColor:'silver',
        borderBottomWidth:1,
        justifyContent:'space-between',
        fontSize:fontSize,

    },

    statusAndNumberTaskAndPeriodOfExecution:{
        justifyContent:'space-between',
        fontSize:fontSize,

    },
    taskName:{
        borderColor:'silver',
        borderBottomWidth:1,
        justifyContent:'space-between',
        marginBottom:5,
        fontSize:fontSize,
    },
    customerAndExecutor:{
        color:'silver',
        fontSize:fontSize,
    },
    blockTaskPeriodOfExecution:{
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:fontSize,
    },
    authorsStyle:{
        fontSize: fontSizeAuthor

    },
    notification:{
        color:'red',
        fontWeight:'bold',
        fontSize:76,
        right:right
    },

})

export default taskStyle
