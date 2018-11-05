import {makeActivityReducer} from "./FlowTypes";


export default function ActivityReducer (state = makeActivityReducer(), action) {
    switch (action.type) {
        default:
            return state;
    }
}