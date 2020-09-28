import React, {ChangeEvent, useEffect, useState} from "react";


export const ProfileStatusWithHook = (props: any) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => { ///это для того чтбы при обновлении статуса он не пропадал после двойного клика
        setStatus(props.status)
    }, [props.status])

    let activateEditModeTrue = () => {
        setEditMode(true)
    }
    let activateEditModeFalse = () => {
        setEditMode(false)
        props.getUpdateUserStatus(status)
    }
    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditModeTrue}>{props.status || ' no status '}dd</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={activateEditModeFalse} value={status} onChange={onStatusChange}></input>
            </div>
            }
        </div>
    )
}




