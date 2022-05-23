import { useCallback } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

const NavGroup = ({ next, prev, disableNext, disablePrev }) => {
    const onNext = useCallback(() => {
        next();
    }, [next])

    const onPrev = useCallback(() => {
        prev();
    }, [prev])
    return (<div className="nav-group"><ButtonGroup color="secondary">
        <Button variant="text" disabled={disablePrev} onClick={onPrev}>Prev</Button>
        <Button variant="text" onClick={onNext}>Next</Button>
    </ButtonGroup></div>);
};

export default NavGroup;