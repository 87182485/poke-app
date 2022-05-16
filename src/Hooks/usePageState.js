import { useCallback, useReducer } from "react"

const initialState = {
    start: 1,
    maxPerPage: 16,
    max: Number.MAX_VALUE,
    loading: true,
}

function reducer(state, action) {
    switch(action.type) {
        case 'next':
            return { ...state, start: Math.min(state.max, state.start+state.maxPerPage) };
        case 'prev':
            return { ...state, start: Math.max(state.start-state.maxPerPage, 1) }
        case 'start':
            return { ...state, loading: true }
        case 'finish':
            return { ...state, loading: false }    
        default:
            return {...state}
    }
}

const usePageState = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const finishLoading = useCallback(() => {
        dispatch({ type: 'finish' });
    }, []);

    const next = useCallback(() => {
        dispatch({ type: 'next' });
    }, [])

    const prev = useCallback(() => {
        dispatch({ type: 'prev' });
    }, [])

    return {
        start: state.start,
        maxPerPage: state.maxPerPage, 
        loading: state.loading,
        finishLoading,
        next,
        prev,
    }
};

export default usePageState;