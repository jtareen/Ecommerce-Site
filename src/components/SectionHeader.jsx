import React from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react'


const SectionHeader = ({
    title,
    subtitle,
    topButton = false,
    topButtons = false,
}) => {
    return <div className="section-header">
        <span>{title}</span>
        <h2>{subtitle}</h2>
        {topButton && <button className="btn">View All</button>}
        {topButtons && <div>
            <button className="btn-3"><ArrowLeft /></button>
            <button className="btn-3"><ArrowRight /></button>
        </div>
        }
    </div>;
}

export default SectionHeader
