import { CHANGE_STATUS_TAG_BUTTON, CREATE_TAG, DELETE_SINGLE_TAG, FIND_SINGLE_TAG, GET_ALL_TAGS, UPDATED_TAG } from "../Constants";

const initialState = {
    tagsData: [],
    error: ''
}

export default (state = initialState, { type, payload, msg }) => {

    switch (type) {
        case GET_ALL_TAGS:
            console.warn("payload again", payload)
            if (msg == 'done') {
                return {
                    ...state,
                    tagsData: payload,
                    error: msg
                }
            }
            else {
                return {
                    ...state,
                    error: msg
                }

            }

        case FIND_SINGLE_TAG:

            return {
                ...state,
                tagsData: payload,

            }

        case CREATE_TAG:
            console.warn("payload again", payload)
            if (msg == 'Inserted') {
                return {
                    ...state,
                    error: msg,
                    tagsData: [payload, ...state.tagsData]
                }
            } else {
                return {
                    ...state,
                    error: msg,

                }
            }

        case UPDATED_TAG:

            if (msg == 'updated') {


                return {
                    ...state,
                    error: msg,
                    tagsData:  isNaN(state.tagsData)? payload :state.tagsData.map((tags) =>
                        tags.id == payload.id ? payload : tags

                    )
                }
            }
            else {
                return {
                    ...state,
                    error: msg
                }

            }

        case CHANGE_STATUS_TAG_BUTTON:

            if (msg == 'changed') {
                return {
                    ...state,
                    tagsData: state.tagsData.map((tags) =>
                        tags.id == payload.id ? payload : tags,

                    ),
                    error: msg
                }
            } else {
                return {...state ,  error: msg }


            }

        case DELETE_SINGLE_TAG:
            if (msg == 'deleted') {
                return {
                    ...state,
                    tagsData: state.tagsData.filter((tag) =>
                        tag.id != payload),
                    error: msg

                }
            } else {
                return {
                    ...state,
                    error: msg
                }
            }

        default:
            return state
    }



}


