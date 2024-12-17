// Animation variants to be used by Framer Motion

export const headingFadeInAnimationVariant = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: () => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5
        }
    })
};

export const pictureFadeInAnimationVariant = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: () => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            duration: 0.4,
        }
    })
};

export const contactFadeInAnimationVariant = {
    initial: {
        opacity: 0,
        y: -100,
        x: -100
    },
    animate: () => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            type: "tween",
            duration: 0.4,
        }
    })
};

export const formFadeInAnimationVariant = {
    initial: {
        opacity: 0,
    },
    animate: () => ({
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1.4,
        }
    })
};

export const textFadeInAnimationVariant = {
    initial: {
        opacity: 0.5,
        y: 50,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.5
        }
    })
};