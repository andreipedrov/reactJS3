import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as Types from '../../js/constants'
import { Table } from 'react-bootstrap';
function QuoteDetailSeven(props) {
  const storeData = useSelector(store => store)
  const dispatch = useDispatch()
  const history = useHistory()

  const goNavigation = (clickedItem) => {
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedIssueType: clickedItem } })
    history.push('/quotedetailfirst')
  }

  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>

          <h2><p> Welcome   </p></h2>
          <div className='box_container' >
            <Table className="tabletxt" striped bordered hover>
              <tbody >
                <tr>
                  <td>1</td>
                  <td>  DeviceType</td>
                  <td> {storeData.selectedDeviceType}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Classifiction</td>
                  <td>   {storeData.selectedClassificationType}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Model</td>
                  <td>    {storeData.selectedModelType}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Color</td>
                  <td>   {storeData.selectedColorType}</td>
                </tr>



                <tr>
                  <td>5</td>
                  <td>Issue   </td>
                  <td>
                    {/* {storeData.selectedIssueType} */}
                  {/* <ul>{storeData.selectedIssueType.map(name => <li key={name}> {name} </li>)}</ul> */}
                  <ul>
                          {storeData.selectedIssueType && storeData.selectedIssueType.map((condetail, i) => {
                            return <li  key={i} style={{textAlign:'left'}}>  {condetail}</li>
                          })}
                        </ul> 
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Issue   Anything</td>
                  <td>   {storeData.selectedIsuueQzType.inputData}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>phone</td>
                  <td>   {storeData.selectedDetailsType.phone}</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Fullname</td>
                  <td>   {storeData.selectedDetailsType.fullname}</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Email</td>
                  <td>   {storeData.selectedDetailsType.email}</td>
                </tr>

              </tbody>
            </Table>  <div className="querytxt">

        <a className="btn btn-danger" onClick={goNavigation}>Send Inquiry</a>

      </div>
          </div>

        </div>
      </div>
    

      <Footer navigation={"seven"} value={90} />
    </div>
  );
}

export default QuoteDetailSeven;
