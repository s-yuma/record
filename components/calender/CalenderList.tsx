import styles from './MedicationHistory.module.scss'
import { useState , useContext} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback,useEffect } from "react";
import { UseAddcalenderList } from './UseAddcalenderList';
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory[name]';


export default function CalenderList(props:any) {
    const {updata, setUpdata}= useContext(UpdateContext)
    const {calenderList,fetch} = UseAddcalenderList(props.name);

    useEffect(() => {
      fetch(props.name)
      console.log(calenderList)
    },[])

    useEffect(() => {
        fetch(props.name)
      },[calenderList])
  return (
    <>
      <div style={{"paddingLeft":"50px","margin":"0",}}>
        <FullCalendar  
        plugins={[dayGridPlugin, interactionPlugin]}        
        locale='ja'  
        // initialEvents={[{ title: '現在の日時', start: new Date() }]} //現在の日時を表示
        events={calenderList}
        />
      </div>
    </>
  )
}
