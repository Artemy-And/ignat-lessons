import React, {ChangeEvent} from "react";


export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditModeTrue = () => {
        this.setState({
            editMode: true
        })


    }
    activateEditModeFalse = () => {
        this.setState({
            editMode: false
        })
        this.props.getUpdateUserStatus(this.state.status)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>)=> {
        this.setState({
            status:e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
        console.log('componentDidUpdate')
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditModeTrue}>{this.props.status || ' no status '}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.activateEditModeFalse} value={this.state.status} onChange={this.onStatusChange}></input>
                </div>
                }
            </div>
        )
    }


}
