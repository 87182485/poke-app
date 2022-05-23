import { useCallback, useEffect, useMemo, useState } from 'react';

const useProfileImage = (sprites) => {
    const [side, setSide] = useState('front');

    const images = useMemo(() => {
        return [sprites[`${side}_default`], sprites[`${side}_shiny`]];
    }, [side]);

    const onImageClick = useCallback(() => {
        setSide(side === 'front' ? 'back' : 'front');
    }, [side])

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setImageIndex(1 - imageIndex);
        }, 300);

        return () => {
            clearInterval(id);
        }
    }, [imageIndex]);

    return {
        url: images[0], // Disable auto switch
        onImageClick,
    }
};

export default useProfileImage;