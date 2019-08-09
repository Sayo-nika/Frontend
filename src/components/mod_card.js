import React, { Component } from "react";
import { Card } from "./common";


export default class ModCard extends Component {

    render() {
        // Somehow add floating circle icon

        return (<Card>
            <div>
                Header img here
            </div>
            <div>
                <h3>Mod title</h3>
                Mod body
            </div>
            <div>
                [icon] Comedy [icon] 15.5k
            </div>
        </Card>)
    }
}
