import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import Header from './components/Header'
import ResultCard from './components/ResultCard';
import './App.scss';


function App() {
  const APIdata = 
  [
    {
      id:1,
      name:"Acrylamide",
      summary:"Acrylamide is a chemical formed when people cook carbohydrates (starchy foods) at very high temperatures. It is also found in tobacco smoke. Acrylamide is used to make chemicals used to purify water, treat sewage, make paper, and make certain cosmetics and soaps.",
      exposure:"Acrylamide exposure usually happens when people eat foods cooked at high temperatures such as fried potato chips and French fries, drink coffee, or inhale tobacco smoke. People who work in industries that make or use acrylamide can have higher exposures through skin contact or inhalation.",
      affects:"Human health effects from environmental exposure to low levels of acrylamide are unknown. The body converts some acrylamide to glycidamide. Both acrylamide and glycidamide can bind to hemoglobin, a large protein in the red blood cells. The resulting substances (hemoglobin adducts) are measured in people’s blood. Inhaling large amounts of acrylamide can irritate breathing passages. Long term exposure can cause nerve damage. In laboratory animal testing, acrylamide caused reproductive problems, nerve damage, and cancer.",
      levels:"n the Fourth National Report on Human Exposure to Environmental Chemicals, Updated Tables, March 2018, CDC scientists reported acrylamide and glycidamide hemoglobin adducts. They measured these substances in the blood of more than 14,000 participants, aged three years and older, who took part in the National Health and Nutrition Examination Survey (NHANES) in 2003–2004 and 2005-2006. By measuring these hemoglobin adducts in blood, scientists can estimate the amount of acrylamide that has entered people’s bodies.\n\nCDC scientists found measurable levels of acrylamide adducts in the blood of 99.9% of the U.S. population.\nScientists found measurable levels of glycidamide adducts in the blood of 97.5% of the U.S. population.\nFindings show smokers have almost twice the levels of acrylamide and glycidamide adducts in their blood than nonsmokers.\nFinding a measurable amount of acrylamide or glycidamide hemoglobin adducts in blood does not imply that they cause an adverse health effect. Biomonitoring studies on levels of acrylamide provide physicians and public health officials with reference values. These reference values help experts determine if people have been exposed to higher levels of acrylamide than are found in the general population. Biomonitoring data can also help scientists plan and conduct research on exposure and health effects."
    },
    {
      id:2,
      name:"Arsenic",
      summary:"Arsenic, a naturally occurring element, can combine with either inorganic or organic substances to form many different compounds. Inorganic arsenic compounds are in soils, sediments, and groundwater. These compounds occur either naturally, or as a result of mining, ore smelting, or when using arsenic for industrial purposes. Organic arsenic compounds exist mainly in fish and shellfish.\n\nIn the past people used inorganic forms of arsenic in pesticides and paint pigment. People also used them as wood preservatives and as a treatment for a variety of ailments. Today laws restrict using arsenic-containing pesticides, wood preservatives, and medicines.",
      exposure:"People are most likely exposed to inorganic arsenic through drinking water. This is especially true in areas with water sources that naturally have higher levels of inorganic arsenic. People can also be exposed to inorganic arsenic by eating such foods as rice and some fruit juices. Other sources of inorganic arsenic exposure include contact with contaminated soil or dust, or with wood preserved with arsenic compounds.\n\nExposure to organic arsenic compounds happens when people eat seafood. These forms of arsenic are considered to be non-toxic or considerably less toxic than inorganic arsenic.",
      affects:"Unusually large doses of inorganic arsenic can cause symptoms ranging from nausea, vomiting, and diarrhea to dehydration and shock. Long-term exposure to high levels of inorganic arsenic in drinking water is associated with certain medical conditions. These conditions include skin disorders, an increased risk for diabetes, high blood pressure, and several types of cancer. Inorganic arsenic and arsenic compounds are considered to be cancer-causing chemicals.\n\nStudies have not found organic arsenic in seafood to be toxic to humans.",
      levels:"n the Fourth National Report on Human Exposure to Environmental Chemicals (Fourth Report), CDC scientists measured total arsenic, and seven different forms (or species) of arsenic. They measured these substances in the urine of 2,557 participants, aged six years and older, who took part in the National Health and Nutrition Examination Survey (NHANES) in 2003–2004. By measuring arsenic in urine, scientists can estimate the amount of arsenic that has entered people’s bodies within the past two or three days.\n\nThe body converts inorganic arsenic into the breakdown product (metabolite) called dimethylarsinic acid (DMA). DMA is also found in such foods as fish, poultry, fruits and grains. NHANES results found DMA and arsenobetaine to be the major components of urinary total arsenic levels. Arsenobetaine is a non-toxic inorganic arsenic form that comes from fish and seafood.\nFinding measurable amounts of arsenic in urine does not mean those levels cause an adverse health effect. Biomonitoring studies on levels of arsenic provide physicians and public health officials with reference values. These reference values help experts determine if people have been exposed to higher levels of arsenic than are found in the general population. Biomonitoring data can also help scientists plan and conduct research on exposure and health effects."
    }
  ]  
  const dataURL = "https://sheet.best/api/sheets/955ad1a5-948c-49c5-81f0-2f832fb1efbb"
  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
    
     useEffect(() => {

      setData(APIdata);
      setLoadingData(false);

    //     fetch(dataURL)
    //     .then(res => {
    //       if(res.ok) {
    //         return res.json();
    //       } else {
    //         throw Error("Error during fetch call")
    //       }
    //     })
    //     .then(res => {
    //       setData(res);
    //       setLoadingData(false);
    //     })
    //     .catch(error => {
    //       setError(error)
    //     })
     }, []);

    const displayResults = () => {
      return data.map(item => {
        return <li>{item.name}</li>
      })
    }

    const displayTestResults = () => {
      return APIdata.map(item => {
        return <ResultCard
          className="card"
          key={APIdata.indexOf(item)}
          item={item}
        />
      })
    }

return (
      <Router>
        <div id="header">
          <Header/>
        </div>
        <div id="site-container">
          <h1>Chemical Information Site</h1>
          {/* <h2>{loadingData ? null : `There are currently ${data.length} types of chemicals to be aware of.`}</h2> */}
          <h3>This website provides an easy way to learn more about what these chemicals do and how to avoid exposure.</h3>
          {/* {loadingData ? <div>...Loading Data</div> : <div>{displayResults()}</div>} */}
          <div className="card-container row">
            {loadingData ? <div>...Loading Data</div> : <div className="card-columns">{displayTestResults()}</div>}
          </div>
          <div className="sheet-container row">
            <p>Full info sheet here</p>
          </div>
        </div>
      </Router>
  );
}

export default App;
