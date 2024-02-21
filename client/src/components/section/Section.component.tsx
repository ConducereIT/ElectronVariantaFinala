import React from 'react';
import { Card } from 'react-bootstrap';

import './Section.style.css';

interface SectionProps {
    cardClass?: string;
    cardBodyClass?: string;
    cardTextClass?: string;
    cardTitleClass?: string;
    cardFooterClass?: string;
    title: string;
    id?: string;
    text: string;
    footerIsActive: boolean;
    footerSection?: React.ReactNode;
    children?: React.ReactNode; // Define children property
}

const Section: React.FC<SectionProps> = (props) => {
    const {
        cardClass,
        cardBodyClass,
        cardTextClass,
        cardTitleClass,
        cardFooterClass,
        title,
        id,
        text,
        footerIsActive,
        footerSection,
        children, // Destructure children from props
    } = props;

    return (
        <Card className={`section-class ${cardClass}`} id={id}>
            <Card.Body className={`section-body-class ${cardBodyClass}`}>
                <Card.Title className={`section-title-class ${cardTitleClass}`}>
                    {title}
                </Card.Title>
                <Card.Text className={`${cardTextClass} section-text-class`}>
                    {text}
                </Card.Text>
                {children} {/* Render children */}
            </Card.Body>
            {footerIsActive ? (
                <Card.Footer className={`section-footer-class ${cardFooterClass}`}>
                    {footerSection}
                </Card.Footer>
            ) : (
                <></>
            )}
        </Card>
    );
};

export default Section;
