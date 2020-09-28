import React from "react";

import {ProfileStatus} from "./ProfileStatus";
import {create} from "react-test-renderer";


describe("Profile status component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const instance:any = component.getInstance()

        expect(instance.state.status).toBe('it-kamasutra.com');
    });

    test("after creation span should be in displayed with correct span", () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root:any = component.root
        let span:any = root.findByType("span")
        expect(span.length).not.toBeNull();
    });
    test("after creation <input> should not be displayed", () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root:any = component.root

        // let span:any = root.findByType("span")
        // expect(span.length).not.toBeNull();
        expect(()=>{
            let input:any = root.findByType('input')
        }).toThrow()
    });
    test("<input> should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root:any = component.root
        let span:any = root.findByType("span")
        span.props.onDoubleClick();
        let input:any = root.findByType("input")
        expect(input.props.value).toBe('it-kamasutra.com');

    });
});

