import {StyleSheet, Dimensions} from 'react-native';
let screenWidth = Dimensions.get('window').width ;
let heightBatteryOfFines:number = 200;
let heightIndicatorBattery:number = 35;
let bottomBatteryOfFines:number = 150;
if(screenWidth<376){
    heightBatteryOfFines = 170
    heightIndicatorBattery = 27
   bottomBatteryOfFines = 130
}
const batteryOfFines = StyleSheet.create({

    batteryOfFines: {
        position: 'relative',
        height: heightBatteryOfFines,
        width: 100,
        left: 90,
        bottom: bottomBatteryOfFines,
        backgroundColor: '#F0F0F0',
    },
    indicatorBattery:{
        height:heightIndicatorBattery,
        width:100,
    },
}
)
export default batteryOfFines
