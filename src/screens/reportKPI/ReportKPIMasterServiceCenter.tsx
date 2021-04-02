import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import { ScrollView } from 'react-native-gesture-handler';
import styles from "../../res/commonStyles/style";
import reportKPIStyle from "../../res/commonStyles/reportKPIStyle";

interface TodoProps {
    navigation: NavigationScreenProp<string>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?: any
}

export class ReportKPIMasterServiceCenter extends React.Component<TodoProps, TodoState,{ navigation: any }> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {LoginUser: '', DataJSON: []}
    }
    getUserName(){
        AsyncStorage.getItem('LoginUser').then((LoginUser)=>{
            this.setState({LoginUser:LoginUser})
        })
    }
    createURLHTTP(){
        let url:string = API("kpiuserlk/"+this.state.LoginUser);
        // alert(url)
        return url
    }
    async sendHTTPRequest(){
        await fetch(this.createURLHTTP(), {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    DataJSON: responseJSON
                })
                //alert(JSON.stringify(this.state.DataJSON))
            })
            .catch((error) => {
                console.log(error);
                this.sendHTTPRequest()
            })
    }

    componentDidMount(): void {
        this.getUserName()
        setTimeout(()=>{
            this.sendHTTPRequest()
        },1000)
    }
    render (): React.ReactNode {
        let elemList:any = this.state.DataJSON
        console.log(elemList)
        let listItem = elemList.map((element:any, index:any) =>{
            if(element.ReportKPI =="Мастера сервисного центра"){
                return(<View  key = {index} >

                    <View style={[reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>Показатель</Text>
                        <Text style={[reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>План</Text>
                        <Text style={[reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>Факт</Text>
                        <Text style={[reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>%</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Услуги сервисного центра</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.SalesProgram}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.SalesCurrent}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.Percent}</Text>
                    </View>

                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Премия</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.Prize}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>

                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Количество жалоб</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.NumberOfComplaints}</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Штраф за Некачественный ремонт</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.BadRepairFine}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Количесво штрафов</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.Lateness}</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Штрафы за опоздание</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.LatePenalties}</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Зарплата</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.Salary}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>

                </View>)
            }


        });
        return (
            <ScrollView>
                <View style={reportKPIStyle.GlContainer}>
                    {listItem}
                </View>
            </ScrollView>

        );
    }

}
