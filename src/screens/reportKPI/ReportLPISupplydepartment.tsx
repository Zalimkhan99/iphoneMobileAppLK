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

export class ReportLPISupplydepartment extends React.Component<TodoProps, TodoState,{ navigation: any }> {
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
            if(element.ReportKPI =="Департамент снабжения ежемесячный"){
                return(<View  key = {index} >

                    <View style={[reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.blackText, reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>Показатель</Text>
                        <Text style={[reportKPIStyle.blackText,reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>План</Text>
                        <Text style={[reportKPIStyle.blackText,reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>Факт</Text>
                        <Text style={[reportKPIStyle.blackText,reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>%</Text>
                        <Text style={[reportKPIStyle.blackText,reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>Премия</Text>
                    </View>

                    <View style={[
                        element.TurnoverPlan=="0"&&
                        element.TurnoverPlan=="0"&&
                        element.PercentTurnover=="0"&&
                        element.PrizeTurnover == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Оборачиваемость</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.TurnoverPlan}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.TurnoverFact}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentTurnover}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeTurnover}</Text>
                    </View>
                    <View style={[
                        element.PlanTopPoMarge=="0"&&
                        element.FactTopMarge=="0"&&
                        element.PercentTopMarge=="0"&&
                        element.PrizeTopMarge == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>ТОП 100 по марже</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanTopPoMarge}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactTopMarge}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentTopMarge}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeTopMarge}</Text>
                    </View>

                    <View style={[
                        element.PlanTop100PoCol=="0"&&
                        element.FactTop100PoCol=="0"&&
                        element.PercentTop100PoCol=="0"&&
                        element.PrizeTopPoCol == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>ТОП 100 по количеству</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanTop100PoCol}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactTop100PoCol}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentTop100PoCol}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeTopPoCol}</Text>
                    </View>

                    <View style={[
                        element.PercentTop100PoAXO=="0"&&
                        element.PrizeTop100PoAXO=="0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>ТОП 100 по количеству(АХО)</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentTop100PoAXO}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeTop100PoAXO}</Text>
                    </View>

                    <View style={[
                        element.PlanDefect=="0"&&
                        element.FactDefect=="0"&&
                        element.PercentDefect=="0"&&
                        element.PrizeDefect == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Брак</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanDefect}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactDefect}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentDefect}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeDefect}</Text>
                    </View>
                    <View style={[
                        element.PlanSettlementReconciliation=="0"&&
                        element.FactSettlementReconciliation=="0"&&
                        element.PercentSettlementReconciliation=="0"&&
                        element.PrizeSettlementReconciliation == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Сверка взаиморасчетов</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanSettlementReconciliation}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactSettlementReconciliation}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentSettlementReconciliation}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeSettlementReconciliation}</Text>
                    </View>
                    <View style={[
                        element.PlanSettlementReconciliationAXO=="0"&&
                        element.FactSettlementReconciliationAXO=="0"&&
                        element.PercentSettlementReconciliationAXO=="0"&&
                        element.PrizeSettlementReconciliationAXO == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Сверка взаиморасчетов	AXO</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanSettlementReconciliationAXO}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactSettlementReconciliationAXO}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentSettlementReconciliationAXO}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeSettlementReconciliationAXO}</Text>
                    </View>

                    <View style={[
                        element.FactBySuppliers=="0"&&
                        element.PrizeBySuppliers == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Новые поставщики</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactBySuppliers}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeBySuppliers}</Text>
                    </View>

                    <View style={[
                        element.PlanPoEffectiveness=="0"&&
                        element.FactPoEffectiveness=="0"&&
                        element.PercentPoEffectiveness=="0"&&
                        element.PrizePoEffectiveness == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Эффективность</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanPoEffectiveness}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactPoEffectiveness}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentPoEffectiveness}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizePoEffectiveness}</Text>
                    </View>

                    <View style={[
                        element.PlanCommodityTurnover=="0"&&
                        element.FactCommodityTurnover=="0"&&
                        element.PercentCommodityTurnover=="0"&&
                        element.PrizeCommodityTurnover == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Товарооборот</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanCommodityTurnover}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactCommodityTurnover}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentCommodityTurnover}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeCommodityTurnover}</Text>
                    </View>
                    <View style={[
                        element.OpenTasks=="0"&&
                        element.CloseTasks=="0"&&
                        element.PercentCompletedTasks=="0"&&
                        element.PrizeTasks == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Задачи компании</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.OpenTasks}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.CloseTasks}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentCompletedTasks}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeTasks}</Text>
                    </View>
                    <View style={[
                        element.ScPlanByMovements=="0"&&
                        element.ScFactByMovements=="0"&&
                        element.ScPercentByMovements=="0"&&
                        element.ScBonusByMovements == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Перемещения</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScPlanByMovements}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScFactByMovements}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScPercentByMovements}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScBonusByMovements}</Text>
                    </View>
                    <View style={[
                        element.ScNorm=="0"&&
                        element.ScNumberDiscrepancies=="0"&&
                        element.ScPercentNumberDiscrepancies=="0"&&
                        element.ScPrizeNumberDiscrepancies == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Расхождения по перемещениям товара</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScNorm}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScNumberDiscrepancies}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScPercentNumberDiscrepancies}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScPrizeNumberDiscrepancies}</Text>
                    </View>
                    <View style={[
                        element.ScNumberAcceptedGoods=="0"&&
                        element.ScNumberBonusAcceptedGoods == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Принятые товары</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScNumberAcceptedGoods}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScNumberBonusAcceptedGoods}</Text>
                    </View>
                    <View style={[
                        element.ScNumberLabelsGlued=="0"&&
                        element.ScPrizeNumberLabelsGlued == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Поклеенные этикетки</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScNumberLabelsGlued}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScPrizeNumberLabelsGlued}</Text>
                    </View>
                    <View style={[
                        element.ScNormaDiscrLabelsGlued=="0"&&
                        element.ScNumberDiscrLabelsGlued=="0"&&
                        element.ScPrizeDiscrLabelsGlued == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Расхождения по печати этикеток</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScNormaDiscrLabelsGlued}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScNumberDiscrLabelsGlued}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ScPrizeDiscrLabelsGlued}</Text>
                    </View>
                    <View style={[
                        element.NumberTT=="0"&&
                        element.PrizeNumberTT == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Торговые точки</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.NumberTT}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeNumberTT}</Text>
                    </View>
                    <View style={[
                        element.DistanceTraveled=="0"&&
                        element.PrizeDistanceTraveled == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Пройденное растояние</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeDistanceTraveled}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.DistanceTraveled}</Text>
                    </View>
                    <View style={[
                        element.NumberItemsMoved=="0"&&
                        element.PrizeNumberItemsMoved == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Перемещенные товары</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.NumberItemsMoved}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeNumberItemsMoved}</Text>
                    </View>
                    <View style={[
                        element.MovedDocuments=="0"&&
                        element.AcceptedDocuments=="0"&&
                        element.PercentAcceptedDocumDistMovedDoc=="0"&&
                        element.PrizeAcceptedDocumDistMovedDoc == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Расхождения по перемещенным и принятым документам</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.MovedDocuments}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.AcceptedDocuments}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentAcceptedDocumDistMovedDoc}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeAcceptedDocumDistMovedDoc}</Text>
                    </View>
                    <View style={[
                        element.PvTotalQuantity=="0"&&
                        element.PvPrizeTotalQuantity == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Общее количество товара</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PvTotalQuantity}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PvPrizeTotalQuantity}</Text>
                    </View>
                    <View style={[
                        element.RvPlanAccording=="0"&&
                        element.RvFactAccording=="0"&&
                        element.RvPercentAccording=="0"&&
                        element.RvPrizeAccording == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Списано товаров</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPlanAccording}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvFactAccording}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPercentAccording}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPrizeAccording}</Text>
                    </View>
                    <View style={[
                        element.RvPlanDivergence=="0"&&
                        element.RvFactDivergence=="0"&&
                        element.RvPercentDivergence=="0"&&
                        element.RvPrizeDivergence == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Расхождения по товарам</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPlanDivergence}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvFactDivergence}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPercentDivergence}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPrizeDivergence}</Text>
                    </View>
                    <View style={[
                        element.RvPlanNumberInventories=="0"&&
                        element.RvFactNumberInventories=="0"&&
                        element.RvPercentNumberInventories=="0"&&
                        element.RvPrizeNumberInventories == "0"
                            ?{display:'none'}:reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Количество инвентаризаций</Text>
                        <Text style={[reportKPIStyle.blueText1,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPlanNumberInventories}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvFactNumberInventories}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPercentNumberInventories}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.RvPrizeNumberInventories}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Штрафы за опоздание</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.LatePenalties}</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blackText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Зарплата</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.Salary}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
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
