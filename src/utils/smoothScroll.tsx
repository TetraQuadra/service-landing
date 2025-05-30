const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        history.pushState(null, '', targetId);
    }
};

export default handleSmoothScroll;
