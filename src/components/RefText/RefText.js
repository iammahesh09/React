import React, { Component } from "react";


export class RefText extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        console.log(this.inputRef.current);
        this.inputRef.current.focus();
        this.inputRef.current.value = "Ref Input";
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="mb-3">
                        <label htmlFor="refText" className="form-label">Input Focus</label>
                        <input type="email" className="form-control" id="refText" ref={this.inputRef} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.focusInput}>Focus input</button>
                </form>
            </React.Fragment>
        )
    }
}