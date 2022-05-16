import { useCallback } from "react";
import { Button } from "@mui/material";

const NavGroup = ({ next, prev, disableNext, disablePrev }) => {
    const onNext = useCallback(() => {
        console.log('run');
        next();
    }, [next])

    const onPrev = useCallback(() => {
        prev();
    }, [prev])
    return (<div>
        <Button variant="text" onClick={onPrev}>Prev</Button>
        <Button type='button' onClick={onNext}>Next</Button>
    </div>);
};

export default NavGroup;