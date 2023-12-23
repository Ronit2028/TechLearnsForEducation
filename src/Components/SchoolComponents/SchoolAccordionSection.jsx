import React from 'react'
import AccordionItem from '../../Layout/AccordionItem'
const SchoolAccordionSection = () => {
    return (

        <div className="w-full">
            <AccordionItem
                title="Section 1"
                content="Content for Section 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <AccordionItem
                title="Section 2"
                content="Content for Section 2 goes here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
            <AccordionItem
                title="Section 3"
                content="Content for Section 3 goes here. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            {/* Add more AccordionItems as needed */}

        </div>
    )
}

export default SchoolAccordionSection