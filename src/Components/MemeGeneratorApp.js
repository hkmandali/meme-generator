import React from "react"
import MemeGenerator from "./MemeGenerator"
import MemeHeader from "./MemeHeader"

class MemeGeneratorApp extends React.Component{

    render(){
        return(
            <div>
                <MemeHeader />
                <MemeGenerator />
            </div>
        )
    }
}


export default MemeGeneratorApp